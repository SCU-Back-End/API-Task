const express = require("express");
const app = express();
const PORT = 8080;

const mongoose = require("mongoose");
const students=require("./students");
const doctors=require("./doctor");
const db=require("./db");

app.use(express.json())

app.post("/student/hardcoded", async (req, res) => {
    const newStudent = {
        name: "Ahmed",
        age: 20,
        level: "Sophomore",
        address: "Nowhere" 
    };
    try{
        const addedStudent = await students(newStudent).save();
        res.status(200).json({
            message: "Student added successfully",
            student: addedStudent
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
    
}) 

app.post("/student", async (req, res) => {
    newStudent = req.body
    const expectedFields = ["name", "age", "level", "address"];

    const extraFields = Object.keys(newStudent)
                              .filter(key => !expectedFields.includes(key))

    if (extraFields.length > 0) {
        // 400 Bad Request
        return res.status(400).json({
            message: 'Error: Unexpected fields found',
            data: newStudent
        });
    }

    if (!newStudent.name || !newStudent.age ||
        !newStudent.level || !newStudent.address) {

        // 400 Bad Request
        return res.status(400).json({
            message: 'Error: All fields are required',
            data: newStudent
        });
    }
    
    
    const addedStudent = await students(newStudent).save();
    // 201 Created 
    res.status(201).json({
        message: 'Student added successfully!',
        data: addedStudent
    })
});

app.post("/doctor", async (req, res) => {
    const newDoctor = req.query;
    const expectedFields = ["name", "age", "phone"];

    const extraFields = Object.keys(newDoctor)
                              .filter(key => !expectedFields.includes(key))

    if (extraFields.length > 0) {
        // 400 Bad Request
        return res.status(400).json({
            message: 'Error: Unexpected fields found',
            data: newDoctor 
        });
    }

    if (!newDoctor.name || !newDoctor.age || !newDoctor.phone) {
        // 400 Bad Request
        return res.status(400).json({
            message: 'Error: All fields are required',
            data:newDoctor 
        });
    }
    
    const addedDoctor = await doctors(newDoctor);
    // 201 Created 
    res.status(201).json({
        message: 'Doctor added successfully!',
        data: addedDoctor
    });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
