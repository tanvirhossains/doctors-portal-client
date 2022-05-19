import { useEffect, useState } from "react"


const UseAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading  , setAdminLoading] = useState(true)

    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`https://vast-temple-90550.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.Admin)
                    setAdminLoading(false)
                })
        }

    }, [user])
    return [admin , adminLoading]
}

export default UseAdmin