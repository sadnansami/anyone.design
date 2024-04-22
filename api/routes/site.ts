import { Hono } from "hono"
import { eq } from "drizzle-orm"
import { db } from "db/config"
import { functions, pages } from "db/schema"
import { createDataBase } from "api/lib/createDatabase"

const myFirstName = 'John'

//console.log(Object.keys({myFirstName})[0])

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
  //console.log(myObject)
}

addCustomFunction(getDataFromDB)

app.get("base", c => {
  return c.text("mama")
})

app.get("/baby", async c => {
  const siteName = c.req.path.split("/")[2]

  const result = await createDataBase(siteName)
  
  console.log(result)
  
  return c.text("Let's see if this works")
})

app.get("/:fnParameter", async c => {
  const { fnParameter } = c.req.param()

  const myFunction = Function("return " + getDataFromDB.toString())()

  console.log(JSON.stringify(myFunction.toString()))
  /*

  console.log(JSON.parse(JSON.stringify(myFunction.toString())))
  */

  const result = (
    await db
      .select()
      .from(functions)
      .where(eq(functions.functionName, fnParameter))
  )[0].function
  
  console.log(result)
  const fetchedFn = Function("return " + JSON.parse(result))()

  console.log(fetchedFn())
  
  return c.text("hi")
})


