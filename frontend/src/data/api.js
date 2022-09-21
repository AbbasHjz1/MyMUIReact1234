import axios from 'axios'

const apiUrl = '/api/'

export const uploadItem = async (data,option) => {
    try {
        await axios.post(`${apiUrl}addItem`, data, option)
    } catch (error) {
        console.log("error is" + error)
    }
}
export const getItem = async() => {
    try {
        const {data} = await axios.get(`${apiUrl}getFiles`)
        return data
    } catch (error) {
        throw error
    }
}
