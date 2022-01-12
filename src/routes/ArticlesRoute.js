import express from "express";
import ArticlesController from "../controllers/ArticlesController";
const router = express.Router();

router
  .route("/")
  .get(ArticlesController.getAllArticles)
    .post(ArticlesController.addArticle);

router.get("/:id", ArticlesController.getArticleById);

export default router
