---
title: 'Text Input Localizable'
description: 'A text input variation used in fields that can be translated into multiple languages.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [Textarea](#textarea)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/text-input-localizable/">Text Input Localizable Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

## Example

<div class="sheet-example">
	<div class="form-group">
		<label for="localizableInput1">Liferay</label>
		<div class="form-text">http://www.liferay.com</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">/</span>
			</div>
			<div class="input-group-append input-group-item">
				<input class="form-control" id="localizableInput1" placeholder="es-es/clay" type="text" value="es-es/clay">
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
		<div class="form-text">http://www.liferay.com/en-us/clay</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="localizableInput1">Liferay</label>
	<div class="form-text">http://www.liferay.com</div>
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">/</span>
		</div>
		<div class="input-group-append input-group-item">
			<input
				class="form-control"
				id="localizableInput1"
				placeholder="es-es/clay"
				type="text"
				value="es-es/clay"
			/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-monospaced btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-es-es"
						focusable="false"
						role="presentation"
					>
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
									<svg
										class="lexicon-icon lexicon-icon-en-us"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#en-us"
										></use>
									</svg>
								</span>
								en-US
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-info">
								<span class="label-item label-item-expand"
									>Default</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-en-gb"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#en-gb"
										></use>
									</svg>
								</span>
								en-GB
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand"
									>Translated</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="active autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-es-es"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#es-es"
										></use>
									</svg>
								</span>
								es-ES
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand"
									>Translated</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-fr-fr"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#fr-fr"
										></use>
									</svg>
								</span>
								fr-FR
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-warning">
								<span class="label-item label-item-expand"
									>Not Translated</span
								>
							</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="form-text">http://www.liferay.com/en-us/clay</div>
</div>
```

## Textarea

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeTextarea">Product Description</label>
		<div class="input-group">
			<div class="input-group-item">
				<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
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
		<div class="form-text">.form-text</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeTextarea">Product Description</label>
	<div class="input-group">
		<div class="input-group-item">
			<textarea
				class="form-control"
				id="basicInputTypeTextarea"
				placeholder="Placeholder"
			></textarea>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-monospaced btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-es-es"
						focusable="false"
						role="presentation"
					>
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
									<svg
										class="lexicon-icon lexicon-icon-en-us"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#en-us"
										></use>
									</svg>
								</span>
								en-US
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-info">
								<span class="label-item label-item-expand"
									>Default</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-en-gb"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#en-gb"
										></use>
									</svg>
								</span>
								en-GB
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand"
									>Translated</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="active autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-es-es"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#es-es"
										></use>
									</svg>
								</span>
								es-ES
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-success">
								<span class="label-item label-item-expand"
									>Translated</span
								>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<svg
										class="lexicon-icon lexicon-icon-fr-fr"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#fr-fr"
										></use>
									</svg>
								</span>
								fr-FR
							</span>
						</span>
						<span class="autofit-col">
							<span class="label label-warning">
								<span class="label-item label-item-expand"
									>Not Translated</span
								>
							</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="form-text">.form-text</div>
</div>
```
