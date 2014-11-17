/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var timestamps = require("mongoose-times");

var MediaSchema = new Schema({
    type : {type : String , enum : ['video', 'image']},
    opacity : {type : Number , min : 0.0, max : 1.0},
    advertiser : {type : ObjectId, ref : 'advertisers'}
});
MediaSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

Media = mongoose.model('media', MediaSchema);

module.exports = Media;
