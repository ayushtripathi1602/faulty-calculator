let random=Math.random()
console.log(random)
let a=prompt("enter the first number")
let b=prompt("enter the operator")
let c=prompt("enter the second number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1) {
    
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}

else{
    b=obj[b]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
    
}