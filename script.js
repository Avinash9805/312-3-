var sum =function(a){
    var val= function(b){
        var total=function(c){
        var output =a+b+c;
        console.log(output);
     }
    return total;
    }
    return val;
}
sum(5)(7)(7);