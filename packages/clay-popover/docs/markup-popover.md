---
title: 'Popover'
description: 'Popovers contain helpful information such as an explanation of a context.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/popovers-tooltips/'
mainTabURL: 'docs/components/popover.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Position](#css-position)
    -   [Top](#css-top)
    -   [Right](#css-right)
    -   [Bottom](#css-bottom)
    -   [Left](#css-left)
-   [Widths](#css-popover-widths)
    -   [Large](#css-popover-width-large)
    -   [Sass API](#css-popover-width-sass-api)
-   [Variants](#css-popover-variants)
    -   [Secondary](#css-popover-secondary)
    -   [Sass API](#css-popover-variants-sass-api)

</div>
</div>

### Position(#css-position)

#### Top(#css-top)

<div class="sheet-example">
	<div class="clay-site-popover-display">
		<div class="clay-popover-top fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover top</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-top-left fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover top left</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-top-right fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover top right</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-top fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover top</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-top-left fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover top left</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-top-right fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover top right</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

#### Right(#css-right)

<div class="sheet-example">
	<div class="clay-site-popover-display">
		<div class="clay-popover-right fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-right-top fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right top</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-right-bottom fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right bottom</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-right fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-right-top fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right top</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-right-bottom fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right bottom</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

#### Bottom(#css-bottom)

<div class="sheet-example">
	<div class="clay-site-popover-display">
		<div class="clay-popover-bottom fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right bottom</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-bottom-left fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right bottom left</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-bottom-right fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover right bottom right</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-bottom fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right bottom</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-bottom-left fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right bottom left</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-bottom-right fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right bottom right</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

#### Left(#css-left)

<div class="sheet-example">
	<div class="clay-site-popover-display">
		<div class="clay-popover-left fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover left</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-left-top fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover left top</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
		<div class="clay-popover-left-bottom fade popover show">
			<div class="arrow"></div>
			<div class="inline-scroller">
				<div class="popover-header">Popover left bottom</div>
				<div class="popover-body">
					Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-left fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover left</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-left-top fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover left top</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
<div class="clay-popover-left-bottom fade popover show">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover left bottom</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

### Widths(#css-popover-widths)

#### Popover Width Large(#css-popover-width-large)

A wider popover for more content.

<div class="sheet-example">
	<div class="clay-popover-right-top fade popover popover-width-lg show" style="position:relative;">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">
				<div class="autofit-row autofit-row-center">
					<div class="autofit-col autofit-col-expand">
						<div class="autofit-section">Popover Header</div>
					</div>
					<div class="autofit-col">
						<button class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="popover-body">
				Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-right-top fade popover popover-width-lg">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">
			<div class="autofit-row autofit-row-center">
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">Popover Header</div>
				</div>
				<div class="autofit-col">
					<button class="close" type="button">
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use xlink:href="/images/icons/icons.svg#times" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

### Popover Width Sass API(#css-popover-width-sass-api)

The map `$popover-widths` allows generating any number of popover widths. If a key starts with `.`, `#`, or `%` Clay will output it as is, otherwise we will prepend `.` to the key (e.g., `.popover-width-lg`). This doesn't generate a Sass placeholder.

```scss{expanded}
$popover-widths: (
    popover-width-lg: (
        max-width: 421px,
    ),
    '%popover-width-xl': (
        max-width: 560px,
    ),
    '.popover-width-xl': (
        extend: '%popover-width-xl',
    ),
    '.popover-width-xxl': (
        max-width: 1000px,
    ),
);
```

Outputs:

```css{expanded}
.popover-width-xl {
    max-width: 421px;
}

.popover-width-xl {
    max-width: 560px;
}

.popover-width-xxl {
    max-width: 1000px;
}
```

### Variants(#css-popover-variants)

#### Popover Secondary(#css-popover-secondary)

A different style of popover with a blue box shadow and no header divider.

<div class="sheet-example">
	<div class="clay-popover-right-top fade popover popover-secondary popover-width-lg show" style="position:relative;">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">
				<div class="autofit-row autofit-row-center">
					<div class="autofit-col autofit-col-expand">
						<div class="autofit-section">Step 1 of 3: Customize Logo</div>
					</div>
					<div class="autofit-col">
						<button class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="popover-body">
				Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-popover-right-top popover popover-secondary popover-width-lg">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">
			<div class="autofit-row autofit-row-center">
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						Step 1 of 3: Customize Logo
					</div>
				</div>
				<div class="autofit-col">
					<button class="close" type="button">
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use xlink:href="/images/icons/icons.svg#times" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>
```

### Popover Variant Sass API(#css-popover-variants-sass-api)

The map `$popovers` allows generating any number of popover variants. If a key starts with `.`, `#`, or `%` Clay will output it as is, otherwise we will prepend `.` to the key (e.g., `.my-popover-secondary`). This doesn't generate a Sass placeholder.

```scss{expanded}
$popovers: (
    my-popover-secondary: (
        background-color: #eee,
        popover-header: (
            background-color: inherit,
        ),
    ),
    '%popover-dark': (
        background-color: #000,
        color: #fff,
        popover-header: (
            background-color: inherit,
            color: inherit,
        ),
        popover-body: (
            color: inherit,
        ),
    ),
    '.popover-dark': (
        extend: '%popover-dark',
    ),
);
```

Outputs:

```css{expanded}
.my-popover-secondary {
    background-color: #eee;
}

.my-popover-secondary .popover-header {
    background-color: inherit;
}

.popover-dark {
    background-color: #000;
    color: #fff;
}

.popover-dark .popover-header {
    background-color: inherit;
    color: inherit;
}

.popover-dark .popover-body {
    color: inherit;
}
```
