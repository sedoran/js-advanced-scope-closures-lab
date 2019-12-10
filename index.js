function produceDrivingRange(blockRange){
  return function (start, end) {
    let startNum = parseInt(start.match(/\d+/)[0])
    let endNum = parseInt(end.match(/\d+/)[0])
    let routeLength = Math.abs(startNum - endNum)
    let diff = Math.abs(blockRange - routeLength)

    if (routeLength >= blockRange) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
}

function produceTipCalculator(tipAmount) {
  return function (total) {
    return tipAmount * total
  }
}

function createDriver(params) {
  let itemId = 0

  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++itemId
    }
  }
}