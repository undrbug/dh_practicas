const router = require("express").Router();
const userController = require("./user.controller");
const fileupload = require("./services/fileUpload");
const { check, body } = require("express-validator");

const userValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),
  body("apellido")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres"),
  body("email").isEmail()
    .notEmpty()
    .withMessage("El email es obligatorio"),
  body("imagen")
    .custom((value, { req }) => {
      if (req.file) {
        return true;
      }
      return false;
    })
    .withMessage("La imagen es obligatoria"),
];

router.get("/", (req, res) => {
  res.render("index.ejs");
});
router.get("/users", userController.listarUsuarios);
router.get("/users/add", userController.crearUsuarioVista);
router.get("/users/card/:id", userController.cardUsuario);
router.post(
  "/users/add",
  fileupload.single("imagen"),
  userValidation,
  userController.crearUsuario
);
router.get("/users/:id", userController.buscarUsuario);
router.get("/users/edit/:id", userController.editarUsuario);
router.put(
  "/users/:id",
  fileupload.single("imagen"),
  userController.actualizarUsuario
);
router.delete("/users/:id", userController.borrarUsuario);

module.exports = router;
