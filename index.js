const mongoose = require ("mongoose");
const express= require ("express");

const app = express();
const port = 5000;

app.use(express.json());

async function main(){
    await mongoose.connect("");
}

main()
.then(console.log("MongoDB Connected"))
.catch((error)=> console.log(error));

app.get("/", (req, res) =>{
    res.send("server is running")
});

app.listen(port, () => {
    console.log(`App listening to http://localhost${port}`);
});
