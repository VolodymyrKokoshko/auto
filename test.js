const { add } = require('./index');

if (add(2,3) !==5) {
    console.error('Test failed add(2,3) should be 5');
    process.exit(1);
}
else {
    console.log('test passed: add(2,3) is 5');
}
