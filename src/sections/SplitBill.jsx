import React from "react";
import { InputField, SelectPayer } from "../UI/index";

export default function SplitBill({ className="" }) {
	return (
		<form className={className + " p-6 md:p-4 bg-orange-100 rounded-2xl max-w-[50%]"}>
			<h2 className="uppercase text-xl text-center font-medium mb-4">split bill with anthony</h2>
			<div className="wrapper flex flex-col gap-4">
				<InputField label="💰 Bill value" />
				<InputField label="💰 Your expense" />
				<InputField label="💰 Anthony's expense" />
				<SelectPayer />
			</div>
		</form>
	);
}
