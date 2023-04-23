import { db } from "./dbConnect.js";

const coll = db.collection("tasks")

export async function addNewItem(req, res) {
  const newItem = req.body 
  await coll.add(newItem)
  //now return the whole (updated) list...
  getAllItems(req, res)
}


export async function getAllItems (req, res) {
  const itemsMessy = await coll.get()
  const itemsClean = itemsMessy.docs.map(doc => ({...doc.data(), id: doc.id}))
  res.send(itemsClean)
}

export async function deleteItem(req,res) {
  const { id } = req.params
  await coll.doc(id).delete()
  getAllItems(req, res)
}

export async function updateItem(req, res) {
  const { id } = req.params 
  const updateInfo = req.body 
  await coll.doc(id).update(updateInfo)
  getAllItems(req, res)
}