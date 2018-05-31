var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

var User = module.exports = mongoose.model('User',userSchema);

//Get Users
module.exports.getUsers = function(callback,limit){
      User.find(callback).limit(limit);
}

/*//Get User by Id 
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}*/


//Add or Create or Post User
module.exports.addAdr = function(user,callback){    //here this Adr will be received via post from a form 
    console.log(user);
    User.create(user,callback);
}
