
const express =require("express");
const cors =require("cors");
const userRouter =require("./controllers/userController")
const connectDB=require("./config/db");


const PORT = 3300;
const app = express();



app.use("/", express.json());
app.use("/users", userRouter);

connectDB();

app.use(cors());

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});