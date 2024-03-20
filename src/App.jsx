import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { FriendsList, AddFriend, SplitBill } from "./sections/index.js";
import { Button } from "./UI/index.js";

function App() {
	const [friendsList, setFriendsList] = useState([
		{
			name: "akram",
			balance: 10,
			image: "https://randomuser.me/api/portraits/med/men/22.jpg",
			id: nanoid(),
		},
		{
			name: "amin",
			balance: -40,
			image: "https://randomuser.me/api/portraits/med/men/20.jpg",
			id: nanoid(),
		},
		{
			name: "ayoub",
			balance: 0,
			image: "https://randomuser.me/api/portraits/med/men/2.jpg",
			id: nanoid(),
		},
	]);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	console.log(selectedFriend);
	function handleShowAddFriend() {
		setShowAddFriend((prev) => !prev);
	}

	function handleAddFriend(friend) {
		setFriendsList((prev) => [...prev, friend]);
		setShowAddFriend(false);
	}

	function handleSelection(friend) {
		setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
		setShowAddFriend(false);
	}

	function handleUpdateFriend(newBalance) {
		setFriendsList((cur) =>
			cur.map((friend) =>
				friend.id === selectedFriend.id
					? { ...selectedFriend, balance: newBalance }
					: friend
			)
		);
		setSelectedFriend(null)
	}
	return (
		<main className="flex flex-col gap-4 sm:gap-10 sm:flex-row font-sans border w-fit max-w-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-md items-start">
			<div className="box flex-1">
				<FriendsList
					friendsList={friendsList}
					selectedFriend={selectedFriend}
					onSelection={handleSelection}
				/>
				{showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
				<Button className="m-3 ml-auto" onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add friend"}
				</Button>
			</div>
			{selectedFriend && (
				<SplitBill
					className="flex-1"
					selectedFriend={selectedFriend}
					onUpdate={handleUpdateFriend}
				/>
			)}
		</main>
	);
}

export default App;
