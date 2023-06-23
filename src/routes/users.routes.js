const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticaded, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticaded, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;