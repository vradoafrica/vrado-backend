import { Router } from "express";
import { getCountry,getLGA,getState} from "../controllers/country.controller.js";

const countryRouter = Router()

countryRouter.get("/",getCountry)
countryRouter.get("/:state",getState)
countryRouter.get("/lga/:state",getLGA)

export default countryRouter