//Print 1 to 

let n = 10

function fun(n){
    if(n == 0) return   //Base Case
    console.log(n)
    n--
    fun(n)        //Recursive Case
}

fun(n)
