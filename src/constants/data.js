import images from "./images";

const pizzas = [
  {
    title: "Italian ",
    price: "$56",
  },
  {
    title: "Cheese  ",
    price: "$59",
  },
  {
    title: "Beef    ",
    price: "$44",
  },
  {
    title: "Chicken",
    price: "$31",
  },
  {
    title: "Seafood",
    price: "$26",
  },
];

const meals = [
  {
    title: "Steak",
    price: "$20",
  },
  {
    title: "Gyro",
    price: "$16",
  },
  {
    title: "Kabab",
    price: "$10",
  },
  {
    title: "Sushi",
    price: "$31",
  },
  {
    title: " Spekulaas",
    price: "$26",
  },
];

const awards1 = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const awards2 = [
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];
export default { meals, pizzas, awards1, awards2 };
