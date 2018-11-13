---
title: "Text Input Group"
---

### Description

A text field with added elements that provide a more complex input structure.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input_group.html">Text Input Group Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Types

#### Input group with button

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button class="btn btn-secondary" type="button">Search</button>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-label="Search for second one" class="form-control" value="email-example@liferay.com" type="email"/>
			</div>
			<span class="input-group-append input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Submit</button>
			</span>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<button class="btn btn-secondary" type="button">Search</button>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input aria-label="Search for second one" class="form-control" value="email-example@liferay.com" type="email" />
		</div>
		<span class="input-group-append input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Submit</button>
		</span>
	</div>
</div>
```

#### Url input group

<div class="sheet">
	<div class="form-group">
		<label for="localizableInput1">Liferay</label>
		<div class="form-text">http://www.liferay.com</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">/</span>
			</div>
			<div class="input-group-append input-group-item">
				<input class="form-control" id="localizableInput1" placeholder="clay/css" type="text" value="clay/css" />
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="localizableInput1">Liferay</label>
	<div class="form-text">http://www.liferay.com</div>
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">/</span>
		</div>
		<div class="input-group-append input-group-item">
			<input class="form-control" id="localizableInput1" placeholder="clay/css" type="text" value="soluciones" />
		</div>
	</div>
</div>
```

#### Input group with units

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username (Placeholder)" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Placeholder" value="email-example" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon2">@liferay.com</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text" value="5,000"/>
			</div>
			<div class="input-group-append input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input class="form-control" placeholder="email-example" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">@</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input class="form-control" placeholder="liferay" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.com</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text" id="basicAddon1">@</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username (Placeholder)" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Placeholder" value="email-example" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon2">@liferay.com</span>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text" value="5,000"/>
		</div>
		<div class="input-group-append input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input class="form-control" placeholder="email-example" type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input class="form-control" placeholder="liferay" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text">.com</span>
		</div>
	</div>
</div>
```

#### Input group with radio or checkbox

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-checkbox">
						<label>
							<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with checkbox" class="form-control" value="Select this option?" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-checkbox">
						<label>
							<input aria-label="Checkbox for following text input" class="custom-control-input" checked type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with checkbox" class="form-control" type="text" value="Option Selected"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-radio">
						<label>
							<input aria-label="Radio button for following text input" class="custom-control-input" type="radio"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with radio button" class="form-control" type="text" value="Select this option?"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-radio">
						<label>
							<input aria-label="Radio button for following text input" class="custom-control-input" type="radio" checked />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with radio button" class="form-control" type="text" value="Option Selected"/>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-checkbox">
					<label>
						<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with checkbox" class="form-control" value="Select this option?" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-checkbox">
					<label>
						<input aria-label="Checkbox for following text input" class="custom-control-input" checked type="checkbox"/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with checkbox" class="form-control" type="text" value="Option Selected"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-radio">
					<label>
						<input aria-label="Radio button for following text input" class="custom-control-input" type="radio"/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with radio button" class="form-control" type="text" value="Select this option?"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-radio">
					<label>
						<input aria-label="Radio button for following text input" class="custom-control-input" type="radio" checked />
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with radio button" class="form-control" type="text" value="Option Selected"/>
		</div>
	</div>
</div>
```

