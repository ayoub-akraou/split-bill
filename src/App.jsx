import { useEffect, useState } from "react";
import "./App.css";
import { FriendsList, AddFriend } from "./sections/index.js";

function App() {
	const [friendsList, setFriendsList] = useState([]);

	return (
		<main className="font-sans border  w-full max-w-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-md">
			<div className="box max-w-[50%]">
				<FriendsList friendsList={friendsList} />
				<AddFriend />
			</div>
			{/* <SplitBill /> */}
		</main>
	);
}

export default App;
