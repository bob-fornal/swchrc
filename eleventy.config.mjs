import { RenderPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import Nunjucks from "nunjucks";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";

export default function (eleventyConfig) {
	const options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setInputDirectory('src');

	eleventyConfig.addPlugin(eleventyAutoCacheBuster);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addPlugin(RenderPlugin);

	eleventyConfig.addPassthroughCopy("src/index.css");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/site.webmanifest");

	eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, {
		permalink: markdownItAnchor.permalink.headerLink()
	}));
};