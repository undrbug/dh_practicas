const router = require("express").Router();
const { check, body } = require("express-validator");
const userController = require("../controller/user.controller");

const userValidation = [
  check("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
  check("color").notEmpty().withMessage("Tiene que seleccionar un color"),
  check("email").isEmail().notEmpty().withMessage("El email es obligatorio"),
  check("age").notEmpty().withMessage("La edad es obligatoria")
  .isInt().withMessage("La edad debe ser un número entero"),
];

router.get("/login", userController.login);
router.post("/login", userValidation, userController.validation);
router.get('/bienvenido', userController.bienvenido);
router.get('/logout', userController.logout);

module.exports = router;