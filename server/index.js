
const express =require("express");
const cors =require("cors");
const userRouter =require("./controllers/userController")
const todoRouter =require("./controllers/todoController")
const connectDB=require("./config/db");


const PORT = 3300;
const app = express();

app.use(cors());

app.use("/", express.json());
app.use("/users", userRouter);
app.use("/todos", todoRouter);

connectDB();



app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});