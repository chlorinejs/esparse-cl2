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
% curl localhost:1024/escodegen -d json='{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"x"},"init":{"type":"Literal","value":0}}],"kind":"var"}]}'
```
var x = 0;

License: MIT
