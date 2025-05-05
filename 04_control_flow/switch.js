// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
        // if we don't have break statement, it will execute all the cases below it, except the default case
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}