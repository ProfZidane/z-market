const router = require('express').Router();
const TestService = require('./TestService');

const TestClass = new TestService();


router.get('/', (req,res,next) => {
    TestClass.print();
    res.send({ message : "Bonjour à tous ! "});
});


module.exports = router;
