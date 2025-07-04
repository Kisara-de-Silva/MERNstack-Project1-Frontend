import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer component={Paper}>  
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Actions </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    rows.length > 0 ? rows.map(rows => (
                        <TableRow key={rows.id} sx={{ '&:last-child td, &:last-child th' : {border: 0} }}>
                            <TableCell component='th' scope='row'> {rows.id} </TableCell>
                            <TableCell component='th' scope='row'> {rows.name} </TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => selectedUser({ id: rows.id, name: rows.name })}
                                >
                                    Update
                                </Button> 

                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => deleteUser({ id: rows.id, name: rows.name })}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th' : { border: 0}}}>
                            <TableCell component='th' scope='row'> No Data </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
    )       
}

export default UsersTable;