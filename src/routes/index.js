const { Router } = require("express");

const tagsRouter = require('./tags.routes');
const notesRouter = require('./notes.routes');
const usersRouter  = require('./users.routes');
const sessionsRouter = require('./sessions.routes');

const routes = Router();

routes.use("/tags", tagsRouter);
routes.use("/notes", notesRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;