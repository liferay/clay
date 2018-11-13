---
title: "Text Input Localizable"
---

### Description

A text input variation used in fields that can be translated into multiple languages.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input_localizable.html">Text Input Localizable Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Variations

#### Text area localizable

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeTextarea">Product Description</label>
		<div class="input-group">
			<div class="input-group-item">
				<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
								<use href="/images/icons/icons.svg#es-es"></use>
							</svg>
						</span>
					</span>
					<span class="btn-section">es-ES</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li>
						<a class="autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<span aria-label="icon-en-us" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-us">
												<use href="/images/icons/icons.svg#en-us"></use>
											</svg>
										</span>
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
										<span aria-label="icon-en-gb" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-gb">
												<use href="/images/icons/icons.svg#en-gb"></use>
											</svg>
										</span>
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
										<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
												<use href="/images/icons/icons.svg#es-es"></use>
											</svg>
										</span>
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
										<span aria-label="icon-fr-fr" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-fr-fr">
												<use href="/images/icons/icons.svg#fr-fr"></use>
											</svg>
										</span>
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
			<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				<span class="inline-item">
					<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
							<use href="/images/icons/icons.svg#es-es"></use>
						</svg>
					</span>
				</span>
				<span class="btn-section">es-ES</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<span aria-label="icon-en-us" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-us">
											<use href="/images/icons/icons.svg#en-us"></use>
										</svg>
									</span>
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
									<span aria-label="icon-en-gb" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-gb">
											<use href="/images/icons/icons.svg#en-gb"></use>
										</svg>
									</span>
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
									<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
											<use href="/images/icons/icons.svg#es-es"></use>
										</svg>
									</span>
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
									<span aria-label="icon-fr-fr" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-fr-fr">
											<use href="/images/icons/icons.svg#fr-fr"></use>
										</svg>
									</span>
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
```

#### Text input group localizable

<div class="sheet">
	<div class="form-group">
		<label for="localizableInput1">Liferay</label>
		<div class="form-text">http://www.liferay.com</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">/</span>
			</div>
			<div class="input-group-append input-group-item">
				<input class="form-control" id="localizableInput1" placeholder="es-es/clay" type="text" value="es-es/clay" />
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
								<use href="/images/icons/icons.svg#es-es"></use>
							</svg>
						</span>
					</span>
					<span class="btn-section">es-ES</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li>
						<a class="autofit-row dropdown-item" href="#1">
							<span class="autofit-col autofit-col-expand">
								<span class="autofit-section">
									<span class="inline-item inline-item-before">
										<span aria-label="icon-en-us" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-us">
												<use href="/images/icons/icons.svg#en-us"></use>
											</svg>
										</span>
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
										<span aria-label="icon-en-gb" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-gb">
												<use href="/images/icons/icons.svg#en-gb"></use>
											</svg>
										</span>
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
										<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
												<use href="/images/icons/icons.svg#es-es"></use>
											</svg>
										</span>
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
										<span aria-label="icon-fr-fr" class="lexicon-icon-container" role="img">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-fr-fr">
												<use href="/images/icons/icons.svg#fr-fr"></use>
											</svg>
										</span>
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
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">/</span>
		</div>
		<div class="input-group-append input-group-item">
			<input class="form-control" id="localizableInput1" placeholder="es-es/clay" type="text" value="es-es/clay"/>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				<span class="inline-item">
					<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
							<use href="/images/icons/icons.svg#es-es"></use>
						</svg>
					</span>
				</span>
				<span class="btn-section">es-ES</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li>
					<a class="autofit-row dropdown-item" href="#1">
						<span class="autofit-col autofit-col-expand">
							<span class="autofit-section">
								<span class="inline-item inline-item-before">
									<span aria-label="icon-en-us" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-us">
											<use href="/images/icons/icons.svg#en-us"></use>
										</svg>
									</span>
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
									<span aria-label="icon-en-gb" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-en-gb">
											<use href="/images/icons/icons.svg#en-gb"></use>
										</svg>
									</span>
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
									<span aria-label="icon-es-es" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-es-es">
											<use href="/images/icons/icons.svg#es-es"></use>
										</svg>
									</span>
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
									<span aria-label="icon-fr-fr" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-fr-fr">
											<use href="/images/icons/icons.svg#fr-fr"></use>
										</svg>
									</span>
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
		<div class="form-text">http://www.liferay.com/en-us/clay</div>
	</div>
</div>
```

