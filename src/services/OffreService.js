import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/offre');
}

const create = data => {
    return httpClient.post("/offre", data);
}

const get = id => {
    return httpClient.get(`/offre/${id}`);
}

const update = data => {
    return httpClient.put('/offre', data);
}

const remove = id => {
    return httpClient.delete(`/offre/${id}`);
}
export default { getAll, create, get, update, remove };