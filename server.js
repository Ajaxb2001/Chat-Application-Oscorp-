// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static("public"));

// // Handle root endpoint
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Prompt user for name
//   socket.on("username", (username) => {
//     socket.username = username;
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });

//   // Handle incoming messages
//   socket.on("chat message", (data) => {
//     io.emit("chat message", {
//       username: socket.username,
//       message: data.message,
//     });
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Handle root endpoint
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Prompt user for name
  socket.on("username", (username) => {
    socket.username = username;
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  // Handle incoming messages
  socket.on("chat message", (data) => {
    io.emit("chat message", {
      username: socket.username,
      message: data.message,
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
