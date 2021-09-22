let a = 1
let b = 2
let c = 3

if (a==b && a==c && b == c) {
    console.log("O triângulo é equilátero")
} else if( a !=b && a !=c && b !=c ) {
    console.log("O triângulo é escalenos")
} else{
    console.log("O triângulo é isósceles")
}