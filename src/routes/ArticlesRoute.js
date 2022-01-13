import express from "express";
import ArticlesController from "../controllers/ArticlesController";
const router = express.Router();

router
  .route("/")
  .get(ArticlesController.getAllArticles)
    .post(ArticlesController.addArticle);

router.get("/:id", ArticlesController.getArticleById);
router.put("/update/:id", ArticlesController.updateArticleById);
router.delete("/delete/:id", ArticlesController.deleteArticleById);

export default router;
