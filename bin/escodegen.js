#!/usr/bin/env node

//
// First define some functions
//

process_input  = function (argv) {
  var buf = '';
  var syntax;
  if (argv.js_ast) {
      syntax = JSON.parse(read(argv.js_ast));
      process_json(argv, syntax);
  } else {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', function(chunk) { buf += chunk; });
      process.stdin.on('end', function() {
          syntax = JSON.parse(buf);
          process_json(argv, syntax);
      });
  }
};

process_json = function (argv, json) {
    var options, output;
    if (argv.source_file) {
        var source = read(argv.source_file);
        options = {sourceMap: argv.source_file,
                   sourceMapWithCode: true,
                   sourceContent: source};
        output = escodegen.generate(json, options),
        write(argv.source_map, output.map);
        output_js(argv, output.code);
    } else {
        output_js(argv, escodegen.generate(json));
    }
};

var output_js = function(argv, js) {
    if (argv.js_output) {
        write(argv.js_output, js);
    } else {
        console.log(js);
    }
};

var read = function (file) {
    return fs.readFileSync(file, {encoding: 'utf8'});
};

var write = function (file, contents) {
    fs.writeFile(file, contents, {encoding: 'utf8'}, function (err) {
        if (err) {
            throw err;
        }
    });
};

// check the command line arguments
var check_args_fn = function() {
    // EITHER both source_file and source_map must be used
    // OR neither
    var idx1, idx2, product;
    idx1 = this.process.argv.indexOf('--source_map');
    idx2 = this.process.argv.indexOf('--source_file');
    // to be valid either both indexes are positive or they are both negative
    // so the only valid product is positive
    product = idx1 * idx2;
    if (product > 0) {
        return true;
    } else {
        throw "Invalid Arguments: set EITHER both source_map and source_file OR neither";
    }
};

//
// Now handle dependencies
//

var argv = require('optimist')
    .usage("Usage: --js_ast [file] --source_file [file] --js_output [file] --source_map [file] (if you specify source_file you MUST specify source_map")
    .check(check_args_fn)
    .argv;
var fs = require('fs');

//
// Load the libraries
//

if (typeof require === 'function') {
    escodegen = require('escodegen');
} else if (typeof load === 'function') {
    try {
        load('escodegen.js');
    } catch (e) {
        load('../escodegen.js');
    }
}

//
// Finally execute
//

try {
    process_input(argv);
} catch (e) {
    console.log('Error: ' + e.message);
    process.exit(1);
}

