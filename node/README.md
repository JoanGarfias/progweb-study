# Primer proyecto con node

- Lo primero que hicimos fue crear el package.json con el comando:
> npm init -y

- Luego, cargamos los paquetes para el servidor de node
> npm i json-server

- Cambiamos la siguiente linea de código: 
```javascript
"test": "json-server --watch db.json"
```

- Corremos el servidor local

```bash
npm run test
```