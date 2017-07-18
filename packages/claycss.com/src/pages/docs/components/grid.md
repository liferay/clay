---
title: Grid
description: Components
layout: "guide"
weight: 100
---

<article id="1">

<div class="alert alert-warning clay-site-grid-width">
    <span class="clay-site-grid-width-sm">container-fluid-max-sm: 540px</span>
    <span class="clay-site-grid-width-md">container-fluid-max-md: 720px</span>
    <span class="clay-site-grid-width-lg">container-fluid-max-lg: 960px</span>
    <span class="clay-site-grid-width-xl">container-fluid-max-xl: 1140px</span>
    <span class="clay-site-grid-width-xxl">container-fluid-max-xxl: 1280px</span>
</div>

### Container Fluid

> Use classes `container-fluid-max-sm`, `container-fluid-max-md`, `container-fluid-max-lg`, `container-fluid-max-xl`, and `container-fluid-max-xxl` in conjunction with `container-fluid` to create containers that expand to 100% width, but don't expand beyond a set width e.g 1280px.

<div class="clay-site-container-fluid-switcher">
	<button class="btn btn-info" data-container-classes="container-fluid container-fluid-max-sm content" onclick="clickBtn(this);" type="button">container-fluid-max-sm (540px)</button>
	<button class="btn btn-info" data-container-classes="container-fluid container-fluid-max-md content" onclick="clickBtn(this);" type="button">container-fluid-max-md (720px)</button>
	<button class="btn btn-info" data-container-classes="container-fluid container-fluid-max-lg content" onclick="clickBtn(this);" type="button">container-fluid-max-lg (960px)</button>
	<button class="btn btn-info" data-container-classes="container-fluid container-fluid-max-xl content" onclick="clickBtn(this);" type="button">container-fluid-max-xl (1140px)</button>
	<button class="btn btn-info" data-container-classes="container-fluid container-fluid-max-xxl content" onclick="clickBtn(this);" type="button">container-fluid-max-xxl (1280px)</button>
	<button class="btn btn-info" data-container-classes="content" onclick="clickBtn(this);" type="button">reset</button>
</div>

<script>
{literal}
var clickBtn = function(node) {
    var container = $('.content');
    var data = $(node).data('container-classes');
    container.attr('class', '');
    container.addClass(data);
};
{/literal}
</script>

</article>