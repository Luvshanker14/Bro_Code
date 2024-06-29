const adminCtrl=require("../controllers/adminCtrl");

const router=require("express").Router();

router.post('/login',adminCtrl.login);
router.post('/register',adminCtrl.register);
module.exports=router;

