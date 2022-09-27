import {useEffect, useState} from "react";


import {UserForm} from "../UserForm/UserForm";
import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {

let [users,setUsers]=useState([])
useEffect(()=>{
    userService.getAll().then(({data}) => setUsers(data))
},[])


    return (
        <div>
            <UserForm setUsers={setUsers} />
            <hr/>
            {
                users.map(value => <User key={value.id} item={value}/>)

            }
        </div>
    );
};
export {
    Users
}