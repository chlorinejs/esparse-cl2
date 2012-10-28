# Simple esparse/esgencode server

## Start the server
1. Install NodeJS and npm
2. Execute 'npm install -d' to create the node_modules folder from package.json
3. Run program 'node app.js'. Server should start on port 1024.

## Usage
```bash
% curl localhost:1024/esparse -d js='var x = 0;'
```
{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x"},"init":{"type":"Literal","value":0}}],"kind":"var"}]}

```bash
curl localhost:1024/esparse -d js='var x = 0;' -d options='{"loc": true}'
```
{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"init":{"type":"Literal","value":0,"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":9}}}],"kind":"var","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}],"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}

```bash
% curl localhost:1024/escodegen -d json='{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x"},"init":{"type":"Literal","value":0}}],"kind":"var"}]}'
```
var x = 0;

## License: MIT
