import { mongoose } from "mongoose";
const transactionSchema = new mongoose.Schema({
	address: {
		type: String,
		unique: true,
	},
	transactions: Array,
});
const Transaction = mongoose.model("transaction", transactionSchema);
export default Transaction;
