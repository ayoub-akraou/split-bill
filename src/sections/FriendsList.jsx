import React from "react";
import { FriendItem } from "../UI/index.js";
export default function FriendsList({friendsList, selectedFriend, onSelection}) {
	return (
		<ul className="">
			{friendsList.map(friend => 
			<FriendItem friend={friend} key={friend.id} selectedFriend={selectedFriend}  onSelection={onSelection}/>
				)}
		</ul>
	);
}
