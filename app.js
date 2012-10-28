var express = require("express"),
    app = express(),
    esprima = require('esprima'),
    escodegen = require('escodegen');

app.use(express.bodyParser());

// espares options (JSON):
// {'comment': false, 'loc': false, 'range': false, 'raw': false, 'tokens': false, 'tolerant': false}

app.post('/esparse', function(req, res) {
  var options = {};
  var js_code = req.param('js', null);
  var opt = req.param('options', null);

  if ((opt !== null) && (opt !== '')) {
    try {
      options = JSON.parse(opt);
  } catch ( e ) {
      options = {};
  }
  }
  var return_val = JSON.stringify(esprima.parse(js_code, options), null, 0);
  res.send(return_val);

});

app.post('/escodegen', function(req, res){
  var json_data = req.param('json', null);
  var return_val = escodegen.generate(JSON.parse(json_data));
  res.send(return_val);
});

app.listen(1024);
console.log('Listening on port 1024');
