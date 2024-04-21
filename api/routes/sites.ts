import { Hono } from "hono"

const myFirstName = 'John'

console.log(Object.keys({myFirstName})[0])

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
