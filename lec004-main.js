// 외부 모듈을 불러 온다. 
// require('mymodule')을 실행하면, 
// 1) mymodule.js를 찾는다. 
// 2) 해당 js파일이 없다면, 동일 이름의 folder 아래 index.js를 찾는다.
// express, jade가 2번의 경우이다.
var mymodule = require('./lec004-mymodule.js');

console.log('abs(-123) = %d', mymodule.abs(-123) );
console.log('circleArea(3) = %d', mymodule.circleArea(3) );

