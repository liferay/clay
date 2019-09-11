---
title: "Progress Bars"
description: "Progress bar indicates the percentage completed of a task."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Colors](#colors)
    - [Group](#group)
- [Sizes](#sizes)
- [Groups](#groups)
    - [Addon](#addon)
    - [Stacked](#stacked)
- [Multiple Progress Bars](#multiple-progress-bars)
- [Labels](#labels)
- [Striped](#striped)
- [Animated Stripes](#animated-stripes)

</div>
</div>

<div class="clay-site-alert alert alert-info">
    Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/progress-bars/">Progress Bars Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/progress-bars.html">Progress Bars component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/progress-bars/">Progress Bars Pattern</a>.
</div>

## Colors

Add `progress-danger`, `progress-info`, `progress-success`, or `progress-warning` to `progress-group` or `progress` to provide visual feedback for different progress states. Color a block of text or icon by wrapping it with progress-group-feedback.

<div class="clay-site-alert alert alert-warning">
    Using the color classes will set the background-color on progress-bar, no need to use <a alt="Bootstrap 4 background utility classes" href="https://getbootstrap.com/docs/4.3/components/progress/#backgrounds">Bootstrap 4 background utility classes</a>.
</div>

<div class="sheet-example">
    <div class="mb-3 progress">
        <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
	</div>  
    <div class="mb-3 progress progress-success">
        <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
    </div>
    <div class="mb-3 progress progress-info">
        <div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
    </div>
    <div class="mb-3 progress progress-warning">
        <div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
    </div>
    <div class="mb-3 progress progress-danger">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
    </div>
</div>

```html
<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>  
<div class="progress progress-success">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>
<div class="progress progress-info">
    <div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>
<div class="progress progress-warning">
    <div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>
<div class="progress progress-danger">
    <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>
```

### Group

<div class="sheet-example">
    <div class="progress-group">
        <div class="progress">
            <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
        </div>
        <div class="progress-group-addon">60%</div>
    </div>
    <div class="progress-group progress-success">
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
        </div>
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#check-circle" />
                </svg>
            </div>
        </div>
    </div>
    <div class="progress-group progress-info">
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
        </div>
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#info-circle-open" />
                </svg>
            </div>
        </div>
    </div>
    <div class="progress-group progress-warning">
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
        </div>
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-info-exclamation-circle" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#info-exclamation-circle" />
                </svg>
            </div>
        </div>
    </div>
    <div class="progress-danger progress-group">
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
        </div>
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#times-circle" />
                </svg>
            </div>
        </div>
    </div>
</div>

```html
<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>
<div class="progress-group progress-success">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#check-circle" />
            </svg>
        </div>
    </div>
</div>
<div class="progress-group progress-info">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#info-circle-open" />
            </svg>
        </div>
    </div>
</div>
<div class="progress-group progress-warning">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-info-exclamation-circle" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#info-exclamation-circle" />
            </svg>
        </div>
    </div>
</div>
<div class="progress-danger progress-group">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#times-circle" />
            </svg>
        </div>
    </div>
</div>
```

## Sizes

We only set a `height` value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

<div class="sheet-example">
    <div class="progress mb-2">
        <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
    </div>
    <div class="progress-group mb-2">
        <div class="progress">
            <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
        </div>
        <div class="progress-group-addon">60%</div>
    </div>
    <div class="mb-2 progress progress-lg">
        <div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
    </div>
    <div class="mb-2 progress-group progress-lg">
        <div class="progress">
            <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
        </div>
        <div class="progress-group-addon">60%</div>
    </div>
    <div class="progress" style="height: 20px;">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

```html
<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>
<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>
<div class="progress progress-lg">
    <div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>
<div class="progress-group progress-lg">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>
<div class="progress" style="height: 20px;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Groups

### Addon

Place an addon on either side of a progress component with `progress-group` and `progress-group-addon`.

<div class="sheet-example">
    <div class="progress-group">
        <div class="progress">
            <div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
        </div>
        <div class="progress-group-addon">30%</div>
    </div>
    <div class="progress-group progress-warning">
        <div class="progress">
            <div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
        </div>
        <div class="progress-group-addon">70%</div>
    </div>
    <div class="progress-group progress-success">
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
        </div>
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#check-circle" />
                </svg>
            </div>
        </div>
    </div>
    <div class="progress-group">
        <div class="progress-group-addon">
            <div class="progress-group-feedback">
                <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#check-circle" />
                </svg>
            </div>
        </div>
        <div class="progress">
            <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
        </div>
    </div>
</div>

```html
 <div class="progress-group">
    <div class="progress">
        <div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
    </div>
    <div class="progress-group-addon">30%</div>
</div>
<div class="progress-group progress-warning">
    <div class="progress">
        <div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
    </div>
    <div class="progress-group-addon">70%</div>
</div>
<div class="progress-group progress-success">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#check-circle" />
            </svg>
        </div>
    </div>
</div>
<div class="progress-group">
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#check-circle" />
            </svg>
        </div>
    </div>
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
</div>
```

### Stacked

Add `progress-group-stacked` to `progress-group` stack the addons and progress component.

<div class="sheet-example">
    <div class="progress-group progress-group-stacked">
        <div class="progress-group-addon">60% Completed</div>
        <div class="progress">
            <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
        </div>
        <div class="progress-group-addon">
            <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#cog" />
            </svg>
        </div>
    </div>
</div>

```html
<div class="progress-group progress-group-stacked">
    <div class="progress-group-addon">60% Completed</div>
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">
        <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
            <use href="/images/icons/icons.svg#cog" />
        </svg>
    </div>
</div>
```

## Multiple Progress Bars

If you need multiple progress bars, use [Bootstrap 4's background utilities](https://getbootstrap.com/docs/4.3/components/progress/#multiple-bars), `bg-primary`, `bg-success`, `bg-info`, `bg-warning`, and `bg-danger` on `progress-bar`.

<div class="sheet-example">
    <div class="mb-2 progress">
        <div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
        <div class="bg-success progress-bar" style="width: 25%">25%</div>
        <div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
    </div>
    <div class="mb-2 progress">
        <div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
        <div class="bg-info progress-bar" style="width: 50%">50%</div>
    </div>
    <div class="mb-2 progress">
        <div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
        <div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
    </div>
    <div class="mb-2 progress">
        <div class="bg-danger progress-bar" style="width: 45%">45%</div>
        <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
    </div>
    <div class="mb-2 progress">
        <div class="progress-bar" style="width: 10%">10%</div>
        <div class="bg-warning progress-bar" style="width: 10%">10%</div>
        <div class="bg-success progress-bar" style="width: 10%">10%</div>
        <div class="bg-info progress-bar" style="width: 10%">10%</div>
        <div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
        <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
        <div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
    </div>
</div>

```html
<div class="progress">
    <div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
    <div class="bg-success progress-bar" style="width: 25%">25%</div>
    <div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>
<div class="progress">
    <div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
    <div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>
<div class="progress">
    <div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
    <div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>
<div class="progress">
    <div class="bg-danger progress-bar" style="width: 45%">45%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>
<div class="progress">
    <div class="progress-bar" style="width: 10%">10%</div>
    <div class="bg-warning progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar" style="width: 10%">10%</div>
    <div class="bg-info progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
    <div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>
```


## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

<div class="sheet-example">
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
</div>

```html
<div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
```

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.

<div class="sheet-example">
    <div class="mb-2 progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="mb-2 progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="mb-2 progress">
        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="mb-2 progress">
        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="mb-2 progress">
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

```html
<div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Animated Stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

<div class="sheet-example">
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
    </div>
</div>

```html
<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```
