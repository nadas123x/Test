import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getallcandidature');
}

const create = data => {
    return httpClient.post("/Candidature", data);
}

const get = id => {
    return httpClient.get(`/Candidature/${id}`);
}

const update = data => {
    return httpClient.put('/editcandidature/{id}', data);
}

const remove = id => {
    return httpClient.delete(`/deletecandidature/{id}/${id}`);
}
export default { getAll, create, get, update, remove };