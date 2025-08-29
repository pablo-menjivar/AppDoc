import { Router } from "express";
import usersController from "../controllers/usersController.js";

const router = Router();

// Crear usuario y obtener todos los usuarios
router.route("/")
    .post(usersController.createUser)
    .get(usersController.getUsers)
// Obtener usuario por ID, actualizar usuario y eliminar usuario
router.route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete( usersController.deleteUser)

export default router;