---
title: 'Select Box'
description: 'This section demonstrates the different text input types, including usage and validation states.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/dual-listbox/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Utilities](#utilities)
    -   [Buttons on the right](#buttons-on-the-right)
    -   [Buttons in the center](#buttons-in-the-center)

</div>
</div>

# Utilities

<div class="clay-site-alert alert alert-info">
    Add the class <code>clay-reorder-footer-end</code> or <code>clay-reorder-footer-center</code> on <code>clay-reorder</code> to align footer content to the right or center, respectively.
</div>

## Buttons on the right

<div class="sheet-example">
    <div class="clay-reorder clay-reorder-footer-end">
        <select class="form-control form-control-inset" id="_asyupi06i" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <div class="clay-reorder-underlay form-control"></div>
        <div class="clay-reorder-footer">
            <div class="btn-group" role="group">
                <button class="btn btn-monospaced btn-secondary btn-sm" type="button">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#caret-top" />
                        </svg>
                    </span>
                </button>
                <button class="btn btn-monospaced btn-secondary btn-sm" type="button">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#caret-bottom" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

```html
<div class="clay-reorder clay-reorder-footer-end">
	<select class="form-control form-control-inset" id="_asyupi06i" multiple>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
	</select>
	<div class="clay-reorder-underlay form-control"></div>
	<div class="clay-reorder-footer">
		<div class="btn-group" role="group">
			<button
				class="btn btn-monospaced btn-secondary btn-sm"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-caret-top"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#caret-top" />
					</svg>
				</span>
			</button>
			<button
				class="btn btn-monospaced btn-secondary btn-sm"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#caret-bottom"
						/>
					</svg>
				</span>
			</button>
		</div>
	</div>
</div>
```

## Buttons in the center

<div class="sheet-example">
    <div class="clay-reorder clay-reorder-footer-center">
        <select class="form-control form-control-inset" id="_k7bny0crp" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <div class="clay-reorder-underlay form-control"></div>
        <div class="clay-reorder-footer">
            <div class="btn-group" role="group">
                <button
                    class="btn btn-monospaced btn-secondary btn-sm"
                    type="button"
                >
                    <span class="inline-item">
                        <svg
                            class="lexicon-icon lexicon-icon-caret-top"
                            focusable="false"
                            role="presentation"
                        >
                            <use xlink:href="/images/icons/icons.svg#caret-top" />
                        </svg>
                    </span>
                </button>
                <button
                    class="btn btn-monospaced btn-secondary btn-sm"
                    type="button"
                >
                    <span class="inline-item">
                        <svg
                            class="lexicon-icon lexicon-icon-caret-bottom"
                            focusable="false"
                            role="presentation"
                        >
                            <use
                                xlink:href="/images/icons/icons.svg#caret-bottom"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>

```html
<div class="clay-reorder clay-reorder-footer-center">
	<select class="form-control form-control-inset" id="_k7bny0crp" multiple>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
	</select>
	<div class="clay-reorder-underlay form-control"></div>
	<div class="clay-reorder-footer">
		<div class="btn-group" role="group">
			<button
				class="btn btn-monospaced btn-secondary btn-sm"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-caret-top"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#caret-top" />
					</svg>
				</span>
			</button>
			<button
				class="btn btn-monospaced btn-secondary btn-sm"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#caret-bottom"
						/>
					</svg>
				</span>
			</button>
		</div>
	</div>
</div>
```
