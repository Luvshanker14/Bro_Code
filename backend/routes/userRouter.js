const userCtrl = require("../controllers/userCtrl");

const router=require("express").Router();

router.post('/register',userCtrl.register);
router.post('/login',userCtrl.login);
router.post('/favorite/:id',userCtrl.favorite);
router.get('/', userCtrl.getAllUsers);

module.exports=router;
