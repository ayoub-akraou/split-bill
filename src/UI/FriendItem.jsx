import { useEffect, useState } from "react";
import Button from "./Button";

export default function FriendItem({
	friend,
	className,
	onSelection,
	selectedFriend,
}) {
	const { name, balance, image, id } = friend;
	function handleClick(e) {
		e.preventDefault()
		onSelection(friend)
	}
	return (
		<li
			
			className={`flex gap-2 text-nowrap w-max min-w-full justify-between items-center p-3  rounded-md  transition-colors ${className} ${selectedFriend?.id === id && "selected"}`}
		>
			<img
				src={image}
				alt="profile"
				className="rounded-full w-16 aspect-square"
			/>
			<div className="ml-4 mr-auto">
				<h3 className="font-semibold text-lg">{name}</h3>

				{balance < 0 ? (
					<p className="text-red-500">{`You owe ${name} ${Math.abs(
						balance
					)}$`}</p>
				) : balance > 0 ? (
					<p className="text-green-500">{`${name} owes you ${Math.abs(
						balance
					)}$`}</p>
				) : (
					<p className="text-black">{`You and ${name} are even`}</p>
				)}
			</div>
			<Button className="ml-auto block" onClick={handleClick}>
				{selectedFriend?.id === id ? "close" : "select"}
			</Button>
		</li>
	);
}
