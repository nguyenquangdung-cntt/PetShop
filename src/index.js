const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const port = 3000;
const methodOverride = require('method-override');
const route = require('./routers');
const bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'somesecret', 
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('combined'));

app.engine('hbs', engine({
      extname: 'hbs',
      helpers: {
        sum: (a,b) => a + b,
    }
}));
    
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(methodOverride('_method'));

route(app);

http.createServer(app);

app.listen(port, () => {
  	console.log(`App listening at http://localhost:${port}`);
});