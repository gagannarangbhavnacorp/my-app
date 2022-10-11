import React, { useState } from "react";
const AddUser = (props: any) => {
    const { handleAdd } = props
    const [user, setUser] = useState({
        name: "",
        age: ""
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const saveRecord = () => {
        let js = sessionStorage.getItem("users") ?? "";
        let users = js.length > 0 ? JSON.parse(js) : null;
        users = [...users, user];
        sessionStorage.setItem("users", JSON.stringify(users))
        handleAdd();
        reset();
    }
    const reset = () => {
        setUser({
            name: "",
            age: ""
        });
    }
    return <>
        <div>Add User</div>
        <br />
        <div>
        <table>
            <tr>
                <td>NAME</td>
                <td><input type="text" value={user.name} name="name" onChange={handleChange} required /></td>
            </tr>
            <tr>
                <td>AGE</td>
                <td><input type="text" value={user.age} name="age" onChange={handleChange} required /></td>
            </tr>
            <tr>
                <td colSpan={2}> <button onClick={saveRecord}>Save</button></td>

            </tr>
        </table>
</div>

    </>

}
export default AddUser;