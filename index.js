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

//GET ONE
app.get("/item/:id", (req, res) => {
  const { id } = req.params;
  const { no } = req.query;
  if (!Number(no)) res.status(401).send({ message: "Please provide the no" });
  if (!Number(id)) res.status(400).send({ message: "We want id" });

  res.status(200).send({ message: `This is item ${id}` });
});

//POST
app.post("/item", (req, res) => {
  const { name } = req.body;
  if (!name) res.status(401).send({ message: "Please provide name" });

  res.status(201).send({ message: `${name} is saved successfully` });
});

//UPDATE
app.patch("/item/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) res.status(401).send({ message: `Please provide id` });

  if (!name) res.status(401).send({ message: `We want name` });

  res.status(201).send({ message: `The name ${name} is updated sucessfully` });
});

//DELETE

app.delete("/item/:id", (req, res) => {
  const { id } = req.params;
  if (!id) res.status(401).send({ message: "Please provide an id" });

  res.status(201).send({ message: `id ${id} deleted successfully` });
});

app.listen(PORT, () => console.log(`Server is listen at port ${PORT}`));
