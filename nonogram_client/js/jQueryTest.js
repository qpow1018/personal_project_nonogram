testJquery(typeof window !== "undefined" ? window : this);

function testJquery(window) {

  let arr = [];

  let testObj = {
    name: 'testtest'
  };

  let getProto = Object.getPrototypeOf;
  let proto = getProto(testObj);

  // var getProto = Object.getPrototypeOf;

  // console.log('getProto', Object.getPrototypeOf(testObj));
};


function test() {
  this.name = 'ㅇㅇㅇㅇ';
}
function Test2() {
  this.name = 'ㄴㄴㄴㄴ';
}

const testInst = new test();
const test2Inst = new Test2();

console.log('testInst', testInst.name);
console.log('test2Inst', test2Inst.name);
