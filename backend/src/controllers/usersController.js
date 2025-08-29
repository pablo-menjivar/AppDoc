import usersModel from "../models/usersModel.js";
const usersController = {};

// Crear usuario
usersController.createUser = async (req, res) => {
    try {
        const { name, username, age, email, birthDate, phoneNumber } = req.body;
        const newUser = new usersModel({ name, username, age, email, birthDate, phoneNumber });
        await newUser.save();
        res.status(201).json({ message: "Usuario creado", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los usuarios
usersController.getUsers = async (req, res) => {
    try {
        const users = await usersModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener usuario por ID
usersController.getUser = async (req, res) => {
    try {
        const user = await usersModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar usuario
usersController.updateUser = async (req, res) => {
    try {
        const { name, username, age, email, birthDate, phoneNumber } = req.body;
        const updatedUser = await usersModel.findByIdAndUpdate(
            req.params.id,
            { name, username, age, email, birthDate, phoneNumber },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json({ message: "Usuario actualizado", user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar usuario
usersController.deleteUser = async (req, res) => {
    try {
        const deletedUser = await usersModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default usersController;