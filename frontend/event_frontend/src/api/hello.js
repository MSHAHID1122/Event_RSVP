import axios from 'axios'

export const hello=()=> axios.get("http://localhost:8000/hello")