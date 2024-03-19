import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { InputField, Button } from "../UI/index";

export default function AddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	useEffect(() => {
		(async function () {
			const response = await fetch(`https://randomuser.me/api/?gender=male`);
			const data = await response.json();
			const profilePicture = data.results.map((user) => user.picture.medium);
			setImage(profilePicture);
		})();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		if(!name || !image) return
		const friend = {
			name,
			image,
			balance: 0,
			id: nanoid(),
		};
		onAddFriend(friend);
		setName("");
		const random = Math.floor(Math.random() * 51); // [0, 50]
		setImage(`https://randomuser.me/api/portraits/med/men/${random}.jpg`);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="mt-4 bg-orange-100 rounded-md p-3 sm:px-5 md:px-3 flex flex-col gap-4"
		>
			<InputField
				label="👬 Friend name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<InputField
				label="🖼 Image URL"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<Button className="ml-auto w-1/2 row-start-3 col-start-4 col-end-7 md:col-start-3 md:col-end-6">
				Add
			</Button>
		</form>
	);
}
