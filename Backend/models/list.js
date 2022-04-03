const mongoose = require('mongoose');

let List = new mongoose.Schema({
    vname: {
        type: String
    },
    vid: {
        type: String
    },
    
    leetcode_username:{
    	type:String
    },
    codeforces_username:{
    	type:String
    },
    github_username:{
    	type:String
    }
    
});

module.exports = mongoose.model('List', List);