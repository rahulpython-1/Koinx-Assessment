import getTransaction from "../Controller/transaction.controller.js";
import { Router } from "express";
const route = Router()
route.get("/transaction/:address",getTransaction)
export default route