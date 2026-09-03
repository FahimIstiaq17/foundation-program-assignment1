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

// Answer 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false , waitingMinutes = 0) {
        let minimumFare = 50;

        if (distance > 2)  {
                minimumFare = minimumFare + (distance - 2) * 15;
        }

        minimumFare = minimumFare + waitingMinutes * 2;
        if (isNight) {
                minimumFare = minimumFare + minimumFare * 0.2;
        }
        return minimumFare;
}

// Answer 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
        const runNeeded = target - scored;

        if (runNeeded <= 0) {
                return "won";
        }
        else if (ballsLeft <= 0) {
                return "lost";
        }

        const requiredRunRate = (runNeeded / ballsLeft) * 6;
        let verdict;

        if ( requiredRunRate <= 6) {
                verdict = "comfortable";
        }
        else if (requiredRunRate <= 12) {
                verdict = "tough ";
        }
        else { verdict = "almost impossible"; }

        return `Need ${runNeeded} runs in ${ballsLeft} balls |  ${verdict}`;
};

