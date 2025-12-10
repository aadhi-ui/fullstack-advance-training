const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const secretKey = 'PL9nQLQLWxq_jrA2pKRxkgIlf4NZ7C6ZI2tLhNSWLbAZMGnbtfClhkCpzPc-oTmAAe-O3kebeeLeYjzfFf9OXvQ4UDf-TRo8';

const port = 3000;
app.use(express.json()); 


// SAMPLE EMPLOYEE DATA
const employees = [
    {id:1, name:'Arun', age:28, salary:35000, address:"Chennai"},
    {id:2, name:'Priya', age:24, salary:42000, address:"Coimbatore"},
    {id:3, name:'Kumar', age:32, salary:50000, address:"Madurai"}
];


// LOGIN TO GENERATE TOKEN
app.get('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'adminUser',
        role: 'admin'
    };
    const token = jwt.sign({ user }, secretKey, { expiresIn: '50s' });
    res.status(201).json({ token });
});


// PROTECTED ROUTE
app.get("/profile", (req, res) => {
    const token = req.headers['authorization'];

    try {
        const verified = jwt.verify(token, secretKey);
        res.status(200).json({ message: "Access granted", user: verified });
    } 
    catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: "Token expired" });
        } else {
            res.status(401).json({ message: "Invalid token" });
        }
    }
});


// GET ALL EMPLOYEES
app.get('/employees', (req, res) => {
    res.json(employees);
});


// ADD A NEW EMPLOYEE
app.post('/newEmployee', (req, res) => {
    const newEmployee = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary,
        address: req.body.address
    };

    employees.push(newEmployee);
    res.status(201).json({ message:"Employee added successfully", employee: newEmployee });
});


// GET EMPLOYEE BY ID
app.get('/employee/:id', (req, res) => {
    const urlID = Number(req.params.id);
    const foundEmployee = employees.find(emp => emp.id === urlID);

    if (foundEmployee) {
        res.json(foundEmployee);
    } else {
        res.status(404).json({ message:"Employee not found" });
    }
});


// DELETE EMPLOYEE BY ID
app.delete('/deleteEmployee/:id', (req, res) => {
    const urlID = Number(req.params.id);
    const updatedList = employees.filter(emp => emp.id !== urlID);

    res.json({
        message: "Employee deleted successfully",
        updatedEmployees: updatedList
    });
});


// DELETE ALL EMPLOYEES
app.delete('/deleteAllEmployees', (req, res) => {
    employees.length = 0;
    res.json({ message:"All employees deleted successfully", employees });
});


// SERVER START
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
