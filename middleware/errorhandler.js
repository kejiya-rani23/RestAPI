module.exports.notFound = (req,res,next) => {
    res.render('404', {
        title:'Not Found'
    })
}


module.exports.errors = (err,req,res,next) => {
    res.render('500', {
        title:'Server Error'
    })
}

module.exports.logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}