import express from "express";
import priceFetch from "./utils/ethdata.js";
import dbconnection from "./utils/dbconnection.js";
import transactionRoute from "./Routes/transaction.route.js";
import expenseRoute from "./Routes/expense.route.js";
const app = express();
app.use(transactionRoute);
app.use(expenseRoute);
app.use((req, res, next) => {
	res.status(404).send("Page not found!");
});
const port = 8000 || process.env.PORT;
app.listen(port, () => {
	console.log(`SERVER IS RUNNING AT ${port}`);
	priceFetch();
	dbconnection();
});
