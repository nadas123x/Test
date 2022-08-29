import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/getallmsgs');
}

const create = data => {
    return httpClient.post("/Msg", data);
}

const get = id => {
    return httpClient.get(`/Msg/${id}`);
}

const update = data => {
    return httpClient.put('/editmsg/{id}', data);
}

const remove = id => {
    return httpClient.delete(`/deletemsg/{id}/${id}`);
}
export default { getAll, create, get, update, remove };