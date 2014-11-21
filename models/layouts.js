/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var LayoutSchema = new Schema({
    //dimensions : { w : Number, h : Number},
    w : Number,
    h : Number,
    media_containers : [{type : ObjectId, ref : 'media_containers'}]
});
LayoutSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

Layout = mongoose.model('layouts', LayoutSchema);

module.exports = Layout;