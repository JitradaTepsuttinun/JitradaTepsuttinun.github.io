L = [6,7,4,10,3,8,1,9,5,2]

console.log("Input",L)

// Sort the list
for(let i=0; i<L.length; i++) {
    for(let j=i+1; j<L.length; j++) {
        if(L[i] > L[j]) {
            let temp = L[i]
            L[i] = L[j]
            L[j] = temp
        }
    }
}

console.log("For Loop",L)

L = [6,7,4,10,3,8,1,9,5,2]
L2 = L.sort((a,b)=> a-b)
console.log("Array Sort Ascendingly",L2)

L = [6,7,4,10,3,8,1,9,5,2]
L2 = L.sort((a,b)=> b-a)
console.log("Array Sort Descendingly",L2)

L = ["apple","banana","cat","dog","elephant","fish","goat","hen","ink","joker"]
L2 = L.sort().reverse()
console.log("Array Sort",L2)

// Try to sort numbers in descending order