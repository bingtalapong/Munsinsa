// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here. 


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model/product-model");
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const session = require('express-session');
const multer = require('multer');
const Joi = require('joi');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/photo/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const Vendor = require("./model/vendor");
const Customer = require("./model/customer");
const Shipper = require("./model/shipper");
const Order = require("./model/model-order");

app.use('/photo', express.static('public/photo'));


// MongoDB Atlas connection
const mongoUrl =
  "mongodb+srv://phuong1000501:1234@cluster0.fa5boxf.mongodb.net/";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const Cart = require("./model/model-cart");
// const Coupon = require("./model/model-coupon");
const Like = require("./model/model-like");
//const cors = require("cors")

app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: "this is a secret",
  saveUninitialized: true,

}))

app.get('/register/customer', (req, res) => {
  res.render('regisCustomer');
})
app.get('/register/vendor', (req, res) => {
  res.render('regisVendor');
})
app.get('/register/shipper', (req, res) => {
  res.render('regisShipper');
})

app.get('/', (req, res) => {
  res.render('login')
})

const upload = multer({ storage: storage });

app.post('/register/customer', upload.single("image"), async (req, res) => {
  const public = "public";
  const salt = await bcrypt.genSalt();
  let imgPath = req.file.filename;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const existingCustomer = await Customer.findOne({ username: req.body.username });

  if (existingCustomer) {
    return res.render("regisCustomerError", { error: "Username is already taken." });
  }


  imgPath = imgPath.replace(public, "");
  Customer.create({
    username: req.body.username,
    password: hashedPassword,
    profileImagePath: imgPath,
    name: req.body.name,
    phoneNumber: req.body.phone,
    address: req.body.address,
  })
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.error(error);
    });
});

app.post('/register/vendor', upload.single("image"), async (req, res) => {
  const public = "public";
  const salt = await bcrypt.genSalt();
  let imgPath = req.file.filename;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  imgPath = imgPath.replace(public, "");
  try {
    const existingVendor = await Vendor.findOne({ username: req.body.username });
    const existingBusinessName = await Vendor.findOne({ businessName: req.body.businessName });
    const existingBusinessAddress = await Vendor.findOne({ businessAddress: req.body.businessAddress });


    if (existingVendor) {
      return res.render("regisVendorError", { error: "Username is already taken." });
    }

    if (existingBusinessName) {
      return res.render("regisVendorError", {
        error: "Business name  are already taken by another vendor.",
      });
    }
    if (existingBusinessAddress) {
      return res.render("regisVendorError", {
        error: "Business address are already taken by another vendor.",
      });
    }

    await Vendor.create({
      username: req.body.username,
      password: hashedPassword,
      phoneNumber: req.body.phone,
      profileImagePath: imgPath,
      businessName: req.body.businessName,
      businessAddress: req.body.businessAddress
    });

    res.redirect("/");
  } catch (error) {
    // Handle the MongoDB duplicate key error
    if (error.code === 11000 && error.keyPattern && error.keyPattern.businessName === 1) {
      return res.render("regisVendorError", {
        error: "Business name is already taken. Please choose a different one."
      });
    }
    if (error.code === 11000 && error.keyPattern && error.keyPattern.businessAddress === 1) {
      return res.render("regisVendorError", {
        error: "Business address is already taken. Please choose a different one."
      });
    }

    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/register/shipper', upload.single("image"), async (req, res) => {
  const public = "public";
  const salt = await bcrypt.genSalt();
  let imgPath = req.file.filename;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  imgPath = imgPath.replace(public, "");

  const existingShipper = await Shipper.findOne({ username: req.body.username });
  if (existingShipper) {
    return res.render("regisShipperError", { error: "Username is already taken." });
  }

  Shipper.create({
    username: req.body.username,
    password: hashedPassword,
    profileImagePath: imgPath,
    hubName: req.body.hubName,
  })
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.error(error);
      // res.redirect("/register_error");
    });
});

app.get('/vendor/profile', async (req, res) => {
  try {
    if (req.session.user && req.session.authorized) {
      const loggedInVendor = req.session.user;

      // Render the profileVendor EJS template with the logged-in vendor's data
      res.render('profileVendor', { vendor: loggedInVendor });
    } else {
      // Redirect to the login page or display an error message
      res.redirect('/'); // You can customize the redirection as needed
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/shipper/profile', async (req, res) => {
  try {
    if (req.session.user && req.session.authorized) {
      const loggedInVendor = req.session.user;
      res.render('profileShipper', { shipper: loggedInVendor });
    } else {
      // Redirect to the login page or display an error message
      res.redirect('/'); // You can customize the redirection as needed
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/customer/profile', async (req, res) => {
  try {
    if (req.session.user && req.session.authorized) {
      const loggedInVendor = req.session.user;

      // Render the profileVendor EJS template with the logged-in vendor's data
      res.render('profileCustomer', { customer: loggedInVendor });
    } else {
      // Redirect to the login page or display an error message
      res.redirect('/'); // You can customize the redirection as needed
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post("/login", (req, res) => {
  const incorrect_username = 'Incorrect Username. Please enter again'
  const incorrect_password = 'Incorrect Password. Please enter again'
  const input_info = req.body
  if (input_info.action === "Vendor") {
    Vendor.findOne({ username: input_info.username }).then(async (check) => {
      if (check) {
        if (await bcrypt.compare(input_info.password, check.password)) {
          req.session.user = check;
          req.session.authorized = true;
          return res.redirect('/vendor/profile');
        }

        else {
          res.status(401).render("loginError", { error: "Incorrect Password. Please enter again" });
        }
      }
      else {
        res.status(404).render("loginError", { error: "User not found" });
      }
    })
  } else if (input_info.action === "Shipper") {
    Shipper.findOne({ username: input_info.username }).then(async (check) => {
      if (check) {
        if (await bcrypt.compare(input_info.password, check.password)) {
          req.session.user = check;
          req.session.authorized = true;
          // access to the shipper profile
          return res.redirect('/shipper/profile');
          // res.send("successfull"), { info: check };
        }
        else {
          // res.render("log_in_error.ejs", { error: Incorrect_password })
          res.status(401).render("loginError", { error: "Incorrect Password. Please enter again" });
        }
      }
      else {
        // res.render("log_in_error.ejs", { error: incorrect_username })
        res.status(404).render("loginError", { error: "User not found" });
      }
    })
  }
  else {
    Customer.findOne({ username: input_info.username }).then(async (check) => {
      if (check) {
        if (bcrypt.compare(input_info.password, check.password)) {
          req.session.user = check;
          req.session.authorized = true;
          res.redirect("/customer/main")
        }

        else {
          res.status(401).render("loginError", { error: "Incorrect Password. Please enter again" });
        }
      }
      else {
        res.status(404).render("loginError", { error: "User not found" });
      }
    })
  }
})



//VENDOR
app.get("/vendor/add", (req, res) => {
  res.render("add-new-product");
})

app.post('/vendor/add', (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => {
      res.redirect('/vendor/products'); // Redirect to the products page
    })
    .catch(error => res.send(error));
});

// app.get("/vendor/add/:id", (req, res) => {   
//   Vendor.findOne({ id: req.params.id })
//     .then(profileData => {
//       res.render("vendor-profile", { profileData }); // Pass profileData to the template
//     })
//     .catch(error => res.send(error));
// });

app.get('/vendor/profile', (req, res) => {
  Vendor.findOne({ username: req.body.username })
  res.render('vendor-profile', { profileData });
})


app.get("/vendor/products", (req, res) => {
  Product.find({})
    .then(products => res.render('vendor-products', { products }))
    .catch(error => res.send(error));
})

//CUSTOMER
app.get("/customer/main", async (req, res) => {
  const hats = await Product.find({ category: 'Hat' });
  const pants = await Product.find({ category: 'Pants' });
  const shoes = await Product.find({ category: 'Shoes' });
  const tops = await Product.find({ category: 'Tops' });
  res.render('customer-main', { hats, pants, shoes, tops });
})

app.get("/customer/Product/:id", (req, res) => {   //from 'customer-main.ejs'
  Product.findOne({ id: req.params.id })
    .then(product => res.render("product-detail", { product: product }))
    .catch(error => res.send(error));

});

// app.get("/customer")
app.get("/cart/add/:id", (req, res) => {
  Product.findOne({ id: req.params.id })
    .then((product) => {
      Cart.findOne({ id: product.id })
        .then((existingCart) => {
          if (existingCart) {
            // Update the existing cart here
          } else {
            const newCart = new Cart({
              id: product.id,
              brand: product.brand,
              name: product.name,
              price: product.price,
              image: product.images[0],

              quantity: 1,
            });
            newCart
              .save()
              .then(() => res.redirect(`/customer/Product/${product.id}`))
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});

// update quantity of products in cart
app.post("/cart/update/:id", (req, res) => {
  Cart.findOneAndUpdate(
    { id: req.params.id },
    { $set: { quantity: req.body.quantity } }
  )
    .then(() => {
      console.log(req.body.quantity);
      res.redirect("/cart");
    })
    .catch((error) => console.log(error));
});

// Delete cart data
app.get("/cart/delete/:id", (req, res) => { // User추가로 바꿔야함
  Cart.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/cart"))
    .catch((error) => console.log(error));
  console.log("Delete completed");
});

app.get("/cart", (req, res) => {
  Cart.find({})
    .then((cart) => res.render("cart", { cart: cart }))
    .catch((error) => console.log(error));
});

app.get('/order', (req, res) => {
  Cart.find({})
    .then((carts) => res.render('order', { carts: carts }))
    .catch((error) => console.log(error))
});

app.post('/order/add', (req, res) => {
  const order = Order.find({});
  console.log(order);
  Order.find({})
    .then((order) => {
      Cart.find({})
        .then((carts) => {
          const newOrder = new Order({
            hub: req.body.hub,
            address: req.body.address,
            price: (1.1 * carts.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)).toFixed(2)
          })
          newOrder.save()
            .then(() => res.render('order-success'))
            .catch((error) => console.log(error));
          Cart.collection.drop();

        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));

});



//SHIPPER
app.get("/shipper", (req, res) => {
  res.render('shipper-main');
})


//create like
app.get("/like", (req, res) => {
  Like.find({})
    .then((like) => res.render("customer-like", { like: like }))
    .catch((error) => console.log(error));
});

//adding like
app.get("/like/add/:id", (req, res) => {
  Product.findOne({ id: req.params.id })
    .then((product) => {
      Like.findOne({ id: product.id })
        .then((existingLike) => {
          if (existingLike) {
            // Update the existing cart here
          } else {
            const newLike = new Like({
              id: product.id,
              brand: product.brand,
              name: product.name,
              price: product.price,
              image: product.images[0],
            });
            newLike
              .save()
              .then(() => res.redirect(`customer/Product/${product.id}`))
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});

//delete like
app.get("/like/delete/:id", (req, res) => {
  Like.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/like"))
    .catch((error) => console.log(error));
  console.log("Delete completed");
});

app.get("/category/:id", (req, res) => {
  Product.find({ category: req.params.id })
    .then((products) => {
      if (!products) {
        return res.send("Not found any product matching the ID!");
      }
      res.render("category", { products: products });
    })
    //  .then(products => console.log(products))
    .catch((error) => console.log(error));
});

// Sorting - sort a product by price (ascending)
app.get("/category/:id/ascByPrice", (req, res) => {
  Product.find({ category: req.params.id })
    .then((products) => {
      if (!products) {
        return res.send("Not found any product matching the ID!");
      }
      products.sort((a, b) => a.price - b.price);

      res.render("category", { products: products });
    })
    .catch((error) => res.send(error));
});

// Sorting - sort a product by price (dascending)
app.get("/category/:id/desByPrice", (req, res) => {
  Product.find({ category: req.params.id })
    .then((products) => {
      if (!products) {
        return res.send("Not found any product matching the ID!");
      }
      products.sort((a, b) => b.price - a.price);

      res.render('category', { products: products });
    })
    .catch((error) => res.send(error));
});

// Sorting - sort a product by Alphabet
app.get("/category/:id/sortByAlphabet", (req, res) => {
  Product.find({ category: req.params.id })
    .then((products) => {
      if (!products) {
        return res.send("Not found any product matching the ID!");
      }
      products.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });

      res.render('category', { products: products });
    })
    .catch((error) => res.send(error));
});
app.get("/search/:id", (req, res) => {
  Product.find({})
    .then((products) => {
      if (!products) {
        res.render("searchFail", { searchText: req.params.id });
      }
      const searchProducts = products.filter((obj) =>
        obj.name.toLowerCase().includes(req.params.id.toLowerCase())
      );
      res.render("search", {
        products: searchProducts,
        searchText: req.params.id,
      });

      // if searchProducts.length !== 0 {
      //     res.render('search', { products: searchProducts, searchText: req.params.id });

      // }
    })
    .catch((error) => res.send(error));
});



app.get("/privacypolicy", (req, res) => {
  res.render("privacyPolicy");
});
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/shipper/orders", (req, res) => {
  Order.find({})
    .then(orders => res.render("shipper-main", { orders: orders }))
    .catch(error => res.send(error));
})
// Delete cart data
app.get("/shipper/orders/delete/:id", (req, res) => { // User추가로 바꿔야함
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/shipper/orders"))
    .catch((error) => console.log(error));
  console.log("Delete completed");
});



app.listen(3000, () => {
  console.log("Server is up on port 3000");
});



