const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    reviewer: {
        type: String,
    },
}, {
    timestamps: true,
});


const EventSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    category: {
        type: String,
    },
    desc: {
        type: String,
    },
    photos: {
        type: [String],
    },
    available: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    price: {
        type: String,
    },
    rating: {
        type: String,
    },
    reviews: [reviewSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model("Event", EventSchema);