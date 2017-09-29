---
title: Form Elements (Input Groups)
description: Components
layout: "guide"
weight: 100
---

<article id="input-group-addon">

### Input Group Addon

> Append or prepend different things to your form elements with input-group.

<div class="clay-site-form-container">
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon" id="basicAddon1">@</span>
			<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Recipient's username" type="text">
			<span class="input-group-addon" id="basicAddon2">@example.com</span>
		</div>
	</div>
	<div class="form-group">
		<label>Liferay</label>
		<span class="form-text">http://www.liferay.com</span>
		<div class="input-group">
			<span class="input-group-addon">/</span>
			<input aria-label="Amount (to the nearest dollar)" class="form-control" placeholder="design/lexicon" type="text">
		</div>
	</div>
	<div class="input-group">
		<span class="input-group-addon">$</span>
		<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
		<span class="input-group-addon">.00</span>
	</div>
</div>

```xml
<div class="form-group">
	<div class="input-group">
		<span class="input-group-addon" id="basicAddon1">@</span>
		<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text">
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<input aria-describedby="basicAddon2" aria-label="Recipient's Username" class="form-control" placeholder="Recipient's username" type="text">
		<span class="input-group-addon" id="basicAddon2">@example.com</span>
	</div>
</div>

<div class="form-group">
	<label>Liferay</label>
	<span class="form-text">http://www.liferay.com</span>
	<div class="input-group">
		<span class="input-group-addon">/</span>
		<input aria-label="Amount (to the nearest dollar)" class="form-control" placeholder="design/lexicon" type="text">
	</div>
</div>

<div class="input-group">
	<span class="input-group-addon">$</span>
	<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
	<span class="input-group-addon">.00</span>
</div>
```

</article>


<article id="input-group-addon-constrain">

### Input Group Addon Constrain

<div class="clay-site-form-container">
	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" aria-label="Change Default URL" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain02">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain02" aria-label="Change Default URL second one" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain03">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain03" aria-label="Change Default URL third one" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</div>

```xml
<div class="input-group input-group-sm">
	<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
		<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
	</span>
	<input aria-describedby="inputGroupConstrain01" aria-label="Change Default URL" class="form-control" placeholder="Change Default URL" type="text">
</div>

<div class="input-group">
	<span class="input-group-addon input-group-constrain" id="inputGroupConstrain02">
		<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
	</span>
	<input aria-describedby="inputGroupConstrain02" aria-label="Change Default URL second one" class="form-control" placeholder="Change Default URL" type="text">
</div>

<div class="input-group input-group-lg">
	<span class="input-group-addon input-group-constrain" id="inputGroupConstrain03">
		<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
	</span>
	<input aria-describedby="inputGroupConstrain03" aria-label="Change Default URL third one" class="form-control" placeholder="Change Default URL" type="text">
</div>
```

</article>


<article id="input-group-buttons">

### Input Group Buttons

<div class="clay-site-form-container">
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-btn">
				<button class="btn btn-secondary" type="button">Search</button>
			</span>
			<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-label="Search for second one" class="form-control" placeholder="Search for..." type="text">
			<span class="input-group-btn">
				<button class="btn btn-secondary" type="button">Search</button>
			</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-btn">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					Action
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					<div class="dropdown-divider" role="separator"></div>
					<a class="dropdown-item" href="#">Separated link</a>
				</div>
			</div>
			<input aria-label="Text input with dropdown button" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with dropdown button" class="form-control" type="text">
			<div class="input-group-btn">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					Action
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					<div class="dropdown-divider" role="separator"></div>
					<a class="dropdown-item" href="#">Separated link</a>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-btn">
				<button class="btn btn-secondary" type="button">Action</button>
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					<div class="dropdown-divider" role="separator"></div>
					<a class="dropdown-item" href="#">Separated link</a>
				</div>
			</div>
			<input aria-label="Text input with segmented button dropdown" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with segmented button dropdown" class="form-control" type="text">
			<div class="input-group-btn">
				<button class="btn btn-secondary" type="button">Action</button>
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<a class="dropdown-item" href="#">Something else here</a>
					<div class="dropdown-divider" role="separator"></div>
					<a class="dropdown-item" href="#">Separated link</a>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="input-group">
	<span class="input-group-btn">
		<button class="btn btn-secondary" type="button">Search</button>
	</span>
	<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text">
</div>

<div class="input-group">
	<input aria-label="Search for second one" class="form-control" placeholder="Search for..." type="text">
	<span class="input-group-btn">
		<button class="btn btn-secondary" type="button">Search</button>
	</span>
</div>

<div class="input-group">
	<div class="input-group-btn">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Action
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<a class="dropdown-item" href="#">Something else here</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#">Separated link</a>
		</div>
	</div>
	<input aria-label="Text input with dropdown button" class="form-control" type="text">
</div>

<div class="input-group">
	<input aria-label="Text input with dropdown button" class="form-control" type="text">
	<div class="input-group-btn">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Action
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<a class="dropdown-item" href="#">Something else here</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#">Separated link</a>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-btn">
		<button class="btn btn-secondary" type="button">Action</button>
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<a class="dropdown-item" href="#">Something else here</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#">Separated link</a>
		</div>
	</div>
	<input aria-label="Text input with segmented button dropdown" class="form-control" type="text">
</div>

<div class="input-group">
	<input aria-label="Text input with segmented button dropdown" class="form-control" type="text">
	<div class="input-group-btn">
		<button class="btn btn-secondary" type="button">Action</button>
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<a class="dropdown-item" href="#">Something else here</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#">Separated link</a>
		</div>
	</div>
</div>
```

</article>


<article id="input-group-secondary">

### Input Group Secondary

> Different skin for Input Group

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="">Custom Checkbox</label>
		<div class="input-group input-group-secondary">
			<span class="input-group-addon">
				<div class="custom-control custom-checkbox">
					<label>
						<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</span>
			<input aria-label="Text input with checkbox" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<label for="">Custom Checkbox and Custom Control Description</label>
		<div class="input-group input-group-secondary">
			<span class="input-group-addon">
				<div class="custom-control custom-checkbox">
					<label>
						<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Custom Check Label</span>
					</label>
				</div>
			</span>
			<input aria-label="Text input with checkbox" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<label for="">Form Check and Form Check Description</label>
		<div class="input-group input-group-secondary">
			<input aria-label="Text input with checkbox" class="form-control" type="text">
			<span class="input-group-addon">
				<div class="form-check">
					<label class="form-check-label">
						<input aria-label="Checkbox for previous text input" class="form-check-input" type="checkbox" value="">
						<span class="form-check-description">Form Check Label</span>
					</label>
				</div>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="">Custom Radio</label>
		<div class="input-group input-group-secondary">
			<span class="input-group-addon">
				<div class="custom-control custom-radio">
					<label>
						<input aria-label="Radio button for following text input" class="custom-control-input" type="radio">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</span>
			<input aria-label="Text input with radio button" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<label for="">Form Check with Radio Button</label>
		<div class="input-group input-group-secondary">
			<input aria-label="Text input with radio button" class="form-control" type="text">
			<span class="input-group-addon">
				<div class="form-check">
					<label class="form-check-label">
						<input aria-label="Radio button for previous text input" class="form-check-input" type="radio" value="">
					</label>
				</div>
			</span>
		</div>
	</div>
</div>

```xml
<div class="form-group">
	<label for="">Custom Checkbox</label>
	<div class="input-group input-group-secondary">
		<span class="input-group-addon">
			<div class="custom-control custom-checkbox">
				<label>
					<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</span>
		<input aria-label="Text input with checkbox" class="form-control" type="text">
	</div>
</div>
```

</article>


<article id="input-group-transparent">

### Input Group Transparent

> Another skin for Input Group

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="inputGroupTransparent">
			Label
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-transparent">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="inputGroupTransparent" placeholder="Some placeholder text..." type="text">
			<span class="input-group-btn">
				<button class="btn btn-unstyled" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
			</span>
		</div>
	</div>
</div>

```xml
<div class="form-group">
	<label for="inputGroupTransparent">
		Label
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<div class="input-group input-group-transparent">
		<span class="input-group-addon">$</span>
		<input aria-label="Amount" class="form-control" id="inputGroupTransparent" placeholder="Some placeholder text..." type="text">
		<span class="input-group-btn">
			<button class="btn btn-unstyled" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/vendor/lexicon/icons.svg#trash" />
				</svg>
			</button>
		</span>
	</div>
</div>
```

</article>


<article id="input-group-sizes">

### Input Group Sizes

<div class="clay-site-form-container">
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount (to the neareset dollar)" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupTransparentLg">
			Label Input Group Lg
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-transparent input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount (to the nearest Dollar)" class="form-control" id="inputGroupTransparentLg" placeholder="Some placeholder text..." type="text">
			<span class="input-group-btn">
				<button class="btn btn-unstyled" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupTransparentNormal">
			Label
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-transparent">
			<span class="input-group-btn">
				<button class="btn btn-primary" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
				<button class="btn btn-primary" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
				<button class="btn btn-primary" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
			</span>
			<input aria-label="Amount" class="form-control" id="inputGroupTransparentNormal" placeholder="Some placeholder text..." type="text">
			<span class="input-group-btn">
				<button class="btn btn-unstyled" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="inputGroupTransparentSm">
			Label Input Group Sm
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-transparent input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="inputGroupTransparentSm" placeholder="Some placeholder text..." type="text">
			<span class="input-group-btn">
				<button class="btn btn-unstyled" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</button>
			</span>
		</div>
	</div>
</div>

```xml
<div class="input-group input-group-lg">
	<span class="input-group-addon">$</span>
	<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
	<span class="input-group-addon">.00</span>
</div>

<div class="input-group">
	<span class="input-group-addon">$</span>
	<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text">
	<span class="input-group-addon">.00</span>
</div>

<div class="input-group input-group-sm">
	<span class="input-group-addon">$</span>
	<input aria-label="Amount (to the neareset dollar)" class="form-control" type="text">
	<span class="input-group-addon">.00</span>
</div>
```

</article>


<article id="input-group-inset">

### Input Group Inset

> Add class `input-group-inset` to `input-group` to place a button or other stuff inside the input.

> `input-group-inset` gets aligned right by default, add `input-group-inset-left` to `input-group` to align inset content on the left. This helps keep the tab order logical so the input is always focused first and not the button.

<div class="alert alert-warning">
	You will need to adjust <code>padding-left</code>, <code>padding-right</code>, or both on <code>.input-group-input .form-control</code> depending on what is inside <code>.input-group-inset</code>.
</div>

<div class="clay-site-form-container">
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<div class="input-group input-group-inset">
					<div class="input-group-input">
						<input aria-label="Search for" class="form-control" placeholder="Search..." type="text">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-link d-md-none" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</button>
						<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
								<use xlink:href="/vendor/lexicon/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group input-group-inset input-group-inset-left">
					<div class="input-group-input">
						<input aria-label="Search for" class="form-control" placeholder="Search..." type="text">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-unstyled" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
								<use xlink:href="/vendor/lexicon/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				<div class="input-group input-group-inset">
					<div class="input-group-input">
						<input aria-label="Enter email" class="form-control" placeholder="Enter Email..." type="email" style="padding-right: 92px;">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-secondary" type="button">Submit</button>
					</span>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group input-group-inset input-group-inset-left">
					<div class="input-group-input">
						<input aria-label="Enter email" class="form-control" placeholder="Enter Email..." type="email" style="padding-left: 92px;">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-secondary" type="button">Submit</button>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="form-group">
	<div class="input-group input-group-inset">
		<div class="input-group-input">
			<input aria-label="Search for" class="form-control" placeholder="Search..." type="text">
		</div>
		<span class="input-group-inset-item">
			<button class="btn btn-link d-md-none" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use xlink:href="/vendor/lexicon/icons.svg#times" />
				</svg>
			</button>
			<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
					<use xlink:href="/vendor/lexicon/icons.svg#search" />
				</svg>
			</button>
		</span>
	</div>
</div>

<div class="form-group">
	<div class="input-group input-group-inset input-group-inset-left">
		<div class="input-group-input">
			<input aria-label="Search for" class="form-control" placeholder="Search..." type="text">
		</div>
		<span class="input-group-inset-item">
			<button class="btn btn-unstyled" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
					<use xlink:href="/vendor/lexicon/icons.svg#search" />
				</svg>
			</button>
		</span>
	</div>
</div>

<div class="form-group">
	<div class="input-group input-group-inset">
		<div class="input-group-input">
			<input aria-label="Enter email" class="form-control" placeholder="Enter Email..." type="email" style="padding-right: 92px;">
		</div>
		<span class="input-group-inset-item">
			<button class="btn btn-secondary" type="button">Submit</button>
		</span>
	</div>
</div>

<div class="form-group">
	<div class="input-group input-group-inset input-group-inset-left">
		<div class="input-group-input">
			<input aria-label="Enter email" class="form-control" placeholder="Enter Email..." type="email" style="padding-left: 92px;">
		</div>
		<span class="input-group-inset-item">
			<button class="btn btn-secondary" type="button">Submit</button>
		</span>
	</div>
</div>
```

</article>


<script>
{literal}
$(function() {
	$('[data-toggle="popover"]').popover(
		{
			container: 'body',
			content: 'Some help text for your input.',
			placement: 'left',
			trigger: 'hover'
		}
	);
});
{/literal}
</script>