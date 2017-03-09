/*var table = 5 ;*/
/*var tabl_start = 1 ;*/
/*var table_end = 10 ;*/

/*var table = +prompt("table", 5);*/

/*console.log(table + " x  1  = " + table * 1 )
console.log(table + " * " + " 2 " + " = " + table * 2)
console.log(table + " * " + " 3 " + " = " + table * 3)
console.log(table + " * " + " 4 " + " = " + table * 4)
console.log(table + " * " + " 5 " + " = " + table * 5)
console.log(table + " * " + " 6 " + " = " + table * 6)
console.log(table + " * " + " 7 " + " = " + table * 7)
console.log(table + " * " + " 8 " + " = " + table * 8)
console.log(table + " * " + " 9 " + " = " + table * 9)
console.log(table + " * " + " 10 " + " = " + table * 10)

document.write(+ table + " x  1  = " + table * 1 + '<br/>')
document.write(table + " * " + " 2 " + " = " + table * 2 + '<br/>')
document.write(table + " * " + " 3 " + " = " + table * 3 +'<br/>')
document.write(table + " * " + " 4 " + " = " + table * 4 +'<br/>')
document.write(table + " * " + " 5 " + " = " + table * 5 +'<br/>')
document.write(table + " * " + " 6 " + " = " + table * 6 +'<br/>')
document.write(table + " * " + " 7 " + " = " + table * 7 +'<br/>')
document.write(table + " * " + " 8 " + " = " + table * 8 +'<br/>')
document.write(table + " * " + " 9 " + " = " + table * 9 +'<br/>')
document.write(table + " * " + " 10 " + " = " + table * 10 )*/


/*document.write(table + " * " + tabl_start + " = " + table * tabl_start );*/


var num1 = +prompt("Calculator", "")
var num2 = +prompt("Calculator", "")
var bmx = prompt("Calculator", "Use cases + -")

if(bmx === "+"){
    document.write(num1 + num2)
}
else if(bmx === "-"){
    document.write(num1 - num2)
}
else if(bmx === "x"){
    document.write(num1 * num2)
}
else if(bmx === "/"){
    document.write(num1 / num2)
}
else {
    document.write("Invalid value")
}




