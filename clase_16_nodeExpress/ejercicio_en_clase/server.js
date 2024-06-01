import express from "express";
import path from "path";

//app es una instancia de express
const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  //   res.send('<h1>Hello World!</h1>');
//   res.sendFile(path.join(__dirname, "views/index.html"));
    res.sendFile(path.resolve("views/index.html"));
});

app.listen(3000, (err) => {
  err
    ? console.error(`Houston We Have a Problem: ${err.message}`)
    : console.log(`Server started and running on http://localhost:${PORT}`);
});
