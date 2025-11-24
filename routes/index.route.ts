import express from "express"
const router = express.Router()

import accounrRoutes from "./Account.routes"

const routes=[
  {
    path:"/account",
    route:accounrRoutes
  }
]

routes.forEach((route)=>{
  router.use(route.path,route.route)
})


export default router