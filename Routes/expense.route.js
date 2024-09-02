import getExpense from "../Controller/expense.controller.js";
import { Router } from "express";
const route = Router()
route.get("/expenses/:address",getExpense)
export default route