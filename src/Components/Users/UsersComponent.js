import {useEffect, useState} from "react";

import {getUser, getUsers} from "../../services/jsonServices/jsonServices";
import UserComponent from "../User/UserComponent";

function UsersComponent () {
    let [users, setUsers] = useState([]);

    let [chosenUser, setChosenUser] = useState(null);

   useEffect(()=>{
       getUsers().then(value => setUsers(value.data));
   },[])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data));

    }

    return (
        <>
            <div className={'information'}>
                <div className={'inf'}>

                    <h2>{ chosenUser?.name}</h2>



                </div>
            </div>

            <div className={'users'}>
                {
                    users.map(value => <
                        UserComponent
                        item={value}
                        key={value.id}
                        chooseUser={chooseUser}
                    />)
                }
            </div>

        </>
    );
}
export default UsersComponent

