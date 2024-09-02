import Transaction from "../Models/transaction.model.js";
import EthValue from "../Models/etherium.model.js";
const getExpense = async (req, res) => {
	const address = req.params.address;
	try {
		const transactionData = await Transaction.findOne({ address });
		if (!transactionData) {
			return res.status(404).send("Address not found");
		}
		const transactions = transactionData.transactions;
		let totalExpenses = 0;
		transactions.forEach((tx) => {
			totalExpenses += (tx.gasUsed * tx.gasPrice) / 1e18;
		});
		const latestPriceData = await EthValue.findOne().sort({
			timestamp: -1,
		});
		const currentPrice = latestPriceData ? latestPriceData.price : null;
		res.json({
			totalExpenses,
			currentPrice,
		});
	} catch (error) {
		res.status(500).send("Error calculating expenses");
	}
};
export default getExpense;
