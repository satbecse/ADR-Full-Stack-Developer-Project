var mongoose = require('mongoose');

var themeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Theme = module.exports = mongoose.model('Theme',themeSchema);

//Get Themes
module.exports.getThemes = function(callback,limit){
    Theme.find(callback).limit(limit);
}

//Create or Add Theme 
module.exports.addTheme = function(theme,callback){    //here this theme will be received via post from a form 
    Theme.create(theme,callback);
}

//Update Theme 
module.exports.updateTheme = function (id, theme, options, callback) {    //here this theme will be received via post from a form 
    var query = {_id: id};
    console.log(theme);
    var update = {
        name : theme.name
    } 
    Theme.findOneAndUpdate(query,update,options,callback);
}

// Delete Theme
module.exports.removeTheme = function (id, callback) {
	var query = {_id: id};
    Theme.remove(query, callback);
}



