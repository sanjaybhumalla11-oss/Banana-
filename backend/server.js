const express = require("express");
const app = express();

app.use(express.json());

let vehicles = [
    { id: 1, name: "Tata Nexon", price: 800000 },
    { id: 2, name: "Hyundai Creta", price: 1200000 }
];

app.get("/", (req, res) => {
    res.send("Vehicle backend is running!");
});

app.get("/vehicles", (req, res) => {
    res.json(vehicles);
});

app.post("/vehicles", (req, res) => {
    const vehicle = {
        id: Date.now(),
        name: req.body.name,
        price: Number(req.body.price)
    };

    vehicles.push(vehicle);
    res.status(201).json(vehicle);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});
