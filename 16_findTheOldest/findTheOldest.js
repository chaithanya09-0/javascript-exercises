const findTheOldest = function(arr) {
    let oldestAge = 0;
    let oldestIndex = 0;
    let ageOfPerson = 0;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < arr.length; i++) {
        const birth = arr[i].yearOfBirth;
        const death = arr[i].yearOfDeath || currentYear;  // If undefined, use current year
        ageOfPerson = death - birth;

        if (ageOfPerson > oldestAge) {
            oldestAge = ageOfPerson;
            oldestIndex = i;  // ✅ Correct assignment
        }
    }

    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
