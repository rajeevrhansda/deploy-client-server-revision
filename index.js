const mongoose = require ("mongoose");
const express= require ("express");
const dotenv = require ("dotenv");
const authRoute = require ("./routes/auth.js");



const app = express();
const port = 5000;

dotenv.config();
app.use(express.json());
// console.log(process.env.MONGODB_URL);

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
}

main()
.then(console.log("MongoDB Connected"))
.catch((error)=> console.log(error));

app.get("/", (req, res) =>{
    res.send("server is running")
});

app.use('/api/auth', authRoute);

app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}`);
});
