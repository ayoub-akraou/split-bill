import React from "react";

export default function SelectPayer({friendName, handleChange}) {
	return (
		<div className="flex flex-col md:flex-row gap-1 md:gap-4">
			<label htmlFor="payer" className="font-medium">🤑 Who is payying the bill?</label>
			<select name="payer" id="payer" className="flex-1 p-1" onChange={handleChange}>
				<option value="you">You</option>
				<option value={friendName} className="capitalize">{friendName}</option>
			</select>
		</div>
	);
}
