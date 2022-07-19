import React from 'react';
import Contacts from "../Contacts/Contacts";
import ClientsForm from "./ClientsForm";

const Clients = () => {
    return (
        <div>
            <ClientsForm/>
            <Contacts/>
        </div>
    );
};

export default Clients;