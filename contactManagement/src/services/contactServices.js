import axios from "axios";

/* https://react-projects-jh7l1i3u8-mina-nazaris-projects.vercel.app  */
const SERVER_URL = "http://localhost:9000"

export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`
    return axios.get(url)
}

export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.get(url)
}

export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`
    return axios.get(url)
}

 export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`
    return axios.get(url)
 }

export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`
    return axios.post(url, contact)
}

export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.put(url, contact)
}

export const deleteContact = (contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.delete(url)
}