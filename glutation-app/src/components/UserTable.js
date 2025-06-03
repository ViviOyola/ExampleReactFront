import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UserService from '../services/UserService';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getUsers()
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("hubo error obteniendo los usuarios!", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="card">
            <DataTable value={users} header="Users" loading={loading} responsiveLayout="scroll">
                <Column field="userid" header="ID"></Column>
                <Column field="nombre" header="Name"></Column>
                {/* no se muestra pasword por seguridad */}
            </DataTable>
        </div>
    );
}

export default UserTable; 