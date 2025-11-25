# Southwest Columbus Ham Radio Club

This repository is an [Eleventy]() Project that I am working on.

## Installation

1. Duplicate the repository.
2. Enter `npm install`.

## Run Locally

1. Enter `npm run serve` and view the site at [http://localhost:8080](http://localhost:8080).

## Data Files

* `menu.json`: Contains the structure for all menus. The pattern should be pretty clear.
* `banner.json`: Contains the structure for all banner images. Currently, it only handles changing based on month.

## Images

All images and linked files are stored **outside** the build. I used [Cloudflare R2](https://developers.cloudflare.com/r2/) for my storage.

Ideas to minimize bandwidth

* Convert images to WEBP format.
* Compress PDFs using something like [SmallPDF](https://smallpdf.com/compress-pdf). It's limited to three compressions a day, I believe.
