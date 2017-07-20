---
title: List Groups
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### List Group Item Flex

> Align content inside `.list-group-item` with flexbox with `.list-group-item-flex`.

> Use a combination of `.flex-col` and `.flex-col.flex-col-expand` to control the size of each cell.

<ul class="list-group">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h6 class="truncate-text">Alberto Calvo, modified 2 hours ago.</h6>
			<h4 class="truncate-text"><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a></h4>
			<h6 class="truncate-text">Approved</h6>
		</div>
		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h5>Bookmarks</h5>
			<h4><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a></h4>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>
		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>

		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>

		<div class="flex-col flex-col-expand">
			<h6 class="truncate-text">Alberto Calvo, modified 2 hours ago.</h6>
			<h4 class="truncate-text"><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a></h4>
			<h6 class="truncate-text">Approved</h6>
		</div>

		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>

	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>

		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>

		<div class="flex-col flex-col-expand">
			<h5>Bookmarks</h5>
			<h4><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a></h4>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>

		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="2">

### List Group Bordered

> Use `.list-group-bordered` on `.list-group` to style `.list-group-item-flex` like a table.

<ul class="list-group list-group-bordered">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h5>Larry Bird the best power forward in Celtic's history.</h5>
			<h6>Monica Bellucci</h6>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>
		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h5>Karl Malone the best power forward in Jazz history.</h5>
			<h6>Monica Bellucci</h6>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>
		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group list-group-bordered">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>

		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>

		<div class="flex-col flex-col-expand">
			<h5>Larry Bird the best power forward in Celtic's history.</h5>
			<h6>Monica Bellucci</h6>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>

		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>

	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input onclick="onClick(this);" type="checkbox" />
				</label>
			</div>
		</div>

		<div class="flex-col">
			<div class="sticker sticker-default sticker-lg sticker-static">
				<svg class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>

		<div class="flex-col flex-col-expand">
			<h5>Karl Malone the best power forward in Jazz history.</h5>
			<h6>Monica Bellucci</h6>
			<h6>
				<span>5 Folders</span>
				<span>4 Entries</span>
			</h6>
		</div>

		<div class="flex-col">
			<div class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
					<svg class="icon-monospaced lexicon-icon">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-left-side">
					<div class="dropdown-header">Dropdown Header</div>
					<a class="dropdown-item" href="#1">Action 1</a>
					<a class="dropdown-item" href="#1">Action 2</a>
					<a class="dropdown-item" href="#1">Action 3</a>
					<a class="dropdown-item" href="#1">Action 4</a>
					<a class="dropdown-item" href="#1">Action 5</a>
					<a class="dropdown-item" href="#1">Action 6</a>
					<a class="dropdown-item" href="#1">Action 7</a>
					<a class="dropdown-item" href="#1">Action 8</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="3">

### List Group Unstyled

> Use `.list-group-unstyled` on `.list-group` to remove default styles.

<ul class="list-group list-group-unstyled">
    <li class="list-group-item">List Item 1</li>
    <li class="list-group-item list-group-item-flex">
        <div class="flex-col flex-col-expand">
            <div class="h5">Larry Bird the best power forward in Celtic's history.</div>
            <div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
            <div class="h6">
                <span>5 Folders</span>
                <span>4 Entries</span>
            </div>
        </div>
        <div class="flex-col">
            <div class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#1">
                    <svg class="icon-monospaced lexicon-icon">
                        <use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
                    </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-left-side">
                    <div class="dropdown-header">Dropdown Header</div>
                    <a class="dropdown-item" href="#1">Action 1</a>
                    <a class="dropdown-item" href="#1">Action 2</a>
                    <a class="dropdown-item" href="#1">Action 3</a>
                    <a class="dropdown-item" href="#1">Action 4</a>
                    <a class="dropdown-item" href="#1">Action 5</a>
                    <a class="dropdown-item" href="#1">Action 6</a>
                    <a class="dropdown-item" href="#1">Action 7</a>
                    <a class="dropdown-item" href="#1">Action 8</a>
                </div>
            </div>
        </div>
    </li>
    <li class="list-group-item list-group-item-flex">
        <div class="flex-col flex-col-expand">
            <div class="h5">Karl Malone the best power forward in Jazz history.</div>
            <div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
            <div class="h6">
                <span>5 Folders</span>
                <span>4 Entries</span>
            </div>
        </div>
        <div class="flex-col">
            <div class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#1">
                    <svg class="icon-monospaced lexicon-icon">
                        <use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
                    </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-left-side">
                    <div class="dropdown-header">Dropdown Header</div>
                    <a class="dropdown-item" href="#1">Action 1</a>
                    <a class="dropdown-item" href="#1">Action 2</a>
                    <a class="dropdown-item" href="#1">Action 3</a>
                    <a class="dropdown-item" href="#1">Action 4</a>
                    <a class="dropdown-item" href="#1">Action 5</a>
                    <a class="dropdown-item" href="#1">Action 6</a>
                    <a class="dropdown-item" href="#1">Action 7</a>
                    <a class="dropdown-item" href="#1">Action 8</a>
                </div>
            </div>
        </div>
    </li>
</ul>

```xml
<ul class="list-group list-group-unstyled">
    <li class="list-group-item">List Item 1</li>
    <li class="list-group-item list-group-item-flex">
        <div class="flex-col flex-col-expand">
            <div class="h5">Larry Bird the best power forward in Celtic's history.</div>
            <div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
            <div class="h6">
                <span>5 Folders</span>
                <span>4 Entries</span>
            </div>
        </div>

        <div class="flex-col">
            <div class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#1">
                    <svg class="icon-monospaced lexicon-icon">
                        <use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
                    </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-left-side">
                    <div class="dropdown-header">Dropdown Header</div>
                    <a class="dropdown-item" href="#1">Action 1</a>
                    <a class="dropdown-item" href="#1">Action 2</a>
                    <a class="dropdown-item" href="#1">Action 3</a>
                    <a class="dropdown-item" href="#1">Action 4</a>
                    <a class="dropdown-item" href="#1">Action 5</a>
                    <a class="dropdown-item" href="#1">Action 6</a>
                    <a class="dropdown-item" href="#1">Action 7</a>
                    <a class="dropdown-item" href="#1">Action 8</a>
                </div>
            </div>
        </div>
    </li>

    <li class="list-group-item list-group-item-flex">
        <div class="flex-col flex-col-expand">
            <div class="h5">Karl Malone the best power forward in Jazz history.</div>
            <div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
            <div class="h6">
                <span>5 Folders</span>
                <span>4 Entries</span>
            </div>
        </div>

        <div class="flex-col">
            <div class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#1">
                    <svg class="icon-monospaced lexicon-icon">
                        <use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
                    </svg>
                </a>
                <div class="dropdown-menu dropdown-menu-left-side">
                    <div class="dropdown-header">Dropdown Header</div>
                    <a class="dropdown-item" href="#1">Action 1</a>
                    <a class="dropdown-item" href="#1">Action 2</a>
                    <a class="dropdown-item" href="#1">Action 3</a>
                    <a class="dropdown-item" href="#1">Action 4</a>
                    <a class="dropdown-item" href="#1">Action 5</a>
                    <a class="dropdown-item" href="#1">Action 6</a>
                    <a class="dropdown-item" href="#1">Action 7</a>
                    <a class="dropdown-item" href="#1">Action 8</a>
                </div>
            </div>
        </div>
    </li>
</ul>
```

</article>

<article id="4">

### List Group with Headings

> Nest `.list-group.list-group-flush` inside `.panel-group` and `.panel`.

<div class="panel-group">
	<div class="panel panel-secondary">
		<div class="panel-header">
			<div class="panel-title">
				<a class="panel-header-link" href="#1">Panel Title</a>
			</div>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item">List Item 1</li>
			<li class="list-group-item">List Item 2</li>
			<li class="list-group-item">List Item 3</li>
			<li class="list-group-item">List Item 4</li>
		</ul>
	</div>
	<div class="panel panel-secondary">
		<div class="panel-header">
			<div class="panel-title">
				<a class="panel-header-link" href="#1">Panel Title</a>
			</div>
		</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item list-group-item-flex">
				<div class="flex-col">
					<div class="checkbox">
						<label>
							<input onclick="onClick(this);" type="checkbox" />
						</label>
					</div>
				</div>
				<div class="flex-col">
					<div class="sticker sticker-default sticker-lg sticker-static">
						<svg class="lexicon-icon lexicon-icon-folder">
							<use xlink:href="/vendor/lexicon/icons.svg#folder" />
						</svg>
					</div>
				</div>
				<div class="flex-col flex-col-expand">
					<h6 class="truncate-text">Alberto Calvo, modified 2 hours ago.</h6>
					<h4 class="truncate-text"><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a></h4>
					<h6 class="truncate-text">Approved</h6>
				</div>
				<div class="flex-col">
					<div class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
							<svg class="icon-monospaced lexicon-icon">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-left-side">
							<div class="dropdown-header">Dropdown Header</div>
							<a class="dropdown-item" href="#1">Action 1</a>
							<a class="dropdown-item" href="#1">Action 2</a>
							<a class="dropdown-item" href="#1">Action 3</a>
							<a class="dropdown-item" href="#1">Action 4</a>
							<a class="dropdown-item" href="#1">Action 5</a>
							<a class="dropdown-item" href="#1">Action 6</a>
							<a class="dropdown-item" href="#1">Action 7</a>
							<a class="dropdown-item" href="#1">Action 8</a>
						</div>
					</div>
				</div>
			</li>
			<li class="list-group-item list-group-item-flex">
				<div class="flex-col">
					<div class="checkbox">
						<label>
							<input onclick="onClick(this);" type="checkbox" />
						</label>
					</div>
				</div>
				<div class="flex-col">
					<div class="sticker sticker-default sticker-lg sticker-static">
						<svg class="lexicon-icon lexicon-icon-folder">
							<use xlink:href="/vendor/lexicon/icons.svg#folder" />
						</svg>
					</div>
				</div>
				<div class="flex-col flex-col-expand">
					<h5>Bookmarks</h5>
					<h4><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a></h4>
					<h6>
						<span>5 Folders</span>
						<span>4 Entries</span>
					</h6>
				</div>
				<div class="flex-col">
					<div class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
							<svg class="icon-monospaced lexicon-icon">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-left-side">
							<div class="dropdown-header">Dropdown Header</div>
							<a class="dropdown-item" href="#1">Action 1</a>
							<a class="dropdown-item" href="#1">Action 2</a>
							<a class="dropdown-item" href="#1">Action 3</a>
							<a class="dropdown-item" href="#1">Action 4</a>
							<a class="dropdown-item" href="#1">Action 5</a>
							<a class="dropdown-item" href="#1">Action 6</a>
							<a class="dropdown-item" href="#1">Action 7</a>
							<a class="dropdown-item" href="#1">Action 8</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>

```xml
<div class="panel-group">
	<div class="panel panel-secondary">
		<div class="panel-header">
			<div class="panel-title">
				<a class="panel-header-link" href="#1">Panel Title</a>
			</div>
		</div>

		<ul class="list-group list-group-flush">
			<li class="list-group-item">List Item 1</li>
			<li class="list-group-item">List Item 2</li>
			<li class="list-group-item">List Item 3</li>
			<li class="list-group-item">List Item 4</li>
		</ul>
	</div>

	<div class="panel panel-secondary">
		<div class="panel-header">
			<div class="panel-title">
				<a class="panel-header-link" href="#1">Panel Title</a>
			</div>
		</div>

		<ul class="list-group list-group-flush">
			<li class="list-group-item list-group-item-flex">
				<div class="flex-col">
					<div class="checkbox">
						<label>
							<input onclick="onClick(this);" type="checkbox" />
						</label>
					</div>
				</div>

				<div class="flex-col">
					<div class="sticker sticker-default sticker-lg sticker-static">
						<svg class="lexicon-icon lexicon-icon-folder">
							<use xlink:href="/vendor/lexicon/icons.svg#folder" />
						</svg>
					</div>
				</div>

				<div class="flex-col flex-col-expand">
					<h6 class="truncate-text">Alberto Calvo, modified 2 hours ago.</h6>
					<h4 class="truncate-text"><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a></h4>
					<h6 class="truncate-text">Approved</h6>
				</div>

				<div class="flex-col">
					<div class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
							<svg class="icon-monospaced lexicon-icon">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-left-side">
							<div class="dropdown-header">Dropdown Header</div>
							<a class="dropdown-item" href="#1">Action 1</a>
							<a class="dropdown-item" href="#1">Action 2</a>
							<a class="dropdown-item" href="#1">Action 3</a>
							<a class="dropdown-item" href="#1">Action 4</a>
							<a class="dropdown-item" href="#1">Action 5</a>
							<a class="dropdown-item" href="#1">Action 6</a>
							<a class="dropdown-item" href="#1">Action 7</a>
							<a class="dropdown-item" href="#1">Action 8</a>
						</div>
					</div>
				</div>
			</li>

			<li class="list-group-item list-group-item-flex">
				<div class="flex-col">
					<div class="checkbox">
						<label>
							<input onclick="onClick(this);" type="checkbox" />
						</label>
					</div>
				</div>

				<div class="flex-col">
					<div class="sticker sticker-default sticker-lg sticker-static">
						<svg class="lexicon-icon lexicon-icon-folder">
							<use xlink:href="/vendor/lexicon/icons.svg#folder" />
						</svg>
					</div>
				</div>

				<div class="flex-col flex-col-expand">
					<h5>Bookmarks</h5>
					<h4><a class="list-group-link" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a></h4>
					<h6>
						<span>5 Folders</span>
						<span>4 Entries</span>
					</h6>
				</div>

				<div class="flex-col">
					<div class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
							<svg class="icon-monospaced lexicon-icon">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-left-side">
							<div class="dropdown-header">Dropdown Header</div>
							<a class="dropdown-item" href="#1">Action 1</a>
							<a class="dropdown-item" href="#1">Action 2</a>
							<a class="dropdown-item" href="#1">Action 3</a>
							<a class="dropdown-item" href="#1">Action 4</a>
							<a class="dropdown-item" href="#1">Action 5</a>
							<a class="dropdown-item" href="#1">Action 6</a>
							<a class="dropdown-item" href="#1">Action 7</a>
							<a class="dropdown-item" href="#1">Action 8</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
```

</article>

<article id="5">

### List Group

<ul class="list-group">
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item">List Item 2</li>
	<li class="list-group-item">List Item 3</li>
	<li class="list-group-item">List Item 4</li>
</ul>

```xml
<ul class="list-group">
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item">List Item 2</li>
	<li class="list-group-item">List Item 3</li>
	<li class="list-group-item">List Item 4</li>
</ul>
```

</article>

<article id="6">

### List Group with Links and Buttons

<div class="list-group">
    <a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
    <a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
    <button class="list-group-item list-group-item-action">List Item 3</button>
    <a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
</div>

```xml
<div class="list-group">
    <a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
    <a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
    <button class="list-group-item list-group-item-action">List Item 3</button>
    <a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
</div>
```

</article>

<article id="7">

### Contextual List Group

<ul class="list-group">
	<li class="list-group-item list-group-item-success">List Item 1 - Success</li>
	<li class="list-group-item list-group-item-info">List Item 2 - Info</li>
	<li class="list-group-item list-group-item-warning">List Item 3 - Warning</li>
	<li class="list-group-item list-group-item-danger">List Item 4 - Danger</li>
</ul>

```xml
<ul class="list-group">
	<li class="list-group-item list-group-item-success">List Item 1 - Success</li>
	<li class="list-group-item list-group-item-info">List Item 2 - Info</li>
	<li class="list-group-item list-group-item-warning">List Item 3 - Warning</li>
	<li class="list-group-item list-group-item-danger">List Item 4 - Danger</li>
</ul>
```

</article>

<article id="8">

### Linked Contextual List Groups

<div class="row">
	<div class="col-sm-6">
		<div class="list-group">
			<a class="list-group-item list-group-item-action list-group-item-success" href="#1">List Item 1 - Success</a>
			<a class="list-group-item list-group-item-action list-group-item-info" href="#1">List Item 2 - Info</a>
			<a class="list-group-item list-group-item-action list-group-item-warning" href="#1">List Item 3 - Warning</a>
			<a class="list-group-item list-group-item-action list-group-item-danger" href="#1">List Item 4 - Danger</a>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="list-group">
			<a class="active list-group-item list-group-item-action list-group-item-success" href="#1">List Item 1 - Active Success</a>
			<a class="active list-group-item list-group-item-action list-group-item-info" href="#1">List Item 2 - Active Info</a>
			<a class="active list-group-item list-group-item-action list-group-item-warning" href="#1">List Item 3 - Active Warning</a>
			<a class="active list-group-item list-group-item-action list-group-item-danger" href="#1">List Item 4 - Active Danger</a>
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-sm-6">
		<div class="list-group">
			<a class="list-group-item list-group-item-action list-group-item-success" href="#1">List Item 1 - Success</a>
			<a class="list-group-item list-group-item-action list-group-item-info" href="#1">List Item 2 - Info</a>
			<a class="list-group-item list-group-item-action list-group-item-warning" href="#1">List Item 3 - Warning</a>
			<a class="list-group-item list-group-item-action list-group-item-danger" href="#1">List Item 4 - Danger</a>
		</div>
	</div>

	<div class="col-sm-6">
		<div class="list-group">
			<a class="active list-group-item list-group-item-action list-group-item-success" href="#1">List Item 1 - Active Success</a>
			<a class="active list-group-item list-group-item-action list-group-item-info" href="#1">List Item 2 - Active Info</a>
			<a class="active list-group-item list-group-item-action list-group-item-warning" href="#1">List Item 3 - Active Warning</a>
			<a class="active list-group-item list-group-item-action list-group-item-danger" href="#1">List Item 4 - Active Danger</a>
		</div>
	</div>
</div>
```

<script>
{literal}
var onClick = function(node) {
    console.log('clicked');
    $(node).closest('.list-group-item').toggleClass('active');
};
{/literal}
</script>

</article>