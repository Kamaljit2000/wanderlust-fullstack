const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        // required: true,
         } ,
         
        description:{
            type:String,
        },

        image:{
            type:String,
            default:
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
            set:(v)=>
            v ===""
            ?"https://www.freepik.com/free-photo/women-tourists-holding-man-s-hand-leading-him-ho-kham-luang-northern-thai-style-royal-flora-ratchaphruek-chiang-mai-thailand_13180880.htm#fromView=search&page=1&position=0&uuid=d3e2b155-2dff-42eb-a9db-abeeb408ca2e"
            :v,
        }, 
        price:Number,
        location:String,
        country:String,
});

const Listing = mongoose.model("listing",listingSchema);
 module.exports = Listing;