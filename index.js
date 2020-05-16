const router = require('express').Router();
const User = require('./schema/userSchema');


router.get('/', (req, res) => {
    res.send('Hii API is up and running on port 3010')
});



router.put('/signup/:id', (req, res, next) => {
    let id = req.params.id;
    let userObj = req.body;

    User.findByIdAndUpdate(id, {
                $set: userObj,
                $inc: {
                    __v: 1;
                }
            },

            {
                new: true;
            })
        .then((data) => {
            res.json({
                data: data;
            })
        }).catch(err => next(err))
});



router.post('/signup', (req, res) => {
    var user = new User(req.body);
    user.save().then(user => {
        res.status(201).json({
            message: 'User savedsuccesfully',
            user
        })
    }).catch(err => console.log(err));
});

router.get('/signup', (req, res) => {
    User.find().then(user => {
        res.json(user)
    }).catch(err => console.log(err));
});







module.exports = router;