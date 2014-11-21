/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var BroadcastLogSchema = new Schema({
    time : String,
    //duration : Number,
    //network, event, media_container, media, status(in, out)
    network : {type : ObjectId, ref : 'networks'},
    event : {type : ObjectId, ref : 'events'},
    media_container : {type : ObjectId, ref : 'media_containers'},
    media : {type : ObjectId, ref : 'media'},
    status : String
});
BroadcastLogSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

BroadcastLog = mongoose.model('broadcast_logs', BroadcastLogSchema);

module.exports = BroadcastLog;

