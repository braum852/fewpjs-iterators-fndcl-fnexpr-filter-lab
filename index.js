function findMatching (drivers, value) {
    return drivers.filter(possibleMatch =>
        possibleMatch.toLowerCase() === value.toLowerCase()
      )
}

function fuzzyMatch(drivers, value) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(value.toLowerCase()) === 0
    )
  }

  function matchName(drivers, value) {
    return drivers.filter( record => record.name === value)
  }