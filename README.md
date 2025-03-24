# [material-symbols](https://github.com/marella/material-symbols/tree/main/material-symbols)

Latest variable icon fonts and CSS for Material Symbols to use as classes.

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install material-symbols-class@latest
```

## Usage

Import in JS (example: `src/index.js` in Create React App, `src/main.js` in Vue CLI):

```js
import "material-symbols-class";
```

or import in CSS (example: `src/styles.css` in Angular CLI):

```css
@import "material-symbols-class";
```

or import in HTML:

```html
<link href="/path/to/material-symbols-class/index.css" rel="stylesheet" />
```

To display an icon, use one of the following:

```html
<span class="ms ms-face"></span>
<!-- Outlined -->
<span class="ms-rounded  ms-face"></span>
<!-- Rounded -->
<span class="ms-sharp  ms-face"></span>
<!-- Sharp -->
```

To customize the variable font axes (fill, weight, grade, and optical size), use:

```css
.ms {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
```

### Reducing Build Size

The default `index.css` includes CSS for all fonts. This may cause build tools such as webpack to copy all fonts to the build directory even if you are not using all of them. To reduce the build size, import only the styles you need. For example, if you only need outlined icons, import `outlined.css` instead of the default `index.css`:

```diff
-import 'material-symbols-class';
+import 'material-symbols-class/outlined.css';
```

<details>
<summary><strong>Show all</strong></summary><br>

| Icons    | CSS          | Sass          |
| :------- | :----------- | :------------ |
| Outlined | outlined.css | outlined.scss |
| Rounded  | rounded.css  | rounded.scss  |
| Sharp    | sharp.css    | sharp.scss    |

</details>

### Using Sass

Import in Sass (example: `src/styles.scss` in Angular CLI):

```scss
@import "material-symbols-class";
```

## License

MIT License
