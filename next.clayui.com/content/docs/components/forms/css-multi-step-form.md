---
title: 'Multi Step Form'
description: 'A multi step form, also known as a wizard, is a determinate progress bar used in long processes that divides the main task into subtasks. The wizard lets the user quickly identify their current progress in completing the task and navigate forwards and backwards between steps if needed.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [Fixed width items](#fixed-width-items)
-   [Title](#title)
-   [Buttons](#buttons)
-   [Simplified](#simplified)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/multi-step-form/">Multi Step Form Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

## Example

<div class="sheet-example">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<div class="multi-step-indicator-label">Step 05</div>
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a class="active complete dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check"></use>
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check"></use>
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check"></use>
							</svg>
						</span>
					</a>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check"></use>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```html
<ol
	class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top"
>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="dropdown multi-step-indicator">
			<div class="multi-step-indicator-label">Step 05</div>
			<a
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle multi-step-icon"
				data-toggle="dropdown"
				href="#1"
				role="button"
			>
				<svg
					class="lexicon-icon lexicon-icon-ellipsis-h"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<div class="dropdown-menu dropdown-menu-indicator-end">
				<a class="active complete dropdown-item" href="#1">
					5. Step Five
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg
							class="lexicon-icon lexicon-icon-check"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					6. Step Six
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg
							class="lexicon-icon lexicon-icon-check"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					7. Step Seven
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg
							class="lexicon-icon lexicon-icon-check"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
				<a class="dropdown-item" href="#1">
					8. Step Eight
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg
							class="lexicon-icon lexicon-icon-check"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
			</div>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
		</div>
	</li>
</ol>
```

## Fixed width items

To set the fixed width between items so they are not dynamic by adding the `.multi-step-item-fixed-width` class.

<div class="sheet-example">
	<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Submit Payment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">05</div>
				<a class="multi-step-icon" data-multi-step-icon="5" href="#1" tabindex="-1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<a class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```html
<ol
	class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width"
>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Submit Payment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<a
				class="multi-step-icon"
				data-multi-step-icon="5"
				href="#1"
				tabindex="-1"
			></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<a class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
		</div>
	</li>
</ol>
```

## Title

Add the title in the multi step item to provide more context by adding `.multi-step-title` wrapped with the text.

```html
<div class="multi-step-title">Ticket Buyer Information</div>
```

<div class="sheet-example">
	<ol class="multi-step-nav multi-step-indicator-label-bottom">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```html
<ol class="multi-step-nav multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
</ol>
```

## Buttons

You may want to control the click of the icon to do some manipulation so you can replace `<a class="multi-step-icon" />` with a `<button class="multi-step-icon" />`.

<div class="sheet-example">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="1" type="button"></button>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="2" type="button"></button>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="3" type="button"></button>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="4" type="button"></button>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<div class="multi-step-indicator-label">Step 05</div>
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle multi-step-icon" data-toggle="dropdown" type="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-h"></use>
					</svg>
				</button>
				<ul class="dropdown-menu dropdown-menu-indicator-end">
					<li>
						<button class="active btn btn-unstyled complete dropdown-item" type="button">
							5. Step Five
						</button>
					</li>
					<li>
						<button class="complete btn btn-unstyled dropdown-item" type="button">
							6. Step Six
						</button>
					</li>
					<li>
						<button class="complete btn btn-unstyled dropdown-item" type="button">
							7. Step Seven
						</button>
					</li>
					<li>
						<button class="btn btn-unstyled dropdown-item" type="button">
							8. Step Eight
						</button>
					</li>
				</ul>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="9" disabled="" type="button"></button>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<button class="btn btn-unstyled multi-step-icon" data-multi-step-icon="10" type="button"></button>
			</div>
		</li>
	</ol>
</div>

```html
<ol
	class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top"
>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="1"
				type="button"
			></button>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="2"
				type="button"
			></button>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="3"
				type="button"
			></button>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="4"
				type="button"
			></button>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="dropdown multi-step-indicator">
			<div class="multi-step-indicator-label">Step 05</div>
			<button
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-unstyled dropdown-toggle multi-step-icon"
				data-toggle="dropdown"
				type="button"
			>
				<svg
					class="lexicon-icon lexicon-icon-ellipsis-h"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#ellipsis-h"></use>
				</svg>
			</button>
			<ul class="dropdown-menu dropdown-menu-indicator-end">
				<li>
					<button
						class="active btn btn-unstyled complete dropdown-item"
						type="button"
					>
						5. Step Five
					</button>
				</li>
				<li>
					<button
						class="complete btn btn-unstyled dropdown-item"
						type="button"
					>
						6. Step Six
					</button>
				</li>
				<li>
					<button
						class="complete btn btn-unstyled dropdown-item"
						type="button"
					>
						7. Step Seven
					</button>
				</li>
				<li>
					<button
						class="btn btn-unstyled dropdown-item"
						type="button"
					>
						8. Step Eight
					</button>
				</li>
			</ul>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="9"
				disabled=""
				type="button"
			></button>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<button
				class="btn btn-unstyled multi-step-icon"
				data-multi-step-icon="10"
				type="button"
			></button>
		</div>
	</li>
</ol>
```

## Simplified

Multi step form simplified is a more lightweight version of the multi step form. Rather than provide a complete interactive wizard display as the multi step form does, multi step form simplified simply displays text that indicates the users progress in completing the main task, guiding the user through a task divided in several steps in a light way.

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/multi-step-form-simplified/">Multi Step Form Simplified
 Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="sheet-example">
	<div class="tbar subnav-tbar subnav-tbar-light">
		<div class="container-fluid container-fluid-max-xl">
			<div class="tbar-nav">
				<div class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-text text-truncate-inline">
							<span class="text-truncate">User Information</span>
						</span>
					</div>
				</div>
				<div class="tbar-item">
					<span class="component-text">Step 1 of 2</span>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="tbar subnav-tbar subnav-tbar-light">
	<div class="container-fluid container-fluid-max-xl">
		<div class="tbar-nav">
			<div class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate">User Information</span>
					</span>
				</div>
			</div>
			<div class="tbar-item">
				<span class="component-text">Step 1 of 2</span>
			</div>
		</div>
	</div>
</div>
```
