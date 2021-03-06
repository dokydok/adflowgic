/**
 * Created by Dok on 11/10/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require("mongoose-times");

var AdvertiserSchema = new Schema({
    name : String,
    company_name : String
});
AdvertiserSchema.plugin(timestamps,{created: "created_time", lastUpdated: "updated_time"});

Advertiser = mongoose.model('advertisers', AdvertiserSchema);

module.exports = Advertiser;