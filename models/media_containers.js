/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var MediaContainersSchema = new Schema({
    size : { w : Number , h : Number},
    price : Number,
    placement : { x : Number, y : Number},
    media : [{type : ObjectId, ref : 'media'}]
});
MediaContainersSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

MediaContainer = mongoose.model('media_containers', MediaContainersSchema);

module.exports = MediaContainer;