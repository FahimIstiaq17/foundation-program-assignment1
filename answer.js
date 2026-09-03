// Answer 1: Value Detective
function describeValue (value) {
        const type = typeof value;
        const result = value ? "truthy" : "falsy";
       
        return `${type} ${result}`;
}

// Answer 2: Bangladesh Weekend Machine
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

// Answer 3: Username Gatekeeper
function validateUsername (username) {
        const name = username.toLowerCase();

        if (username.length <4) {
                return "Too short";
        } 
        else if (username.includes (" ")) {
                return "No spaces allowed";
        } 
        else if (name.includes ("admin") ) {
                return "Reserved Word"
        }
        else {
                return "Available";
        }
}
