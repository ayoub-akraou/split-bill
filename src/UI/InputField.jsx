import React from "react";

export default function InputField({ label, labelStyles="", inputStyles=""}) {
	return (
		<>
			<label htmlFor="name" className={`font-medium text-nowrap ${labelStyles}`}>
				{label}
			</label>
			<input
				className={`border-orange-300 border rounded-md px-3 py-1 ${inputStyles}`}
				type="text"
			/>
		</>
	);
}
