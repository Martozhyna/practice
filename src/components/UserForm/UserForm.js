import {useForm} from "react-hook-form";
import {userService} from "../../services";

function UserForm ({setUsers}) {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})


    const submit = async (user) => {
      const {data} = await userService.create(user)
        setUsers(users=>[...users,data])
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name',{required:true, minLength: {value: 3, message:'minimum 3 symbols'}})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    )
}
export {
    UserForm
}