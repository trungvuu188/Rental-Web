import Product_1 from "../Assets/Products/hoian1-1.JPG";
import Product_1_1 from "../Assets/Products/hoian1.JPG";
import Product_2 from "../Assets/Products/IMG_5579.JPG";
import Product_2_1 from "../Assets/Products/IMG_5580.JPG";
import Product_3 from "../Assets/Products/IMG_5559.JPG";
import Product_3_1 from "../Assets/Products/IMG_5561.JPG";
import Product_4 from "../Assets/Products/IMG_4710.JPG";
import Product_4_1 from "../Assets/Products/IMG_4712.JPG";
import Product_5 from "../Assets/Products/IMG_4639.JPG";
import Product_5_1 from "../Assets/Products/IMG_4640.JPG";
import Product_6 from "../Assets/Products/product_6.jpg";
import Product_6_1 from "../Assets/Products/product_6-1.jpg";
import Product_7 from "../Assets/Products/product_7.jpg";
import Product_7_1 from "../Assets/Products/product_7-1.jpg";
import Product_8 from "../Assets/Products/product_8.jpg";
import Product_8_1 from "../Assets/Products/product_8-1.jpg";

import limited1 from "../Assets/LimitedEdition/IMG_8821.JPG";
import limited2 from "../Assets/LimitedEdition/IMG_8821.JPG";
import limited3 from "../Assets/LimitedEdition/IMG_8929.JPG";
import limited4 from "../Assets/LimitedEdition/IMG_8984.JPG";
import limited5 from "../Assets/LimitedEdition/IMG_8993.JPG";

import coupleWares1 from "../Assets/CoupleWears/front1.JPG"
import coupleWares1_1 from "../Assets/CoupleWears/back1.JPG"
import coupleWares2 from "../Assets/CoupleWears/front2.JPG"
import coupleWares2_1 from "../Assets/CoupleWears/back2.JPG"
import coupleWares3 from "../Assets/CoupleWears/front3.JPG"
import coupleWares3_1 from "../Assets/CoupleWears/back3.JPG"

const StoreData = [
  {
    productID: 1,
    frontImg: Product_1,
    backImg: Product_1_1,
    productName: "Cropped Faux Leather Jacket",
    productPrice: 99000,
    productReviews: "8k+ reviews",
  },
  {
    productID: 2,
    frontImg: coupleWares2,
    backImg: coupleWares2_1,
    productName: "Calvin Shorts",
    productPrice: 99000,
    productReviews: "2k+ reviews",
  },
  {
    productID: 3,
    frontImg: coupleWares3,
    backImg: coupleWares3_1,
    productName: "Shirt In Botanical Cheetah Print",
    productPrice: 99000,
    productReviews: "7k+ reviews",
  },
  {
    productID: 4,
    frontImg: Product_2,
    backImg: Product_2_1,
    productName: "Cotton Jersey T-Shirt",
    productPrice: 99000,
    productReviews: "5k+ reviews",
  },
  {
    productID: 5,
    frontImg: Product_5,
    backImg: Product_5_1,
    productName: "Cableknit Shawl",
    productPrice: 99000,
    productReviews: "9k+ reviews",
  },
  {
    productID: 6,
    frontImg: Product_3,
    backImg: Product_3_1,
    productName: "Colorful Jacket",
    productPrice: 69,
    productReviews: "1k+ reviews",
  },
  {
    productID: 7,
    frontImg: Product_4,
    backImg: Product_4_1,
    productName: "Zessi Dresses",
    productPrice: 99,
    productReviews: "3k+ reviews",
  },
  {
    productID: 8,
    frontImg: coupleWares1,
    backImg: coupleWares1_1,
    productName: "Kirby T-Shirt",
    productPrice: 37,
    productReviews: "4k+ reviews",
  },
  {
    productID: 9,
    frontImg: limited1,
    productName: "Hosking Blue Area Rug",
    productPrice: 29,
    productReviews: "8k+ reviews",
  },
  {
    productID: 10,
    frontImg: limited2,
    productName: "Hanneman Pouf",
    productPrice: 92,
    productReviews: "5k+ reviews",
  },
  {
    productID: 11,
    frontImg: limited3,
    productName: "Cushion Futon Slipcover",
    productPrice: 25,
    productReviews: "1k+ reviews",
  },
  {
    productID: 12,
    frontImg: limited4,
    productName: "Hub Accent Mirror",
    productPrice: 27,
    productReviews: "7k+ reviews",
  },
  {
    productID: 13,
    frontImg: limited5,
    productName: "Bold Male Black Analog",
    productPrice: 39,
    productReviews: "71+ reviews",
  },
];


const womenWears = [];
const menWears = [];
const swimWears = [];
const coupleWears = [];

export const categoryWears = [
  {
    id: 1,
    title: 'Swim',
    data: swimWears
  },
  {
    id: 2,
    title: 'Couple',
    data: coupleWears
  },{
    id: 3,
    title: 'Men',
    data: menWears
  },
  {
    id: 4,
    title: 'Women',
    data: womenWears
  }
];

export default StoreData;
