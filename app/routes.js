module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    
    app.get('/user', (req, res)=>{
        res.render('user');
    })
    app.get('/userprofile', (req, res) =>{
        res.render('userprofile'
    )});
    app.get('/table', (req, res) =>{
        res.render('table');
    })
    app.get('/company', (req, res) =>{
        res.render('company');
    })
    app.get('/notification',(req,res)=>{
        res.render('notification');
    })
    // app.get("/login", function(req, res) {
    //     res.render("login", {message: req.flash('loginMessage')});
    // });

    // //To handle the post request from login page 
    // app.post('/login', passport.authenticate('local-login', {
    //     successRedirect : '/user', 
    //     failureRedirect : '/login', 
    //     failureFlash : true 
    // }));

    // //SignUp form
    // app.get("/signup", function(req,res){
    //     res.render("signup",{message: req.flash('signupMessage')});
    // });
    
    // //Handling post request from signup page
    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect : '/login', // redirect to the secure profile section
    //     failureRedirect : '/signup', // redirect back to the signup page if there is an error
    //     failureFlash : true // allow flash messages
    // }));
    app.get("/logout", function(req, res){
        req.logout;
    });
}
