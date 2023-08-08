var express = require("express");
var router = express.Router();
const cards = require("../controllers/cards");
const auth = require("../middleware/auth");

router.get("/", cards.getAll);
router.post("/", auth, auth.checkChecked, cards.add);
router.get("/myCards", auth, cards.getMyCards);
router.get("/getUserFavoriteCards", auth, cards.getUserFavoriteCards);
router.patch("/:id", auth, auth.checkChecked, cards.edit);
router.delete("/:id", auth, auth.checkChecked, cards.delete);
router.get("/:id", cards.getItem);
router.put("/:id/favorite", auth, cards.setFavorite);
module.exports = router;
