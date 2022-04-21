"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const biomes_1 = require("./biomes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/biome/:id', (req, res) => {
    res.status(200).json({ id: req.params.id });
});
app.get('/biome-list', (req, res) => {
    res.status(200).json((0, biomes_1.getBiomesList)());
});
app.listen(port, () => {
    console.log(`⚡️[project-ponds-api]: Server is running at http://localhost:${port}`);
});
