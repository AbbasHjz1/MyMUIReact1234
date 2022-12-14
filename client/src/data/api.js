import axios from 'axios'

const API_URL = '/backend/item'

export const getItem = async() => {
    try {
        const {data} = await axios.get(API_URL)
        return data
    } catch (error) {
        throw error
    }
}
