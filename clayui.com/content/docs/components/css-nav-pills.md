---
title: 'Nav Pills'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Default](#default)
-   [Justified](#justified)
-   [Overlay](#overlay)
    -   [Breakpoints](#breakpoints)
-   [Only Search](#only-search)
    -   [Always Open](#always-open)
    -   [Collapses in Mobile](#collapses-in-mobile)
-   [Using Buttons](#using-buttons)

</div>
</div>

<div class="clay-site-alert alert alert-warning">This is a component. Navigations share general markup and styles from the .nav class, therefore the components Nav Pills, Nav Tabs, Nav Underline, Menubar, Navbar, Application Bar, Management Bar, and Navigation Bar all use <code class="gatsby-code-text">.nav</code> as its base.</div>

## Default

Add `.nav-pills` to `.nav` to add background colors and border styles.

<div class="sheet-example">
    <ul class="nav nav-pills">
        <li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
        <li class="dropdown nav-item">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1"
                role="button">
                Configuration
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <ul class="dropdown-menu" x-placement="bottom-start"
                style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 41px, 0px);">
                <li><a class="dropdown-item" href="#1">Setup</a></li>
                <li><a class="dropdown-item" href="#1">Supported Clients</a></li>
                <li><a class="dropdown-item" href="#1">Permissions</a></li>
                <li><a class="dropdown-item" href="#1">Sharing</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#1">Scope</a></li>
            </ul>
        </li>
    </ul>
</div>

```html
<ul class="nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle nav-link"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			Configuration
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<ul
			class="dropdown-menu"
			x-placement="bottom-start"
			style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 41px, 0px);"
		>
			<li><a class="dropdown-item" href="#1">Setup</a></li>
			<li><a class="dropdown-item" href="#1">Supported Clients</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Sharing</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</li>
</ul>
```

## Justified

Add `.nav-justified` to make nav-pills equal width relative to its parent container.

<div class="sheet-example">
    <ul class="nav nav-justified nav-pills">
        <li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
        <li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
        <li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
        <li class="dropdown nav-item">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1"
                role="button">
                Configuration
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Setup</a></li>
                <li><a class="dropdown-item" href="#1">Supported Clients</a></li>
                <li><a class="dropdown-item" href="#1">Permissions</a></li>
                <li><a class="dropdown-item" href="#1">Sharing</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#1">Scope</a></li>
            </ul>
        </li>
    </ul>
</div>

```html
<ul class="nav nav-justified nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item">
		<a class="disabled nav-link" href="#1">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle nav-link"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			Configuration
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<ul class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Setup</a></li>
			<li><a class="dropdown-item" href="#1">Supported Clients</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Sharing</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</li>
</ul>
```

## Vertical Nav Pills

<div class="sheet-example">
    <ul class="flex-column nav nav-pills">
        <li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
        <li class="nav-item">
            <a class="nav-link" href="#1">
                Fields with Badge
                <span class="badge badge-warning">
                    <span class="badge-item badge-item-expand">2</span>
                </span>
            </a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
        <li class="dropdown nav-item">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1"
                role="button">
                Configuration
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Setup</a></li>
                <li><a class="dropdown-item" href="#1">Supported Clients</a></li>
                <li><a class="dropdown-item" href="#1">Permissions</a></li>
                <li><a class="dropdown-item" href="#1">Sharing</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#1">Scope</a></li>
            </ul>
        </li>
    </ul>
</div>

```html
<ul class="flex-column nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item">
		<a class="nav-link" href="#1">
			Fields with Badge
			<span class="badge badge-warning">
				<span class="badge-item badge-item-expand">2</span>
			</span>
		</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="dropdown nav-item">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle nav-link"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			Configuration
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<ul class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Setup</a></li>
			<li><a class="dropdown-item" href="#1">Supported Clients</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Sharing</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</li>
</ul>
```
