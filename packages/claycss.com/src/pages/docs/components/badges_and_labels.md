---
title: Badges, Labels, and Stickers
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Badges

<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>

```xml
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
```

</article>

<article id="2">

### Badges as Anchor Tags

<a class="badge badge-primary" href="#1">Primary</a>
<a class="badge badge-secondary" href="#1">Secondary</a>
<a class="badge badge-success" href="#1">Success</a>
<a class="badge badge-info" href="#1">Info</a>
<a class="badge badge-warning" href="#1">Warning</a>
<a class="badge badge-danger" href="#1">Danger</a>
<a class="badge badge-light" href="#1">Light</a>
<a class="badge badge-dark" href="#1">Dark</a>

```xml
<a class="badge badge-primary" href="#1">Primary</a>
<a class="badge badge-secondary" href="#1">Secondary</a>
<a class="badge badge-success" href="#1">Success</a>
<a class="badge badge-info" href="#1">Info</a>
<a class="badge badge-warning" href="#1">Warning</a>
<a class="badge badge-danger" href="#1">Danger</a>
<a class="badge badge-light" href="#1">Light</a>
<a class="badge badge-dark" href="#1">Dark</a>
```

</article>

<article id="3">

### Badge Pill

<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-info badge-pill">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-danger badge-pill">Danger</span>
<span class="badge badge-light badge-pill">Light</span>
<span class="badge badge-dark badge-pill">Dark</span>

```xml
<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-info badge-pill">Info</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-danger badge-pill">Danger</span>
<span class="badge badge-light badge-pill">Light</span>
<span class="badge badge-dark badge-pill">Dark</span>
```

</article>

<article id="4">

### Badge Sizes

> Use `badge-sm` and `badge-lg` to change the badge size.

<span class="badge badge-primary badge-sm">Small Badge</span>
<span class="badge badge-secondary">Normal Badge</span>
<span class="badge badge-lg badge-success">Large Badge</span>

```xml
<span class="badge badge-primary badge-sm">Small Badge</span>
<span class="badge badge-secondary">Normal Badge</span>
<span class="badge badge-lg badge-success">Large Badge</span>
```

</article>

<article id="5">

### Badges with Links

<span class="badge badge-primary badge-sm">
    Small Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="badge badge-secondary">
    Normal Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="badge badge-lg badge-success">
    Large Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>

```xml
<span class="badge badge-primary badge-sm">
    Small Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="badge badge-secondary">
    Normal Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="badge badge-lg badge-success">
    Large Badge
    <a class="badge-link" href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
```

</article>

<article id="6">

### Badge Examples

<ul class="flex-column nav nav-pills">
    <li class="nav-item"><a class="nav-link" href="#1">Inbox <span class="badge badge-primary badge-sm">32</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Sent <span class="badge badge-secondary badge-sm">2</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Drafts <span class="badge badge-sm badge-success">53</span></a></li>
    <li class="nav-item"><a class="active nav-link" href="#1">Spam <span class="badge badge-info badge-sm">12</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Starred <span class="badge badge-sm badge-warning">1</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Important <span class="badge badge-danger badge-sm">12</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">All Mail <span class="badge badge-light badge-sm">1</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Trash <span class="badge badge-dark badge-sm">12</span></a></li>
</ul>

```xml
<ul class="flex-column nav nav-pills">
    <li class="nav-item"><a class="nav-link" href="#1">Inbox <span class="badge badge-primary badge-sm">32</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Sent <span class="badge badge-secondary badge-sm">2</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Drafts <span class="badge badge-sm badge-success">53</span></a></li>
    <li class="nav-item"><a class="active nav-link" href="#1">Spam <span class="badge badge-info badge-sm">12</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Starred <span class="badge badge-sm badge-warning">1</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Important <span class="badge badge-danger badge-sm">12</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">All Mail <span class="badge badge-light badge-sm">1</span></a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Trash <span class="badge badge-dark badge-sm">12</span></a></li>
</ul>
```

</article>

<article id="7">

### Labels as an Anchor Tag

<a class="label label-primary" href="#1">Primary</a>
<a class="label label-secondary" href="#1">Secondary</a>
<a class="label label-success" href="#1">Success</a>
<a class="label label-info" href="#1">Info</a>
<a class="label label-warning" href="#1">Warning</a>
<a class="label label-danger" href="#1">Danger</a>
<a class="label label-light" href="#1">Light</a>
<a class="label label-dark" href="#1">Dark</a>

```xml
<a class="label label-primary" href="#1">Primary</a>
<a class="label label-secondary" href="#1">Secondary</a>
<a class="label label-success" href="#1">Success</a>
<a class="label label-info" href="#1">Info</a>
<a class="label label-warning" href="#1">Warning</a>
<a class="label label-danger" href="#1">Danger</a>
<a class="label label-light" href="#1">Light</a>
<a class="label label-dark" href="#1">Dark</a>
```

</article>

<article id="8">

### Label Sizes

> Use `label-sm` and `label-lg` to change the label size.

<span class="label label-primary label-sm">Small Label</span>
<span class="label label-secondary">Normal Label</span>
<span class="label label-lg label-success">Large Label</span>

```xml
<span class="label label-primary label-sm">Small Label</span>
<span class="label label-secondary">Normal Label</span>
<span class="label label-lg label-success">Large Label</span>
```

</article>

<article id="9">

### Label with Links

<span class="label label-primary label-sm">
    Small Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="label label-secondary">
    Normal Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="label label-lg label-success">
    Large Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>

```xml
<span class="label label-primary label-sm">
    Small Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="label label-secondary">
    Normal Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
<span class="label label-lg label-success">
    Large Label
    <a href="#1">
        <svg class="lexicon-icon">
            <use xlink:href="/vendor/lexicon/icons.svg#times"></use>
        </svg>
    </a>
</span>
```

</article>

<article id="10">

### Sticker

> Stickers are monospaced badges/labels.

<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
<span class="sticker sticker-light">133</span>
<span class="sticker sticker-dark">133</span>

```xml
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
<span class="sticker sticker-light">133</span>
<span class="sticker sticker-dark">133</span>
```

</article>

<article id="11">

### Positional Stickers

> Place them anywhere relative to your container using positional sticker classes `sticker-top-left`, `sticker-bottom-left`, `sticker-top-right`, and `sticker-bottom-right`.

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-danger sticker-top-left">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-bottom-left sticker-danger">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-danger sticker-top-right">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-bottom-right sticker-danger">PDF</span>
    </div>
</div>

```xml
<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-danger sticker-top-left">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-bottom-left sticker-danger">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-danger sticker-top-right">PDF</span>
    </div>
</div>

<div class="col-md-3 col-6">
    <div class="aspect-ratio">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
        <span class="sticker sticker-bottom-right sticker-danger">PDF</span>
    </div>
</div>
```

</article>

<article id="12">

### Sticker Sizes

> Stickers come in 3 different sizes, small, regular and large. Create your own custom size by changing the `width`, `height`, `line-height`, and `font-size`. You can also use the sass monospace mixin to change the width and height e.g. `@include monospace(30px);`.

<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-xl sticker-info">133</span>
<span class="sticker sticker-xxl sticker-warning">133</span>

```xml
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-xl sticker-info">133</span>
<span class="sticker sticker-xxl sticker-warning">133</span>
```
<span class="sticker sticker-secondary sticker-sm">
    <svg class="lexicon-icon lexicon-icon-folder">
        <use xlink:href="/vendor/lexicon/icons.svg#folder" />
    </svg>
</span>
<span class="sticker sticker-danger">
    <svg class="lexicon-icon lexicon-icon-folder">
        <use xlink:href="/vendor/lexicon/icons.svg#folder" />
    </svg>
</span>
<span class="sticker sticker-info sticker-lg">
    <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
    <span class="sticker-overlay">
        <svg class="lexicon-icon lexicon-icon-folder">
            <use xlink:href="/vendor/lexicon/icons.svg#folder" />
        </svg>
    </span>
</span>
<span class="sticker sticker-primary">
    <svg class="lexicon-icon lexicon-icon-format">
        <use xlink:href="/vendor/lexicon/icons.svg#format" />
    </svg>
</span>
<span class="sticker sticker-success">
    <svg class="lexicon-icon lexicon-icon-home">
        <use xlink:href="/vendor/lexicon/icons.svg#home" />
    </svg>
</span>
<span class="sticker sticker-warning">
    <svg class="lexicon-icon lexicon-icon-picture">
        <use xlink:href="/vendor/lexicon/icons.svg#picture" />
    </svg>
</span>

```xml
<span class="sticker sticker-secondary sticker-sm">
    <svg class="lexicon-icon lexicon-icon-folder">
        <use xlink:href="/vendor/lexicon/icons.svg#folder" />
    </svg>
</span>
<span class="sticker sticker-danger">
    <svg class="lexicon-icon lexicon-icon-folder">
        <use xlink:href="/vendor/lexicon/icons.svg#folder" />
    </svg>
</span>
<span class="sticker sticker-info sticker-lg">
    <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
    <span class="sticker-overlay">
        <svg class="lexicon-icon lexicon-icon-folder">
            <use xlink:href="/vendor/lexicon/icons.svg#folder" />
        </svg>
    </span>
</span>
<span class="sticker sticker-primary">
    <svg class="lexicon-icon lexicon-icon-format">
        <use xlink:href="/vendor/lexicon/icons.svg#format" />
    </svg>
</span>
<span class="sticker sticker-success">
    <svg class="lexicon-icon lexicon-icon-home">
        <use xlink:href="/vendor/lexicon/icons.svg#home" />
    </svg>
</span>
<span class="sticker sticker-warning">
    <svg class="lexicon-icon lexicon-icon-picture">
        <use xlink:href="/vendor/lexicon/icons.svg#picture" />
    </svg>
</span>
```

</article>

<article id="13">

### Sticker Outside

> Add class `sticker-outside` in conjunction with sticker positions to position the sticker on the outside corners.

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-left">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-bottom-left sticker-danger sticker-outside">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-right">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-bottom-right sticker-danger sticker-outside">133</span>
    </button>
</div>

```xml
<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-left">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-bottom-left sticker-danger sticker-outside">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-right">133</span>
    </button>
</div>

<div class="col-md-3 col-6">
    <button class="btn btn-primary" style="position:relative;">
        Email
        <span class="rounded-circle sticker sticker-bottom-right sticker-danger sticker-outside">133</span>
    </button>
</div>
```

</article>

<article id="14">

### Stickers as Avatars (User Icon Replacement)

<div class="col-md-6">
    <span class="rounded-circle sticker sticker-secondary sticker-sm">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_dock.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coyote.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-lg">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-xl">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
        <span class="sticker-overlay">
            TT
        </span>
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-xxl">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_typewriter.jpg">
    </span>
</div>
<div class="col-md-6">
    <span class="rounded-circle sticker sticker-secondary sticker-sm">
        JB
    </span>
    <span class="rounded-circle sticker sticker-danger">
        TT
    </span>
    <span class="rounded-circle sticker sticker-info sticker-lg">
        SP
    </span>
    <span class="rounded-circle sticker sticker-primary sticker-xl">
        WW
    </span>
    <span class="rounded-circle sticker sticker-success sticker-xxl">
        TT
    </span>
</div>

```xml
<div class="col-md-6">
    <span class="rounded-circle sticker sticker-secondary sticker-sm">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_dock.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coyote.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-lg">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-xl">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
        <span class="sticker-overlay">
            TT
        </span>
    </span>
    <span class="rounded-circle sticker sticker-secondary sticker-xxl">
        <img alt="thumbnail" class="img-fluid" src="/images/thumbnail_typewriter.jpg">
    </span>
</div>
<div class="col-md-6">
    <span class="rounded-circle sticker sticker-secondary sticker-sm">
        JB
    </span>
    <span class="rounded-circle sticker sticker-danger">
        TT
    </span>
    <span class="rounded-circle sticker sticker-info sticker-lg">
        SP
    </span>
    <span class="rounded-circle sticker sticker-primary sticker-xl">
        WW
    </span>
    <span class="rounded-circle sticker sticker-success sticker-xxl">
        TT
    </span>
</div>
```

</article>