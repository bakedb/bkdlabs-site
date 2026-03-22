module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("articles/*.html")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
