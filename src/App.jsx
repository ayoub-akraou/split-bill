import { useEffect, useState } from "react";
import "./App.css";
import { FriendsList, AddFriend, SplitBill } from "./sections/index.js";

function App() {
	const [friendsList, setFriendsList] = useState([]);

	return (
		<main className="font-sans border w-full max-w-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-md flex gap-10 items-start">
			<div className="box flex-1">
				<FriendsList friendsList={friendsList} />
				<AddFriend />
			</div>
			<SplitBill className="flex-1"/>
		</main>
	);
}

export default App;
