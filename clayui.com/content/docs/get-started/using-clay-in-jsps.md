---
title: 'Using Clay in JSPs'
draft: true
order: 6
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Using taglibs](#using-taglibs)
-   [Clay taglibs available](#clay-taglibs-available)

</div>
</div>

## Using taglibs

Add the following snippet into either the JSP file you're using the component in, or in the module's `init.jsp` file:

```jsx
<%@ taglib prefix="clay" uri="http://liferay.com/tld/clay" %>
```

The syntax for using Clay taglibs follows this principle:

```jsx
<clay:componentName backendProperty="<%= Value %>" property="Property Value" />
```

This is how it's supposed to look like with a ClayButton:

```jsx
<clay:button label="<%= Button Label %>" style="primary" />
```

## Clay taglibs available

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
