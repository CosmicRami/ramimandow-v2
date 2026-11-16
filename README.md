# Rami F. Mandow — Pulsar Website v2

A static, multi-page website for GitHub Pages. Open `index.html` locally to preview. No generated images or videos are included.

## Editing content and switching modules on/off

Edit `assets/js/content-config.js`.
- `modules.calculators: false` hides the unfinished Scripts & Calculators section.
- `enabled: false` hides any individual conference, talk, blog article or gallery category.
- Add another object to the `conferences`, `talks` or `blogArticles` array to create a new tile.
- Set `image` to a path such as `assets/media/my-conference.jpg`; leave it empty for a neutral placeholder.
- Set `shape` to `landscape`, `square` or `portrait`.
- Set `url` to a real link to make the tile clickable; leave blank until ready.

## Hero video

Add `assets/media/hero-pulsar.mp4` and optionally `assets/media/hero-poster.jpg`. The decorative CSS fallback remains when the video is not available. For smooth performance, optimise and compress media before uploading.

## Other optional media

Existing interior-page media blocks can be removed without affecting the content, or adjusted using `data-media-shape="landscape|square|portrait"`. CV and calculators no longer have media blocks.

## Hosting and privacy

Designed for GitHub Pages with a custom domain. A private repository requires a GitHub plan that supports private-source Pages publishing. **All HTML, CSS, JS, and media sent to browsers are inspectable**, even if the repository is private. Do not include secrets in the site. No AI credits or watermarks have been inserted.

## Assets and attribution

Add NASA SVS and other media only after verifying individual usage terms and credit requirements. No third-party images or videos are bundled.
