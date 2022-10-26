// const mysql = require('mysql2');
// const express = require('express');
// var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Sunday40@',
//     database: 'crud',
//     multipleStatements: true
// });

// mysqlConnection.connect((err) => {
//     if(!err) 
//     console.log('DB connection succeded.');
//     else
//     console.log('DB connection failed \n Error : '+ JSON.stringify(err, undefined, 2));
// });

// app.listen(3000, () => console.log('Express server is running at port no : 3000'));

// //Get all employees
// app.get('/employees', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employees', (err, rows, field) => {
//         if(!err)
//         res.send(rows)
//         else
//         console.log(err)
//     })
// })

// //get an employees
// app.get('/employees/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employees WHERE EmpID = ?', [req.params.id],
//     (err, rows, fields) => {
//         if(!err)
//         res.send(rows);
//         else
//         console.log(err)
//     })
// })

// //delete an employee
// app.delete('/employees/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employees WHERE EmpID = ?', [req.params.id], 
//     (err, rows, fields) => {
//         if(!err)
//         res.send('Deleted successfully.');
//         else
//         console.log(err)
//     })
// })

// //insert an employee
// app.post('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?;\
//     CALL EmployeesAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";

//     mysqlConnection.query(
//         sql,
//         [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
//         (err, rows, fields) => {
//         if(!err)
//         rows.forEach(element => {
//             if(element.constructor == Array)
//             res.send('Inserted employees id : ' + element[0].EmpID);
//         });
//         else
//             console.log(err);
//     })
// })

// //Updated an employee
// app.put('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?;\
//     CALL EmployeesAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
//     mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], 
//     (err, rows, field ) => {
//         if(!err)
//             res.send('Updated successfully')
//         else
//             console.log(err);
//     })
// })


const mysql = require('mysql2');
const express = require('express');

var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Sunday40@",
    database: "mydb"
});


// con.connect(function(err) {
//     if (err) throw err;
//     console.log('connected');

    // con.query('CREATE DATABASE mydb', function (err, result) {
    //     if (err) throw err;
    //     console.log('Database created')
    // });

    // var sql = "CREATE TABLE customers \
    // (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

    // var sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log('Table created');
    // });
// });

    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log('Connected!');
        
    //     var sql = "INSERT INTO customers (name, address) VALUES ('Savior','Ikeja'),\
    //     ('Isaac', 'Akwa Ibom'), ('Aniedi', 'Asaba'),('Comfort', 'Bayelsa'),\
    //     ('Daniel', 'Calabar'), ('Dutiful', 'Ojodu')";
    //     con.query(sql, function(err, result) {
    //         if (err) throw err;
    //         console.log('One record inserted')
    //     })
    // })

    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query('SELECT * FROM customers', function(err, result, fields) {
    //         if (err) throw err;
    //         console.log(fields)
    //     })
    // })