import React from "react";
import { FriendItem } from "../UI/index.js";
export default function FriendsList({friendsList}) {
	return (
		<ul className="">
			<FriendItem firstName="Ayoub" description="you owe Ayoub" gender="male"/>
			<FriendItem firstName="Akram" classes="selected" description="you owe Akram" gender="male"/>
			<FriendItem firstName="Ahmed" description="you owe Ahmed" gender="male"/>
		</ul>
	);
}
