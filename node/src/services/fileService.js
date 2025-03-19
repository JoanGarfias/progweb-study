const fs = require("fs");
const DATA_FILE = "./data/db.json";

exports.readData = () => {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    } catch (error) {
        return [];
    }
};

exports.writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};
