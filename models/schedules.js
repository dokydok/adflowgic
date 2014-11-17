/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require("mongoose-times");

var SchedulesSchema = new Schema({

});
SchedulesSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

Schedule = mongoose.model('schedules', SchedulesSchema);

module.exports = Schedule;