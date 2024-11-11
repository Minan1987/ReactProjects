import { createContext } from "react";
import { deleteContact } from "../services/contactServices";
export const ContactContext = createContext({
    loading: false,
    contact: {},
    setContact: () => { },
    contacts: [],
    filteredContacts: () => { },
    contactQuery: {},
    groups: [],
    onContactChange: () => { },
    deleteContact: () => { },
    updateContact: () => { },
    createContact: () => { },
    searchContact: () => { }
})