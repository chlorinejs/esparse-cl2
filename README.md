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

## License: MIT
