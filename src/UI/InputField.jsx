import React from "react";

export default function InputField({ label, labelStyles="", inputStyles="", value, onChange, disabled, type="text"}) {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-1 md:gap-4">
			<label htmlFor="name" className={`font-medium text-nowrap ${labelStyles}`}>
				{label}
			</label>
			<input
				className={`md:max-w-[50%] border-orange-300 border rounded-md px-3 py-1 ${inputStyles}`}
				type="text"
				value={value}
				onChange={onChange}
				disabled={disabled}
				type={type}
			/>
		</div>
	);
}
