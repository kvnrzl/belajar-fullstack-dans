// const instance = require("../module/axios");
const axios = require("axios");

const instance = axios.create({
  baseURL: "https://reqres.in",
  headers: { "content-type": "application/json" },
});

// get user
const getUserFromAPI = async (id) => {
  console.log(id, "id");
  const response = await instance.get(`/api/users/${id}`);
  return response;
};

// get some users
const getUsersFromAPI = async (page) => {
  console.log(page, "page");
  const response = await instance.get(`/api/users?page=${page}`);
  return response;
};

// create user
const createUserFromAPI = async (name, job) => {
  const response = await instance.post("/api/users", {
    name: name,
    job: job,
  });

  return response;
};

// update user
const updateUserFromAPI = async (id, name, job) => {
  const response = await instance.patch(`/api/users/${id}`, {
    name: name,
    job: job,
  });

  return response;
};

// delete user
const deleteUserFromAPI = async (id) => {
  const response = await instance.delete(`/api/users/${id}`);
  return response;
};

module.exports = {
  getUserFromAPI,
  getUsersFromAPI,
  createUserFromAPI,
  updateUserFromAPI,
  deleteUserFromAPI,
};
