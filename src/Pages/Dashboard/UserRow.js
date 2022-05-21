import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://vast-temple-90550.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Make a admin successfully`)
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> {role !== 'Admin' && <button onClick={makeAdmin} class="btn">Make Admin</button>}</td>
            <td><button class="btn">Remove User</button></td>
        </tr>
    );
};

export default UserRow;