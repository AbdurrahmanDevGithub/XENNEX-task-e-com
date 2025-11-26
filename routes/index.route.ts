import express from "express"
const router = express.Router()

import accounrRoutes from "./Account.routes"
import categoryRoutes from "./Category.routes"
import productRouter from "./Product.routes"

const routes=[
  {
    path:"/account",
    route:accounrRoutes
  },
  {
    path:"/categories",
    route:categoryRoutes
  },
  {
    
    path:"/products",
    route:productRouter
  }
]

routes.forEach((route)=>{
  router.use(route.path,route.route)
})


export default router