// # Lexical scoping

var a = 'global';

function foo() {
  console.log(a);
}

function testScope() {
  var a = 'local';
  foo();
}

testScope(); // statically scoped languages print "global" dynamically soped
             // languages print "local"
foo();       // all languages should print "global"
