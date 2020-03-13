---
title: 'C Focus Inset'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Examples](#examples)
    -   [Button](#button)
    -   [Link](#link)
    -   [Form](#form-control)

</div>
</div>

A bailout utility to set the focus border inside the element, just add the class `c-focus-inset`.

## Examples

### Button

<button class="btn btn-primary c-focus-inset" type="button">Primary</button>
<button class="btn btn-secondary c-focus-inset" type="button">Secondary</button>
<button class="btn btn-info c-focus-inset" type="button">Info</button>
<button class="btn btn-success c-focus-inset" type="button">Success</button>
<button class="btn btn-warning c-focus-inset" type="button">Warning</button>
<button class="btn btn-danger c-focus-inset" type="button">Danger</button>
<button class="btn btn-light c-focus-inset" type="button">Light</button>
<button class="btn btn-dark c-focus-inset" type="button">Dark</button>
<button class="btn btn-link c-focus-inset" type="button">Link</button>
<button class="btn btn-unstyled c-focus-inset" type="button">Unstyled</button>

```html
<button class="btn btn-primary c-focus-inset" type="button">Primary</button>
```

### Link

<div><a class="c-focus-inset" href="javascript:;">Regular Anchor Tag</a></div>
<div><a class="c-focus-inset link-primary single-link" href="javascript:;">.link-primary.single-link</a></div>
<h4 class="component-title"><a class="c-focus-inset" href="javascript:;">.component-title a</a></h4>
<a class="component-title c-focus-inset" href="javascript:;">a.component-title</a>
<p class="component-subtitle"><a class="c-focus-inset" href="javascript:;">.component-subtitle a</a></p>
<a class="component-subtitle c-focus-inset" href="javascript:;">a.component-subtitle</a>

```html
<a class="c-focus-inset" href="javascript:;">Regular Anchor Tag</a>
```

### Form Control

<div class="sheet">
    <div class="form-group">
        <label for="basicInputTypeText">
            Text
            <span class="reference-mark">
                <svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
                    <use xlink:href="{{rootPath}}/images/icons/icons.svg#asterisk" />
                </svg>
            </span>
        </label>
        <input class="c-focus-inset form-control" id="basicInputTypeText" name="basicInputTypeText" placeholder="Placeholder" type="text" />
    </div>
    <div class="form-group">
        <label for="basicInputTypePassword">Password</label>
        <input class="c-focus-inset form-control" id="basicInputTypePassword" name="basicInputTypePassword" placeholder="Enter password" type="password" />
    </div>
    <div class="form-group">
        <label for="basicInputTypeTextarea">Textarea</label>
        <textarea class="c-focus-inset form-control" id="basicInputTypeTextarea" name="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
    </div>
</div>

```html
<input class="c-focus-inset form-control" id="basicInputTypeText" name="basicInputTypeText" placeholder="Placeholder" type="text" />
```
