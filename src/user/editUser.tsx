import React, { useState } from "react";
const EditUser = (props: any) => {
    const { item, handleUpdate } = props;
    const [user, setUser] = useState({ ...item.user });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };
    const saveRecord = () => {
        let js = sessionStorage.getItem("users") ?? "";
        let users = js.length > 0 ? JSON.parse(js) : null;
        users[item.index] = user
        sessionStorage.setItem("users", JSON.stringify(users))
        reset();
        handleUpdate();
    }
    const reset = () => {
        setUser({
            name: "",
            age: ""
        });
    }
    return <>
        <br />
        <div>Edit User {user.id}
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
export default EditUser;