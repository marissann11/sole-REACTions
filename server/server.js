const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schema");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
//socket io
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const io = new Server(server, {
  cors: "http://localhost:3002",
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});

server.listen(3002, () => {
  console.log("Socket server is running on port 3002");
});

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
