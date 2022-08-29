import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getallpostuls');
}

const create = data => {
    return httpClient.post("/Postule", data);
}

const get = id => {
    return httpClient.get(`/Postule/${id}`);
}

const update = data => {
    return httpClient.put('/editpostul/{id}', data);
}

const remove = id => {
    return httpClient.delete(`/deletepostul/{id}/${id}`);
}
export default { getAll, create, get, update, remove };