#!/usr/bin/env node

import { roll } from './lib/roll.js'
import express from "express"
import minimist from "minimist"

const application = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

application.use(express.urlencoded({extended: true}));

application.get("/app", (req, res) => {
    res.status(200).send("200 OK");
})

application.get("/app/roll", (req, res) => {
    console.log(roll(6, 2, 1));

    res.send(roll(6, 2, 1));
    res.end();
})

application.post("/app/roll", (req, res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);

    console.log(roll(sides, dice, rolls));

    res.send(roll(sides, dice, rolls));
    res.end();
})

application.get("/app/roll/:sides", (req, res) => {
    const sides = parseInt(req.params.sides);

    console.log(roll(sides, 2, 1));

    res.send(roll(sides, 2, 1));
    res.end();
})

application.get("/app/roll/:sides/:dice", (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);

    console.log(roll(sides, dice, 1));

    res.send(roll(sides, dice, 1));
    res.end();
})

application.get("/app/roll/:sides/:dice/:rolls", (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);

    console.log(sides,dice,rolls);

    res.send(roll(sides, dice, rolls));
    res.end();
})

application.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

application.listen(port);