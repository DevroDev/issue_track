var Dictionary = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function solve(num){
    var base=num.length;
    var str="";
    if(num===0){
        return Dictionary[0]
    }
    while(num>0){
        str+=(Dictionary[num%base]);
        num=Math.floor(num/base);
    }
    return str.split('').reverse().join('')
}