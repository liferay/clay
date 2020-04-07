---
title: 'Dual List Box'
description: 'Dual List Box provides users with two Select Boxes with the ability to move items between lists.'
---

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#aria_lh_form">WAI-ARIA</a> accessibility pratices for Form Elements when writting your markup.
</div>

<div class="sheet-example">
    <div class="form-group">
		<div class="clay-dual-listbox">
			<div class="clay-dual-listbox-item clay-dual-listbox-item-expand">
				<label for="_9d5cxj5xm">
					<span class="text-truncate-inline">
						<span class="text-truncate">In Use</span>
					</span>
				</label>
				<div class="clay-reorder clay-reorder-footer-end">
					<select class="form-control form-control-inset" id="_9d5cxj5xm" multiple size="7">
						<option value="twitter">Twitter</option>
						<option value="linkedin">Linkedin</option>
						<option value="facebook">Facebook</option>
					</select>
					<div class="clay-reorder-underlay form-control"></div>
					<div class="clay-reorder-footer">
						<div class="btn-group" role="group">
							<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
								<span class="inline-item">
									<svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
                                        <use xlink:href="/images/icons/icons.svg#caret-top" />
									</svg>
								</span>
							</button>
							<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
								<span class="inline-item">
									<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
    		<div class="clay-dual-listbox-item clay-dual-listbox-actions">
    			<div class="btn-group-vertical">
    				<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
    					<span class="inline-item">
    						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
    							<use xlink:href="/images/icons/icons.svg#caret-right" />
    						</svg>
    					</span>
    				</button>
    				<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
    					<span class="inline-item">
    						<svg class="lexicon-icon lexicon-icon-caret-left" focusable="false" role="presentation">
    							<use xlink:href="/images/icons/icons.svg#caret-left" />
    						</svg>
    					</span>
    				</button>
    			</div>
    		</div>
    		<div class="clay-dual-listbox-item clay-dual-listbox-item-expand">
    			<label for="_957gwvjvl">
    				<span class="text-truncate-inline">
    					<span class="text-truncate">Available</span>
    				</span>
    			</label>
    			<div class="clay-reorder">
    				<select class="form-control form-control-inset" id="_957gwvjvl" multiple size="7">
    					<option value="addthis">AddThis</option>
    					<option value="delicious">Delicious</option>
    					<option value="digg">Digg</option>
    					<option value="evernote">Evernote</option>
    				</select>
    				<div class="clay-reorder-underlay form-control"></div>
    			</div>
    		</div>
    	</div>
    </div>
</div>

```html
<div class="form-group">
	<div class="clay-dual-listbox">
		<div class="clay-dual-listbox-item clay-dual-listbox-item-expand">
			<label for="_9d5cxj5xm">
				<span class="text-truncate-inline">
					<span class="text-truncate">In Use</span>
				</span>
			</label>
			<div class="clay-reorder clay-reorder-footer-end">
				<select
					class="form-control form-control-inset"
					id="_9d5cxj5xm"
					multiple
					size="7"
				>
					<option value="twitter">Twitter</option>
					<option value="linkedin">Linkedin</option>
					<option value="facebook">Facebook</option>
				</select>
				<div class="clay-reorder-underlay form-control"></div>
				<div class="clay-reorder-footer">
					<div class="btn-group" role="group">
						<button
							class="btn btn-monospaced btn-secondary btn-sm"
							type="button"
						>
							<span class="inline-item">
								<svg
									class="lexicon-icon lexicon-icon-caret-top"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#caret-top"
									/>
								</svg>
							</span>
						</button>
						<button
							class="btn btn-monospaced btn-secondary btn-sm"
							type="button"
						>
							<span class="inline-item">
								<svg
									class="lexicon-icon lexicon-icon-caret-bottom"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#caret-bottom"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="clay-dual-listbox-item clay-dual-listbox-actions">
			<div class="btn-group-vertical">
				<button
					class="btn btn-monospaced btn-secondary btn-sm"
					type="button"
				>
					<span class="inline-item">
						<svg
							class="lexicon-icon lexicon-icon-caret-right"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-right"
							/>
						</svg>
					</span>
				</button>
				<button
					class="btn btn-monospaced btn-secondary btn-sm"
					type="button"
				>
					<span class="inline-item">
						<svg
							class="lexicon-icon lexicon-icon-caret-left"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-left"
							/>
						</svg>
					</span>
				</button>
			</div>
		</div>
		<div class="clay-dual-listbox-item clay-dual-listbox-item-expand">
			<label for="_957gwvjvl">
				<span class="text-truncate-inline">
					<span class="text-truncate">Available</span>
				</span>
			</label>
			<div class="clay-reorder">
				<select
					class="form-control form-control-inset"
					id="_957gwvjvl"
					multiple
					size="7"
				>
					<option value="addthis">AddThis</option>
					<option value="delicious">Delicious</option>
					<option value="digg">Digg</option>
					<option value="evernote">Evernote</option>
				</select>
				<div class="clay-reorder-underlay form-control"></div>
			</div>
		</div>
	</div>
</div>
```
