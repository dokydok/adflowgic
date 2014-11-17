/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");


var NetworksSchema = new Schema({
    name : String,
    address : String,
    events : [{type : ObjectId, ref : 'events'}],
    advertisers : [{type : ObjectId , ref : 'advertisers'}]
});
NetworksSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

Network = mongoose.model('networks', NetworksSchema);

module.exports = Network;