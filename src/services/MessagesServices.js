import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getall');
}

const create = data => {
    return httpClient.post("/Person", data);
}

const get = id => {
    return httpClient.get(`/Person/${id}`);
}

const update = data => {
    return httpClient.put('/edit/{id}', data);
}

const remove = id => {
    return httpClient.delete(`/delete/{id}/${id}`);
}
export default { getAll, create, get, update, remove };