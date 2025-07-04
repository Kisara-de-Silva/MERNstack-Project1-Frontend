import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import  axios, { Axios }  from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios error: ", error);
            });
    }

    const addUser = async (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        };

        try {
            await axios.post('http://localhost:3001/api/users', payload);
            await getUsers(); 
        } catch (error) {
            console.error("Axios error: ", error);
        } finally {
            setSubmitted(false);
        }
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        }

        Axios.put(`http://localhost:3001/api/users`, payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios error: ", error);
                setSubmitted(false);
            });
    }

    return(
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}>
            <UserForm 
                addUser={addUser} 
                submitted={submitted}
            />
            <UsersTable rows={users} />
        </Box>
        
    );
}

export default Users;