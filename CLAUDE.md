# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Ghost theme called "arcstratus" built with modern web technologies. The theme uses Rollup for bundling, Tailwind CSS for styling, and PostCSS for CSS processing.

## Development Commands

- `npm run build` - Build the theme for production using Rollup
- `npm run zip` - Build and create a zip file in the dist folder
- `npm run deploy` - Build, zip, and upload the theme to Ghost using the Admin API
- `npm test` - Run Ghost theme validation using gscan

## Architecture

### Build System
- **Rollup** (`rollup.config.js`) - Main bundler that processes JS and CSS
- **Entry point**: `assets/js/index.js` for JavaScript
- **CSS processing**: PostCSS with Tailwind CSS v4 and postcss-preset-env
- **Output**: Built assets go to `dist/assets/built/`

### Theme Structure
- **Templates**: Located in `templates/` directory with Handlebars (.hbs) files
- **Assets**: CSS in `assets/css/`, JavaScript in `assets/js/`
- **Theme config**: `ghost-package.json` contains Ghost-specific configuration
- **Routes**: Custom routes defined in `routes.yaml`

### Ghost Integration
- Theme supports Ghost 5.0+
- Configured for 15 posts per page
- Custom image sizes defined for responsive images
- Upload script (`upload.js`) uses Ghost Admin API for deployment

### Development Workflow
The build process:
1. Processes JavaScript through Babel and bundles with Rollup
2. Processes CSS through PostCSS with Tailwind CSS
3. Copies templates and package.json to dist folder
4. Creates production-ready theme package

For development, Rollup includes livereload functionality that watches for changes in JS, CSS, and Handlebars files.

## Workflow Rules

- After making theme changes, always run `pnpm run deploy` to build, zip, and upload the theme to Ghost automatically