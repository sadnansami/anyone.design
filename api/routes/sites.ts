import { Hono } from "hono"
import { foo } from "db/schema"
import { db } from "db/config";
const myFirstName = 'John'

console.log(Object.keys({myFirstName})[0])




const result = await db.select().from(foo).all();

console.log(result)
export const app = new Hono()

const getDataFromDB = () => {
  return {
    name: "Adnan"
  }
}

const addCustomFunction = (fn: Function) => {
  //console.log(fn.name, fn())
  let myObject: any = {

  }

  myObject[fn.name] = fn
  console.log(myObject)
}

addCustomFunction(getDataFromDB)

app.get("/hi", c => {
  if(c.req.query().function) {
    
  }
  return c.text("hi")
})
