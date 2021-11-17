function findMatching (property, value) {
    return property.filter(possibleMatch =>
        possibleMatch.toLowerCase() === value.toLowerCase()
      )
}

function fuzzyMatch(property, value) {
    return property.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(value.toLowerCase()) === 0
    )
  }

  function matchName(property, value) {
    return property.filter( record => record.name === value)
  }