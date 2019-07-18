// 전역변수 
console.log('filename:', __filename);
console.log('dirname:', __dirname);

// 특수문자 : %d, %s, %j => 숫자, 문자열, JSON
console.log('output: %d', 1234);
console.log('%d + %d = %d', 123, 345, 123+345);

console.log('문자열: %s', 'Hello World!') ;
console.log('JSON : %j', {name:'LEE'});


// time(), timeEnd() method

console.log('## TEST : time() , timeEnd() method');
console.time('alpha');

var output = 1;
for (var i =1 ; i<=10; i++) {
    output *= i;
}
console.log('Result:', output);
console.timeEnd('alpha');



// process.argv
console.log('## process ##');

process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof(item) + ' : ' , item);
    if( item == '--exit'){
        var exitTime = Number(process.argv[index+1]);
        setTimeout(function(){process.exit();}, exitTime)
    }
});

