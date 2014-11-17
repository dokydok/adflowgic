/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var BroadcastLogSchema = new Schema({
    time : String,
    duration : Number,
    media_container : {type : ObjectId, ref : 'media_containers'}
});
BroadcastLogSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

var BroadcastLog = mongoose.model('broadcast_logs', BroadcastLogSchema);

module.exports = BroadcastLog;