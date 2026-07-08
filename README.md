# Static Portfolio Frontend

Frontend-only portfolio website for a Junior Full Stack Developer.

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Run Locally

```bash
npm install
npm run dev
```

Open the Vite local URL shown in the terminal.

## Replace Content

Edit static content in:

```text
src/data/portfolio.jsx
```

Put your images in:

```text
public/images/
```

Examples:

- Profile photo: replace `public/images/profile-placeholder.svg` or change `profile.image`.
- Project photos: replace `project-1-placeholder.svg`, `project-2-placeholder.svg`, and `project-3-placeholder.svg` or change each project `image`.
- Project descriptions: edit each project `title`, `description`, `technologies`, `github`, and `demo`.

## Build

```bash
npm run build
```

## Notes

All content is static placeholder content. There is no backend, API, database, authentication, CMS, admin panel, or contact form backend.
