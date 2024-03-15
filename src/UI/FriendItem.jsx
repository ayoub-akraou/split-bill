import {useEffect, useState} from 'react'
import Button from "./Button"

export default function FriendItem({firstName, description, gender, balance, classes}) {
   const [profile, setProfile] = useState(null);

	useEffect(() => {(async function() {
    const response = await fetch(`https://randomuser.me/api/?gender=${gender}`);
    const data = await response.json();
    const profilePicture = data.results.map(user => user.picture.medium)
    setProfile(profilePicture)
  })()}, [])

  return (
    <li className={`flex justify-between items-center p-3  rounded-md ${classes}`}>
      <img src={profile} alt="profile" className="rounded-full w-16 aspect-square"/>
      <div className="ml-4 mr-auto">
         <h3 className='font-semibold text-lg'>{firstName}</h3>
         
          {balance < 0 ? <p className="text-red-500">{`You owe ${firstName} ${Math.abs(balance)}$`}</p> : 
           balance > 0 ? <p className="text-green-500">{`${firstName} owes you ${Math.abs(balance)}$`}</p>:
                         <p className="text-black">{`You and ${firstName} are even`}</p>}
      </div>
      <Button>select</Button>
    </li>
  )
}
