const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Return your Object options:
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
