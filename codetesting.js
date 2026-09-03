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


console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));