const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const messagesController = require("../controllers/messages");

router.get("/", messagesController.getAllMessages);
router.get("/:id", messagesController.getOneMessage);
router.delete("/:id", messagesController.deleteMessage);
router.patch("/:id", messagesController.updateMessage);
router.post("/", messagesController.addNewMessage);

module.exports = router;
