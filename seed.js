// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here. 


const products = [
    {
        id: "T1",
        brand: "ESPIONAGE",
        name: "Washed Canvas Blouson Jacket Tan",
        price: 144,
        category: "Tops",
        images: [ "T1_1.jpg",  "T1_3.jpg", "T1_5.jpg", "T1_6.jpg", "T1_7.jpg"],
        colorOption: [ "T1_4.jpg",  "T1_8.jpg"]
    },
    {
        id: "T3",
        brand: "SLOWACID",
        name: "Peachskin Rusty Logo Sweatshirt [Yellow Green]",
        price: 85,
        category: "Tops",
        images: [ "T3_1.jpg",  "T3_2.jpg", "T3_3.jpg", "T3_4.jpg" ],
        colorOption: [ "T3_5.jpg",  "T3_6.jpg", "T3_7.jpg" ]
    },
    {
        id: "T4",
        brand: "CRLTIC",
        name: "RACING ZIP-UP KNIT NAVY",
        price: 138,
        category: "Tops",
        images: [ "T4_1.jpg",  "T4_2.jpg", "T4_3.jpg", "T4_4.jpg", "T4_5.jpg",  "T4_6.jpg", ],
        colorOption: [ "T4_7.jpg" ]
    },
    {
        id: "T5",
        brand: "CPGN STUDIO",
        name: "Cracking Snap Raglan Hoodie Black",
        price: 98,
        category: "Tops",
        images: [ "T5_1.jpg",  "T5_2.jpg", "T5_3.jpg", "T5_4.jpg", "T5_5.jpg",  "T5_6.jpg", ],
        colorOption: [ "T5_7.jpg" ]
    },
    {
        id: "T6",
        brand: "SUARE",
        name: "DAILY BIO SHIRT",
        price: 50,
        category: "Tops",
        images: [ "T6_7.jpg" ],
        colorOption: [ "T6_1.jpg",  "T6_2.jpg", "T6_3.jpg", "T6_4.jpg", "T6_5.jpg",  "T6_6.jpg", ]
    },
    {
        id: "T7",
        brand: "TRILLION",
        name: "V-neck pullover graphic warm up",
        price: 63,
        category: "Tops",
        images: [ "T7_1.jpg",  "T7_2.jpg", "T7_3.jpg", "T7_4.jpg", "T7_5.jpg",  "T7_6.jpg", ],
        colorOption: [ "T7_7.jpg" ]
    },
    {
        id: "T8",
        brand: "MARDI MERCREDI",
        name: "SWEATSHIRT FLOWERMARDI BLOSSOM_NAVY WHITE",
        price: 95,
        category: "Tops",
        images: [ "T8_1.jpg",  "T8_2.jpg", "T8_3.jpg", "T8_4.jpg", "T8_5.jpg",  "T8_6.jpg", ],
        colorOption: [ "T7_7.jpg" ]
    },
    {
        id: "T9",
        brand: "LMC",
        name: "CHEMICAL SOCCER LONG SLV TEE black",
        price: 53,
        category: "Tops",
        images: [ "T9_2.jpg", "T9_3.jpg", "T9_4.jpg", "T9_5.jpg" ],
        colorOption: ["T9_1.jpg", "T9_6.jpg"]
    },
    {
        id: "P1",
        brand: "ESPIONAGE",
        name: "Washed Canvas Work Pants Tan",
        price: 91,
        category: "Pants",
        images: [ "P1_1.jpg", "P1_2.jpg", "P1_3.jpg", "P1_5.jpg",  "P1_6.jpg",  "P1_7.jpg" ],
        colorOption: [ "P1_4.jpg", "P1_8.jpg" ]
    },
    {
        id: "P2",
        brand: "GAKKAI UNIONS",
        name: "SINGLE PLEATED WIDE SWEATPANTS BLACK",
        price: 56,
        category: "Pants",
        images: [ "P2_1.jpg", "P2_2.jpg", "P2_3.jpg", "P2_4.jpg", "P2_5.jpg" ],
        colorOption: [ "P2_6.jpg", "P2_7.jpg" ]
    },
    {
        id: "P3",
        brand: "MUSINSA STANDARD",
        name: "STRAIGHT DENIM PANTS [LIGHT INDIGO]",
        price: 54,
        category: "Pants",
        images: [ "P3_1.jpg", "P3_2.jpg", "P3_3.jpg", "P3_4.jpg", "P3_5.jpg", "P3_6.jpg" ],
        colorOption: [ "P3_7.jpg" ]
    },
    {
        id: "P4",
        brand: "TRILLION",
        name: "BIOSTONE WASHED WIDE DENIM PANTS (BLUE GRAY)",
        price: 50,
        category: "Pants",
        images: [ "P4_1.jpg", "P4_2.jpg", "P4_3.jpg", "P4_4.jpg", "P4_5.jpg", "P4_6.jpg" ],
        colorOption: [ "P4_7.jpg" ]
    },
    {
        id: "P5",
        brand: "TOFFEE",
        name: "Garment Dyeing Cargo Denim Pants (KHAKI)",
        price: 63,
        category: "Pants",
        images: [ "P5_1.jpg", "P5_2.jpg", "P5_3.jpg", "P5_4.jpg", "P5_5.jpg", "P5_6.jpg" ],
        colorOption: [ "P5_7.jpg" ]
    },
    {
        id: "P6",
        brand: "NASTY FANCY CLUB",
        name: "[NF] Youth denim overall (DARK BLUE)",
        price: 105,
        category: "Pants",
        images: [ "P6_1.jpg", "P6_2.jpg", "P6_3.jpg", "P6_4.jpg", "P6_5.jpg", "P6_6.jpg", "P6_7.jpg" ],
        colorOption: []
    },
    {
        id: "P7",
        brand: "DIMITRLBLACK",
        name: "One tuck parachute cargo denim pants_grey",
        price: 40,
        category: "Pants",
        images: [ "P7_1.jpg", "P7_2.jpg", "P7_3.jpg", "P7_4.jpg", "P7_5.jpg", "P7_6.jpg" ],
        colorOption: [ "P7_7.jpg" ]
    },
    {
        id: "P8",
        brand: "INSILENCE WOMEN",
        name: "NYLON UTILITY PANTS BLACK",
        price: 137,
        category: "Pants",
        images: [ "P8_1.jpg", "P8_2.jpg", "P8_3.jpg", "P8_4.jpg", "P8_5.jpg" ],
        colorOption: [ "P8_6.jpg", "P8_7.jpg" ]
    },
    {
        id: "P9",
        brand: "MOAA",
        name: "Nylon Parachute Pants (BROWN)",
        price: 117,
        category: "Pants",
        images: [ "P9_1.jpg", "P9_2.jpg", "P9_3.jpg", "P9_4.jpg", "P9_5.jpg", "P9_6.jpg" ],
        colorOption: [ "P9_7.jpg" ]
    },
    {
        id: "P10",
        brand: "FILLUMINATE",
        name: "Pleated Wide Pants-Khaki",
        price: 56,
        category: "Pants",
        images: [ "P10_1.jpg", "P10_2.jpg", "P10_3.jpg", "P10_4.jpg", "P10_5.jpg", "P10_6.jpg" ],
        colorOption: [ "P10_7.jpg" ]
    },
    {
        id: "H1",
        brand: "TYPESERVICE",
        name: "Typeservice Web Cap [Beige Gray]",
        price: 42,
        category: "Hat",
        images: [ "H1_1.jpg", "H1_2.jpg", "H1_3.jpg", "H1_4.jpg" ],
        colorOption: ["H1_5.jpg", "H1_6.jpg", "H1_7.jpg",]
    },
    {
        id: "H2",
        brand: "WOOALONG",
        name: "Signature Logo ball cap - DUSTY PINK",
        price: 40,
        category: "Hat",
        images: [ "H2_1.jpg" ],
        colorOption: ["H2_2.jpg", "H2_3.jpg", "H2_4.jpg", "H2_5.jpg", "H2_6.jpg", "H2_7.jpg"]
    },
    {
        id: "H3",
        brand: "AEAE",
        name: "WEB LOGO 5 PANNEL BALL CAP - [GREEN]",
        price: 53,
        category: "Hat",
        images: ["H3_1.jpg", "H3_2.jpg", "H3_3.jpg", "H4_5.jpg", "H3_5.jpg"],
        colorOption: ["H3_6.jpg", "H3_7.jpg",]
    },
    {
        id: "H4",
        brand: "DUMARO",
        name: "Pigment Washed Cotton Ball Cap / Blue",
        price: 43,
        category: "Hat",
        images: ["H4_1.jpg"],
        colorOption: ["H4_2.jpg", "H4_3.jpg", "H4_4.jpg", "H4_5.jpg", "H4_6.jpg", "H4_7.jpg"]
    },
    {
        id: "H5",
        brand: "AMES-WORLDWIDE",
        name: "COLORED LOGO BEANIE_BK(21FWCP03)",
        price: 31,
        category: "Hat",
        images: ["H5_1.jpg", "H5_2.jpg", "H5_3.jpg"],
        colorOption: ["H5_4.jpg", "H5_5.jpg", "H5_6.jpg", "H5_7.jpg"]
    },
    {
        id: "H6",
        brand: "ESPIONAGE",
        name: "Nylon Hiking Cap Orange",
        price: 32,
        category: "Hat",
        images: ["H6_1.jpg", "H6_3.jpg", "H6_4.jpg", "H6_5.jpg", "H6_6.jpg"],
        colorOption: ["H6_2.jpg", "H6_7.jpg"]
    },
    {
        id: "H7",
        brand: "VARZAR",
        name: "Herringbone Label Bucket Hat Black",
        price: 45,
        category: "Hat",
        images: ["H7_1.jpg", "H7_2.jpg", "H7_3.jpg"],
        colorOption: ["H7_4.jpg", "H7_5.jpg", "H7_6.jpg", "H7_7.jpg"]
    },
    {
        id: "H8",
        brand: "MY DEEP BLUE MEMORIES",
        name: "Nativity MM cap",
        price: 45,
        category: "Hat",
        images: ["H8_1.jpg", "H8_2.jpg", "H8_3.jpg", "H8_4.jpg", "H8_5.jpg", "H8_6.jpg", "H8_7.jpg"],
        colorOption: []
    },
    {
        id: "H9",
        brand: "OGARP",
        name: "KNOCKIN LOGO BB CAP Burgundy",
        price: 36,
        category: "Hat",
        images: ["H9_1.jpg", "H9_2.jpg", "H9_3.jpg", "H9_4.jpg", "H9_5.jpg"],
        colorOption: ["H9_6.jpg", "H9_7.jpg",]
    },
    {
        id: "H10",
        brand: "MILLO",
        name: "Holiday Signature Ball Cap [Vintage Blue]",
        price: 39,
        category: "Hat",
        images: ["H10_1.jpg", "H10_2.jpg", "H10_3.jpg", "H10_4.jpg", "H10_5.jpg", "H10_6.jpg"],
        colorOption: ["H10_7.jpg"]
    },
    {
        id: "S1",
        brand: "WE THE ROAD",
        name: "WTRD1203-1 Cliff Square Toe 4 Hole Derby Shoes Black",
        price: 95,
        category: "Shoes",
        images: ["S1_1.jpg", "S1_2.jpg", "S1_3.jpg", "S1_4.jpg", "S1_5.jpg", "S1_6.jpg", "S1_7.jpg"],
        colorOption: ["S1_8.jpg" ]
    },
    {
        id: "S2",
        brand: "YASE",
        name: "Cowhide VELLO S Mocha",
        price: 117,
        category: "Shoes",
        images: ["S2_1.jpg", "S2_2.jpg", "S2_3.jpg", "S2_4.jpg", "S2_5.jpg", "S2_6.jpg", "S2_7.jpg"],
        colorOption: ["S2_8.jpg" ]
    },
    {
        id: "S3",
        brand: "YASE",
        name: "[Lab Series] Spider Leather Sneakers Silver",
        price: 170,
        category: "Shoes",
        images: ["S3_1.jpg", "S3_2.jpg", "S3_3.jpg", "S3_4.jpg"],
        colorOption: ["S3_5.jpg", "S3_6.jpg", "S3_7.jpg" ]
    },
    {
        id: "S4",
        brand: "CATCH BALL",
        name: "ORIGINAL PLUS PICNIC_ BLACK",
        price: 95,
        category: "Shoes",
        images: ["S4_1.jpg", "S4_2.jpg", "S4_3.jpg", "S4_4.jpg", "S4_5.jpg", "S4_6.jpg"],
        colorOption: ["S4_7.jpg" ]
    },
    {
        id: "S5",
        brand: "TAW$TOE",
        name: "Flip Flops Zerovity OG Navy",
        price: 54,
        category: "Shoes",
        images: ["S5_1.jpg", "S5_2.jpg", "S5_3.jpg", "S5_4.jpg", "S5_5.jpg", "S5_6.jpg"],
        colorOption: ["S5_7.jpg" ]
    },
    {
        id: "S7",
        brand: "CATCH BALL",
        name: "Military standard corduroy _ camel combination",
        price: 138,
        category: "Shoes",
        images: ["S7_1.jpg", "S7_2.jpg", "S7_3.jpg", "S7_4.jpg"],
        colorOption: ["S7_5.jpg", "S7_6.jpg", "S7_7.jpg" ]
    },
    {
        id: "S8",
        brand: "MUSINSA STANDARD",
        name: "GERMAN ARMY TRAINERS [ALL WHITE]",
        price: 86,
        category: "Shoes",
        images: ["S8_1.jpg", "S8_2.jpg", "S8_3.jpg", "S8_4.jpg", "S8_5.jpg", "S8_6.jpg", "S8_7.jpg"],
        colorOption: []
    },
    {
        id: "S9",
        brand: "KIRSH",
        name: "Kirsi Mice Shoes [Black]",
        price: 138,
        category: "Shoes",
        images: ["S9_1.jpg", "S9_2.jpg", "S9_3.jpg", "S9_4.jpg", "S9_5.jpg", "S9_6.jpg"],
        colorOption: ["S9_7.jpg" ]
    },
    {
        id: "S10",
        brand: "EPT",
        name: "DIVE LE (BLACK/RED)",
        price: 118,
        category: "Shoes",
        images: ["S10_1.jpg", "S10_2.jpg", "S10_3.jpg", "S10_4.jpg", "S10_5.jpg"],
        colorOption: ["S10_6.jpg", "S10_7.jpg" ]
    },
]

const Product = require("./model/product-model");

// Delete the collection if it exists
Product.collection
  .drop()
  .then(() => {
    console.log("Current products are removed!");

    // Then insert data
    Product.insertMany(products)
      .then(() => {
        console.log("New products are saved!");
        process.exit();
      })
      .catch((error) => console.log(error.message));
  })
  .catch(() => console.log("Collection does not exist, so not"));

  module.exports = products;
