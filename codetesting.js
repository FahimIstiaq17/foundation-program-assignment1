function getDayType (day) {
     const weekDays = day.toLowerCase();
     
     switch (weekDays) {
        case "friday":
        case "saturday":
                return "weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
                return "working day";

        default: 
                return "invalid day";
     }
        
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("SATURDAY"));
console.log(getDayType("MONDAY"));
console.log(getDayType("wednesday"));
console.log(getDayType("Bandarban"));