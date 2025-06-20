import { Button, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const UsersTable = ({ rows }) => {
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
                    rows.map(rows => (
                        <TableRow key={rows.id} sx={{ '&:last-child td, &:last-child th' : {border: 0} }}>
                            <TableCell component='th' scope='row'> {rows.id} </TableCell>
                            <TableCell component='th' scope='row'> {rows.name} </TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => {}}
                                >
                                    Update
                                </Button> 

                                <Button
                                    sx={{ margin: '0px 10px'}}
                                    onClick={() => {}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                )}    
            </TableBody>
        </Table>
    </TableContainer>       
}

export default UsersTable;