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


console.log(getCngFare(5));
console.log(getCngFare(1));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
