---
title: Cards
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Card

> A container styled like a card for your stuff. Combine different Lexicon components inside a card to create a variety of cards.

<div class="card" style="max-width: 300px;">
    <div class="card-item-first crop-img crop-img-bottom crop-img-center" style="height: 150px;">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
    </div>
    <div class="rounded-circle sticker sticker-danger sticker-xxl" style="border: 4px solid #FFF; line-height:75px; margin: -42px auto 0; position: relative;"><span>JB</span></div>
    <div class="card-body" style="text-align: center;">
        <h3 class="card-title">Joe Bloggs</h3>
        <h5 class="card-subtitle">Administrator</h5>
        <div class="card-divider"></div>
        <p>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReally<a class="card-link" href="#1">TryingToCover</a>AllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</p>
    </div>
</div>

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span>This text will fill the remaining space.</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                </div>
                <div class="flex-col">
                    <div class="dropdown">
                        <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                            <svg aria-hidden="true" class="lexicon-icon">
                                <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                            </svg>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#1">Download</a>
                            <a class="dropdown-item" href="#1">Edit</a>
                            <a class="dropdown-item" href="#1">Move</a>
                            <a class="dropdown-item" href="#1">Checkout</a>
                            <a class="dropdown-item" href="#1">Permissions</a>
                            <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-8">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span>Really super insanely just incredibly long and totally not possible word. ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                </div>
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="card" style="max-width: 300px;">
    <div class="card-item-first crop-img crop-img-bottom crop-img-center" style="height: 150px;">
        <img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
    </div>
    <div class="rounded-circle sticker sticker-danger sticker-xxl" style="border: 4px solid #FFF; line-height:75px; margin: -42px auto 0; position: relative;"><span>JB</span></div>
    <div class="card-body" style="text-align: center;">
        <h3 class="card-title">Joe Bloggs</h3>
        <h5 class="card-subtitle">Administrator</h5>
        <div class="card-divider"></div>
        <p>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReally<a class="card-link" href="#1">TryingToCover</a>AllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</p>
    </div>
</div>

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span>This text will fill the remaining space.</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                </div>
                <div class="flex-col">
                    <div class="dropdown">
                        <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                            <svg aria-hidden="true" class="lexicon-icon">
                                <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                            </svg>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#1">Download</a>
                            <a class="dropdown-item" href="#1">Edit</a>
                            <a class="dropdown-item" href="#1">Move</a>
                            <a class="dropdown-item" href="#1">Checkout</a>
                            <a class="dropdown-item" href="#1">Permissions</a>
                            <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-md-8">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <span>Really super insanely just incredibly long and totally not possible word. ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                </div>
                <div class="flex-col">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
            </div>
        </div>
    </div>
</div>
```

</article>

<article id="2">

### Horizontal Card with flex-col-*

> Use `card-row` with `flex-col-expand` and `flex-col` to create a number of custom horizontal cards. `flex-col-expand` fills the remaining space and `flex-col` is only as wide as its content inside.

```xml
<div class="card-row">
    <div class="flex-col"></div>
    <div class="flex-col flex-col-expand"></div>
</div>
```

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters" style="background-color:antiquewhite;">
                    <span>Fills remaining space.</span>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters" style="background-color:antiquewhite;">
                    <span>Fills remaining space.</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

> Two `.flex-col`'s no `.flex-col-expand`.

```xml
<div class="card-row">
    <div class="flex-col"></div>
    <div class="flex-col"></div>
</div>
```

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-gutters" style="background-color:antiquewhite;">
                    <span>Only as wide as this text.</span>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-gutters" style="background-color:antiquewhite;">
                    <span>Only as wide as this text.</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

> Two `.flex-col-expand`'s no `.flex-col`.

```xml
<div class="card-row">
    <div class="flex-col flex-col-expand"></div>
    <div class="flex-col flex-col-expand"></div>
</div>
```

<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col flex-col-expand" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters" style="background-color:antiquewhite;">
                    <span>This will split the space in half.</span>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col flex-col-expand" style="background-color:aliceblue;">
                    <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters" style="background-color:antiquewhite;">
                    <span>This will split the space in half.</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

</article>

<article id="3">

### Padded Horizontal Cards

> Nest `card-row` in `card-body` on to add some spacing around a horizontal card.

```xml
<div class="card-body">
    <div class="card-row"></div>
</div>
```

<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 121px;">
                </div>
                <div class="flex-col flex-col-expand flex-col-gutters">
                    <h4 class="card-title">So ristretto cappuccino</h4>
                    <p class="card-text">Wings eu, pumpkin spice robusta.</p>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-body">
            <div class="card-row">
                <div class="flex-col">
                    <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 121px;">
                </div>

                <div class="flex-col flex-col-expand flex-col-gutters">
                    <h4 class="card-title">So ristretto cappuccino</h4>
                    <p class="card-text">Wings eu, pumpkin spice robusta.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

</article>

<article id="4">

### Truncating Text Inside Card

> Add class `truncate-text` on whatever text you want to be truncated.

<div class="col-md-6">
	<div class="card card-horizontal">
		<div class="card-body">
			<div class="card-row">
				<div class="flex-col">
					<img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
				</div>
				<div class="flex-col flex-col-expand flex-col-gutters">
					<h4 class="card-title">So ristretto cappuccino</h4>
					<p class="card-text truncate-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-md-12">
	<ul class="list-unstyled row">
		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 01">Folder 01</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 02">Folder 02</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 03">Folder 03</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>

```xml
<div class="col-md-6">
	<div class="card card-horizontal">
		<div class="card-body">
			<div class="card-row">
				<div class="flex-col">
					<img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
				</div>

				<div class="flex-col flex-col-expand flex-col-gutters">
					<h4 class="card-title">So ristretto cappuccino</h4>
					<p class="card-text truncate-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-md-12">
	<ul class="list-unstyled row">
		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>

		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 01">Folder 01</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>

		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 02">Folder 02</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>

		<li class="col-md-6">
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<h4 class="card-title" title="Folder 03">Folder 03</h4>
						</div>
						<div class="flex-col">
							<div class="dropdown">
								<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon">
										<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>
```

</article>

<article id="5">

### Card Row Content Alignment Helpers

> Vertically align content by setting `justify-content` to `flex-start`, `center`, or `flex-end` on `flex-col`.

> Horizontally align content by setting `text-align` to `left`, `center`, or `right` on `flex-col`.

> You can also use the Bootstrap 4's helper classes `justify-content-start`, `justify-content-center`, or `justify-content-end` on `card-row` to align content in all columns inside the row.

<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col flex-col-expand justify-content">top</div>
            <div class="flex-col flex-col-expand">middle</div>
            <div class="flex-col flex-col-expand justify-content-end">bottom</div>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col flex-col-expand text-left">left</div>
            <div class="flex-col flex-col-expand">center</div>
            <div class="flex-col flex-col-expand text-right">right</div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col flex-col-expand justify-content">top</div>
            <div class="flex-col flex-col-expand">middle</div>
            <div class="flex-col flex-col-expand justify-content-end">bottom</div>
        </div>
    </div>
</div>

<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col flex-col-expand text-left">left</div>
            <div class="flex-col flex-col-expand">center</div>
            <div class="flex-col flex-col-expand text-right">right</div>
        </div>
    </div>
</div>
```

> Add gutters to a specific card card column by using the class `flex-col-gutters`.

<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
            </div>
            <div class="flex-col flex-col-expand flex-col-gutters">
                <h4 class="card-title">So ristretto cappuccino</h4>
                <p class="card-text">Wings eu, pumpkin spice robusta.</p>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-md-6">
    <div class="card card-horizontal">
        <div class="card-row">
            <div class="flex-col">
                <img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif" style="width: 150px;">
            </div>

            <div class="flex-col flex-col-expand flex-col-gutters">
                <h4 class="card-title">So ristretto cappuccino</h4>

                <p class="card-text">Wings eu, pumpkin spice robusta.</p>
            </div>
        </div>
    </div>
</div>
```

</article>

<article id="6">

### Card Helper Classes

> Use classes `rounded`, `rounded-circle`, or `rounded-0` on the card to quickly shape the borders.

<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded">
		<div class="card-row">
			<div class="flex-col flex-col-expand">flex-col-expand</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>

<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded-circle">
		<div class="card-row">
			<div class="flex-col flex-col-expand" style="overflow:hidden;">
				<img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif">
			</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>

<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded-0">
		<div class="card-row">
			<div class="flex-col flex-col-expand">flex-col-expand</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>

```xml
<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded">
		<div class="card-row">
			<div class="flex-col flex-col-expand">flex-col-expand</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>

<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded-circle">
		<div class="card-row">
			<div class="flex-col flex-col-expand" style="overflow:hidden;">
				<img alt="thumbnail" class="card-item-first" src="/images/thumbnail_placeholder.gif">
			</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>

<div class="clay-site-horizontal-card col-md-4">
	<div class="card card-horizontal rounded-0">
		<div class="card-row">
			<div class="flex-col flex-col-expand">flex-col-expand</div>
			<div class="flex-col flex-col-expand">flex-col-expand</div>
		</div>
	</div>
</div>
```

> Use classes `card-item-first` and `card-item-last` on elements that appear at the beginning or ending of your card. It styles the border-radius to match the card's border-radius. These classes work similar to Bootstrap 4's `.card-img-top` and `.card-img-bottom` but also covers left and right.

<div class="col-6 col-md-4">
	<div class="card card-rounded" style="overflow: hidden;">
		<div class="aspect-ratio aspect-ratio-16-to-9 card-item-first">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
		<div class="card-body" style="text-align:center;">
			<h3 class="card-title">Joe Bloggs</h3>
			<h5 class="card-subtitle">Administrator</h5>
			<p class="card-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
		</div>
	</div>
</div>

<div class="col-12 col-md-6 col-sm-12">
	<div class="card card-horizontal card-rounded">
		<div class="align-top card-row">
			<div class="flex-col flex-col-expand flex-col-gutters">
				<h4 class="card-title">Space Program</h4>
				<div class="card-divider"></div>
				<p class="card-text">Because you live life on the edge of space.</p>
			</div>
			<div class="flex-col">
				<img class="card-item-last" src="/images/thumbnail_dock.jpg" style="width: 150px;" />
			</div>
		</div>
	</div>
</div>

```xml
<div class="col-6 col-md-4">
	<div class="card card-rounded" style="overflow: hidden;">
		<div class="aspect-ratio aspect-ratio-16-to-9 card-item-first">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>

		<div class="card-body" style="text-align:center;">
			<h3 class="card-title">Joe Bloggs</h3>
			<h5 class="card-subtitle">Administrator</h5>
			<p class="card-text">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</p>
		</div>
	</div>
</div>

<div class="col-12 col-md-6 col-sm-12">
	<div class="card card-horizontal card-rounded">
		<div class="align-top card-row">
			<div class="flex-col flex-col-expand flex-col-gutters">
				<h4 class="card-title">Space Program</h4>
				<div class="card-divider"></div>
				<p class="card-text">Because you live life on the edge of space.</p>
			</div>
			<div class="flex-col">
				<img class="card-item-last" src="/images/thumbnail_dock.jpg" style="width: 150px;" />
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="7">

### Card Dividers

> Use `<div class="divider"></div>` to create a horizontal division between content inside a card.

<div class="clay-site-horizontal-card col-md-6">
	<div class="card card-horizontal">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				flex-col-expand
			</div>
			<div class="flex-col flex-col-expand">
				<h4 class="card-title">Title</h4>
				<div class="card-divider"></div>
				<p class="card-text">flex-col-expand</p>
			</div>
		</div>
	</div>
</div>

```xml
<div class="clay-site-horizontal-card col-md-6">
	<div class="card card-horizontal">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				flex-col-expand
			</div>
			<div class="flex-col flex-col-expand">
				<h4 class="card-title">Title</h4>
				<div class="card-divider"></div>
				<p class="card-text">flex-col-expand</p>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="8">

### Checkbox Card

> We have created a pattern to add checkboxes to cards, just wrap the checkbox and card in:

```xml
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="checkbox">
    </label>
    <div class="card">...</div>
</div>
```

<div class="col-4">
	<div class="form-check form-check-card form-check-top-left">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox">
		</label>
		<div class="card">
			<div class="aspect-ratio card-item-first">
				<img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
				<span class="sticker sticker-bottom-left sticker-warning">PNG</span>
			</div>
			<div class="card-body">
				<div class="align-top card-row">
					<div class="flex-col flex-col-expand">
						<span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
						<span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
						<span class="truncate-text">Approved</span>
					</div>
					<div class="flex-col">
						<div class="dropdown">
							<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-8">
	<div class="form-check form-check-card form-check-middle-left">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="">
		</label>
		<div class="card card-horizontal">
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col">
						<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
					</div>
					<div class="flex-col flex-col-expand flex-col-gutters">
						<span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
					</div>
					<div class="flex-col">
						<div class="dropdown">
							<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="col-4">
	<div class="form-check form-check-card form-check-top-left">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox">
		</label>
		<div class="card">
			<div class="aspect-ratio card-item-first">
				<img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
				<span class="sticker sticker-bottom-left sticker-warning">PNG</span>
			</div>
			<div class="card-body">
				<div class="align-top card-row">
					<div class="flex-col flex-col-expand">
						<span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
						<span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
						<span class="truncate-text">Approved</span>
					</div>

					<div class="flex-col">
						<div class="dropdown">
							<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="col-8">
	<div class="form-check form-check-card form-check-middle-left">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="">
		</label>
		<div class="card card-horizontal">
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col">
						<span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
					</div>
					<div class="flex-col flex-col-expand flex-col-gutters">
						<span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
					</div>
					<div class="flex-col">
						<div class="dropdown">
							<a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="9">

### Clickable Checkbox Card

> To make the whole card clickable just wrap the checkbox and card in:

```xml
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="checkbox">
        <div class="card">...</div>
    </label>
</div>
```

<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox">
            <div class="card">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
                </div>
                <div class="card-body">
                    <div class="align-top card-row">
                        <div class="flex-col flex-col-expand">
                            <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                            <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                            <span class="truncate-text">Approved</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="">
            <div class="card card-horizontal">
                <div class="card-body">
                    <div class="card-row">
                        <div class="flex-col">
                            <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                        </div>
                        <div class="flex-col flex-col-expand flex-col-gutters">
                            <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

```xml
<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox">
            <div class="card">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
                </div>
                <div class="card-body">
                    <div class="align-top card-row">
                        <div class="flex-col flex-col-expand">
                            <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                            <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                            <span class="truncate-text">Approved</span>
                        </div>

                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="">
            <div class="card card-horizontal">
                <div class="card-body">
                    <div class="card-row">
                        <div class="flex-col">
                            <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                        </div>
                        <div class="flex-col flex-col-expand flex-col-gutters">
                            <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>
```

</article>

<article id="10">

### Radio Card

> We have created a pattern to add radio inputs to cards, just wrap the radio input and card in:

```xml
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="radio">
    </label>
    <div class="card">...</div>
</div>
```

<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios1" type="radio" value="cardOption1">
        </label>
        <div class="card">
            <div class="aspect-ratio card-item-first">
                <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
            </div>
            <div class="card-body">
                <div class="align-top card-row">
                    <div class="flex-col flex-col-expand">
                        <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                        <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                        <span class="truncate-text">Approved</span>
                    </div>
                    <div class="flex-col">
                        <div class="dropdown">
                            <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                <svg aria-hidden="true" class="lexicon-icon">
                                    <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#1">Download</a>
                                <a class="dropdown-item" href="#1">Edit</a>
                                <a class="dropdown-item" href="#1">Move</a>
                                <a class="dropdown-item" href="#1">Checkout</a>
                                <a class="dropdown-item" href="#1">Permissions</a>
                                <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios1" type="radio" value="cardOption2">
        </label>
        <div class="card card-horizontal">
            <div class="card-body">
                <div class="card-row">
                    <div class="flex-col">
                        <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                    </div>
                    <div class="flex-col flex-col-expand flex-col-gutters">
                        <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                    </div>
                    <div class="flex-col">
                        <div class="dropdown">
                            <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                <svg aria-hidden="true" class="lexicon-icon">
                                    <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#1">Download</a>
                                <a class="dropdown-item" href="#1">Edit</a>
                                <a class="dropdown-item" href="#1">Move</a>
                                <a class="dropdown-item" href="#1">Checkout</a>
                                <a class="dropdown-item" href="#1">Permissions</a>
                                <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```xml
<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios1" type="radio" value="cardOption1">
        </label>
        <div class="card">
            <div class="aspect-ratio card-item-first">
                <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
            </div>
            <div class="card-body">
                <div class="align-top card-row">
                    <div class="flex-col flex-col-expand">
                        <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                        <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                        <span class="truncate-text">Approved</span>
                    </div>

                    <div class="flex-col">
                        <div class="dropdown">
                            <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                <svg aria-hidden="true" class="lexicon-icon">
                                    <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#1">Download</a>
                                <a class="dropdown-item" href="#1">Edit</a>
                                <a class="dropdown-item" href="#1">Move</a>
                                <a class="dropdown-item" href="#1">Checkout</a>
                                <a class="dropdown-item" href="#1">Permissions</a>
                                <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios1" type="radio" value="cardOption2">
        </label>
        <div class="card card-horizontal">
            <div class="card-body">
                <div class="card-row">
                    <div class="flex-col">
                        <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                    </div>
                    <div class="flex-col flex-col-expand flex-col-gutters">
                        <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                    </div>
                    <div class="flex-col">
                        <div class="dropdown">
                            <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                <svg aria-hidden="true" class="lexicon-icon">
                                    <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#1">Download</a>
                                <a class="dropdown-item" href="#1">Edit</a>
                                <a class="dropdown-item" href="#1">Move</a>
                                <a class="dropdown-item" href="#1">Checkout</a>
                                <a class="dropdown-item" href="#1">Permissions</a>
                                <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

</article>

<article id="11">

### Clickable Radio Card

> To make the whole card clickable just wrap the radio input and card in:

```xml
<div class="form-check form-check-card form-check-top-left">
    <label class="form-check-label">
        <input class="form-check-input" type="radio">
        <div class="card">...</div>
    </label>
</div>
```

<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios" type="radio" value="cardOption1">
            <div class="card">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
                </div>
                <div class="card-body">
                    <div class="align-top card-row">
                        <div class="flex-col flex-col-expand">
                            <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                            <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                            <span class="truncate-text">Approved</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios" type="radio" value="cardOption2">
            <div class="card card-horizontal">
                <div class="card-body">
                    <div class="card-row">
                        <div class="flex-col">
                            <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                        </div>
                        <div class="flex-col flex-col-expand flex-col-gutters">
                            <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

```xml
<div class="col-4">
    <div class="form-check form-check-card form-check-top-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios" type="radio" value="cardOption1">
            <div class="card">
                <div class="aspect-ratio card-item-first">
                    <img alt="thumbnail" src="/images/thumbnail_coffee.jpg">
                    <span class="sticker sticker-bottom-left sticker-warning">PNG</span>
                </div>
                <div class="card-body">
                    <div class="align-top card-row">
                        <div class="flex-col flex-col-expand">
                            <span class="truncate-text">Aldcott Gage George Polwarth-Kitchener</span>
                            <span class="truncate-text" title="thumbnail_dock.jpg">thumbnail_dock.jpg</span>
                            <span class="truncate-text">Approved</span>
                        </div>

                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>

<div class="col-8">
    <div class="form-check form-check-card form-check-middle-left">
        <label class="form-check-label">
            <input class="form-check-input" name="cardRadios" type="radio" value="cardOption2">
            <div class="card card-horizontal">
                <div class="card-body">
                    <div class="card-row">
                        <div class="flex-col">
                            <span class="icon-folder-close-alt sticker sticker-lg sticker-secondary"></span>
                        </div>
                        <div class="flex-col flex-col-expand flex-col-gutters">
                            <span class="truncate-text" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        </div>
                        <div class="flex-col">
                            <div class="dropdown">
                                <a class="card-link dropdown-toggle icon-monospaced" data-toggle="dropdown" href="#1">
                                    <svg aria-hidden="true" class="lexicon-icon">
                                        <use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#1">Download</a>
                                    <a class="dropdown-item" href="#1">Edit</a>
                                    <a class="dropdown-item" href="#1">Move</a>
                                    <a class="dropdown-item" href="#1">Checkout</a>
                                    <a class="dropdown-item" href="#1">Permissions</a>
                                    <a class="dropdown-item" href="#1">Move to Recycle Bin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</div>
```

</article>
