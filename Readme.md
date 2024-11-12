### Criar a pasta src.
```npm init -y```

### Instalar o express
```npm install express --save```
```npm install nodemon -D```

### Alterar o package.json
```
"scripts": {
    "dev": "nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
### Alterar o package.json
```
 "main": "index.js",
  "type": "module",
```

### Rodar o projeto
```npm run dev```
