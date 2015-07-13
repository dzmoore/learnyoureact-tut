var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

console.log('process.argv: '+process.argv);
var data = [
  {
    title:  'Shopping',
    detail: process.argv[3]  
  },
  {
    title:  'Hair cut',
    detail: process.argv[4]
  }
];
console.log('data: '+JSON.stringify(data));
app.use('/', function(req, res) {
  console.log('returning '+JSON.stringify({data: data}));
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});

console.log('listening on port '+app.get('port'));

