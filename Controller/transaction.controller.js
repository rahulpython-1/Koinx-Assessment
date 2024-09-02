import dotenv from "dotenv";
import Web3 from "web3";
import Transaction from "../Models/transaction.model.js";
dotenv.config();
const web3 = new Web3();
const getTransaction = async (req, res) => {
	const address = req.params.address;
	if (!web3.utils.isAddress(address)) {
		return res.status(400).send("Invalid Ethereum address");
	}
	try {
		const response = await fetch(
			`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.API}`
		);
		const data = await response.json();
		if (data.status !== "1") {
			throw new Error("Failed to fetch transactions");
		}
		const updatedRecord = await Transaction.updateOne(
			{ address },
			{ $set: { transactions: data.result } },
			{ upsert: true }
		);
		res.status(200).send(data.result);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).send("Internal Server Error");
	}
};

export default getTransaction;
