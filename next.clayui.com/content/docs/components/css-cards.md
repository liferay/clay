---
title: "Cards"
description: "Cards are a specific form of data visualization focused mainly on displaying images."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Example](#example)
- [Content Types](#content-types)
    - [Body](#body)
    - [Captions](#captions)
    - [Images](#images)
    - [Header and footer](#header-and-footer)
    - [Dividers](#dividers)
- [Variations](#variations)
    - [Image Card](#image-card)
    - [File Card](#file-card)
    - [User Card](#user-card)
    - [Horizontal Card](#horizontal-card)
    - [Interactive Card](#interactive-card)
- [States](#states)
    - [Hover](#hover)
    - [Active](#active)
    - [Empty](#empty)
- [Helpers](#helpers)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/cards/">Cards Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/cards.html">Cards component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/cards/">Cards Pattern</a>.
</div>

# Example

<div class="sheet-example">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>

```html
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

# Content Types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

## Body

The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

<div class="sheet-example">
    <div class="card">
        <div class="card-body">
            This is some text within a card body.
        </div>
    </div>
</div>

```html
<div class="card">
    <div class="card-body">
        This is some text within a card body.
    </div>
</div>
```

## Captions

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

<div class="sheet-example">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</div>

```html
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
```

## Images

Use classes `card-item-first` and `card-item-last` on elements that appear at the beginning or ending of your card. It styles the `border-radius` to match the card's `border-radius`. These classes work similar to Bootstrap 4's `.card-img-top` and `.card-img-bottom` but also covers left and right.

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-rounded">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
                </div>
                <div class="card-body" style="text-align:center;">
                    <h3 class="card-title">Joe Bloggs</h3>
                    <p class="card-subtitle">Administrator</p>
                    <p class="card-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-horizontal card-rounded">
                <div class="card-row">
                    <div class="autofit-col autofit-col-expand autofit-col-gutters">
                        <section class="autofit-section">
                            <h3 class="card-title">Space Program</h3>
                            <div class="card-divider"></div>
                            <p class="card-text">Because you live life on the edge of space.</p>
                        </section>
                    </div>
                    <div class="autofit-col">
                        <img class="card-item-last" src="/images/thumbnail_dock.jpg" style="width: 150px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-rounded">
    <div class="aspect-ratio card-item-first">
        <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
    </div>
    <div class="card-body" style="text-align:center;">
        <h3 class="card-title">Joe Bloggs</h3>
        <p class="card-subtitle">Administrator</p>
        <p class="card-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
    </div>
</div>
<div class="card card-horizontal card-rounded">
    <div class="card-row">
        <div class="autofit-col autofit-col-expand autofit-col-gutters">
            <section class="autofit-section">
                <h3 class="card-title">Space Program</h3>
                <div class="card-divider"></div>
                <p class="card-text">Because you live life on the edge of space.</p>
            </section>
        </div>
        <div class="autofit-col">
            <img class="card-item-last" src="/images/thumbnail_dock.jpg" style="width: 150px;">
        </div>
    </div>
</div>
```

## Header and Footer

Add an optional header and/or footer within a card.

<div class="sheet-example">
    <div class="card">
        <div class="card-header">
        Featured
        </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>
</div>

```html
<div class="card">
    <div class="card-header">
    Featured
    </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
```

Card headers can be styled by adding `.card-header` to `<h*>` elements.

<div class="sheet-example">
    <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>

```html
<div class="card">
    <h5 class="card-header">Featured</h5>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

## Dividers

Use `<div class="card-divider"></div>` to create a horizontal division between content inside a card.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    autofit-col-expand
                </section>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title">Title</h3>
                    <div class="card-divider"></div>
                    <p class="card-text">autofit-col-expand</p>
                </section>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-row">
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                <h3 class="card-title">Title</h3>
                <div class="card-divider"></div>
                <p class="card-text">autofit-col-expand</p>
            </section>
        </div>
    </div>
</div>
```

# Variations

## Image Card

Just add `image-card` class on the same element that `card` class have being added.

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-type-asset image-card">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-danger">JPG</span>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="autofit-col autofit-col-expand">
                            <section class="autofit-section">
                                <h3 class="card-title" title="thumbnail_coffee.jpg">
                                    <span class="text-truncate-inline">
                                        <a class="text-truncate" href="#1">thumbnail_coffee.jpg</a>
                                    </span>
                                </h3>
                                <p class="card-subtitle">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Author Action</span>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-type-asset image-card">
                <div class="aspect-ratio card-item-first">
                    <span class="sticker sticker-bottom-left sticker-info">PNG</span>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="autofit-col autofit-col-expand">
                            <section class="autofit-section">
                                <h3 class="card-title" title="empty-background.png">
                                    <span class="text-truncate-inline">
                                        <a class="text-truncate" href="#1">empty-background.png</a>
                                    </span>
                                </h3>
                                <p class="card-subtitle" title="Author Action">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Author Action</span>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-type-asset image-card">
                <div class="aspect-ratio card-item-first">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
                        <svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#camera"></use>
                        </svg>
                    </div>
                    <span class="sticker sticker-bottom-left sticker-warning">SVG</span>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="autofit-col autofit-col-expand">
                            <section class="autofit-section">
                                <h3 class="card-title" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">
                                    <span class="text-truncate-inline">
                                        <a class="text-truncate" href="#1">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</a>
                                    </span>
                                </h3>
                                <p class="card-subtitle text-truncate" title="Author Action">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Author Action</span>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-type-asset image-card">
    <div class="aspect-ratio card-item-first">
        <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
        <span class="sticker sticker-bottom-left sticker-danger">JPG</span>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="thumbnail_coffee.jpg">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">thumbnail_coffee.jpg</a>
                        </span>
                    </h3>
                    <p class="card-subtitle">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Author Action</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
<div class="card card-type-asset image-card">
    <div class="aspect-ratio card-item-first">
        <span class="sticker sticker-bottom-left sticker-info">PNG</span>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="empty-background.png">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">empty-background.png</a>
                        </span>
                    </h3>
                    <p class="card-subtitle" title="Author Action">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Author Action</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
<div class="card card-type-asset image-card">
    <div class="aspect-ratio card-item-first">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
            <svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#camera"></use>
            </svg>
        </div>
        <span class="sticker sticker-bottom-left sticker-warning">SVG</span>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</a>
                        </span>
                    </h3>
                    <p class="card-subtitle text-truncate" title="Author Action">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Author Action</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
```

## File Card

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-type-asset file-card">
            <div class="aspect-ratio card-item-first">
                <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
                    <svg class="lexicon-icon lexicon-icon-documents-and-media" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#documents-and-media"></use>
                    </svg>
                </div>
                <span class="sticker sticker-bottom-left sticker-danger">DOC</span>
            </div>
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col autofit-col-expand">
                        <section class="autofit-section">
                            <h3 class="card-title" title="deliverable.doc">
                                <span class="text-truncate-inline">
                                    <a class="text-truncate" href="#1">deliverable.doc</a>
                                </span>
                            </h3>
                            <p class="card-subtitle" title="Stevie Ray Vaughn">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate">Stevie Ray Vaughn</span>
                                </span>
                            </p>
                            <div class="card-detail">
                                <span class="label label-success">
                                    <span class="label-item label-item-expand">Approved</span>
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-type-asset file-card">
    <div class="aspect-ratio card-item-first">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
            <svg class="lexicon-icon lexicon-icon-documents-and-media" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#documents-and-media"></use>
            </svg>
        </div>
        <span class="sticker sticker-bottom-left sticker-danger">DOC</span>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="deliverable.doc">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">deliverable.doc</a>
                        </span>
                    </h3>
                    <p class="card-subtitle" title="Stevie Ray Vaughn">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Stevie Ray Vaughn</span>
                        </span>
                    </p>
                    <div class="card-detail">
                        <span class="label label-success">
                            <span class="label-item label-item-expand">Approved</span>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
```

## User Card

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-type-asset user-card">
                <div class="aspect-ratio card-item-first">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
                        <span class="sticker sticker-secondary sticker-user-icon">
                            <span class="sticker-overlay">
                                <img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png">
                            </span>
                        </span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <div class="autofit-col autofit-col-expand">
                            <section class="autofit-section">
                                <h3 class="card-title" title="User Name">
                                    <span class="text-truncate-inline">
                                        <a class="text-truncate" href="#1">User Name</a>
                                    </span>
                                </h3>
                                <p class="card-subtitle" title="Latest Action">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Latest Action</span>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card-type-asset user-card">
                <div class="card">
                    <div class="aspect-ratio card-item-first">
                        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
                            <span class="sticker sticker-user-icon">
                                <span class="sticker-overlay">
                                    <svg class="lexicon-icon lexicon-icon-user" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#user"></use>
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-row">
                            <div class="autofit-col autofit-col-expand">
                                <section class="autofit-section">
                                    <h3 class="card-title" title="User Name">
                                        <span class="text-truncate-inline">
                                            <a class="text-truncate" href="#1">User Name</a>
                                        </span>
                                    </h3>
                                    <p class="card-subtitle" title="Latest Action">
                                        <span class="text-truncate-inline">
                                            <span class="text-truncate">Latest Action</span>
                                        </span>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-type-asset user-card">
    <div class="aspect-ratio card-item-first">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
            <span class="sticker sticker-secondary sticker-user-icon">
                <span class="sticker-overlay">
                    <img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png">
                </span>
            </span>
        </div>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="User Name">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">User Name</a>
                        </span>
                    </h3>
                    <p class="card-subtitle" title="Latest Action">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Latest Action</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
```

## Horizontal Card

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-horizontal card-type-directory">
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col">
                        <span class="sticker">
                            <span class="inline-item">
                                <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#folder"></use>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div class="autofit-col autofit-col-expand autofit-col-gutters">
                        <section class="autofit-section">
                            <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                                <span class="text-truncate-inline">
                                    <a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
                                </span>
                            </h3>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal card-type-directory">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder"></use>
                        </svg>
                    </span>
                </span>
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters">
                <section class="autofit-section">
                    <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
                        </span>
                    </h3>
                </section>
            </div>
        </div>
    </div>
</div>
```

## Interactive Card

### Default

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-interactive card-interactive-primary card-type-template template-card" tabindex="0">
                <div class="aspect-ratio card-item-first">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                        <img src="/images/portlet.svg">
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Widget Page</h3>
                    <div class="card-text">Build a page by adding widgets and content.</div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <a class="card card-interactive card-interactive-primary card-type-template template-card" href="#1">
                <span class="aspect-ratio">
                    <span class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                        <img src="/images/content.svg">
                    </span>
                </span>
                <span class="card-body">
                    <span class="card-title">Content Page</span>
                    <span class="card-text">This is an example of card-type-template using an anchor tag.</span>
                </span>
            </a>
        </div>
        <div class="col-md-4">
            <div class="card card-interactive card-interactive-primary card-type-template template-card" tabindex="0">
                <div class="aspect-ratio">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                        <svg class="lexicon-icon lexicon-icon-page-template" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#page-template"></use>
                        </svg>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Blog</h3>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-interactive card-interactive-primary card-type-template template-card" tabindex="0">
    <div class="aspect-ratio card-item-first">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
            <img src="/images/portlet.svg">
        </div>
    </div>
    <div class="card-body">
        <h3 class="card-title">Widget Page</h3>
        <div class="card-text">Build a page by adding widgets and content.</div>
    </div>
</div>
<a class="card card-interactive card-interactive-primary card-type-template template-card" href="#1">
    <span class="aspect-ratio">
        <span class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
            <img src="/images/content.svg">
        </span>
    </span>
    <span class="card-body">
        <span class="card-title">Content Page</span>
        <span class="card-text">This is an example of card-type-template using an anchor tag.</span>
    </span>
</a>
<div class="card card-interactive card-interactive-primary card-type-template template-card" tabindex="0">
    <div class="aspect-ratio">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
            <svg class="lexicon-icon lexicon-icon-page-template" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#page-template"></use>
            </svg>
        </div>
    </div>
    <div class="card-body">
        <h3 class="card-title">Blog</h3>
    </div>
</div>
```

### Horizontal

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" tabindex="0">
                <div class="card-body">
                    <div class="card-row">
                        <div class="autofit-col">
                            <span class="sticker">
                                <span class="inline-item">
                                    <svg class="lexicon-icon lexicon-icon-square-hole" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#square-hole"></use>
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div class="autofit-col autofit-col-expand">
                            <div class="autofit-section">
                                <div class="card-title" title="Content Page">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Content Page</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <a class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" href="#1">
                <span class="card-body">
                    <span class="card-row">
                        <span class="autofit-col">
                            <span class="sticker">
                                <span class="inline-item">
                                    <svg class="lexicon-icon lexicon-icon-page" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#page"></use>
                                    </svg>
                                </span>
                            </span>
                        </span>
                        <span class="autofit-col autofit-col-expand">
                            <span class="autofit-section">
                                <span class="card-title" title="Content Page">
                                    <span class="text-truncate-inline">
                                        <span class="text-truncate">Full Page Application</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </a>
        </div>
            <div class="col-md-4">
                <div class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" tabindex="0">
                    <div class="card-body">
                        <div class="card-row">
                            <div class="autofit-col">
                                <span class="sticker">
                                    <span class="inline-item">
                                        <svg class="lexicon-icon lexicon-icon-page" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#page"></use>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            <div class="autofit-col autofit-col-expand">
                                <div class="autofit-section">
                                    <div class="card-title" title="Content Page">
                                        <span class="text-truncate-inline">
                                            <span class="text-truncate">Link to a Page of This Site</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" tabindex="0">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-square-hole" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#square-hole"></use>
                        </svg>
                    </span>
                </span>
            </div>
            <div class="autofit-col autofit-col-expand">
                <div class="autofit-section">
                    <div class="card-title" title="Content Page">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Content Page</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" href="#1">
    <span class="card-body">
        <span class="card-row">
            <span class="autofit-col">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-page" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#page"></use>
                        </svg>
                    </span>
                </span>
            </span>
            <span class="autofit-col autofit-col-expand">
                <span class="autofit-section">
                    <span class="card-title" title="Content Page">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Full Page Application</span>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    </span>
</a>
<div class="card card-interactive card-interactive-primary card-type-template template-card-horizontal" tabindex="0">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-page" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#page"></use>
                        </svg>
                    </span>
                </span>
            </div>
            <div class="autofit-col autofit-col-expand">
                <div class="autofit-section">
                    <div class="card-title" title="Content Page">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Link to a Page of This Site</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

# States

## Hover

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card-type-asset form-check form-check-card form-check-top-left image-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
							<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
							<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<section class="autofit-section">
								<h3 class="card-title" title="thumbnail_coffee.jpg">
									<span class="text-truncate-inline">
                                        <a class="text-truncate" href="#1">thumbnail_coffee.jpg</a>
									</span>
								</h3>
								<p class="card-subtitle" title="Author Action">
									<span class="text-truncate-inline">
										<span class="text-truncate">Author Action</span>
									</span>
								</p>
								<div class="card-detail">
									<span class="label label-success">
										<span class="label-item label-item-expand">Approved</span>
									</span>
								</div>
							</section>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                    <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                    </svg>
								</a>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a class="dropdown-item" href="#1">Download</a></li>
									<li><a class="dropdown-item" href="#1">Edit</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>

```html
<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
    <div class="card">
        <div class="aspect-ratio card-item-first">
            <div class="custom-control custom-checkbox">
                <label>
                    <input class="custom-control-input" type="checkbox">
                    <span class="custom-control-label"></span>
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-danger">JPG</span>
                </label>
            </div>
        </div>
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        <h3 class="card-title" title="thumbnail_coffee.jpg">
                            <span class="text-truncate-inline">
                                <a class="text-truncate" href="#1">thumbnail_coffee.jpg</a>
                            </span>
                        </h3>
                        <p class="card-subtitle" title="Author Action">
                            <span class="text-truncate-inline">
                                <span class="text-truncate">Author Action</span>
                            </span>
                        </p>
                        <div class="card-detail">
                            <span class="label label-success">
                                <span class="label-item label-item-expand">Approved</span>
                            </span>
                        </div>
                    </section>
                </div>
                <div class="autofit-col">
                    <div class="dropdown dropdown-action">
                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a class="dropdown-item" href="#1">Download</a></li>
                            <li><a class="dropdown-item" href="#1">Edit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Active

Just add `active` class on the element where `card` class was placed.

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-interactive card-interactive-primary card-type-template template-card active" tabindex="0">
            <div class="aspect-ratio card-item-first">
                <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                    <img src="/images/portlet.svg">
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">Widget Page</h3>
                <div class="card-text">Build a page by adding widgets and content.</div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-interactive card-interactive-primary card-type-template template-card active" tabindex="0">
    <div class="aspect-ratio card-item-first">
        <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
            <img src="/images/portlet.svg">
        </div>
    </div>
    <div class="card-body">
        <h3 class="card-title">Widget Page</h3>
        <div class="card-text">Build a page by adding widgets and content.</div>
    </div>
</div>
```

## Empty

By default, when adding `image-card` class and inside the element that contains `image-card`, exists a `aspect-ratio` class. A transparent background will be setted.

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-type-asset image-card">
            <div class="aspect-ratio card-item-first">
                <span class="sticker sticker-bottom-left sticker-info">PNG</span>
            </div>
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col autofit-col-expand">
                        <section class="autofit-section">
                            <h3 class="card-title" title="empty-background.png">
                                <span class="text-truncate-inline">
                                    <a class="text-truncate" href="#1">empty-background.png</a>
                                </span>
                            </h3>
                            <p class="card-subtitle" title="Author Action">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate">Author Action</span>
                                </span>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-type-asset image-card">
    <div class="aspect-ratio card-item-first">
        <span class="sticker sticker-bottom-left sticker-info">PNG</span>
    </div>
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <h3 class="card-title" title="empty-background.png">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">empty-background.png</a>
                        </span>
                    </h3>
                    <p class="card-subtitle" title="Author Action">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Author Action</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
```

# Helpers

## Checkbox

To make the whole card clickable just wrap the checkbox and card in:

```html
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="checkbox">
        <div class="card">...</div>
    </label>
</div>
```

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card-type-asset form-check form-check-card form-check-top-left image-card">
                <div class="card">
                    <div class="aspect-ratio card-item-first">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox">
                            <span class="sticker sticker-bottom-left sticker-danger">JPG</span>
                        </label>
                    </div>
                    <div class="card-body">
                        <div class="card-row">
                            <div class="autofit-col autofit-col-expand">
                                <section class="autofit-section">
                                    <h3 class="card-title">
                                        <span class="text-truncate-inline">
                                            <span class="text-truncate">Aldcott Gage George Polwarth-Kitchener</span>
                                        </span>
                                    </h3>
                                    <p class="card-subtitle" title="empty.jpg">
                                        <span class="text-truncate-inline">
                                            <a class="text-truncate">empty.jpg</a>
                                        </span>
                                    </p>
                                    <div class="card-detail">
                                        <span class="label label-success">
                                            <span class="label-item label-item-expand">Approved</span>
                                        </span>
                                    </div>
                                </section>
                            </div>
                            <div class="autofit-col">
                                <div class="dropdown dropdown-action">
                                    <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                        </svg>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a class="dropdown-item" href="#1">Download</a></li>
                                        <li><a class="dropdown-item" href="#1">Edit</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card-type-directory form-check form-check-card form-check-middle-left">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox">
                    <div class="card card-horizontal">
                        <div class="card-body">
                            <div class="card-row">
                                <div class="autofit-col">
                                    <span class="sticker">
                                            <span class="inline-item">
                                                <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                                    <use href="/images/icons/icons.svg#folder"></use>
                                                </svg>
                                            </span>
                                    </span>
                                </div>
                                <div class="autofit-col autofit-col-expand autofit-col-gutters">
                                    <section class="autofit-section">
                                        <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                                                <span class="text-truncate-inline">
                                                    <span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                                                </span>
                                            </h3>
                                    </section>
                                </div>
                                <div class="autofit-col">
                                    <div class="dropdown dropdown-action">
                                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                            </svg>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="dropdown-item" href="#1">Download</a></li>
                                            <li><a class="dropdown-item" href="#1">Edit</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>
</div>

```html
<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
    <div class="card">
        <div class="aspect-ratio card-item-first">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox">
                <span class="sticker sticker-bottom-left sticker-danger">JPG</span>
            </label>
        </div>
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        <h3 class="card-title">
                            <span class="text-truncate-inline">
                                <span class="text-truncate">Aldcott Gage George Polwarth-Kitchener</span>
                            </span>
                        </h3>
                        <p class="card-subtitle" title="empty.jpg">
                            <span class="text-truncate-inline">
                                <a class="text-truncate">empty.jpg</a>
                            </span>
                        </p>
                        <div class="card-detail">
                            <span class="label label-success">
                                <span class="label-item label-item-expand">Approved</span>
                            </span>
                        </div>
                    </section>
                </div>
                <div class="autofit-col">
                    <div class="dropdown dropdown-action">
                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a class="dropdown-item" href="#1">Download</a></li>
                            <li><a class="dropdown-item" href="#1">Edit</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="card-type-directory form-check form-check-card form-check-middle-left">
    <label class="form-check-label">
        <input class="form-check-input" type="checkbox">
        <div class="card card-horizontal">
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col">
                        <span class="sticker">
                            <span class="inline-item">
                                <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#folder"></use>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div class="autofit-col autofit-col-expand autofit-col-gutters">
                        <section class="autofit-section">
                            <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                                </span>
                            </h3>
                        </section>
                    </div>
                    <div class="autofit-col">
                        <div class="dropdown dropdown-action">
                            <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Download</a></li>
                                <li><a class="dropdown-item" href="#1">Edit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </label>
</div>
```


## Radio

To make the whole card clickable just wrap the radio input and card in:

```html
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="radio">
        <div class="card">...</div>
    </label>
</div>
```

<div class="sheet-example">
    <div class="row">
        <div class="col-md-4">
            <div class="card-type-asset form-check form-check-card form-check-top-left image-card">
                <label class="form-check-label">
                    <input class="form-check-input" name="cardRadios" type="radio" value="cardOption1">
                    <div class="card">
                        <div class="aspect-ratio card-item-first">
                            <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
                            <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
                        </div>
                        <div class="card-body">
                            <div class="card-row">
                                <div class="autofit-col autofit-col-expand">
                                    <section class="autofit-section">
                                        <h3 class="card-title">
                                            <span class="text-truncate-inline">
                                                <span class="text-truncate">Aldcott Gage George Polwarth-Kitchener</span>
                                            </span>
                                        </h3>
                                        <p class="card-subtitle" title="thumbnail_dock.jpg">
                                            <span class="text-truncate-inline">
                                                <a class="text-truncate" href="#1">thumbnail_dock.jpg</a>
                                            </span>
                                        </p>
                                        <div class="card-detail">
                                            <span class="label label-success">
                                                <span class="label-item label-item-expand">Approved</span>
                                            </span>
                                        </div>
                                    </section>
                                </div>
                                <div class="autofit-col">
                                    <div class="dropdown dropdown-action">
                                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                            </svg>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="dropdown-item" href="#1">Download</a></li>
                                            <li><a class="dropdown-item" href="#1">Edit</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card-type-directory form-check form-check-card form-check-middle-left">
                <label class="form-check-label">
                    <input class="form-check-input" name="cardRadios" type="radio" value="cardOption2">
                    <div class="card card-horizontal">
                        <div class="card-body">
                            <div class="card-row">
                                <div class="autofit-col">
                                    <span class="sticker">
                                        <span class="inline-item">
                                            <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                                <use href="/images/icons/icons.svg#folder"></use>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div class="autofit-col autofit-col-expand autofit-col-gutters">
                                    <section class="autofit-section">
                                        <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                                            <span class="text-truncate-inline">
                                                <span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                                            </span>
                                        </h3>
                                    </section>
                                </div>
                                <div class="autofit-col">
                                    <div class="dropdown dropdown-action">
                                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                            </svg>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="dropdown-item" href="#1">Download</a></li>
                                            <li><a class="dropdown-item" href="#1">Edit</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>
</div>

```html
<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
    <label class="form-check-label">
        <input class="form-check-input" name="cardRadios" type="radio" value="cardOption1">
        <div class="card">
            <div class="aspect-ratio card-item-first">
                <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
                <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
            </div>
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col autofit-col-expand">
                        <section class="autofit-section">
                            <h3 class="card-title">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate">Aldcott Gage George Polwarth-Kitchener</span>
                                </span>
                            </h3>
                            <p class="card-subtitle" title="thumbnail_dock.jpg">
                                <span class="text-truncate-inline">
                                    <a class="text-truncate" href="#1">thumbnail_dock.jpg</a>
                                </span>
                            </p>
                            <div class="card-detail">
                                <span class="label label-success">
                                    <span class="label-item label-item-expand">Approved</span>
                                </span>
                            </div>
                        </section>
                    </div>
                    <div class="autofit-col">
                        <div class="dropdown dropdown-action">
                            <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Download</a></li>
                                <li><a class="dropdown-item" href="#1">Edit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </label>
</div>
<div class="card-type-directory form-check form-check-card form-check-middle-left">
    <label class="form-check-label">
        <input class="form-check-input" name="cardRadios" type="radio" value="cardOption2">
        <div class="card card-horizontal">
            <div class="card-body">
                <div class="card-row">
                    <div class="autofit-col">
                        <span class="sticker">
                            <span class="inline-item">
                                <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#folder"></use>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div class="autofit-col autofit-col-expand autofit-col-gutters">
                        <section class="autofit-section">
                            <h3 class="card-title" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                                </span>
                            </h3>
                        </section>
                    </div>
                    <div class="autofit-col">
                        <div class="dropdown dropdown-action">
                            <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Download</a></li>
                                <li><a class="dropdown-item" href="#1">Edit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </label>
</div>
```

## Horizontal Card with autofit-col-*

Use `card-row` with `autofit-col-expand` and `autofit-col` to create a number of custom horizontal cards. `autofit-col-expand` fills the remaining space and `autofit-col` is only as wide as its content inside.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col" style="background-color:aliceblue;">
                    <span class="sticker">
                        <span class="inline-item">
                            <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#folder"></use>
                            </svg>
                        </span>
                    </span>
                </div>
                <div class="autofit-col autofit-col-expand autofit-col-gutters" style="background-color:antiquewhite;">
                    <section class="autofit-section">
                        <span>Fills remaining space.</span>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col" style="background-color:aliceblue;">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder"></use>
                        </svg>
                    </span>
                </span>
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters" style="background-color:antiquewhite;">
                <section class="autofit-section">
                    <span>Fills remaining space.</span>
                </section>
            </div>
        </div>
    </div>
</div>
```

Two `.autofit-col`'s no `.autofit-col-expand`.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col" style="background-color:aliceblue;">
                    <span class="sticker">
                        <span class="inline-item">
                            <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#folder"></use>
                            </svg>
                        </span>
                    </span>
                </div>
                <div class="autofit-col autofit-col-gutters" style="background-color:antiquewhite;">
                    <span>Only as wide as this text.</span>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col" style="background-color:aliceblue;">
                <span class="sticker">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder"></use>
                        </svg>
                    </span>
                </span>
            </div>
            <div class="autofit-col autofit-col-gutters" style="background-color:antiquewhite;">
                <span>Only as wide as this text.</span>
            </div>
        </div>
    </div>
</div>
```

Two `.autofit-col-expand`'s no `.autofit-col`.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand" style="background-color:aliceblue;">
                    <section class="autofit-section">
                        <span class="sticker">
                            <span class="inline-item">
                                <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#folder"></use>
                                </svg>
                            </span>
                        </span>
                    </section>
                </div>
                <div class="autofit-col autofit-col-expand autofit-col-gutters" style="background-color:antiquewhite;">
                    <section class="autofit-section">
                        <span>This will split the space in half.</span>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col autofit-col-expand" style="background-color:aliceblue;">
                <section class="autofit-section">
                    <span class="sticker">
                        <span class="inline-item">
                            <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#folder"></use>
                            </svg>
                        </span>
                    </span>
                </section>
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters" style="background-color:antiquewhite;">
                <section class="autofit-section">
                    <span>This will split the space in half.</span>
                </section>
            </div>
        </div>
    </div>
</div>
```

## Padded Horizontal Cards

Nest `card-row` in `card-body` on to add some spacing around a horizontal card.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col">
                    <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 121px;">
                </div>
                <div class="autofit-col autofit-col-expand autofit-col-gutters">
                    <section class="autofit-section">
                        <h3 class="card-title">So ristretto cappuccino</h3>
                        <p class="card-text">Wings eu, pumpkin spice robusta.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 121px;">
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters">
                <section class="autofit-section">
                    <h3 class="card-title">So ristretto cappuccino</h3>
                    <p class="card-text">Wings eu, pumpkin spice robusta.</p>
                </section>
            </div>
        </div>
    </div>
</div>
```

## Truncating Text Inside Card

Add class `text-truncate` on whatever text you want to be truncated.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="autofit-col">
                    <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
                </div>
                <div class="autofit-col autofit-col-expand autofit-col-gutters">
                    <section class="autofit-section">
                        <h3 class="card-title">So ristretto cappuccino</h3>
                        <p class="card-text">
                            <span class="text-truncate-inline">
                                <span class="text-truncate">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                            </span>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-body">
        <div class="card-row">
            <div class="autofit-col">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters">
                <section class="autofit-section">
                    <h3 class="card-title">So ristretto cappuccino</h3>
                    <p class="card-text">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                        </span>
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
```

## Card Row Content Alignment Helpers

Vertically align content by setting `justify-content` to `flex-start`, `center`, or `flex-end` on `autofit-col`.

Horizontally align content by setting `text-align` to `left`, `center`, or `right` on `autofit-col`.

You can also use the Bootstrap 4's helper classes `justify-content-start`, `justify-content-center`, or `justify-content-end` on `card-row` to align content in all columns inside the row.

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-horizontal">
            <div class="card-row">
                <div class="justify-content-start autofit-col autofit-col-expand">
                    <section class="autofit-section">top</section>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">middle</section>
                </div>
                <div class="justify-content-end autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        bottom
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-row">
        <div class="justify-content-start autofit-col autofit-col-expand">
            <section class="autofit-section">top</section>
        </div>
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">middle</section>
        </div>
        <div class="justify-content-end autofit-col autofit-col-expand">
            <section class="autofit-section">
                bottom
            </section>
        </div>
    </div>
</div>
```

Add gutters to a specific card card column by using the class `autofit-col-gutters`.

<div class="sheet-example">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="autofit-col">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
            </div>
            <div class="autofit-col autofit-col-expand autofit-col-gutters">
                <section class="autofit-section">
                    <h3 class="card-title">So ristretto cappuccino</h3>
                    <p class="card-text">Wings eu, pumpkin spice robusta.</p>
                </section>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal">
    <div class="card-row">
        <div class="autofit-col">
            <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
        </div>
        <div class="autofit-col autofit-col-expand autofit-col-gutters">
            <section class="autofit-section">
                <h3 class="card-title">So ristretto cappuccino</h3>
                <p class="card-text">Wings eu, pumpkin spice robusta.</p>
            </section>
        </div>
    </div>
</div>
```

### Rounded

Use classes `rounded`, `rounded-circle`, or `rounded-0` on the card to quickly shape the borders.

<div class="sheet-example">
    <div class="col-md-4">
        <div class="card card-horizontal rounded">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        autofit-col-expand
                    </section>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        autofit-col-expand
                    </section>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-horizontal rounded-circle">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand" style="overflow:hidden;">
                    <section class="autofit-section">
                        <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif">
                    </section>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        autofit-col-expand
                    </section>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-horizontal rounded-0">
            <div class="card-row">
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        autofit-col-expand
                    </section>
                </div>
                <div class="autofit-col autofit-col-expand">
                    <section class="autofit-section">
                        autofit-col-expand
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="card card-horizontal rounded">
    <div class="card-row">
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
    </div>
</div>
<div class="card card-horizontal rounded-circle">
    <div class="card-row">
        <div class="autofit-col autofit-col-expand" style="overflow:hidden;">
            <section class="autofit-section">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif">
            </section>
        </div>
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
    </div>
</div>
<div class="card card-horizontal rounded-0">
    <div class="card-row">
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
        <div class="autofit-col autofit-col-expand">
            <section class="autofit-section">
                autofit-col-expand
            </section>
        </div>
    </div>
</div>
```

