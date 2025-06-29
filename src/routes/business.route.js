import { Router }from "express"
import { getBusiness, registerBusiness } from "../controllers/business.controller.js";

const businessRoute = Router()

businessRoute.post("/",registerBusiness)
businessRoute.get("/",getBusiness)


export default businessRoute

// {"userId":"685c50d46c692886071f8724",
//     "name": "food eaters",
//        "email": "friday@gmal.com",
//        "phone": "2349049841543",
//        "address": "hilltop",
//        "website": "www.test.com",
//        "logoUrl": "https.logo.com"}