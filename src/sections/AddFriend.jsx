import React from "react";
import { InputField, Button } from "../UI/index";

export default function AddFriend() {
	return (
		<form className=" bg-orange-100 rounded-lg p-3 sm:px-5 md:px-3 grid grid-cols-6 md:grid-cols-5 grid-rows-3 gap-y-4">
			<InputField
				labelStyles="col-span-3 md:col-span-2 row-start-1"
				inputStyles="row-start-1 col-start-4 col-end-7 md:col-start-3 md:col-end-6"
				label="👬 Friend name"
			/>
			<InputField
				labelStyles="col-span-3 md:col-span-2 row-start-2"
				inputStyles="row-start-2 col-start-4 col-end-7 md:col-start-3 md:col-end-6"
				label="🖼 Image URL"
			/>
			<Button className="ml-auto w-full row-start-3 col-start-4 col-end-7 md:col-start-3 md:col-end-6">
				Add
			</Button>
		</form>
	);
}
