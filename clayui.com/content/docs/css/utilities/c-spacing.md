---
title: 'C Spacing Utilities'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [How to read the class](#how-to-read–the–class)
-   [How to understand the class](#how-to-understand–the–class)
-   [How to use the class](#how-to-use–the–class)

</div>
</div>

Utility classes for the spacing in your pages. (without the `!important` attribute)

## How to read the class

Example: `c-mt-sm-3`.

Meaning: `{prefix}-{type}{direction}-{breakpoint}-{value}`.

SCSS: `@include media-breakpoint-up(sm) { margin-top: 1rem; }`.

CSS: `@media(min-width: 576px) { margin-top: 1rem; }`. _(576px can change depending on the site's configuration)_

## How to understand the class

`c` is the **prefix** and it stands for **Clay**. All the new classes have this prefix to avoid conflicts with other frameworks.

`m` is the **type** of spacing you need. In this case it stands for **margin** but you probably will find **p** for **padding**. (example: `c-pt-sm-3` means `@media(min-width: 576px) { padding-top: 1rem; }`)

`t` is the direction in this case it stands for **top** but you probably will find:

-   `r` - **right**
-   `b` - **bottom**
-   `l` - **left**
-   `y` - **top** and **bottom** (vertical axis)
-   `x` - **right** and **left** (horizontal axis)
-   _`empty`_ - when this value is not present it means you are applying this spacing to **all the directions** (example: `c-m-sm-3` means `@media(min-width: 576px) { margin: 1rem; }` )

`sm` is the breakpoint where this rule starts to work, in this case **started from sm**, but we can also have: (see [Grid Documentation](../grid.html))

-   `sm` - started from sm - _started from 576px_
-   `md` - started from md - _started from 768px_
-   `lg` - started from lg - _started from 992px_
-   `xl` - started from xl - _started from 1200px_

`3` is the value of the spacing you want to assign in the example. By default the spaces are:

-   `0` - **0rem** - _0px_
-   `1` - **0.25rem** - _4px_
-   `2` - **0.5rem** - _8px_
-   `3` - **1rem** - _16px_
-   `4` - **1.5rem** - _24px_
-   `5` - **3rem** - _48px_
-   `6` - **4.5rem** - _72px_
-   `7` - **6rem** - _96px_
-   `8` - **7.5rem** - _120px_
-   `auto` - will set the value to **auto**

These spaces can be negative if we use `n` before the value, that means:

-   `n1` | **-0.25rem** | _-4px_
-   `n2` | **-0.5rem** | _-8px_
-   `n3` | **-1rem** | _-16px_
-   `n4` | **-1.5rem** | _-24px_
-   `n5` | **-3rem** | _-48px_
-   `n6` | **-4.5rem** | _-72px_
-   `n7` | **-6rem** | _-96px_
-   `n8` | **-7.5rem** | _-120px_

## How to use the class

The best usage of these classes take place in a responsive scenario:

<img src="/images/spacing-example.png" class="img-fluid" />

Let's focus on the buttons **Publish** and **Cancel**.

We are leaving the style of these buttons to the classes `btn-one` and `btn-two` and taking care of the spacing using `c-mt-3 c-mt-sm-0 c-ml-sm-3`.

```html
<div>
    <button class="btn-one">Cancel<button>
    <button class="btn-two c-mt-3 c-mt-sm-0 c-ml-sm-3">Publish<button>
</div>
```

If we translated these classes into CSS, this would be the result:

```scss
.btn-two {
	margin-top: 1rem;

	@media (min-width: 576px) {
		margin-top: 0;
		margin-left: 1rem;
	}
}
```
