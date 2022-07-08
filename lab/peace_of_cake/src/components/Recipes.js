const Cakes = () => {
const cakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]

// return(
//     cakes.map((cake) =>
//         <li>
//             {“Cake Name: ” + cake.cakeName} <br></br>
//             {“Ingredients:” + cake.ingredients.join(“, “)}<br></br>
//             {“Rating: ” + cake.rating}<br></br>
//         </li>
//     ))};
// const ListOfCakes =  cakes.map(({cakeName , ingredients}) => ({cakeName , ingredients}));

// const Ratings = cakes.map(cakes => cakes.rating).reduce((reducer, number) => reducer + number, 0)/cakes.length;

// console.log(ListOfCakes);
// console.log("the cake average rating is:",Ratings);



}



      

export default Cakes;
 