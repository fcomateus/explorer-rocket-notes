const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();
    
const userController = new UsersController()


usersRoutes.post("/", userController.create);
usersRoutes.put("/:id", userController.update);


module.exports = usersRoutes;

//teste, troquei nome no github, quero ver se está dando certo os commits