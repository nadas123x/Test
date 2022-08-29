import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/files');
  
}

const create = data => {
    return httpClient.post("/files", data);
}

const get = id => {
    return httpClient.get(`/files/${id}`);
}

const update = data => {
    return httpClient.put('/editpostul/{id}', data);
}

const remove = id => {
    return httpClient.delete(`/deletepostul/{id}/${id}`);
}
export default { getAll, create, get, update, remove };