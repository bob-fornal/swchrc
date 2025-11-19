import markdownIt from "markdown-it";

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
	eleventyConfig.addPassthroughCopy("index.css");
};