import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from '../User/User';



const Users = () => {

    let [users, setUsers] = useState([]);
    let [userInfo, setUserInfo] = useState(null);

    useEffect(()=> {
        userService.getAll().then(value => setUsers(value.data));

    },[])

    const getUserInfo = (user) => {
        setUserInfo(user);
    }


    return (
        <>
            <div className={'inf'}>
                <div className={'users'}>
                    {
                        users.map(value => <User key={value.id} item={value} getUserInfo={getUserInfo}/>)
                    }
                </div>
                <div className={'usersInfo'}>
                    {users && <div>
                        <h4>{JSON.stringify(userInfo)}</h4>
                        <button> click me</button>
                    </div>
                    }
                </div>
            </div>


        </>
    );
}
export {Users}