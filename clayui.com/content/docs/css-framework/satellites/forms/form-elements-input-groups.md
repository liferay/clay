---
title: "Form Elements (Input Groups)"
---

### Input Group (Separated)

<div class="alert alert-warning">
	Clay Input Group markup deviates from Bootstrap 4's Input Groups.
</div>

> Wrap each item in an <code>.input-group</code> div with an <code>.input-group-item</code> div. The class <code>.input-group-item</code> splits the space evenly by default. Add the <code>.input-group-item-shrink</code> class to a group item to make it shrink to fit, as shown in the example below for the @ and .com input group items:

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-item">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item">
				<input class="form-control" placeholder="Email" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text">@</span>
			</div>
			<div class="input-group-item">
				<input class="form-control" placeholder="liferay" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text">.com</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon1">@</span>
		</div>
		<div class="input-group-item">
			<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item">
			<input class="form-control" placeholder="Email" type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item">
			<input class="form-control" placeholder="liferay" type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text">.com</span>
		</div>
	</div>
</div>
```

### Input Group (Connected)

> By default, input group items are separated. To connect input group items together, add the <code>.input-group-prepend</code> class to every <code>.input-group-item</code> except the last one, and add the <code>.input-group-append</code> class to the last <code>.input-group-item</code>:

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input class="form-control" placeholder="Email" type="text"/>
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
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Recipient's username" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon2">@example.com</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label>Liferay</label>
		<div class="form-text">http://www.liferay.com</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">/</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" placeholder="design/lexicon" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
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
			<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input class="form-control" placeholder="Email" type="text"/>
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

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Recipient's username" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon2">@example.com</span>
		</div>
	</div>
</div>

<div class="form-group">
	<label>Liferay</label>
	<div class="form-text">http://www.liferay.com</div>
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">/</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Amount (to the nearest dollar)" class="form-control" placeholder="design/lexicon" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>
```

### Input Group (Mixed)

> You can of course mix separated and connected input group items in your forms, as shown in the example below:

<div class="sheet">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="submit">Submit</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="localizableInput1">Liferay</label>
		<div class="form-text">http://www.liferay.com</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">/</span>
			</div>
			<div class="input-group-append input-group-item">
				<input class="form-control" id="localizableInput1" placeholder="design/lexicon" type="text" value="soluciones"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#es-es"></use>
						</svg>
					</span>
					<span class="btn-section">es-ES</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li>
						<a class="autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#en-us"></use>
										</svg>
									</span>
									en-US
								</span>
							</span>
							<span class="autofit-col">
								<span class="label label-info">
									<span class="label-item label-item-expand">Default</span>
								</span>
							</span>
						</a>
					</li>
					<li>
						<a class="autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#en-gb"></use>
										</svg>
									</span>
									en-GB
								</span>
							</span>
							<span class="autofit-col">
								<span class="label label-success">
									<span class="label-item label-item-expand">Translated</span>
								</span>
							</span>
						</a>
					</li>
					<li>
						<a class="active autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#es-es"></use>
										</svg>
									</span>
									es-ES
								</span>
							</span>
							<span class="autofit-col">
								<span class="label label-success">
									<span class="label-item label-item-expand">Translated</span>
								</span>
							</span>
						</a>
					</li>
					<li>
						<a class="autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#fr-fr"></use>
										</svg>
									</span>
									fr-FR
								</span>
							</span>
							<span class="autofit-col">
								<span class="label label-warning">
									<span class="label-item label-item-expand">Not Translated</span>
								</span>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon1">@</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="submit">Submit</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="localizableInput1">Liferay</label>
	<div class="form-text">http://www.liferay.com</div>
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">/</span>
		</div>
		<div class="input-group-append input-group-item">
			<input class="form-control" id="localizableInput1" placeholder="design/lexicon" type="text" value="soluciones"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#es-es"></use>
					</svg>
				</span>
				<span class="btn-section">es-ES</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#en-us"></use>
									</svg>
								</span>
								en-US
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-info">
								<span class="label-item label-item-expand">Default</span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#en-gb"></use>
									</svg>
								</span>
								en-GB
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand">Translated</span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="active autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#es-es"></use>
									</svg>
								</span>
								es-ES
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand">Translated</span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#fr-fr"></use>
									</svg>
								</span>
								fr-FR
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-warning">
								<span class="label-item label-item-expand">Not Translated</span>
							</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
```

### Input Group Inset

> You can insert buttons and links into input group items with the following helper classes: <code>.input-group-inset</code>, <code>.input-group-inset-before</code>, <code>.input-group-inset-after</code>, <code>.input-group-inset-item</code>, <code>.input-group-inset-item-before</code>, and <code>.input-group-inset-item-after</code>. Use the <code>-before</code> classes to inset the button/link at the beginning of the input group, or use the <code>-after</code> classes to inset the button/link at the end of the input group.

<div class="alert alert-warning">
	To retain the focus styles around the <code>.input-group-inset</code> component when a button or link inside is focused, add the <code>focus</code> class to the <code>.input-group-item</code>. Focus Box Shadows are only supported in <code>.input-group-inset</code> with <code>.input-group-item.focus</code>. <code>.input-prepend</code> and <code>.input-append</code> aren't supported with <code>.input-group-inset</code>.
</div>

<div class="sheet">
	<div class="form-group-autofit">
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text"/>
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled d-md-none" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times" />
							</svg>
						</button>
						<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text"/>
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times-circle" />
							</svg>
						</button>
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-after" placeholder="Enter Email..." type="email"/>
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-secondary" type="button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-before" placeholder="Search..." type="text"/>
					<div class="input-group-inset-item input-group-inset-item-before">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-before" placeholder="Enter Email..." type="email"/>
					<div class="input-group-inset-item input-group-inset-item-before">
						<button class="btn btn-secondary" type="button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="input-group-item">
		<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text"/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled d-md-none" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
			<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
				<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text"/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times-circle" />
				</svg>
			</button>
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-after" placeholder="Enter Email..." type="email"/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-secondary" type="button">Submit</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input aria-label="Search for" class="form-control input-group-inset input-group-inset-before" placeholder="Search..." type="text"/>
		<div class="input-group-inset-item input-group-inset-item-before">
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-before" placeholder="Enter Email..." type="email"/>
		<div class="input-group-inset-item input-group-inset-item-before">
			<button class="btn btn-secondary" type="button">Submit</button>
		</div>
	</div>
</div>
```

### Input Group Text Secondary

<div class="sheet">
	<div class="form-group">
		<label for="">Custom Checkbox</label>
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
				<input aria-label="Text input with checkbox" class="form-control" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="">Custom Checkbox and Custom Control Description</label>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-checkbox">
						<label>
							<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Check Label</span>
							</span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with checkbox" class="form-control" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="">Custom Radio</label>
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
				<input aria-label="Text input with radio button" class="form-control" type="text"/>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="">Custom Checkbox</label>
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
			<input aria-label="Text input with checkbox" class="form-control" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="">Custom Checkbox and Custom Control Description</label>
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-checkbox">
					<label>
						<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label">
							<span class="custom-control-label-text">Custom Check Label</span>
						</span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with checkbox" class="form-control" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="">Custom Radio</label>
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
			<input aria-label="Text input with radio button" class="form-control" type="text"/>
		</div>
	</div>
</div>
```

### Input Group Buttons

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
				<input aria-label="Search for second one" class="form-control" placeholder="Search for..." type="text"/>
			</div>
			<span class="input-group-append input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Search</button>
			</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					Action<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation"><use href="/images/icons/icons.svg#caret-bottom" /></svg></span>
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with dropdown button" class="form-control" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-label="Text input with dropdown button" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					Action<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation"><use href="/images/icons/icons.svg#caret-bottom" /></svg></span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button class="btn btn-secondary" type="button">Action</button>
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with segmented button dropdown" class="form-control" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-label="Text input with segmented button dropdown" class="form-control" type="text"/>
			</div>
			<div class="input-group-prepend input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Action</button>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
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
			<input aria-label="Search for second one" class="form-control" placeholder="Search for..." type="text"/>
		</div>
		<span class="input-group-append input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Search</button>
		</span>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				Action<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation"><use href="/images/icons/icons.svg#caret-bottom" /></svg></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li><a class="dropdown-item" href="#1">Something else here</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with dropdown button" class="form-control" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input aria-label="Text input with dropdown button" class="form-control" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				Action<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation"><use href="/images/icons/icons.svg#caret-bottom" /></svg></span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li><a class="dropdown-item" href="#1">Something else here</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<button class="btn btn-secondary" type="button">Action</button>
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li><a class="dropdown-item" href="#1">Something else here</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Text input with segmented button dropdown" class="form-control" type="text"/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input aria-label="Text input with segmented button dropdown" class="form-control" type="text"/>
		</div>
		<div class="input-group-prepend input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Action</button>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li><a class="dropdown-item" href="#1">Something else here</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
	</div>
</div>
```

### Input Group Sizes

<div class="sheet">
	<div class="form-group">
		<div class="input-group input-group-lg">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-prepend input-group-item">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the neareset dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupLgSeparated">
			Label Input Group Lg
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-lg">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-append">
				<input aria-label="Amount (to the nearest Dollar)" class="form-control" id="inputGroupLgSeparated" placeholder="Some placeholder text..." type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-monospaced btn-unstyled" type="button">
					<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#trash" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupNormalSeparated">
			Label
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-monospaced btn-primary" type="button">
					<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#trash" />
					</svg>
				</button>
			</div>
			<div class="input-group-item">
				<input aria-label="Amount" class="form-control" id="inputGroupNormalSeparated" placeholder="Some placeholder text..." type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-monospaced btn-unstyled" type="button">
					<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#trash" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupSmSeparated">
			Label Input Group Sm
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-sm">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Amount" class="form-control" id="inputGroupSmSeparated" placeholder="Some placeholder text..." type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-monospaced btn-unstyled" type="button">
					<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#trash" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group input-group-lg">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-prepend input-group-item">
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
		</div>
		<div class="input-group-append input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group input-group-sm">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input aria-label="Amount (to the neareset dollar)" class="form-control" type="text"/>
		</div>
		<div class="input-group-append input-group-item input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="inputGroupLgSeparated">
		Label Input Group Lg
		<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<div class="input-group input-group-lg">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-append">
			<input aria-label="Amount (to the nearest Dollar)" class="form-control" id="inputGroupLgSeparated" placeholder="Some placeholder text..." type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-monospaced btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#trash" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="inputGroupNormalSeparated">
		Label
		<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-monospaced btn-primary" type="button">
				<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#trash" />
				</svg>
			</button>
		</div>
		<div class="input-group-item">
			<input aria-label="Amount" class="form-control" id="inputGroupNormalSeparated" placeholder="Some placeholder text..." type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-monospaced btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#trash" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="inputGroupSmSeparated">
		Label Input Group Sm
		<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<div class="input-group input-group-sm">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Amount" class="form-control" id="inputGroupSmSeparated" placeholder="Some placeholder text..." type="text"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-monospaced btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#trash" />
				</svg>
			</button>
		</div>
	</div>
</div>
```
