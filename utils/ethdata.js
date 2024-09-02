import EthValue from "../Models/etherium.model.js";
const priceFetch = async () => {
	setInterval(async () => {
		try {
			let response = await fetch(
				"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
			);
			response = await response.json();
			const price = response.ethereum.inr;
			const newPrice = new EthValue({ price });
			await newPrice.save();
			console.log(price);
		} catch (err) {
			console.log(err.message);
		}
	}, 1000 * 60 * 10);
};

export default priceFetch;
