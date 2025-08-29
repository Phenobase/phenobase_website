# Phenobase Website

This is the source code for the Phenobase website, built with Hugo, with the [`hugo-xmin` theme](https://github.com/yihui/hugo-xmin).

## Structure

- `content/` — Site content and pages
  - The animated texts are defined in the `content/_index.markdown` file, which also has the CSS styles to define the location and characteristics of these texts
  - All pages are defined in the corresponding Markdown files within the `content/` directory; if we need to change things, change them there. For example, we can add more partners in the `content/about.md`.
  - To add tutorials or notes about the data or model things like this later, create a new Markdown file in the `content/notes` directory. We can use the `slug` front matter to define the URL path and later reference it in the `content/resources.md` file to be listed in the resources page
- `static/` — Static assets (images, CSS, JS)
- `layouts/` — Templates and partials
  - The homepage images are defined in the `layouts/_partials/head_custom.html` file.
- `themes/` — Hugo theme(s)
- `hugo.yaml` — Site configuration; it also defines the menu structure and other site-wide settings


