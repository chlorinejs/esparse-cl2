# Esparse-cl2
Javascript to/from JSON s-expressions to use with Chlorinate

## Usage
```bash
echo 'var x = 0;' | esparse-cl2
```
{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x"},"init":{"type":"Literal","value":0}}],"kind":"var"}]}

```bash
echo '{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x"},"init":{"type":"Literal","value":0}}],"kind":"var"}]}' | escodegen-cl2
```
var x = 0;

## Command Line Options
escodgen-cl2 now takes some command line options to help you build source maps. The options are:
```bash
--js_ast
```
the path/file which contains the javascript parser api Abstract Syntax Tree which is normally piped into escodegen-cl2 (if this is omitted the input will be taken from stdin)
```bash
--js_output
```
the path/file to write the javascript out to
```bast
--source_file
```
the path/file to the original source which the source map maps back to
```bash
--source_map
```
the path/file to which the source map should be written out

The ``--source_file`` and ``--source_map`` options are not independent - if one is specified then the other must be as well


## License: MIT
