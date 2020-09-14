---
title: 'Timelines'
description: 'Timelines represent an horizontal visualization of events along the time.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/timelines/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Default](#css-default)
-   [Variations](#css-variations)
    -   [Increment with Text](#css-increment-with-text)
    -   [Right](#css-right)
    -   [Center](#css-center)
    -   [Even](#css-even)
    -   [Odd](#css-odd)
    -   [Timeline Right XS Only](#css-timeline-right-xs-only)
-   [Spacing](#css-spacing)

</div>
</div>

Place `.timeline-increment` inside whatever element you want it to be aligned to. The element must be positioned relative. For the example below, we place it inside the `panel-heading` element. This vertically centers the icon and label relative to the panel-heading.

The icon can be any size as long as it is wrapped inside `timeline-increment`. For larger icons, the spacing between the content and increment ([Timeline Spacing](#spacing)) must be adjusted to accomodate it.

## Default(#css-default)

<div class="sheet-example">
    <ul class="timeline">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <a aria-controls="panelCcollapse000" aria-expanded="false" class="collapsed panel-header panel-header-link" data-toggle="collapse" href="#panelCollapse000" id="heading000" role="tab">
                    <span class="panel-title">Single Collapsible Panel</span>
                    <div class="timeline-increment">
                        <span class="timeline-icon"></span>
                    </div>
                </a>
                <div aria-labelledby="heading000" class="collapse panel-collapse" id="panelCollapse000" role="tabpanel">
                    <div class="panel-body">
                        In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <a aria-controls="panelCollapse001" aria-expanded="false" class="collapsed panel-header panel-header-link" data-toggle="collapse" href="#panelCollapse001" id="heading001" role="tab">
                    <span class="panel-title">Single Collapsible Panel</span>
                    <div class="timeline-increment">
                        <span class="timeline-icon"></span>
                    </div>
                </a>
                <div aria-labelledby="heading001" class="collapse panel-collapse" id="panelCollapse002" role="tabpanel">
                    <div class="panel-body">
                        In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="timeline-increment">
                    <span class="timeline-icon"></span>
                </div>
                <div class="panel-body">The icon can be any size as long as it is wrapped inside timeline-increment. For larger icons, the spacing between the content and label must be adjusted to accomodate it. The spacing can be adjusted by modifying the $timeline-spacing sass variable, or manually overriding in your css.</div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<a
				aria-controls="panelCcollapse000"
				aria-expanded="false"
				class="collapsed panel-header panel-header-link"
				data-toggle="collapse"
				href="#panelCollapse000"
				id="heading000"
				role="tab"
			>
				<span class="panel-title">Single Collapsible Panel</span>
				<div class="timeline-increment">
					<span class="timeline-icon"></span>
				</div>
			</a>
			<div
				aria-labelledby="heading000"
				class="collapse panel-collapse"
				id="panelCollapse000"
				role="tabpanel"
			>
				<div class="panel-body">
					In organic dripper so, body, robust medium pumpkin spice
					cup, in aged dripper latte extra cup white. And viennese
					redeye carajillo, beans, mug viennese, carajillo id breve
					decaffeinated americano crema chicory whipped arabica
					variety aged robusta. Affogato lungo eu, cultivar at, aged
					breve and blue mountain roast breve americano aged. Sugar
					acerbic sweet variety aged café au lait chicory, java,
					single shot percolator aromatic brewed wings, a, sugar,
					body, aftertaste organic barista espresso dripper to go.
					Flavour to go strong steamed mazagran trifecta decaffeinated
					percolator crema, aged americano rich chicory frappuccino
					foam white.
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<a
				aria-controls="panelCollapse001"
				aria-expanded="false"
				class="collapsed panel-header panel-header-link"
				data-toggle="collapse"
				href="#panelCollapse001"
				id="heading001"
				role="tab"
			>
				<span class="panel-title">Single Collapsible Panel</span>
				<div class="timeline-increment">
					<span class="timeline-icon"></span>
				</div>
			</a>
			<div
				aria-labelledby="heading001"
				class="collapse panel-collapse"
				id="panelCollapse002"
				role="tabpanel"
			>
				<div class="panel-body">
					In organic dripper so, body, robust medium pumpkin spice
					cup, in aged dripper latte extra cup white. And viennese
					redeye carajillo, beans, mug viennese, carajillo id breve
					decaffeinated americano crema chicory whipped arabica
					variety aged robusta. Affogato lungo eu, cultivar at, aged
					breve and blue mountain roast breve americano aged. Sugar
					acerbic sweet variety aged café au lait chicory, java,
					single shot percolator aromatic brewed wings, a, sugar,
					body, aftertaste organic barista espresso dripper to go.
					Flavour to go strong steamed mazagran trifecta decaffeinated
					percolator crema, aged americano rich chicory frappuccino
					foam white.
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="timeline-increment">
				<span class="timeline-icon"></span>
			</div>
			<div class="panel-body">
				The icon can be any size as long as it is wrapped inside
				timeline-increment. For larger icons, the spacing between the
				content and label must be adjusted to accomodate it. The spacing
				can be adjusted by modifying the $timeline-spacing sass
				variable, or manually overriding in your css.
			</div>
		</div>
	</li>
</ul>
```

## Variations(#css-variations)

### Increment with Text(#css-increment-with-text)

Place text inside `timeline-increment` by wrapping the text with `<span class="timeline-increment-text"></span>`.

<div class="sheet-example">
    <ul class="timeline">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="timeline-increment">
                    <span class="timeline-increment-text">Jan 1</span>
                </div>
                <div class="panel-body">The icon can be any size as long as it is wrapped inside timeline-increment. For larger icons, the spacing between the content and label must be adjusted to accomodate it. The spacing can be adjusted by modifying the $timeline-spacing sass variable, or manually overriding in your css.</div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="timeline-increment">
                    <span class="timeline-increment-text">Dec 12</span>
                </div>
                <div class="panel-body">The icon can be any size as long as it is wrapped inside timeline-increment. For larger icons, the spacing between the content and label must be adjusted to accomodate it. The spacing can be adjusted by modifying the $timeline-spacing sass variable, or manually overriding in your css.</div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="timeline-increment">
				<span class="timeline-increment-text">Jan 1</span>
			</div>
			<div class="panel-body">
				The icon can be any size as long as it is wrapped inside
				timeline-increment. For larger icons, the spacing between the
				content and label must be adjusted to accomodate it. The spacing
				can be adjusted by modifying the $timeline-spacing sass
				variable, or manually overriding in your css.
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="timeline-increment">
				<span class="timeline-increment-text">Dec 12</span>
			</div>
			<div class="panel-body">
				The icon can be any size as long as it is wrapped inside
				timeline-increment. For larger icons, the spacing between the
				content and label must be adjusted to accomodate it. The spacing
				can be adjusted by modifying the $timeline-spacing sass
				variable, or manually overriding in your css.
			</div>
		</div>
	</li>
</ul>
```

### Right(#css-right)

Align increments to the right with `timeline-right`.

<div class="sheet-example">
    <ul class="timeline timeline-right">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #1
                    <div class="timeline-increment">
                        <svg class="lexicon-icon lexicon-icon-radio-button" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#radio-button"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <svg class="lexicon-icon lexicon-icon-remove-role" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#remove-role"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <svg class="lexicon-icon lexicon-icon-repository" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#repository"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-right">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #1
				<div class="timeline-increment">
					<svg
						class="lexicon-icon lexicon-icon-radio-button"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#radio-button"></use>
					</svg>
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<svg
						class="lexicon-icon lexicon-icon-remove-role"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#remove-role"></use>
					</svg>
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<svg
						class="lexicon-icon lexicon-icon-repository"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#repository"></use>
					</svg>
				</div>
			</div>
		</div>
	</li>
</ul>
```

### Center(#css-center)

Add class `timeline-center` to center your timeline, it displays items on the right by default. To display items on the left, add class `timeline-item-reverse` to a timeline item.

<div class="sheet-example">
    <ul class="timeline timeline-center">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <a aria-controls="panelCollapseTimelineCenter0" aria-expanded="false" class="collapsed panel-header panel-header-link" data-toggle="collapse" href="#panelCollapseTimelineCenter0" id="headingTimelineCenter0" role="tab">
                    <span class="panel-title">Single Collapsible Panel</span>
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </a>
                <div aria-labelledby="headingTimelineCenter0" class="collapse panel-collapse" id="panelCollapseTimelineCenter0" role="tabpanel">
                    <div class="panel-body">
                        In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item timeline-item-reverse">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item timeline-item-reverse">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-center">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<a
				aria-controls="panelCollapseTimelineCenter0"
				aria-expanded="false"
				class="collapsed panel-header panel-header-link"
				data-toggle="collapse"
				href="#panelCollapseTimelineCenter0"
				id="headingTimelineCenter0"
				role="tab"
			>
				<span class="panel-title">Single Collapsible Panel</span>
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</a>
			<div
				aria-labelledby="headingTimelineCenter0"
				class="collapse panel-collapse"
				id="panelCollapseTimelineCenter0"
				role="tabpanel"
			>
				<div class="panel-body">
					In organic dripper so, body, robust medium pumpkin spice
					cup, in aged dripper latte extra cup white. And viennese
					redeye carajillo, beans, mug viennese, carajillo id breve
					decaffeinated americano crema chicory whipped arabica
					variety aged robusta. Affogato lungo eu, cultivar at, aged
					breve and blue mountain roast breve americano aged. Sugar
					acerbic sweet variety aged café au lait chicory, java,
					single shot percolator aromatic brewed wings, a, sugar,
					body, aftertaste organic barista espresso dripper to go.
					Flavour to go strong steamed mazagran trifecta decaffeinated
					percolator crema, aged americano rich chicory frappuccino
					foam white.
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item timeline-item-reverse">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item timeline-item-reverse">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
</ul>
```

### Even(#css-even)

Alternate every other timeline item on the left with class `timeline-even`.

<div class="sheet-example">
    <ul class="timeline timeline-center timeline-even">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #1
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-center timeline-even">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #1
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
</ul>
```

### Odd(#css-odd)

Alternate every other timeline item on the right with class `timeline-odd`.

<div class="sheet-example">
    <ul class="timeline timeline-center timeline-odd">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #1
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-center timeline-odd">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #1
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
</ul>
```

### Timeline Right XS Only(#css-timeline-right-xs-only)

Align timeline to the right at screen widths 767px and below with `timeline-right-xs-only`.

<div class="sheet-example">
    <ul class="timeline timeline-center timeline-even timeline-right-xs-only">
        <li class="timeline-item">
            <div class="panel panel-default">
                <div class="panel-body">
                    Panel Text #1
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">2 hours ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">3 hours ago</div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-center timeline-even timeline-right-xs-only">
	<li class="timeline-item">
		<div class="panel panel-default">
			<div class="panel-body">
				Panel Text #1
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">2 hours ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<div class="sticker sticker-danger sticker-user-icon">
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">3 hours ago</div>
			</div>
		</div>
	</li>
</ul>
```

## Spacing(#css-spacing)

Adjust the spacing around the timeline with `@include timeline-spacing($outer-spacing, $inner-spacing, $item-padding-y)`. The last argument is not required and has a default value of 10px.

`$outer-spacing` sets padding-left on `.timeline` and `padding-right` on `.timeline-right`.

`$inner-spacing` sets the space between the `.timeline-item:before` pseudo element and `.panel` element and is used to calculate the space between the `.timeline-item:before` pseudo element and `.timeline-item-label`.

```scss
.timeline-spacing-xl {
	@include timeline-spacing(25px, 50px);
}
```

<div class="sheet-example">
    <ul class="timeline timeline-center timeline-spacing-xl">
        <li class="timeline-item">
            <div class="panel panel-secondary">
                <a aria-controls="panelCollapseTimelineSpacing0" aria-expanded="false" class="collapsed panel-header panel-header-link" data-toggle="collapse" href="#panelCollapseTimelineSpacing0" id="headingTimelineSpacing0" role="tab">
                    <span class="panel-title">Single Collapsible Panel</span>
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-xl sticker-user-icon">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </a>
                <div aria-labelledby="headingTimelineSpacing0" class="collapse panel-collapse" id="panelCollapseTimelineSpacing0" role="tabpanel">
                    <div class="panel-body">
                        In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
                    </div>
                </div>
            </div>
        </li>
        <li class="timeline-item timeline-item-reverse">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #2
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon sticker-xl">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
        <li class="timeline-item timeline-item-reverse">
            <div class="panel panel-secondary">
                <div class="panel-body">
                    Panel Text #3
                    <div class="timeline-increment">
                        <div class="sticker sticker-danger sticker-user-icon sticker-xl">
                            <span>LR</span>
                        </div>
                    </div>
                    <div class="timeline-item-label">1 hour ago</div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="timeline timeline-center timeline-spacing-xl">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<a
				aria-controls="panelCollapseTimelineSpacing0"
				aria-expanded="false"
				class="collapsed panel-header panel-header-link"
				data-toggle="collapse"
				href="#panelCollapseTimelineSpacing0"
				id="headingTimelineSpacing0"
				role="tab"
			>
				<span class="panel-title">Single Collapsible Panel</span>
				<div class="timeline-increment">
					<div
						class="sticker sticker-danger sticker-xl sticker-user-icon"
					>
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</a>
			<div
				aria-labelledby="headingTimelineSpacing0"
				class="collapse panel-collapse"
				id="panelCollapseTimelineSpacing0"
				role="tabpanel"
			>
				<div class="panel-body">
					In organic dripper so, body, robust medium pumpkin spice
					cup, in aged dripper latte extra cup white. And viennese
					redeye carajillo, beans, mug viennese, carajillo id breve
					decaffeinated americano crema chicory whipped arabica
					variety aged robusta. Affogato lungo eu, cultivar at, aged
					breve and blue mountain roast breve americano aged. Sugar
					acerbic sweet variety aged café au lait chicory, java,
					single shot percolator aromatic brewed wings, a, sugar,
					body, aftertaste organic barista espresso dripper to go.
					Flavour to go strong steamed mazagran trifecta decaffeinated
					percolator crema, aged americano rich chicory frappuccino
					foam white.
				</div>
			</div>
		</div>
	</li>
	<li class="timeline-item timeline-item-reverse">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #2
				<div class="timeline-increment">
					<div
						class="sticker sticker-danger sticker-user-icon sticker-xl"
					>
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
	<li class="timeline-item timeline-item-reverse">
		<div class="panel panel-secondary">
			<div class="panel-body">
				Panel Text #3
				<div class="timeline-increment">
					<div
						class="sticker sticker-danger sticker-user-icon sticker-xl"
					>
						<span>LR</span>
					</div>
				</div>
				<div class="timeline-item-label">1 hour ago</div>
			</div>
		</div>
	</li>
</ul>
```
