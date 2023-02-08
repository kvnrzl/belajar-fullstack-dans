const {
  getUserFromAPI,
  getUsersFromAPI,
  createUserFromAPI,
  updateUserFromAPI,
  deleteUserFromAPI,
} = require("../repositories/UserRepository");

// get user
const getUser = async function (req, res) {
  try {
    const id = req.params.id;
    const response = await getUserFromAPI(id);
    res.send({
      status: response.status,
      data: response.data.data,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: "user not found",
    });
  }
};

// get users
const getUsers = async function (req, res) {
  try {
    const page = req.query.page;
    console.log(page, "page");
    const response = await getUsersFromAPI(page);
    res.send({
      status: response.status,
      data: response.data.data,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: "list of users not found",
    });
  }
};

// create user
const createUser = async function (req, res) {
  try {
    const { name, job } = req.body;
    const response = await createUserFromAPI(name, job);
    res.send({
      status: response.status,
      data: response.data,
    });
  } catch (error) {
    console.log(error, "error");
    res.send({
      status: 404,
      message: "cannot create user",
    });
  }
};

// update
const updateUser = async function (req, res) {
  try {
    const id = req.params.id;
    const { name, job } = req.body;
    const response = await updateUserFromAPI(id, name, job);
    res.send({
      status: response.status,
      message: response.data,
    });
  } catch (error) {
    console.log(error, "error");
    res.send({
      status: 404,
      message: "cannot update user",
    });
  }
};

// delete
const deleteUser = async function (req, res) {
  try {
    const id = req.params.id;
    const response = await deleteUserFromAPI(id);
    res.send({
      status: response.status,
      message: "Success delete user",
    });
  } catch (error) {
    res.send({
      status: 404,
      message: "cannot delete user",
    });
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
