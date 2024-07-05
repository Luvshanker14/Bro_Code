const adminCtrl=require("../controllers/adminCtrl");
const bookController=require("../controllers/bookController");

const router=require("express").Router();

router.post('/login',adminCtrl.login);
router.post('/register',adminCtrl.register);
router.post('/getBooks',bookController.getBooks);
router.post('/addBook',bookController.addBook);

module.exports=router;

