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
The different font/styles can be used with the full name or the `short` version, be default `msc` will refer to `outlined`

```html
<span class="msc msc-face"></span>
<!-- Outlined default -->
<span class="msc-o msc-face"></span>
<!-- Outlined short class -->
<span class="msc-outlined msc-face"></span>
<!-- Outlined -->
<span class="msc-r msc-face"></span>
<!-- Rounded short class -->
<span class="msc-rounded  msc-face"></span>
<!-- Rounded -->
<span class="msc-s msc-face"></span>
<!-- Sharp short class -->
<span class="msc-sharp  msc-face"></span>
<!-- Sharp -->
```

Adding the `utils.css` you can edit the `fill`, `weight`, `spin` and `fix` variables with classes too:

```html
<span class="msc-outlined msc-face msc-fill"></span>
<!-- 'FILL': 1 -->
<span class="msc-outlined msc-face msc-100"></span>
<!-- 'weight': 100 -->
<span class="msc-outlined msc-face msc-fill msc-100"></span>
<!-- 'FILL': 1 && 'weight': 300 -->
<span class="msc-outlined msc-face msc-spin"></span>
<!-- Spinning icon -->
<span class="msc-outlined msc-face msc-fix"></span>
<!-- Fixed width icon -->
```

To customize the variable font axes (fill, weight, grade, and optical size), use:

```css
.msc-outlined {
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
