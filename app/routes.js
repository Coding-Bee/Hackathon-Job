module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    
    app.get('/user', (req, res)=>{
        res.render('user');
    })
    app.get('/company', (req, res) =>{
        res.render('company');
    })
    app.get('/notification',(req,res)=>{
        res.render('notification');
    })
    
}