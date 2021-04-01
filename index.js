// Your code here
 const sourceArray =[1, 2, 3, -9]

function mapToNegativize(sourceArray){
    console.log (sourceArray.map(i => i * (-1) ))
    return sourceArray.map(i => i * (-1))
}

function mapToNoChange(sourceArray){
    console.log (sourceArray)
    return sourceArray
}


function mapToDouble(sourceArray){
    console.log(sourceArray.map(i => i * 2))
    return sourceArray.map(i => i * 2)
}

function mapToSquare(sourceArray) {
    console.log(sourceArray.map(i => i * i))
    return sourceArray.map(i => i **2)
}

function reduceToTotal(sourceArray, startingPoint = 0){

    let total = startingPoint
    for (let i of sourceArray) {
        total +=i
    }
    return total
}

function reduceToAllTrue(sourceArray) {

    for (let i of sourceArray){
        if (!i) return false 
    }
    return true
}


function reduceToAnyTrue(sourceArray){
    for (let i of sourceArray){
        if (!!i) return true
        // if (i) return true
    }
    return false
}