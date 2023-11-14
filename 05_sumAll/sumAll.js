const sumAll = function(num1, num2) {

    if (typeof(num1) === "number" && typeof(num2) === "number") {

        if (num1 < 0 || num2 < 0) {
            return "ERROR"
        } else {

            let numDiff = num1 - num2

            if (numDiff < 0){
                let total = 0;
                for (let i = num1; i <= num2; i++) {
                    total += i;
                }
                return total 
            
            } else if (numDiff > 0) {
                let total = 0;
                for (let i = num2; i <= num1; i++) {
                    total += i;
                }
                return total

            } else {
                let total = 0;
                total = num1 + num2
                return total
            }


        }
    } else {
        return "ERROR"
    }


}

// Do not edit below this line
module.exports = sumAll;

