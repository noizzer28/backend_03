const getUsers = (request, response) => {
  response.status = 200;
  response.send("hello");
};
const getUser = (request, response) => {
  const { id } = request.params;
  response.status = 200;
  response.send(`user id ${id}`);
};
const createUser = (request, response) => {
  response.status = 200;
  response.send("hello POST");
};
const updateUser = (request, response) => {
  //update one
};
const deleteUser = (request, response) => {
  //get all
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
