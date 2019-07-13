import axios from "axios";

const url = "http://localhost:50000/api/";

const getPixaby = search => {
  const length = search.split(" ").length;
  const wordToSearch = search
    .split(" ")
    .map((word, index) => {
      return index === length - 1 ? word : word + "+";
    })
    .join("");

  const config = {
    method: "GET",
    url: `https://pixabay.com/api/?key=12390634-d539c718770db7832aeddc6af&q=${wordToSearch}&image_type=photo&per_page=8&safesearch=true`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const getLegWorkOuts = () => {
  const config = {
    method: "GET",
    url: `${url}leg`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const addLegWorkout = payload => {
  const config = {
    method: "POST",
    data: payload,
    url: `${url}leg`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const deleteLegWorkout = id => {
  const config = {
    method: "DELETE",
    url: `${url}leg/${id}`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const updateLegWorkout = (payload, id) => {
  const config = {
    method: "PUT",
    url: `${url}leg/${id}`,
    data: payload,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const onGlobalSuccess = response => {
  /// Should not use if you need access to anything other than the data
  return response.data;
};

const onGlobalError = err => {
  return Promise.reject(err);
};

export {
  getLegWorkOuts,
  addLegWorkout,
  getPixaby,
  deleteLegWorkout,
  updateLegWorkout
};
