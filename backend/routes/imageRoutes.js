const imageCtrl=require("../controllers/imageCtrl");

const router=require("express").Router();

router.post('/upload-image',imageCtrl.upload);
router.get('/get-image',imageCtrl.get);

module.exports=router;

