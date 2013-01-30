#!/usr/bin/env node

if (typeof require === 'function') {
    escodegen = require('escodegen');
} else if (typeof load === 'function') {
    try {
        load('escodegen.js');
    } catch (e) {
        load('../escodegen.js');
    }
}

try {
  var buf = '';
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(chunk) { buf += chunk; });
  process.stdin.on('end', function() {
    var syntax = JSON.parse(buf);
    console.log(escodegen.generate(syntax));
  });
} catch (e) {
    console.log('Error: ' + e.message);
    process.exit(1);
}

