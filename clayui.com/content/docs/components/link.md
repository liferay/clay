---
title: "Link"
---

Also known as hyperlink, the link is a clickable (text or image) element used for navigation purposes.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/link.html">Link Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

## Types

### Inline Link

This is an <a aria-label="inline link" href="#link-styles">inline link</a> example.

```soy
{call ClayLink}
    {param ariaLabel: 'inline link'}
    {param href: '#link-styles' /}
    {param label: 'inline link' /}
{/call}
```
```html
<clay-link
    ariaLabel="inline link"
    href="#link-styles"
    label="inline link"
></clay-link>
```
```html
This is a <a aria-label="inline link" href="#link-styles">inline link</a> example.
```

### Single Link

#### Default

<h5><a aria-label="Default Link" href="#link-styles">Default</a></h5>

```soy
{call ClayLink}
    {param ariaLabel: 'Default Link' /}
    {param href: '#link-styles' /}
    {param label: 'Default' /}
{/call}
```
```html
<clay-link
    ariaLabel="Default Link"
    href="#link-styles"
    label="Default"
></clay-link>
```
```html
<h5><a aria-label="Default Link" href="#link-styles">Default</a></h5>
```

#### Secondary

<h5><a aria-label="Secondary Link" class="link-secondary" href="#link-styles">Secondary</a></h5>

```soy
{call ClayLink}
    {param ariaLabel: 'Secondary Link' /}
    {param href: '#link-styles' /}
    {param label: 'Secondary' /}
    {param style: 'secondary' /}
{/call}
```
```html
<clay-link
    ariaLabel="Secondary Link"
    href="#link-styles"
    label="Secondary"
    style="secondary"
></clay-link>
```
```html
<h5><a aria-label="Secondary Link" class="link-secondary" href="#link-styles">Secondary</a></h5>
```

#### Title Link

<h5><a aria-label="Title Link" class="component-title link-secondary" href="#title-link">Title</a></h5>

```soy
{call ClayLink}
    {param elementClasses: 'component-title' /}
    {param href: '#link-styles' /}
    {param label: 'Title' /}
    {param style: 'secondary' /}
{/call}
```
```html
<clay-link
    ariaLabel="Title Link"
    elementClasses="component-title"
    href="#link-styles"
    label="Title"
    style="secondary"
></clay-link>
```
```html
<h5><a aria-label="Title Link" class="component-title link-secondary" href="#title-link" title="Title">Title</a></h5>
```

#### External Link

<h5><a aria-label="External Link" class="link-secondary" href="#link-styles" title="External Link">External Link</a></h5>

```soy
{call ClayLink}
    {param ariaLabel: 'External Link' /}
    {param href: '#link-styles' /}
    {param label: 'External Link' /}
    {param style: 'secondary' /}
    {param title: 'External Link' /}
{/call}
```
```html
<clay-link
    aria-label="External Link"
    buttonStyle="link"
    href="#link-styles"
    label="Title"
    style="secondary"
    title="External Link"
></clay-link>
```
```html
<h5><a aria-label="External Link" class="link-secondary" href="#link-styles" title="External Link">External Link</a></h5>
```

## API

<div>
    [APITable "clay-link/src/ClayLink.js"]
</div>

