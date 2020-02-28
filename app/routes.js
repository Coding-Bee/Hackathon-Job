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
    
}