# [material-symbols-class](https://github.com/joelcorrales/material-symbols-class)

This is a package that uses [material-symbols](https://github.com/marella/material-symbols/tree/main/material-symbols) to provide a way of using the icons just with classes.

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
<span class="msc msc-face"></span>
<!-- Outlined -->
<span class="msc-rounded  msc-face"></span>
<!-- Rounded -->
<span class="msc-sharp  msc-face"></span>
<!-- Sharp -->
```

Adding the `utils.css` you can edit the `fill` and `weight` variables with classes too:

```html
<span class="msc msc-face msc-fill"></span>
<!-- 'FILL': 1 -->
<span class="msc msc-face msc-100"></span>
<!-- 'weight': 100 -->
<span class="msc msc-face msc-fill msc-100"></span>
<!-- 'FILL': 1 && 'weight': 300 -->
```

To customize the variable font axes (fill, weight, grade, and optical size), use:

```css
.msc {
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
