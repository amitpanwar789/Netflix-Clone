import axios from "axios"

/**base url to make request to the movie database api */

const axiosReq = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default axiosReq