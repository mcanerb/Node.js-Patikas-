const arguments = process.argv.slice(2);

function area(r) {
    pi = 3.14;
    let result = Math.round(pi * (r**2));
    
    return result;
}

area = area(arguments[0]);
console.log("Yarıçapı",arguments[0]*1,"olan dairenin alanı :",area);