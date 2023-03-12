const express = require("express");
const router = express.Router();
const {getContacts,createContact,updateContact,getContact,deleteContact} = require("../controllers/contact_controller");
const validateToken = require("../middleware/ValidateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;