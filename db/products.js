// RMIT University Vietnam
//   Course: COSC2430 Web Programming
//   Semester: 2023A
//   Assessment: Assignment 2
//   Author: Nguyen Hoang Phuong, Nguyen Thach Khanh Dzi, Hanjun Lee, Taesung Yoon, Pham Le Gia Huy
//   ID: S3924593, S3980883, S3732878, S3847581, S3975371
//   Acknowledgement: Acknowledge the resources that you use here.

const Product = require('../model/product-model');

const products = [
    {
        id: "T1",
        brand: "ESPIONAGE",
        name: "Washed Canvas Blouson Jacket Tan",
        price: 144,
        category: "Tops",
        image: "T1_1.jpg",
    },
    {
        id: "T3",
        brand: "SLOWACID",
        name: "Peachskin Rusty Logo Sweatshirt [Yellow Green]",
        price: 85,
        category: "Tops",
        image: "T3_1.jpg"
    },
    {
        id: "T4",
        brand: "CRLTIC",
        name: "RACING ZIP-UP KNIT NAVY",
        price: 138,
        category: "Tops",
        image: "T4_1.jpg"
    },
    {
        id: "T5",
        brand: "CPGN STUDIO",
        name: "Cracking Snap Raglan Hoodie Black",
        price: 98,
        category: "Tops",
        image: "T5_1.jpg"
    },
    {
        id: "T6",
        brand: "SUARE",
        name: "DAILY BIO SHIRT",
        price: 50,
        category: "Tops",
        image: "T6_7.jpg"
    },
    {
        id: "T7",
        brand: "TRILLION",
        name: "V-neck pullover graphic warm up",
        price: 63,
        category: "Tops",
        image: "T7_1.jpg"
    },

    {
        id: "T9",
        brand: "LMC",
        name: "CHEMICAL SOCCER LONG SLV TEE black",
        price: 53,
        category: "Tops",
        image: "T9_2.jpg"
    },
    {
        id: "P1",
        brand: "ESPIONAGE",
        name: "Washed Canvas Work Pants Tan",
        price: 91,
        category: "Pants",
        image: "P1_1.jpg"
    },
    {
        id: "P2",
        brand: "GAKKAI UNIONS",
        name: "SINGLE PLEATED WIDE SWEATPANTS BLACK",
        price: 56,
        category: "Pants",
        image: "P2_1.jpg"
    },
    {
        id: "P3",
        brand: "MUSINSA STANDARD",
        name: "STRAIGHT DENIM PANTS [LIGHT INDIGO]",
        price: 54,
        category: "Pants",
        image: "P3_1.jpg"
    },
    {
        id: "P4",
        brand: "TRILLION",
        name: "BIOSTONE WASHED WIDE DENIM PANTS (BLUE GRAY)",
        price: 50,
        category: "Pants",
        image: "P4_1.jpg"
    },
    {
        id: "P5",
        brand: "TOFFEE",
        name: "Garment Dyeing Cargo Denim Pants (KHAKI)",
        price: 63,
        category: "Pants",
        image: "P5_1.jpg"
    },
    {
        id: "P6",
        brand: "NASTY FANCY CLUB",
        name: "[NF] Youth denim overall (DARK BLUE)",
        price: 105,
        category: "Pants",
        image: "P6_1.jpg"
    },
    {
        id: "P7",
        brand: "DIMITRLBLACK",
        name: "One tuck parachute cargo denim pants_grey",
        price: 40,
        category: "Pants",
        image: "P7_1.jpg"
    },
    {
        id: "P8",
        brand: "INSILENCE WOMEN",
        name: "NYLON UTILITY PANTS BLACK",
        price: 137,
        category: "Pants",
        image: "P8_1.jpg"
    },
    {
        id: "P9",
        brand: "MOAA",
        name: "Nylon Parachute Pants (BROWN)",
        price: 117,
        category: "Pants",
        image: "P9_1.jpg"
    },
    {
        id: "P10",
        brand: "FILLUMINATE",
        name: "Pleated Wide Pants-Khaki",
        price: 56,
        category: "Pants",
        image: "P10_1.jpg"
    },
    {
        id: "H1",
        brand: "TYPESERVICE",
        name: "Typeservice Web Cap [Beige Gray]",
        price: 42,
        category: "Hat",
        image: "H1_1.jpg"
    },
    {
        id: "H2",
        brand: "WOOALONG",
        name: "Signature Logo ball cap - DUSTY PINK",
        price: 40,
        category: "Hat",
        image: "H2_1.jpg"
    },
    {
        id: "H3",
        brand: "AEAE",
        name: "WEB LOGO 5 PANNEL BALL CAP - [GREEN]",
        price: 53,
        category: "Hat",
        image: "H3_1.jpg"
    },
    {
        id: "H4",
        brand: "DUMARO",
        name: "Pigment Washed Cotton Ball Cap / Blue",
        price: 43,
        category: "Hat",
        image: "H4_1.jpg"
    },
    {
        id: "H5",
        brand: "AMES-WORLDWIDE",
        name: "COLORED LOGO BEANIE_BK(21FWCP03)",
        price: 31,
        category: "Hat",
        image: "H5_1.jpg"
    },
    {
        id: "H6",
        brand: "ESPIONAGE",
        name: "Nylon Hiking Cap Orange",
        price: 32,
        category: "Hat",
        image: "H6_1.jpg"
    },
    {
        id: "H7",
        brand: "VARZAR",
        name: "Herringbone Label Bucket Hat Black",
        price: 45,
        category: "Hat",
        image: "H7_1.jpg"
    },
    {
        id: "H8",
        brand: "MY DEEP BLUE MEMORIES",
        name: "Nativity MM cap",
        price: 45,
        category: "Hat",
        image: "H8_1.jpg"
    },
    {
        id: "H9",
        brand: "OGARP",
        name: "KNOCKIN LOGO BB CAP Burgundy",
        price: 36,
        category: "Hat",
        image: "H9_1.jpg"
    },
    {
        id: "H10",
        brand: "MILLO",
        name: "Holiday Signature Ball Cap [Vintage Blue]",
        price: 39,
        category: "Hat",
        image: "H10_1.jpg"
    },
    {
        id: "S1",
        brand: "WE THE ROAD",
        name: "WTRD1203-1 Cliff Square Toe 4 Hole Derby Shoes Black",
        price: 95,
        category: "Shoes",
        image: "S1_1.jpg"
    },
    {
        id: "S2",
        brand: "YASE",
        name: "Cowhide VELLO S Mocha",
        price: 117,
        category: "Shoes",
        image: "S2_1.jpg"

    },
    {
        id: "S3",
        brand: "YASE",
        name: "[Lab Series] Spider Leather Sneakers Silver",
        price: 170,
        category: "Shoes",
        image: "S3_1.jpg",

    },
    {
        id: "S4",
        brand: "CATCH BALL",
        name: "ORIGINAL PLUS PICNIC_ BLACK",
        price: 95,
        category: "Shoes",
        image: "S4_1.jpg",

    },
    {
        id: "S5",
        brand: "TAW$TOE",
        name: "Flip Flops Zerovity OG Navy",
        price: 54,
        category: "Shoes",
        image: "S5_1.jpg",

    },
    {
        id: "S7",
        brand: "CATCH BALL",
        name: "Military standard corduroy _ camel combination",
        price: 138,
        category: "Shoes",
        image: "S7_1.jpg",

    },
    {
        id: "S8",
        brand: "MUSINSA STANDARD",
        name: "GERMAN ARMY TRAINERS [ALL WHITE]",
        price: 86,
        category: "Shoes",
        image: "S8_1.jpg",

    },
    {
        id: "S9",
        brand: "KIRSH",
        name: "Kirsi Mice Shoes [Black]",
        price: 138,
        category: "Shoes",
        image: "S9_1.jpg"

    },
    {
        id: "S10",
        brand: "EPT",
        name: "DIVE LE (BLACK/RED)",
        price: 118,
        category: "Shoes",
        image: "S10_1.jpg"

    },
]

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