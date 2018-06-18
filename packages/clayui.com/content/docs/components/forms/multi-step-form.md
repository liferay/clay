---
title: "Multi Step Form"
---

### Description

A multi step form, also known as wizard, is a determinate progress bar. This progress bar is used in long processes dividing the main task in subtasks that will help your users completing the process.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/multiStepForm.html">Multi Step Form Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="multi-step-nav-collapse-sm">
<h3 class="component-title">
	<a href="#multi-step-nav-collapse-sm">Multi Step Nav Collapse Sm</a>
</h3>

<div class="sheet">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
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
				<div class="multi-step-indicator-label">Step 05</div>
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a class="active complete dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</div>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
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
			<div class="multi-step-indicator-label">Step 05</div>
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<div class="dropdown-menu dropdown-menu-indicator-end">
				<a class="active complete dropdown-item" href="#1">
					5. Step Five
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					6. Step Six
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					7. Step Seven
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="dropdown-item" href="#1">
					8. Step Eight
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
			</div>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-collapse-sm-with-title">
<h3 class="component-title">
	<a href="#multi-step-nav-collapse-sm-with-title">Multi Step Nav Collapse Sm with Title</a>
</h3>

<div class="sheet">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-indicator-end">
					<li>
						<a class="dropdown-item" href="#1">
							5. Step Five
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
									<use xlink:href="/vendor/lexicon/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							6. Step Six
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
									<use xlink:href="/vendor/lexicon/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							7. Step Seven
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
									<use xlink:href="/vendor/lexicon/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							8. Step Eight
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
									<use xlink:href="/vendor/lexicon/icons.svg#check" />
								</svg>
							</span>
						</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Payment Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<a class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="dropdown multi-step-indicator">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<ul class="dropdown-menu dropdown-menu-indicator-end">
				<li>
					<a class="dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Payment Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<a class="multi-step-icon" data-multi-step-icon="Fin" href="#1"></a>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-with-fixed-width-items">
<h3 class="component-title">
	<a href="#multi-step-nav-with-fixed-width-items">Multi Step Nav with Fixed Width Items</a>
</h3>

<div class="sheet">
	<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Submit Payment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">05</div>
				<a class="multi-step-icon" data-multi-step-icon="5" href="#1"></a>
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

```text/html
<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="disabled multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Submit Payment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<a class="multi-step-icon" data-multi-step-icon="5" href="#1"></a>
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

</article>
