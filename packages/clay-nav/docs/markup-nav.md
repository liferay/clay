---
title: 'Nav'
mainTabURL: 'docs/components/nav.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Nav](#css-nav)
-   [Nav Divider](#css-nav-divider)
-   [Nav Stacked](#css-nav-stacked)
-   [Nav Nested](#css-nav-nested)
-   [Nav Nested Margins](#css-nav-nested-margins)
-   [Nav Unstyled](#css-nav-unstyled)
-   [Helpers](#css-helpers)

</div>
</div>

### Nav(#css-nav)

<div class="clay-site-alert alert alert-warning">This is a component. Navigations share general markup and styles from the .nav class, therefore the components Nav Tabs, Nav Underline, Menubar, Navbar, Application Bar, Management Bar, and Navigation Bar all use <code class="gatsby-code-text">.nav</code> as its base.</div>

`.nav-link` and `.active.nav-link` in the Nav doesn't have any special styling to make it easier to overwrite via color modifiers used in Clay's components above. If you would like to use a custom color scheme for the Nav, create a custom color modifier class and use the `clay-nav-variant($map)` mixin.

<div class="sheet-example">
    <ul class="nav">
        <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
    </ul>
</div>

```html
<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Documents and Media</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

### Nav Divider(#css-nav-divider)

Add the class `nav-divider` on `nav-item` to show a border at the start. The class `nav-divider-end` should be used on `nav-item` to show a border at the end.

<div class="sheet-example">
    <ul class="nav">
        <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
        <li class="nav-item nav-divider nav-divider-end"><a class="nav-link" href="#1">Categorization</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
    </ul>
</div>

### Nav Stacked(#css-nav-stacked)

Use `.nav-stacked` class alongside with `.nav`.

<div class="sheet-example">
    <ul class="nav nav-stacked">
        <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
    </ul>
</div>

```html
<ul class="nav nav-stacked">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Documents and Media</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
</ul>
```

### Nav Nested(#css-nav-nested)

Add class `nav-nested` to the outermost nav to use padding to indent each nested nav.

Also collapsible when used with [Bootstrap Collapse Plugin](https://getbootstrap.com/docs/4.0/components/collapse/).

<div class="sheet-example">
    <ul class="nav nav-nested">
        <li class="nav-item">
            <a aria-controls="navCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse"
                href="#navCollapse01" role="button">
                Basic Information
                <span class="collapse-icon-closed">
                    <svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-right"></use>
                    </svg>
                </span>
                <span class="collapse-icon-open">
                    <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                    </svg>
                </span>
            </a>
            <div class="collapse show" id="navCollapse01">
                <ul class="nav nav-stacked">
                    <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
                    <li class="nav-item">
                        <a aria-controls="navCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link"
                            data-toggle="collapse" href="#navCollapse02" role="button">
                            Documents and Media
                            <span class="collapse-icon-closed">
                                <svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-right"></use>
                                </svg>
                            </span>
                            <span class="collapse-icon-open">
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                                </svg>
                            </span>
                        </a>
                        <div class="collapse" id="navCollapse02">
                            <ul class="nav nav-stacked">
                                <li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Documents and Media</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a aria-controls="navCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link"
                data-toggle="collapse" href="#navCollapse03" role="button">
                SEO
                <span class="collapse-icon-closed">
                    <svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-right"></use>
                    </svg>
                </span>
                <span class="collapse-icon-open">
                    <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                    </svg>
                </span>
            </a>
            <div class="collapse" id="navCollapse03">
                <ul class="nav nav-stacked">
                    <li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a aria-controls="navCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link"
                data-toggle="collapse" href="#navCollapse04" role="button">
                Advanced
                <span class="collapse-icon-closed">
                    <svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-right"></use>
                    </svg>
                </span>
                <span class="collapse-icon-open">
                    <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                    </svg>
                </span>
            </a>
            <div class="collapse" id="navCollapse04">
                <ul class="nav nav-stacked">
                    <li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="nav nav-nested">
	<li class="nav-item">
		<a
			aria-controls="navCollapse01"
			aria-expanded="true"
			class="collapse-icon nav-link"
			data-toggle="collapse"
			href="#navCollapse01"
			role="button"
		>
			Basic Information
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-caret-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</span>
		</a>
		<div class="collapse show" id="navCollapse01">
			<ul class="nav nav-stacked">
				<li class="nav-item">
					<a class="active nav-link" href="#1">Details</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#1">Categorization</a>
				</li>
				<li class="nav-item">
					<a
						aria-controls="navCollapse02"
						aria-expanded="false"
						class="collapsed collapse-icon nav-link"
						data-toggle="collapse"
						href="#navCollapse02"
						role="button"
					>
						Documents and Media
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#caret-right"
								></use>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#caret-bottom"
								></use>
							</svg>
						</span>
					</a>
					<div class="collapse" id="navCollapse02">
						<ul class="nav nav-stacked">
							<li class="nav-item">
								<a class="nav-link" href="#1">Details</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#1">Categorization</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#1"
									>Documents and Media</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#1">Site Template</a>
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#1">Site Template</a>
				</li>
			</ul>
		</div>
	</li>
	<li class="nav-item">
		<a
			aria-controls="navCollapse03"
			aria-expanded="false"
			class="collapsed collapse-icon nav-link"
			data-toggle="collapse"
			href="#navCollapse03"
			role="button"
		>
			SEO
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-caret-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse03">
			<ul class="nav nav-stacked">
				<li class="nav-item">
					<a class="nav-link" href="#1">Sitemap</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#1">Robots</a>
				</li>
			</ul>
		</div>
	</li>
	<li class="nav-item">
		<a
			aria-controls="navCollapse04"
			aria-expanded="false"
			class="collapsed collapse-icon nav-link"
			data-toggle="collapse"
			href="#navCollapse04"
			role="button"
		>
			Advanced
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-caret-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse04">
			<ul class="nav nav-stacked">
				<li class="nav-item">
					<a class="nav-link" href="#1">Default User Associations</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#1">Staging</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#1">Analytics</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
			</ul>
		</div>
	</li>
</ul>
```

### Nav Nested Margins(#css-nav-nested-margins)

The same of [Nav Nested](#nav-nested-margins) but instead of use `nav-nested` class, use `nav-nested-margins`.

### Nav Unstyled(#css-nav-unstyled)

Add `nav-unstyled` to your nav to remove spacing around `nav-link` and `nav-btn`.

<div class="sheet-example">
    <ul class="nav nav-unstyled">
        <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
    </ul>
</div>

```html
<ul class="nav nav-unstyled">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Documents and Media</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

### Helpers(#css-helpers)

Dropdown toggle with anchor: `dropdown-toggle nav-link`.

Dropdown toggle with button: `btn btn-unstyled dropdown-toggle nav-link`.

An anchor in Nav Item styled like btn: `btn btn-primary nav-btn nav-btn-monospaced`.

A button in Nav Item styled like nav-link: `btn btn-unstyled nav-link`.

A button in Nav Item: `btn btn-primary nav-btn`.

A monospaced anchor in Nav Item: `nav-link nav-link-monospaced`.

A monospaced button in Nav Item: `btn btn-primary nav-btn nav-btn-monospaced`.

<div class="sheet-example">
    <ul class="nav">
        <li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
        <li class="nav-item">
            <button class="btn btn-unstyled nav-link" type="button">Details</button>
        </li>
        <li class="nav-item">
            <button class="btn btn-primary nav-btn" type="button">Details</button>
        </li>
        <li class="nav-item">
            <button class="btn btn-link nav-btn" type="button">
                Details
            </button>
        </li>
        <li class="nav-item">
            <button class="btn btn-primary nav-btn nav-btn-monospaced" type="button">De</button>
        </li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Categorization</a></li>
        <li class="dropdown nav-item">
            <button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle nav-link" data-toggle="dropdown" type="button">
                More
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </button>
            <ul aria-labelledby="" class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">App Section 4</a></li>
                <li><a class="dropdown-item" href="#1">App Section 5</a></li>
                <li><a class="dropdown-item" href="#1">App Section 6</a></li>
                <li><a class="dropdown-item" href="#1">App Section 7</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-monospaced" href="#1">
                <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#cog"></use>
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <a class="btn btn-primary nav-btn nav-btn-monospaced" href="#1">
                <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#cog"></use>
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#cog"></use>
                </svg>
            </button>
        </li>
    </ul>
</div>

```html
<ul class="nav">
	<li class="nav-item">
		<a class="active nav-link" href="#1">Basic Information</a>
	</li>
	<li class="nav-item">
		<button class="btn btn-unstyled nav-link" type="button">Details</button>
	</li>
	<li class="nav-item">
		<button class="btn btn-primary nav-btn" type="button">Details</button>
	</li>
	<li class="nav-item">
		<button class="btn btn-link nav-btn" type="button">Details</button>
	</li>
	<li class="nav-item">
		<button
			class="btn btn-primary nav-btn nav-btn-monospaced"
			type="button"
		>
			De
		</button>
	</li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Categorization</a>
	</li>
	<li class="dropdown nav-item">
		<button
			aria-expanded="false"
			aria-haspopup="true"
			class="btn btn-unstyled dropdown-toggle nav-link"
			data-toggle="dropdown"
			type="button"
		>
			More
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</button>
		<ul aria-labelledby="" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">App Section 4</a></li>
			<li><a class="dropdown-item" href="#1">App Section 5</a></li>
			<li><a class="dropdown-item" href="#1">App Section 6</a></li>
			<li><a class="dropdown-item" href="#1">App Section 7</a></li>
		</ul>
	</li>
	<li class="nav-item">
		<a class="nav-link nav-link-monospaced" href="#1">
			<svg
				class="lexicon-icon lexicon-icon-cog"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#cog"></use>
			</svg>
		</a>
	</li>
	<li class="nav-item">
		<a class="btn btn-primary nav-btn nav-btn-monospaced" href="#1">
			<svg
				class="lexicon-icon lexicon-icon-cog"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#cog"></use>
			</svg>
		</a>
	</li>
	<li class="nav-item">
		<button
			class="btn btn-unstyled nav-btn nav-btn-monospaced"
			type="button"
		>
			<svg
				class="lexicon-icon lexicon-icon-cog"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#cog"></use>
			</svg>
		</button>
	</li>
</ul>
```
