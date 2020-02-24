import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');



class DisplayUser extends Component {
    render() {
        const allUsers = this.props.users;
        const users = !isEmpty(allUsers) ? allUsers : [];

        return (
            <div className="users">
                {!isEmpty(users) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(({ name, position, company, image }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {name ? name : 'No Name Found'} </TableCell>
                                <TableCell align="right">{company ? company : 'No Company Found'}</TableCell>
                                <TableCell align="right">{position ? position : 'No Position Found'}</TableCell>
                                <TableCell align="right">{image ? <img src={} alt='Sliced img' /> : 'No Image Found'}</TableCell>
                                <TableCell align="right">{image ? <img src={image.data} alt='Whole img' /> : 'No Image Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayUser;
