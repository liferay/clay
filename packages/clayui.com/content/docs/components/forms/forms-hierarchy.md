---
title: "Forms Hierarchy"
---

### Description

Definition of the content hierarchy inside a form structure and the components used to identify the different content blocks. This page contemplates the visual definition of the hierarchy, the measurements and the definition of the components that establish that hierarchy"

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/formsHierarchy.html">Forms Hierarchy Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="sheet-lg">
<h3 class="component-title">
	<a href="#sheet-lg">Sheet Lg</a>
</h3>

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
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
						<use xlink:href="/images/icons/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse show" id="accordion03CollapseTwo" role="tabpanel">
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

```text/html
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
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
						<use xlink:href="/images/icons/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse show" id="accordion03CollapseTwo" role="tabpanel">
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
```

</article>
