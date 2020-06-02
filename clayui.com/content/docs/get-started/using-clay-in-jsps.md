---
title: 'Using Clay in JSPs'
order: 6
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Setting up your module](#setting-up-your-module)
-   [Using Clay taglib in your JSPs](#using-clay-taglib-in-your-jsps)
-   [Clay components available in JSPs](#clay-components-available-in-jsps)

</div>
</div>

Clay in combination with DXP provides a set of tags for creating Clay components in your JSP files.

## Setting up your module

To use Clay components in your JSP apps, add the following to your module:

### Gradle

Add the following snippet into your module's `build.gradle` file:

```jsx
compileOnly project(":apps:frontend-taglib:frontend-taglib-clay")
```

### JSP

Add the following snippet into either the JSP file you're using the component in, or in the module's `init.jsp` file:

```jsx
<%@ taglib prefix="clay" uri="http://liferay.com/tld/clay" %>
```

## Using Clay taglib in your JSPs

The syntax for using Clay taglibs follows this principle:

```jsx
<clay:componentName backendProperty="<%= Value %>" property="Property Value" />
```

This is how it's supposed to look like with a ClayButton:

```jsx
<clay:button label="<%= Button Label %>" style="primary" />
```

## Clay components available in JSPs

Clay taglibs provide the following UI components for your apps:

-   [Alert](/docs/components/alert.html)
-   [Badge](/docs/components/badge.html)
-   [Button](/docs/components/button.html)
-   [Card](/docs/components/card.html)
-   [Checkbox](/docs/components/checkbox.html)
-   [Dropdown](/docs/components/drop-down.html)
-   [Form Elements](/docs/components/form.html)
-   [Icon](/docs/components/icon.html)
-   [Label](/docs/components/label.html)
-   [Layout Elements](/docs/components/layout.html)
-   [Link](/docs/components/link.html)
-   [Management Toolbar](/docs/components/management-toolbar.html)
-   [Multi Select](/docs/components/multi-select.html)
-   [Navigation Bar](/docs/components/navigation-bar.html)
-   [Progress Bar](/docs/components/progress-bar.html)
-   [Radio](/docs/components/radio.html)
-   [Select](/docs/components/select.html)
-   [Sticker](/docs/components/sticker.html)
-   [Table](/docs/components/table.html)
