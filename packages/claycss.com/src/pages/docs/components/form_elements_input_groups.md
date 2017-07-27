---
title: Form Elements (Input Groups)
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Input Group Addon

> Append or prepend different things to your form elements with input-group.

<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon" id="inputGroupAddon01">@</span>
			<input aria-describedby="inputGroupAddon01" class="form-control" placeholder="Username" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-describedby="inputGroupAddon02" class="form-control" placeholder="Recipient's username" type="text">
			<span class="input-group-addon" id="inputGroupAddon02">@example.com</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon" id="inputGroupAddon01">@</span>
			<input aria-describedby="inputGroupAddon01" class="form-control" placeholder="Username" type="text">
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<input aria-describedby="inputGroupAddon02" class="form-control" placeholder="Recipient's username" type="text">
			<span class="input-group-addon" id="inputGroupAddon02">@example.com</span>
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
</form>
```

</article>

<article id="2">

### Input Group Addon Constrain

<form>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>

<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>

<form>
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>

<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>

<form>
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon input-group-constrain" id="inputGroupConstrain01">
				<span class="input-group-constrain-text">https://web.liferay.com/community/forums/-/message_boards/category/72632049</span>
			</span>
			<input aria-describedby="inputGroupConstrain01" class="form-control" placeholder="Change Default URL" type="text">
		</div>
	</div>
</form>
```

</article>


<article id="3">

### Input Group Addon with Checkboxes and Radios

<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">
				<input aria-label="Checkbox for following text input" type="checkbox">
			</span>
			<input aria-label="Text input with checkbox" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with checkbox" class="form-control" type="text">
			<span class="input-group-addon">
				<input aria-label="Checkbox for previous text input" type="checkbox">
			</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">
				<input aria-label="Radio button for following text input" type="radio">
			</span>
			<input aria-label="Text input with radio button" class="form-control" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with radio button" class="form-control" type="text">
			<span class="input-group-addon">
				<input aria-label="Radio button for previous text input" type="radio">
			</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">
				<input aria-label="Checkbox for following text input" type="checkbox">
			</span>
			<input aria-label="Text input with checkbox" class="form-control" type="text">
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with checkbox" class="form-control" type="text">
			<span class="input-group-addon">
				<input aria-label="Checkbox for previous text input" type="checkbox">
			</span>
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">
				<input aria-label="Radio button for following text input" type="radio">
			</span>
			<input aria-label="Text input with radio button" class="form-control" type="text">
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<input aria-label="Text input with radio button" class="form-control" type="text">
			<span class="input-group-addon">
				<input aria-label="Radio button for previous text input" type="radio">
			</span>
		</div>
	</div>
</form>
```

</article>


<article id="4">

### Input Group Buttons

<div class="form-group">
	<div class="input-group">
		<span class="input-group-btn">
			<button class="btn btn-secondary" type="button">Search</button>
		</span>
		<input class="form-control" placeholder="Search for..." type="text">
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<input class="form-control" placeholder="Search for..." type="text">
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
					<use xlink:href="//vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
				<a class="dropdown-item" href="#">Separated link</a>
			</div>
		</div>
	</div>
</div>

```xml
<div class="form-group">
	<div class="input-group">
		<span class="input-group-btn">
			<button class="btn btn-secondary" type="button">Search</button>
		</span>
		<input class="form-control" placeholder="Search for..." type="text">
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<input class="form-control" placeholder="Search for..." type="text">
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
				<svg aria-hidde="true" class="lexicon-icon lexicon-icon-caret-bottom">
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
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
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="divider" role="separator"></div>
				<a class="dropdown-item" href="#">Separated link</a>
			</div>
		</div>
	</div>
</div>
```

</article>


<article id="5">

### Input Group Insert

> Chain several `input-group-addon`'s or `input-group-btn`'s together by adding the class `input-group-insert` to any input-group-addon or input-group-btn that sits between the first and last element inside an input-group.

<form>
	<div class="form-group">
		<div class="input-group">
			<input class="form-control" placeholder="Mailbox Name" type="text">
			<span class="input-group-addon input-group-insert">@</span>
			<input class="form-control" placeholder="Domain" type="text">
			<span class="input-group-addon input-group-insert">.com</span>
			<span class="input-group-btn">
				<button class="btn btn-secondary" type="button">Submit</button>
			</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<div class="input-group">
			<input class="form-control" placeholder="Mailbox Name" type="text">
			<span class="input-group-addon input-group-insert">@</span>
			<input class="form-control" placeholder="Domain" type="text">
			<span class="input-group-addon input-group-insert">.com</span>
			<span class="input-group-btn">
				<button class="btn btn-secondary" type="button">Submit</button>
			</span>
		</div>
	</div>
</form>
```

</article>


<article id="6">

### Input Group Sizes

<form>
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<div class="input-group input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>

	<div class="form-group">
		<div class="input-group">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>

	<div class="form-group">
		<div class="input-group input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" type="text">
			<span class="input-group-addon">.00</span>
		</div>
	</div>
</form>
```

</article>


<article id="7">

### Input Group Default 

> An alternative style for input-group.

<form>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
</form>
```

</article>


<article id="8">

### Input Group Default Sizes

<form>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label Input Group Lg
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label Input Group Sm
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
</form>

```xml
<form>
	<div class="form-group">
		<label for="defaultLogoutPage">
			Label Input Group Lg
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default input-group-lg">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>

	<div class="form-group">
		<label for="defaultLogoutPage">
			Label
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>

	<div class="form-group">
		<label for="defaultLogoutPage">
			Label Input Group Sm
			<svg aria-hidden="true" class="lexicon-icon reference-mark">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
			</svg>
		</label>
		<div class="input-group input-group-default input-group-sm">
			<span class="input-group-addon">$</span>
			<input aria-label="Amount" class="form-control" id="defaultLogoutPage" placeholder="Some placeholder text..." type="text">
			<span class="input-group-addon">
				<span class="input-group-addon-content">
					<a class="help-icon help-icon-default icon-monospaced icon-question" data-toggle="popover" href="#1"></a>
				</span>
			</span>
		</div>
	</div>
</form>
```

</article>


<article id="9">

### Input Group Insert

> Add class `input-group-inset` to `input-group` to place a button or other stuff inside the input.

<div class="alert alert-warning">
	You will need to adjust <code>padding-left</code>, <code>padding-right</code>, or both on <code>.input-group-input .form-control</code> depending on what is inside <code>.input-group-inset</code>.
</div>

<form class="row">
	<div class="col-md-6">
		<div class="form-group">
			<div class="input-group input-group-inset">
				<div class="input-group-input">
					<input class="form-control" placeholder="Search..." type="text">
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-link d-md-none" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/clay/icons.svg#times" />
						</svg>
					</button>
					<button class="btn btn-link d-md-inline-block d-none" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/clay/icons.svg#search" />
						</svg>
					</button>
				</span>
			</div>
		</div>
		<div class="form-group">
			<div class="input-group input-group-inset">
				<span class="input-group-inset-item">
					<button class="btn btn-link" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/clay/icons.svg#search" />
						</svg>
					</button>
				</span>
				<div class="input-group-input">
					<input class="form-control" placeholder="Search..." type="text">
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-group">
			<div class="input-group input-group-inset">
				<div class="input-group-input">
					<input class="form-control" placeholder="Enter Email..." style="padding-right: 92px;" type="email" />
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-secondary" type="button">Submit</button>
				</span>
			</div>
		</div>
		<div class="form-group">
			<div class="input-group input-group-inset">
				<span class="input-group-inset-item">
					<button class="btn btn-secondary" type="button">Submit</button>
				</span>
				<div class="input-group-input">
					<input class="form-control" placeholder="Enter Email..." style="padding-left: 92px;" type="email" />
				</div>
			</div>
		</div>
	</div>
</form>

```xml
<form class="row">
	<div class="col-md-6">
		<div class="form-group">
			<div class="input-group input-group-inset">
				<div class="input-group-input">
					<input class="form-control" placeholder="Search..." type="text">
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-link d-md-none" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/clay/icons.svg#times" />
						</svg>
					</button>
					<button class="btn btn-link d-md-inline-block d-none" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/clay/icons.svg#search" />
						</svg>
					</button>
				</span>
			</div>
		</div>

		<div class="form-group">
			<div class="input-group input-group-inset">
				<span class="input-group-inset-item">
					<button class="btn btn-link" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/clay/icons.svg#search" />
						</svg>
					</button>
				</span>
				<div class="input-group-input">
					<input class="form-control" placeholder="Search..." type="text">
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-group">
			<div class="input-group input-group-inset">
				<div class="input-group-input">
					<input class="form-control" placeholder="Enter Email..." style="padding-right: 92px;" type="email" />
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-secondary" type="button">Submit</button>
				</span>
			</div>
		</div>
		<div class="form-group">
			<div class="input-group input-group-inset">
				<span class="input-group-inset-item">
					<button class="btn btn-secondary" type="button">Submit</button>
				</span>
				<div class="input-group-input">
					<input class="form-control" placeholder="Enter Email..." style="padding-left: 92px;" type="email" />
				</div>
			</div>
		</div>
	</div>
</form>
```

</article>

<script>
{literal}
window.onload = function() {
    $('[data-toggle="popover"]').popover(
        {
            container: 'body',
            content: 'Some help text for your input.',
            placement: 'left',
            trigger: 'hover'
        }
    );
};
{/literal}
</script>