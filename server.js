// const express = require("express");
// const dbOperation = require("./dbfiles/dbOperation");
// const cors = require("cors");
// const Employee = require("./dbfiles/employee");

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// let client;
// let session;
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// app.get("/", (req, res) => {
//   console.log("here");
//   res.send("hi");
// });

// app.post("/api", function(req, res) {
//   console.log("Called");
//   res.send({ result: "Hellooooo" });
// });

// app.post("/quit", function(req, res) {
//   console.log("Called Quit");
//   res.send({ result: "Good Bye" });
// });

// let Pam = new Employee("Pam", "Nothing", "Beezley", 20, "pam@gmail.com");
// // console.log(Pam);

// // dbOperation.createEmployees(Pam);

// dbOperation.getEmployees().then((res) => {
//   for (let i = 0; i < res.recordset.length; i++) {
//     console.log(res.recordset[i].First_Name);
//   }
// });

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
