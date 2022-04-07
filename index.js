var http = require("http");
const express = require("express");
const app = express();

const PORT = 8081;

//middleware
app.use(express.json());

//create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello Worl!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

//GET
app.get("/items", (req, res) => {
  res.status(200).send({
    items: [
      {
        id: 1,
        name: "Knive",
        color: "silver"
      },
      {
        id: 2,
        name: "Knive",
        color: "silver"
      },
      {
        id: 3,
        name: "Knive",
        color: "silver"
      }
    ]
  });
});
app.listen(PORT, () => console.log(`Server is listen at port ${PORT}`));
