---
title: 'Forms Hierarchy'
description: 'The definition of the content hierarchy inside a form structure and the components used to identify the different content blocks. This page contemplates the visual definition of the hierarchy and the measurements and the definition of the components that establish that hierarchy.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [One column](#one-column)
-   [Two columns](#two-columns)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/forms-hierarchy/">Forms Hierarchy Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">WAI-ARIA</a> accessibility pratices for Forms Hierarchy when writting your markup.
</div>

## Example

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<h3 class="sheet-subtitle">Sheet Subtitle</h3>
			<h3 class="autofit-row sheet-subtitle">
				<span class="autofit-col autofit-col-expand">
					<span class="heading-text">Sheet Subtitle with Button</span>
				</span>
				<span class="autofit-col">
					<span class="heading-end">
						<button class="btn btn-secondary btn-sm" type="button">Add</button>
					</span>
				</span>
			</h3>
			<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>
			<div class="sheet-text">Sheet Subtitle and Sheet Tertiary Title are contained inside a sheet-section.</div>
		</div>
		<div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist">
			<div class="panel">
				<a aria-controls="accordion03CollapseTwo" aria-expanded="true" class="collapse-icon sheet-subtitle" data-toggle="collapse" href="#accordion03CollapseTwo" id="accordion03HeadingTwo" role="tab">
					<span>First Level Collapse 1</span>
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#angle-right"></use>
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#angle-down"></use>
						</svg>
					</span>
				</a>
				<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse show" id="accordion03CollapseTwo" role="tabpanel" style="">
					<div class="panel-body">
						<div class="sheet-text">This is an example of explanatory text.</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sheet-footer">
			<div class="btn-group-item">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<h3 class="sheet-subtitle">Sheet Subtitle</h3>
		<h3 class="autofit-row sheet-subtitle">
			<span class="autofit-col autofit-col-expand">
				<span class="heading-text">Sheet Subtitle with Button</span>
			</span>
			<span class="autofit-col">
				<span class="heading-end">
					<button class="btn btn-secondary btn-sm" type="button">
						Add
					</button>
				</span>
			</span>
		</h3>
		<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>
		<div class="sheet-text">
			Sheet Subtitle and Sheet Tertiary Title are contained inside a
			sheet-section.
		</div>
	</div>
	<div
		aria-orientation="vertical"
		class="panel-group panel-group-flush"
		role="tablist"
	>
		<div class="panel">
			<a
				aria-controls="accordion03CollapseTwo"
				aria-expanded="true"
				class="collapse-icon sheet-subtitle"
				data-toggle="collapse"
				href="#accordion03CollapseTwo"
				id="accordion03HeadingTwo"
				role="tab"
			>
				<span>First Level Collapse 1</span>
				<span class="collapse-icon-closed">
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg
						class="lexicon-icon lexicon-icon-angle-down"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</span>
			</a>
			<div
				aria-labelledby="accordion03HeadingTwo"
				class="panel-collapse collapse show"
				id="accordion03CollapseTwo"
				role="tabpanel"
				style=""
			>
				<div class="panel-body">
					<div class="sheet-text">
						This is an example of explanatory text.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sheet-footer">
		<div class="btn-group-item">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## One column

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<div class="form-group">
				<label for="basicInputTypeText">
					Screen Name
					<span class="reference-mark">
						<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#asterisk"></use>
						</svg>
					</span>
				</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text">
			</div>
			<div class="form-group">
				<label for="basicInputTypeEmail">Email</label>
				<input class="form-control" id="basicInputTypeEmail" type="email">
			</div>
			<div class="form-group">
				<label for="basicInputTypeText">Name</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text">
			</div>
		</div>
		<div class="sheet-footer sheet-footer-btn-block-sm-down">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<div class="form-group">
			<label for="basicInputTypeText">
				Screen Name
				<span class="reference-mark">
					<svg
						class="lexicon-icon lexicon-icon-asterisk"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#asterisk"></use>
					</svg>
				</span>
			</label>
			<input
				class="form-control"
				id="basicInputTypeText"
				placeholder="Placeholder"
				type="text"
			/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeEmail">Email</label>
			<input class="form-control" id="basicInputTypeEmail" type="email" />
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Name</label>
			<input
				class="form-control"
				id="basicInputTypeText"
				placeholder="Name"
				type="text"
			/>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## Two columns

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="basicInputTypeText">
						Screen Name
						<span class="reference-mark">
							<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#asterisk"></use>
							</svg>
						</span>
					</label>
					<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text">
				</div>
				<div class="form-group-item">
					<label for="basicInputTypeText">Birthday</label>
					<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text" value="01/01/1970">
				</div>
			</div>
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="basicInputTypeEmail">Email</label>
					<input class="form-control" id="basicInputTypeEmail" type="email">
				</div>
				<div class="form-group-item">
					<label for="basicInputTypeText">Gender</label>
					<input class="form-control" id="basicInputTypeText" placeholder="Gender" type="text">
				</div>
			</div>
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="basicInputTypeText">Name</label>
					<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text">
				</div>
				<div class="form-group-item">
					<label for="basicInputTypeText">Job Title</label>
					<input class="form-control" id="basicInputTypeText" placeholder="Job Title" type="text">
				</div>
			</div>
		</div>
		<div class="sheet-footer sheet-footer-btn-block-sm-down">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">
					Screen Name
					<span class="reference-mark">
						<svg
							class="lexicon-icon lexicon-icon-asterisk"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#asterisk"></use>
						</svg>
					</span>
				</label>
				<input
					class="form-control"
					id="basicInputTypeText"
					placeholder="Placeholder"
					type="text"
				/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Birthday</label>
				<input
					class="form-control"
					id="basicInputTypeText"
					placeholder="Placeholder"
					type="text"
					value="01/01/1970"
				/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeEmail">Email</label>
				<input
					class="form-control"
					id="basicInputTypeEmail"
					type="email"
				/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Gender</label>
				<input
					class="form-control"
					id="basicInputTypeText"
					placeholder="Gender"
					type="text"
				/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">Name</label>
				<input
					class="form-control"
					id="basicInputTypeText"
					placeholder="Name"
					type="text"
				/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Job Title</label>
				<input
					class="form-control"
					id="basicInputTypeText"
					placeholder="Job Title"
					type="text"
				/>
			</div>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```
