---
title: "Multi Step Form"
---

### Description

A multi step form, also known as a wizard, is a determinate progress bar used in long processes that divides the main task into subtasks. The wizard lets the user quickly identify their current progress in completing the task and navigate forwards and backwards between steps if needed.

<div class="alert alert-info">Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/multi-step-form/">Multi Step Form Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Multi Step Nav Collapse Sm

<div class="sheet">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_qp5smlbv5">Step 01</div>
				<a aria-labelledby="_qp5smlbv5" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_93b0o5gfh">Step 02</div>
				<a aria-labelledby="_93b0o5gfh" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_g99s0pnag">Step 03</div>
				<a aria-labelledby="_g99s0pnag" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
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
				<div class="multi-step-indicator-label" id="_qfwpcd5hp">Step 05</div>
				<a aria-expanded="false" aria-haspopup="true" aria-labelledby="_qfwpcd5hp" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a class="active complete dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</div>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_vxck2jkj9">Step 09</div>
				<a aria-labelledby="_vxck2jkj9" class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_h1m6dba9z">Step 10</div>
				<a aria-labelledby="_h1m6dba9z" class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_qp5smlbv5">Step 01</div>
			<a aria-labelledby="_qp5smlbv5" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_93b0o5gfh">Step 02</div>
			<a aria-labelledby="_93b0o5gfh" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_g99s0pnag">Step 03</div>
			<a aria-labelledby="_g99s0pnag" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
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
			<div class="multi-step-indicator-label" id="_qfwpcd5hp">Step 05</div>
			<a aria-expanded="false" aria-haspopup="true" aria-labelledby="_qfwpcd5hp" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
				<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<div class="dropdown-menu dropdown-menu-indicator-end">
				<a class="active complete dropdown-item" href="#1">
					5. Step Five
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					6. Step Six
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					7. Step Seven
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="dropdown-item" href="#1">
					8. Step Eight
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</span>
				</a>
			</div>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_vxck2jkj9">Step 09</div>
			<a aria-labelledby="_vxck2jkj9" class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_h1m6dba9z">Step 10</div>
			<a aria-labelledby="_h1m6dba9z" class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
		</div>
	</li>
</ol>
```

### Multi Step Nav Collapse Sm with Title

<div class="sheet">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_qxbtq6qg3">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_9j6j0alka _qxbtq6qg3">Step 01</div>
				<a aria-labelledby="_9j6j0alka" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_73xqzjjkm">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_119vbzea3">Step 02</div>
				<a aria-labelledby="_119vbzea3 _73xqzjjkm" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_ac8qgykgu">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_ufo6p3nnv">Step 03</div>
				<a aria-labelledby="_ufo6p3nnv _ac8qgykgu" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_1h5i6m663">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_71r9b4ydi">Step 04</div>
				<a aria-labelledby="_71r9b4ydi _1h5i6m663" class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-indicator-end">
					<li>
						<a class="dropdown-item" href="#1">
							5. Step Five
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							6. Step Six
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							7. Step Seven
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							8. Step Eight
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_89sarz1ye">Payment Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_h86xgs7qm">Step 09</div>
				<a aria-labelledby="_h86xgs7qm _89sarz1ye" class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_x98okj1lr">Step 10</div>
				<a aria-labelledby="_x98okj1lr" class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_qxbtq6qg3">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_9j6j0alka _qxbtq6qg3">Step 01</div>
			<a aria-labelledby="_9j6j0alka" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_73xqzjjkm">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_119vbzea3">Step 02</div>
			<a aria-labelledby="_119vbzea3 _73xqzjjkm" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_ac8qgykgu">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_ufo6p3nnv">Step 03</div>
			<a aria-labelledby="_ufo6p3nnv _ac8qgykgu" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_1h5i6m663">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_71r9b4ydi">Step 04</div>
			<a aria-labelledby="_71r9b4ydi _1h5i6m663" class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="dropdown multi-step-indicator">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
				<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<ul class="dropdown-menu dropdown-menu-indicator-end">
				<li>
					<a class="dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_89sarz1ye">Payment Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_h86xgs7qm">Step 09</div>
			<a aria-labelledby="_h86xgs7qm _89sarz1ye" class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_x98okj1lr">Step 10</div>
			<a aria-labelledby="_x98okj1lr" class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
		</div>
	</li>
</ol>
```

### Multi Step Nav with Fixed Width Items

<div class="sheet">
	<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_8rqmtymqf">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_jrxrt1z9c">01</div>
				<a aria-labelledby="_jrxrt1z9c _8rqmtymqf" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_1uge8z4bh">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_qwj14wxtj">02</div>
				<a aria-labelledby="_qwj14wxtj _1uge8z4bh" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_jhp0n5wyd">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_901v9jst4">03</div>
				<a aria-labelledby="_901v9jst4 _jhp0n5wyd" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_mk8ioqwf2">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_8pn720quz">04</div>
				<a aria-labelledby="_8pn720quz _mk8ioqwf2" class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-title" id="_97lntiwl7">Submit Payment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label" id="_f22icnc6w">05</div>
				<a aria-labelledby="_f22icnc6w _97lntiwl7" class="multi-step-icon" data-multi-step-icon="5" href="#1"></a>
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
<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_8rqmtymqf">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_jrxrt1z9c">01</div>
			<a aria-labelledby="_jrxrt1z9c _8rqmtymqf" class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_1uge8z4bh">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_qwj14wxtj">02</div>
			<a aria-labelledby="_qwj14wxtj _1uge8z4bh" class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_jhp0n5wyd">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_901v9jst4">03</div>
			<a aria-labelledby="_901v9jst4 _jhp0n5wyd" class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_mk8ioqwf2">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_8pn720quz">04</div>
			<a aria-labelledby="_8pn720quz _mk8ioqwf2" class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-title" id="_97lntiwl7">Submit Payment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label" id="_f22icnc6w">05</div>
			<a aria-labelledby="_f22icnc6w _97lntiwl7" class="multi-step-icon" data-multi-step-icon="5" href="#1"></a>
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
