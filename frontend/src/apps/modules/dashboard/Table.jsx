import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', width: 80, },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'role', headerName: "Role", width: 130 },
    { field: 'gender', headerName: "Gender", width: 130 },
    { field: 'height', headerName: "Height", width: 130 },
    { field: 'bloodGroup', headerName: "Blood Group", width: 100 },
    { field: 'birthDate', headerName: "DOB", width: 130 },
    { field: 'email', headerName: "Email", width: 200 }
];

const paginationModel = { page: 0, pageSize: 10 };

function PaginationTable() {

    const [rows, setRows] = useState([]);
    const userapi = () => {
        axios.get('https://dummyjson.com/users?limit=100').then((e) => {
            console.log(e.data.users);
            setRows(e.data.users);
        })
    }
    useEffect(() => {
        userapi();
    }, []);

    return (
        <div className="row ">
            <div className="col-sm-12 hight-1 g-0">
                <Paper sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10, 20]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default PaginationTable;