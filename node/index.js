const http = require("http");
const carrosController = require("./src/controllers/carrosController");

const PORT = 3000;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/carros") {
        return carrosController.getAll(req, res);
    }

    if (req.method === "POST" && req.url === "/carros") {
        return carrosController.create(req, res);
    }

    if (req.method === "GET" && req.url.startsWith("/carros/")) {
        return carrosController.getById(req, res);
    }

    if (req.method === "PUT" && req.url.startsWith("/carros/")) {
        return carrosController.update(req, res);
    }

    if (req.method === "DELETE" && req.url.startsWith("/carros/")) {
        return carrosController.remove(req, res);
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
});

server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
