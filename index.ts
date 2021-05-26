import express from "express"

const app = express();


app.get("/",(req, res) => {
    return res.json({
        message:"hello world"
    })
})

app.listen(4000,() => console.log("App run on port 4000"))