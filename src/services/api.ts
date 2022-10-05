import axios from "axios";

export default axios.create({
    baseURL: 'https://proxy-intra.feagri.unicamp.br:8081/'
})