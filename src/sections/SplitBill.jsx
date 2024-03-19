import React, { useState } from "react";
import { InputField, SelectPayer, Button } from "../UI/index";

export default function SplitBill({ className="", selectedFriend, onUpdate }) {
	const [bill, setBill] = useState("")
	const [myExpense, setMyExpense] = useState("")
	const friendExpense = bill - myExpense;
	const [payer, setPayer] = useState("you")

	function handleSubmit(event) {
		event.preventDefault()
		if(!bill || !myExpense) return
		const newBalance = payer === "you" ? friendExpense : -myExpense;
		onUpdate(newBalance)
	}
	return (
		<form onSubmit={handleSubmit} className={className + " p-6 md:p-4 bg-orange-100 rounded-2xl w-full sm:max-w-[50%]"}>
			<h2 className="uppercase text-xl text-center font-medium mb-4">split bill with {selectedFriend?.name}</h2>
			<div className="wrapper flex flex-col gap-4">
				<InputField label="💰 Bill value" value={bill} onChange={(e) => setBill(Number(e.target.value))} type={"number"}/>
				<InputField label="💰 Your expense" value={myExpense} onChange={(e) => setMyExpense(Number(e.target.value) > bill ? bill : Number(e.target.value))} type={'number'}/>
				<InputField label={`💰 ${selectedFriend ? selectedFriend.name : "friend"}'s expense`} value={friendExpense} disabled={true} type={"number"}/>
				<SelectPayer friendName={selectedFriend?.name} value={payer} handleChange={(e) => setPayer(e.target.value)}/>
			</div>
			<Button className="ml-auto mt-4">Split Bill</Button>
		</form>
	);
}
