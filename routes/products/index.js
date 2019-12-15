const router = require("express").Router()

router.get("/:id", require("./controller").getAll)
router.get("/", require("./controller").getAllProducts)
router.post("/", require('./controller').addOne)
router.put("/:id", require('./controller').updateOne)
router.delete("/:id", require('./controller').deleteOne)

module.exports = router;