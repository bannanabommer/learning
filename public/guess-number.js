console.log("WHAAAT!")

let lastguess = 0
let biggerlimit = 10000
let smallerlimit = 1

function guessmynumber(){ 
    let additionResult = (smallerlimit + biggerlimit)
    let divisionResult = additionResult / 2
    let result = Math.round( divisionResult )
    lastguess = result
    return result
}

function smaller(){
    biggerlimit = lastguess
    let result = guessmynumber()
    return result
}

function bigger (){
    smallerlimit = lastguess
    let result = guessmynumber()    
    return result
}
