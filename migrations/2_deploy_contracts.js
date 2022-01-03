const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

/*
Deploy contract on the blockchain cost gas and will decrease the cost
*/