---
title: "Links"
---

<article>

### Links

These elements should be used to style links based on the global link, primary, and secondary colors.

<div><a href="#1">Regular Anchor Tag</a></div>
<div><a class="link-primary" href="#1">.link-primary</a></div>
<div><a class="link-secondary" href="#1">.link-secondary</a></div>

```html
<div>
    <a href="#1">Regular Anchor Tag</a>
</div>
<div>
    <a class="link-primary" href="#1">
        .link-primary
    </a>
</div>

<div>
    <a class="link-secondary" href="#1">
        .link-secondary
    </a>
</div>
```

</article>

<article>

### Single Link

Use <code>.single-link</code> on an anchor to add a semi-bold style to the link and should be used for stand alone links defined by https://lexicondesign.io/docs/patterns/link.html.

<div><a class="link-primary single-link" href="#1">.link-primary.single-link</a></div>

<div><a class="link-secondary single-link" href="#1">.link-secondary.single-link</a></div>

```html
<div>
    <a class="link-primary single-link" href="#1">
        .link-primary.single-link
    </a>
</div>

<div>
    <a class="link-secondary single-link" href="#1">
        .link-secondary.single-link
    </a>
</div>
```

</article>

<article class="clay-site-row-spacer">

### Component Links

Use these patterns for links, titles, subtitles in components.

<div class="alert alert-warning">
    The colors, sizing, and other CSS Properties can change for these items depending on the component you put them in (requires custom CSS).
</div>
<div class="">
    <div><a class="component-link" href="#1">.component-link</a></div>
    <h4 class="component-title">.component-title</h4>
    <h4 class="component-title"><a href="#1">.component-title a</a></h4>
    <p class="component-subtitle">.component-subtitle</p>
    <p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
</div>

```html
<div><a class="component-link" href="#1">.component-link</a></div>
<h4 class="component-title">.component-title</h4>
<h4 class="component-title"><a href="#1">.component-title a</a></h4>
<p class="component-subtitle">.component-subtitle</p>
<p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
```

</article>

<article>

### Component Action

Use these patterns for actions in components.

#### Anchor

<a class="component-action" href="#1" role="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</a>

<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</a>

```html

<a class="component-action" href="#1" role="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</a>

<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</a>
```


#### Button

<button class="component-action" type="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</button>

<button class="component-action" disabled="" type="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</button>

```html
<button class="component-action" type="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</button>

<button class="component-action" disabled="" type="button">
    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
    </svg>
</button>
```

</article>

<article>

### Link Outline

<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>

```html
<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
```

</article>

<article>

### Link Outline Borderless

<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>

```html
<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>
```

</article>

<article>

### Link Monospaced

<a class="link-monospaced link-outline link-outline-primary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-add-cell" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
                C512,25.5,486.5,0,455.1,0z"></path>
            <path class="lexicon-icon-outline" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
                C512,25.5,486.5,0,455.1,0z M160,448H64v-96h96V448z M160,320H64V192h96V320z M160,160H64V64h96V160z M320,448H192v-96h128V448z
                M320,160H192V64h128V160z M448,448h-96v-96h96V448z M448,320h-96V192h96V320z M448,160h-96V64h96V160z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-borderless link-outline-primary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-add-cell" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
    C512,25.5,486.5,0,455.1,0z"></path>
            <path class="lexicon-icon-outline" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
            C512,25.5,486.5,0,455.1,0z M160,448H64v-96h96V448z M160,320H64V192h96V320z M160,160H64V64h96V160z M320,448H192v-96h128V448z
            M320,160H192V64h128V160z M448,448h-96v-96h96V448z M448,320h-96V192h96V320z M448,160h-96V64h96V160z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-secondary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture" viewBox="0 0 512 512">
            <path class="lexicon-icon-outline" d="M168.45 88.689c0 45.13-36.585 81.717-81.717 81.717s-81.717-36.585-81.717-81.717c0-45.13 36.586-81.717 81.717-81.717s81.717 36.586 81.717 81.717z"></path>
            <path class="lexicon-icon-outline" d="M505.454 480.481l-170.192-278.981c-5.408-8.894-17.717-10.388-25.116-3.095l-109.785 108.434-40.306-39.808c-7.4-7.329-19.709-5.798-25.116 3.096l-128.391 210.357c-6.545 10.744 1.174 24.546 13.803 24.546h471.337c12.594 0 20.313-13.803 13.767-24.546z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-borderless link-outline-secondary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture" viewBox="0 0 512 512">
            <path class="lexicon-icon-outline" d="M168.45 88.689c0 45.13-36.585 81.717-81.717 81.717s-81.717-36.585-81.717-81.717c0-45.13 36.586-81.717 81.717-81.717s81.717 36.586 81.717 81.717z"></path>
            <path class="lexicon-icon-outline" d="M505.454 480.481l-170.192-278.981c-5.408-8.894-17.717-10.388-25.116-3.095l-109.785 108.434-40.306-39.808c-7.4-7.329-19.709-5.798-25.116 3.096l-128.391 210.357c-6.545 10.744 1.174 24.546 13.803 24.546h471.337c12.594 0 20.313-13.803 13.767-24.546z"></path>
        </svg>
    </span>
</a>

```html
<a class="link-monospaced link-outline link-outline-primary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-add-cell" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
                C512,25.5,486.5,0,455.1,0z"></path>
            <path class="lexicon-icon-outline" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
                C512,25.5,486.5,0,455.1,0z M160,448H64v-96h96V448z M160,320H64V192h96V320z M160,160H64V64h96V160z M320,448H192v-96h128V448z
                M320,160H192V64h128V160z M448,448h-96v-96h96V448z M448,320h-96V192h96V320z M448,160h-96V64h96V160z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-borderless link-outline-primary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-add-cell" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
    C512,25.5,486.5,0,455.1,0z"></path>
            <path class="lexicon-icon-outline" d="M455.1,0H56.9C25.5,0,0,25.5,0,56.9v398.2C0,486.5,25.5,512,56.9,512h398.2c31.4,0,56.9-25.5,56.9-56.9V56.9
            C512,25.5,486.5,0,455.1,0z M160,448H64v-96h96V448z M160,320H64V192h96V320z M160,160H64V64h96V160z M320,448H192v-96h128V448z
            M320,160H192V64h128V160z M448,448h-96v-96h96V448z M448,320h-96V192h96V320z M448,160h-96V64h96V160z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-secondary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture" viewBox="0 0 512 512">
            <path class="lexicon-icon-outline" d="M168.45 88.689c0 45.13-36.585 81.717-81.717 81.717s-81.717-36.585-81.717-81.717c0-45.13 36.586-81.717 81.717-81.717s81.717 36.586 81.717 81.717z"></path>
            <path class="lexicon-icon-outline" d="M505.454 480.481l-170.192-278.981c-5.408-8.894-17.717-10.388-25.116-3.095l-109.785 108.434-40.306-39.808c-7.4-7.329-19.709-5.798-25.116 3.096l-128.391 210.357c-6.545 10.744 1.174 24.546 13.803 24.546h471.337c12.594 0 20.313-13.803 13.767-24.546z"></path>
        </svg>
    </span>
</a>

<a class="link-monospaced link-outline link-outline-borderless link-outline-secondary" href="#1">
    <span class="inline-item">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture" viewBox="0 0 512 512">
            <path class="lexicon-icon-outline" d="M168.45 88.689c0 45.13-36.585 81.717-81.717 81.717s-81.717-36.585-81.717-81.717c0-45.13 36.586-81.717 81.717-81.717s81.717 36.586 81.717 81.717z"></path>
            <path class="lexicon-icon-outline" d="M505.454 480.481l-170.192-278.981c-5.408-8.894-17.717-10.388-25.116-3.095l-109.785 108.434-40.306-39.808c-7.4-7.329-19.709-5.798-25.116 3.096l-128.391 210.357c-6.545 10.744 1.174 24.546 13.803 24.546h471.337c12.594 0 20.313-13.803 13.767-24.546z"></path>
        </svg>
    </span>
</a>
```
</article>