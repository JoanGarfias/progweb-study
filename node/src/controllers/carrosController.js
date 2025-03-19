const fileService = require("../services/fileService");

exports.getAll = (req, res) => {
    res.end(JSON.stringify(fileService.readData()));
};

exports.getById = (req, res) => {
    const id = parseInt(req.url.split("/")[2]);
    const item = fileService.readData().find(i => i.id === id);
    if (!item) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "No encontrado" }));
    }
    res.end(JSON.stringify(item));
};

exports.create = (req, res) => {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
        const data = fileService.readData();
        const newItem = { id: Date.now(), ...JSON.parse(body) };
        data.push(newItem);
        fileService.writeData(data);
        res.writeHead(201);
        res.end(JSON.stringify(newItem));
    });
};

exports.update = (req, res) => {
    const id = parseInt(req.url.split("/")[2]);
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
        let data = fileService.readData();
        const index = data.findIndex(i => i.id === id);
        if (index === -1) {
            res.writeHead(404);
            return res.end(JSON.stringify({ message: "No encontrado" }));
        }
        data[index] = { ...data[index], ...JSON.parse(body) };
        fileService.writeData(data);
        res.end(JSON.stringify(data[index]));
    });
};

exports.remove = (req, res) => {
    const id = parseInt(req.url.split("/")[2]);
    let data = fileService.readData();
    const newData = data.filter(i => i.id !== id);
    if (data.length === newData.length) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "No encontrado" }));
    }
    fileService.writeData(newData);
    res.end(JSON.stringify({ message: "Eliminado correctamente" }));
};
