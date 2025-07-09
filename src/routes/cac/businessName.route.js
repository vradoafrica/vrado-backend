import { Router }from "express"
import CheckName from "../../controllers/Cac/check.controller..js"



const businessNameCheck = Router()

businessNameCheck.post("/",CheckName)
export default businessNameCheck

