---
title: "Selectors"
---

A form control element used to select from several provided options and enter data.

## Selector

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/selector.html">Selectors Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<div class="sheet">
	<div class="form-group">
		<select class="form-control" id="regularSelectElement">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<select class="form-control" id="regularSelectElement">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

## Multi select

<div class="sheet">
	<div class="form-group">
		<label for="tagsField1">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<input class="form-control-inset" id="tagsField1" type="text"/>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="tagsField2">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wallpaper</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wonderwall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">winterfell</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayMultiSelect.render}
	{param dataSource: [
		'wall',
		'wallpaper',
		'wonderwall',
		'winterfell'
	] /}
	{param helpText: 'You can use a comma to enter tags' /}
	{param label: 'Tags' /}
	{param selectedItems: [
		[
			'label': 'wall',
			'value': 'wall'
		],
		[
			'label': 'wallpaper',
			'value': 'wallpaper'
		]
	] /}
{/call}
```
```html
<clay-multi-select
	dataSource="['wall', 'wallpaper', 'wonderwall', 'winterfell']"
	helpText="You can use a comma to enter tags"
	label="Tags"
	selectedItems="[{'label': 'wall', 'value': 'wall'}, {'label': 'wallpaper', 'value': 'wallpaper'}]"
>
</clay-multi-select>
```
```html
<div class="form-group">
	<label for="tagsField1">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<input class="form-control-inset" id="tagsField1" type="text"/>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="tagsField2">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wallpaper</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wonderwall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">winterfell</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>
```

#### API

<div>
	[APITable "clay-multi-select/src/ClayMultiSelect.js"]
</div>
