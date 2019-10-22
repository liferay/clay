---
title: 'Color Picker'
description: 'Color picker lets users select a color from a predefined palette, specify a color via its hexadecimal value, sample a color, and explore color values to create a custom color variation.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [Variations](#variations)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/picker-color/">Color Picker Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	This requires custom javascript.
</div>

## Example

<div class="sheet-example">
	<label for="clayColor1DropdownToggle">Background Color</label>
	<div class="clay-color input-group">
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<div class="input-group-text">
				<button aria-expanded="false" aria-haspopup="true" aria-label="Select a color" class="btn clay-color-btn dropdown-toggle" data-toggle="dropdown" id="clayColor1DropdownToggle" title="#B2EDFF" type="button" style="background-color:#B2EDFF;"></button>
				<div aria-labelledby="clayColor1DropdownToggle" class="clay-color-dropdown-menu dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(8px, 32px, 0px);">
					<div class="clay-color-swatch">
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#000000" style="background-color:#000000;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#5F5F5F" style="background-color:#5F5F5F;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#9A9A9A" style="background-color:#9A9A9A;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#CBCBCB" style="background-color:#CBCBCB;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#E1E1E1" style="background-color:#E1E1E1;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FF0D0D" style="background-color:#FF0D0D;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FF8A1C" style="background-color:#FF8A1C;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#2BA676" style="background-color:#2BA676;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#006EF8" style="background-color:#006EF8;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#7F26FF" style="background-color:#7F26FF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FF21A0" style="background-color:#FF21A0;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FF5F5F" style="background-color:#FF5F5F;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFB46E" style="background-color:#FFB46E;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#50D2A0" style="background-color:#50D2A0;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#4B9BFF" style="background-color:#4B9BFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#AF78FF" style="background-color:#AF78FF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FF73C3" style="background-color:#FF73C3;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFB1B1" style="background-color:#FFB1B1;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFDEC0" style="background-color:#FFDEC0;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#91E3C3" style="background-color:#91E3C3;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#9DC8FF" style="background-color:#9DC8FF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#DFCAFF" style="background-color:#DFCAFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFC5E6" style="background-color:#FFC5E6;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFD9D9" style="background-color:#FFD9D9;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFF3E8" style="background-color:#FFF3E8;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#B1EBD5" style="background-color:#B1EBD5;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#C5DFFF" style="background-color:#C5DFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#F8F2FF" style="background-color:#F8F2FF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#FFEDF7" style="background-color:#FFEDF7;"></button>
						</div>
					</div>
					<div class="clay-color-header">
						<span class="component-title">Custom Colors</span>
						<button class="component-action" id="claySiteShowView2" type="button">
							<svg class="lexicon-icon lexicon-icon-drop" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#drop" />
							</svg>
						</button>
					</div>
					<div class="clay-color-swatch">
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn focus" title="#B2EDFF" style="background-color:#B2EDFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#45EDC5" style="background-color:#45EDC5;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#BEDA70" style="background-color:#BEDA70;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#DB5959" style="background-color:#DB5959;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#36466D" style="background-color:#36466D;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn" title="#55ADFF" style="background-color:#55ADFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
						<div class="clay-color-swatch-item">
							<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="input-group-append input-group-item">
			<input aria-label="Color selection is #B2EDFF" class="form-control" id="clayColor1" type="text" value="#B2EDFF">
		</div>
	</div>
</div>

```html
<label for="clayColor1DropdownToggle">Background Color</label>
<div class="clay-color input-group">
	<div class="input-group-item input-group-item-shrink input-group-prepend">
		<div class="input-group-text">
			<button
				aria-expanded="false"
				aria-haspopup="true"
				aria-label="Select a color"
				class="btn clay-color-btn dropdown-toggle"
				data-toggle="dropdown"
				id="clayColor1DropdownToggle"
				title="#B2EDFF"
				type="button"
				style="background-color:#B2EDFF;"
			></button>
			<div
				aria-labelledby="clayColor1DropdownToggle"
				class="clay-color-dropdown-menu dropdown-menu"
				x-placement="bottom-start"
				style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(8px, 32px, 0px);"
			>
				<div class="clay-color-swatch">
					<div class="clay-color-swatch-item">
						<button
							class="btn clay-color-btn"
							title="#000000"
							style="background-color:#000000;"
						></button>
					</div>
				</div>
				<div class="clay-color-header">
					<span class="component-title">Custom Colors</span>
					<button
						class="component-action"
						id="claySiteShowView2"
						type="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-drop"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#drop" />
						</svg>
					</button>
				</div>
				<div class="clay-color-swatch">
					<div class="clay-color-swatch-item">
						<button
							class="btn clay-color-btn focus"
							title="#B2EDFF"
							style="background-color:#B2EDFF;"
						></button>
					</div>
					<div class="clay-color-swatch-item">
						<button
							class="btn clay-color-btn clay-color-btn-bordered"
							title="#FFFFFF"
							style="background-color:#FFFFFF;"
						></button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="input-group-append input-group-item">
		<input
			aria-label="Color selection is #B2EDFF"
			class="form-control"
			id="clayColor1"
			type="text"
			value="#B2EDFF"
		/>
	</div>
</div>
```

## Variations

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div class="clay-color-dropdown-menu dropdown-menu show">
			<div class="clay-color-swatch">
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFB1B1" style="background-color:#FFB1B1;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#50D2A0" style="background-color:#50D2A0;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF5F5F" style="background-color:#FF5F5F;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#55ADFF" style="background-color:#55ADFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#AF78FF" style="background-color:#AF78FF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF73C3" style="background-color:#FF73C3;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#4B9BFF" style="background-color:#4B9BFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF73C3" style="background-color:#FF73C3;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#91E3C3" style="background-color:#91E3C3;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-color-dropdown-menu dropdown-menu show">
	<div class="clay-color-swatch">
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn"
				title="#FFB1B1"
				style="background-color:#FFB1B1;"
			></button>
		</div>
		...
	</div>
</div>
```

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div class="clay-color-dropdown-menu dropdown-menu show">
			<div class="clay-color-swatch">
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#000000" style="background-color:#000000;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#5F5F5F" style="background-color:#5F5F5F;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#9A9A9A" style="background-color:#9A9A9A;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#CBCBCB" style="background-color:#CBCBCB;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#E1E1E1" style="background-color:#E1E1E1;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF0D0D" style="background-color:#FF0D0D;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF8A1C" style="background-color:#FF8A1C;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#2BA676" style="background-color:#2BA676;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#006EF8" style="background-color:#006EF8;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#7F26FF" style="background-color:#7F26FF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF21A0" style="background-color:#FF21A0;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF5F5F" style="background-color:#FF5F5F;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFB46E" style="background-color:#FFB46E;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#50D2A0" style="background-color:#50D2A0;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#4B9BFF" style="background-color:#4B9BFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#AF78FF" style="background-color:#AF78FF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FF73C3" style="background-color:#FF73C3;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFB1B1" style="background-color:#FFB1B1;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFDEC0" style="background-color:#FFDEC0;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#91E3C3" style="background-color:#91E3C3;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#9DC8FF" style="background-color:#9DC8FF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#DFCAFF" style="background-color:#DFCAFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFC5E6" style="background-color:#FFC5E6;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFD9D9" style="background-color:#FFD9D9;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFF3E8" style="background-color:#FFF3E8;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#B1EBD5" style="background-color:#B1EBD5;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#C5DFFF" style="background-color:#C5DFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#F8F2FF" style="background-color:#F8F2FF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#FFEDF7" style="background-color:#FFEDF7;"></button>
				</div>
			</div>
			<div class="clay-color-header">
				<span class="component-title">Custom Colors</span>
				<button class="component-action" type="button">
					<svg class="lexicon-icon lexicon-icon-drop" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#drop" />
					</svg>
				</button>
			</div>
			<div class="clay-color-swatch">
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn focus" title="#B2EDFF" style="background-color:#B2EDFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#45EDC5" style="background-color:#45EDC5;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#BEDA70" style="background-color:#BEDA70;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#DB5959" style="background-color:#DB5959;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#36466D" style="background-color:#36466D;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#55ADFF" style="background-color:#55ADFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-color-dropdown-menu dropdown-menu show">
	<div class="clay-color-swatch">
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn"
				title="#000000"
				style="background-color:#000000;"
			></button>
		</div>
	</div>
	<div class="clay-color-header">
		<span class="component-title">Custom Colors</span>
		<button class="component-action" type="button">
			<svg
				class="lexicon-icon lexicon-icon-drop"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#drop" />
			</svg>
		</button>
	</div>
	<div class="clay-color-swatch">
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn focus"
				title="#B2EDFF"
				style="background-color:#B2EDFF;"
			></button>
		</div>
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn clay-color-btn-bordered"
				title="#FFFFFF"
				style="background-color:#FFFFFF;"
			></button>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div class="clay-color-dropdown-menu dropdown-menu show">
			<div class="clay-color-header">
				<span class="component-title">Custom Colors</span>
				<button class="close" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="clay-color-swatch">
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn focus" title="#B2EDFF" style="background-color:#B2EDFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#45EDC5" style="background-color:#45EDC5;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#BEDA70" style="background-color:#BEDA70;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#DB5959" style="background-color:#DB5959;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#36466D" style="background-color:#36466D;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn" title="#55ADFF" style="background-color:#55ADFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
				<div class="clay-color-swatch-item">
					<button class="btn clay-color-btn clay-color-btn-bordered" title="#FFFFFF" style="background-color:#FFFFFF;"></button>
				</div>
			</div>
			<div class="clay-color-map-group">
				<div class="clay-color-map-hsb clay-color-map" style="background-color:rgb(180,237,254);">
					<button class="clay-color-pointer clay-color-map-pointer" style="top: 0px; left: 130px;background-color: rgb(180, 237, 254);" type="button"></button>
				</div>
				<div class="clay-color-map-values">
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-item">
								<input class="form-control input-group-inset input-group-inset-before" id="clayColor3Red" type="text" value="180">
								<label class="input-group-inset-item input-group-inset-item-before" for="clayColor3Red">
									R
								</label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-item">
								<input class="form-control input-group-inset input-group-inset-before" id="clayColor3Green" type="text" value="237">
								<label class="input-group-inset-item input-group-inset-item-before" for="clayColor3Green">
									G
								</label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<div class="input-group-item">
								<input class="form-control input-group-inset input-group-inset-before" id="clayColor3Blue" type="text" value="254">
								<label class="input-group-inset-item input-group-inset-item-before" for="clayColor3Blue">
									B
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="clay-color-range clay-color-range-hue">
				<button class="clay-color-pointer clay-color-range-pointer" type="button" style="left: 98px; background-color: rgb(180,237,254);"></button>
			</div>
			<div class="clay-color-footer">
				<div class="form-group">
					<input class="form-control" type="text" value="#B2EDFF">
				</div>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-item">
							<input class="form-control input-group-inset input-group-inset-before" id="hexInput" type="text" value="B2EDFF">
							<label class="input-group-inset-item input-group-inset-item-before" for="hexInput">
								#
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="clay-color-dropdown-menu dropdown-menu show">
	<div class="clay-color-header">
		<span class="component-title">Custom Colors</span>
		<button class="close" type="button">
			<svg
				class="lexicon-icon lexicon-icon-times"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#times" />
			</svg>
		</button>
	</div>
	<div class="clay-color-swatch">
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn focus"
				title="#B2EDFF"
				style="background-color:#B2EDFF;"
			></button>
		</div>
		<div class="clay-color-swatch-item">
			<button
				class="btn clay-color-btn"
				title="#45EDC5"
				style="background-color:#45EDC5;"
			></button>
		</div>
	</div>
	<div class="clay-color-map-group">
		<div
			class="clay-color-map-hsb clay-color-map"
			style="background-color:rgb(180,237,254);"
		>
			<button
				class="clay-color-pointer clay-color-map-pointer"
				style="top: 0px; left: 130px;background-color: rgb(180, 237, 254);"
				type="button"
			></button>
		</div>
		<div class="clay-color-map-values">
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-item">
						<input
							class="form-control input-group-inset input-group-inset-before"
							id="clayColor3Red"
							type="text"
							value="180"
						/>
						<label
							class="input-group-inset-item input-group-inset-item-before"
							for="clayColor3Red"
						>
							R
						</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-item">
						<input
							class="form-control input-group-inset input-group-inset-before"
							id="clayColor3Green"
							type="text"
							value="237"
						/>
						<label
							class="input-group-inset-item input-group-inset-item-before"
							for="clayColor3Green"
						>
							G
						</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-item">
						<input
							class="form-control input-group-inset input-group-inset-before"
							id="clayColor3Blue"
							type="text"
							value="254"
						/>
						<label
							class="input-group-inset-item input-group-inset-item-before"
							for="clayColor3Blue"
						>
							B
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="clay-color-range clay-color-range-hue">
		<button
			class="clay-color-pointer clay-color-range-pointer"
			type="button"
			style="left: 98px; background-color: rgb(180,237,254);"
		></button>
	</div>
	<div class="clay-color-footer">
		<div class="form-group">
			<input class="form-control" type="text" value="#B2EDFF" />
		</div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-item">
					<input
						class="form-control input-group-inset input-group-inset-before"
						id="hexInput"
						type="text"
						value="B2EDFF"
					/>
					<label
						class="input-group-inset-item input-group-inset-item-before"
						for="hexInput"
					>
						#
					</label>
				</div>
			</div>
		</div>
	</div>
</div>
```
