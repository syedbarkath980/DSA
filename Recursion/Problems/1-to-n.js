// Print n to 1

let n = 10
let temp = 1


function fun(temp){
    if(temp == n + 1) return   //Base Case
    console.log(temp)
    temp++
    fun(temp)        //Recursive Case
}

fun(temp)
