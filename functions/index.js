import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addNewItem, getAllItems } from "./src/items"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/items", addNewItem)
app.post("/items", getAllItems)

export const api = functions.https.onRequest(app)
