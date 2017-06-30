var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
	res.render('index');
});
router.get('/GetValue/:FName', function(req, res){
  console.log('Welcome '+req.params.FName);
  var z = 'Welcome '+req.params.FName;
  res.send(z);

});


module.exports=router;