#!/usr/bin/env node

function adjustRegexLiteral(key, value) {
  if (key === 'value' && value instanceof RegExp) {
      value = {"type": "RegularExpression",
               "value": value.toString()};
  }
  return value;
}

if (typeof require === 'function') {
    esprima = require('esprima');
} else if (typeof load === 'function') {
    try {
        load('esprima.js');
    } catch (e) {
        load('../esprima.js');
    }
}

options = {'comment': false, 'loc': false, 'range': false, 'raw': false, 'tokens': false, 'tolerant': false};

try {
  var buf = '';
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(chunk) { buf += chunk; });
  process.stdin.on('end', function() {
    var syntax = esprima.parse(buf, options);
    console.log(JSON.stringify(syntax, adjustRegexLiteral, 4));
  });
} catch (e) {
    console.log('Error: ' + e.message);
    process.exit(1);
}
