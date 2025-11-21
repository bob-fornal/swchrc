import { RenderPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.addPlugin(eleventyAutoCacheBuster);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addPlugin(RenderPlugin);

	eleventyConfig.addPassthroughCopy("index.css");
	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, {
		permalink: markdownItAnchor.permalink.headerLink()
	}));
};