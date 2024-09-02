import mongoose from "mongoose";
const etherium = mongoose.Schema(
	{
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const EthValue = mongoose.model("value", etherium);
export default EthValue;
