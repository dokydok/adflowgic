/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var EventSchema = new Schema({
    name : String,
    date : Date,
    type : String,
    layout : {type : ObjectId, ref : 'layouts'},
    schedules : [{type : ObjectId, ref : 'schedules'}],
    logs : [{type : ObjectId, ref : 'broadcast_logs'}]
});
EventSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

EventModel = mongoose.model('events', EventSchema);

module.exports = EventModel;