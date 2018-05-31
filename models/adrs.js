var mongoose = require('mongoose');

var adrSchema = mongoose.Schema({
    title:{
        type:    String,
        required: true       // Mandatory field
    },
    app :{
        type : String,
        required: true      
    },
    // add project attribute
    theme:{
        type: String,
        required: true
    },
    context:{
        type: String,
        required: true     
    },
    
    options_considered:{
        type: String            //not mandatory       
    },

    option_selected: {
        type: String
    },

    rationale: {
        type: String,
        required: true
    },

    implications: {
        type: String
    },

    create_date : {
        type : Date,
        default : Date.now
    }
});

var Adr = module.exports = mongoose.model('Adr',adrSchema);

//Get Adrs
module.exports.getAdrs = function(callback,limit){
    Adr.find(callback).limit(limit);
}

//Get Adr by Id 
module.exports.getAdrById = function(id,callback){
    Adr.findById(id,callback);
}


//Add or Create or Post Adr
module.exports.addAdr = function(adr,callback){    //here this Adr will be received via post from a form 
    console.log(adr);
    Adr.create(adr,callback);
}

// Update Adr
module.exports.updateAdr = function(id, adr, options, callback) {
	var query = {_id: id};
	var update = {
		title: adr.title,
		app: adr.app,
		theme: adr.theme,
		context: adr.context,
		option_selected: adr.option_selected,
        options_considered: adr.options_considered,
        rationale:adr.rationale,
        implications:adr.implications
	}
	Adr.findOneAndUpdate(query, update, options, callback);
}

// Delete Adr
module.exports.removeAdr = function (id, callback) {
	var query = {_id: id};
	Adr.remove(query, callback);
}