import axios from 'axios'

const API_URL = '/api/'


export const uploadItem = async (data,option) => {
    try {
        await axios.post(`${API_URL}addItem`, data, option)
    } catch (error) {
        console.log("error is" + error)
    }
}
export const getItem = async() => {
    try {
        const {data} = await axios.get(API_URL + 'getFiles')
        return data
    } catch (error) {
        throw error
    }
}
