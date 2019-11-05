/*const http = require('http');
 
http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/html"
  });
  res.end("Hello ");
}).listen(8000);
 
console.log('Server is running at port 8000');
*/

/*const express = require('express');
const app = express();
 
//route untuk halaman home
app.get('/',(req, res) => {
  res.send('Welcome To Express');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
 
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});*/

//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : "M Fikri"
  });
});
 
//route untuk halaman home dengan parameter path_link
/*app.get('/:path_link',(req, res) => {
  //render file index.hbs
  res.render('index',{
    path : req.params.path_link
  });
});*/

//route untuk manampilkan form
app.get('/post',(req, res) => {
  //render file form.hbs
  res.render('forms');
});
 
//route untuk submit form
app.post('/post',(req, res) => {
  //render file form.hbs
  res.render('index',{
    //ambil value dari textname
    name : req.body.textname,
     path : "haloo"
  });
});
 
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});