function fuelType(type){
    switch(type){
        case 1:
            return "Álcool";
            break;
        case 2:
            return "Gasolina";
            break;
        case 3:
            return "Diesel";
            break;
        default:
            return "Outro tipo de combustível";
    }
}

function dayOfWeek(type){
    switch(type){
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "Not a day of thw week";
    }
}

function letterType(type){
    switch(type){
        case "a":
            return "Vogal";
            break;
        case "e":
            return "Vogal";
            break;
        case "i":
            return "Vogal";
            break;
        case "o":
            return "Vogal";
            break;
        case "u":
            return "Vogal";
            break;
        default:
            return "Consoante";
    }
}

console.log(fuelType(2))
console.log(dayOfWeek(6))
console.log(letterType("e"))
