import { createContext } from "react";
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