const express = require('express');
const router = express.Router();


router.use(logger);


router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    console.log(req.query.name);
    res.render("users/new", { firstName: "Test" });
});

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);

    } else {
        console.log("Error");
        res.render('users/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName);
    res.send("Hi");
});


// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send(`Get User With ID ${req.params.id}`);
// });

// router.put('/:id', (req, res) => {
//     req.params.id
//     res.send(`Update User With ID ${req.params.id}`);
// });

// router.delete('/:id', (req, res) => {
//     req.params.id
//     res.send(`Delete User With ID ${req.params.id}`);
// });


router.route("/:id")
.get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
})
.post((req, res) => {
    req.params.id
    res.send(`Update User With ID ${req.params.id}`);
})
.delete((req, res) => {
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`);
});

    const users = [{ name: "Kyle"}, { name: "Sally" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};



module.exports = router