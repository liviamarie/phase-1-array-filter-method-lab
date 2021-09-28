function findMatching(drivers,name) {
    let answer = drivers.filter(person => person.toLowerCase() === name.toLowerCase());
    return answer;
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(function(el) {
        return el.indexOf(letter) === 0 
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    })
}

