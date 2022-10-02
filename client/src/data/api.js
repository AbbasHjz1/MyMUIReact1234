import axios from 'axios'

const API_URL = 'http:localhost:5000/backend/item'

export const getItem = async() => {
    try {
        const {data} = await axios.get('http://localhost:5000/backend/item')
        return data
    } catch (error) {
        throw error
    }
}
