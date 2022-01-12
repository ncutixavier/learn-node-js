import articles from "../data/Articles";

const getAllArticles = (req, res) => {
  res.json({
    Result: articles.length,
    articles: articles,
  });
};

const getArticleById = (req, res) => {
  const { id } = req.params;
  const article = articles.find((article) => article.id === Number(id));
  if (!article) {
    return res.status(404).json({
      message: "Article not found",
    });
  }
  res.json({
    article,
  });
};

const addArticle = (req, res) => {
    const { title, image, description } = req.body;
    const article = {
        id: articles.length + 1,
        title: title,
        image: image,
        description: description,
    };
    articles.push(article);
    res.json({
        message: "Article added successfully",
        article,
    });
}

//Update Article

//Delete Article

export default { getAllArticles, getArticleById, addArticle };
