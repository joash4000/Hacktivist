const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();
var cookieParser = require('cookie-parser');
var multer = require('multer')
var upload = multer({dest:'uploads/'})
var session = require("express-session");

let User = require('./models/userShcema');
let List = require('./models/list')
{/*let Vendor = require('./models/vendor')
let List = require('./models/list')
let Vrating = require('./models/vrating')
// let UList = require('./models/ulist')*/}

app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());

// app.use(cors());
app.use(bodyParser.json());
app.use(session({secret:"lkasdjflsadjf",saveUninitialized : true,resave:false}));
// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/app', { useNewUrlParser: true ,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})
userRoutes.route('/adduser').post(function(req, res) {
    let user = new User(req.body);
	User.findOne({email:req.body.email},function(err,loser){
      	if(err){
            console.log(err);
            return res.status(500).send({success:false,message:"server error"});
        }
        if(loser){
            return res.send({success:false,message:"Already exist"});
        }
       
   		else{
	    user.save()
	        .then(user => {
	             res.status(200).json({'User': 'User added successfully'});
	        })
	        .catch(err => {
	            res.status(400).send('Error');
	        });
	    }
	})

});
// checking for user
userRoutes.post('/checkuser',function(req,res){
    var id =  req.body.email; 
    var pass =  req.body.password; 
    var nex
    User.findOne({email:id,password:pass},function(err,user){
      	if(err){
            console.log(err);
            return res.status(500).send({success:false,message:"server error"});
        }
        if(!user){
            return res.send({success:false,message:"NOT FOUND"});
        }
         nex=user._id
         // console.log(user);
		var fu=user
        fu={...fu,success:true}
        return res.status(200).json(fu);
    })
    
    // UList.findOne({uid:nex},function(err,ulis){
    // 	if(err){
    //         console.log(err);
    //     }
    //     if(!ulis){ 
    //     	let ulo= new UList({uid:nex,lid:[]})
    //     	ulo.save()
    //     }
    // })
});
userRoutes.post('/display',function(req,res){
    var vid=req.body.id; 
    List.findOne({vid:vid},function(err,lists){ 
      	if(err){
            console.log(err);
            return res.status(500).send({success:false,message:"server error"});
        }
        if(!lists){
        	console.log("ldsl")
            res.send({success:false,message:"NOT FOUND"});
            // res.redirect('/')
            return res
        }
        return res.status(200).json(lists);
    })
});
userRoutes.post('/form',function(req,res){
	let list = new List(req.body);
     
    list.save()
        .then(user=> {
            res.status(200).json({'success': true,listid:list._id});
        })
        .catch(err => {
            res.status(400).send('Error');
        });
});

app.use('/', userRoutes);
app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
