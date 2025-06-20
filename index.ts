import express, {Application, Request, Response} from "express"

// Application
const app : Application = express()

// PORT
const port : number = 4735

// MIddleWare - reuseable codes to make coding easier
app.use(express.json())

app.get("/", (req : Request, res : Response) =>{
        res.send(`Welcome to Express!!!!!!!!`)
})


app.listen(port, () =>{
    console.log(`server is listening on port ${port}`);
})