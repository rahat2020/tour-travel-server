const Event = require('../models/Event');
const router = require('express').Router()

// ADD Event
router.post('/add', async (req, res, next) => {

    try {
        const pd = await Event(req.body)
        const save = await pd.save()
        // res.status(200).json(save)
        res.status(200).json('Event created')

        console.log(save)
    } catch (err) {
        next(err);
        console.log(err);
    }

})

// FILTER BY GENRE AND AUTHOR NAME
router.get('/filtered', async (req, res) => {
    const { category } = req.query;
    let Events;
  
    if (category) {
      Events = await Event.find({ category });
    } else {
      Events = await Event.find();
    }
  
    res.json(Events);
  });

// GET Event
router.get('/get', async (req, res, next) => {
    try {
        const pd = await Event.find({})
        res.status(200).json(pd)
    } catch (err) {
        console.log(err)
        next(err)
    }
})
// UPDATE Event DATA
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;

        const updatedBook = await Event.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true } 
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json('Event is updated');
        console.log(updatedBook)
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err)
    }
});



// GET Event BY ID
router.get('/get/:id', async (req, res, next) => {
    try {
        const articles = await Event.findById(req.params.id)
        res.status(200).json(articles)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

// DELETE ARTICLE
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.status(200).json('Event is deleted')
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;