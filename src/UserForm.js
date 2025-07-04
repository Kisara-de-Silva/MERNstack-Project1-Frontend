import { Grid, Input, Typography, Button, FormHelperText } from "@mui/material";
import { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [idError, setIdError] = useState(false);

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    const handleSubmit = () => {
        if (parseInt(id) <= 0) {
            setIdError(true);
            return;
        }
        setIdError(false);
        const payload = { id: parseInt(id), name };
        isEdit ? updateUser(payload) : addUser(payload);
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component="h1" sx={{ color: '#000000' }}>
                    User form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '5px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                    error={idError}
                />
                {idError && (
                    <FormHelperText error>ID must be greater than 0</FormHelperText>
                )}
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginBottom: '5px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6'
                    }
                }}
                onClick={handleSubmit}
            >
                {isEdit ? 'Update' : 'Add'}
            </Button>
        </Grid>
    );
};

export default UserForm;
