# Atlas Theme Load Order (atlas.scss)

## Clay CSS Sass Functions.

> These are Sass functions used in Clay and should be declared first so that they are available for variables, mixins, and components.

```
src/scss/functions/_global-functions.scss
```

## Clay CSS Atlas Theme Variables

```
src/scss/atlas/variables/_globals.scss
src/scss/atlas/variables/_alerts.scss
src/scss/atlas/variables/_badges.scss
src/scss/atlas/variables/_breadcrumbs.scss
src/scss/atlas/variables/_buttons.scss
src/scss/atlas/variables/_labels.scss
src/scss/atlas/variables/_stickers.scss
src/scss/atlas/variables/_cards.scss
src/scss/atlas/variables/_dropdowns.scss
src/scss/atlas/variables/_forms.scss
src/scss/atlas/variables/_links.scss
src/scss/atlas/variables/_custom-forms.scss
src/scss/atlas/variables/_icons.scss
src/scss/atlas/variables/_list-group.scss
src/scss/atlas/variables/_loaders.scss
src/scss/atlas/variables/_modals.scss
src/scss/atlas/variables/_multi-step-nav.scss
src/scss/atlas/variables/_navs.scss
src/scss/atlas/variables/_menubar.scss
src/scss/atlas/variables/_navbar.scss
src/scss/atlas/variables/_application-bar.scss
src/scss/atlas/variables/_management-bar.scss
src/scss/atlas/variables/_navigation-bar.scss
src/scss/atlas/variables/_pagination.scss
src/scss/atlas/variables/_panels.scss
src/scss/atlas/variables/_popovers.scss
src/scss/atlas/variables/_progress-bars.scss
src/scss/atlas/variables/_quick-action.scss
src/scss/atlas/variables/_sheets.scss
src/scss/atlas/variables/_sidebar.scss
src/scss/atlas/variables/_tables.scss
src/scss/atlas/variables/_tbar.scss
src/scss/atlas/variables/_timelines.scss
src/scss/atlas/variables/_toggle-switch.scss
src/scss/atlas/variables/_tooltip.scss
src/scss/atlas/variables/_type.scss
src/scss/atlas/variables/_utilities.scss
```

## Clay CSS Bootstrap 4 Variable Overwrites

> We use this file for the most destructive Bootstrap 4 variables. We use SVG icons for our dropdown carets, therefore prefer to have settings like `$enable-caret: false !default;` instead of true.

```
src/scss/variables/_bs4-variable-overwrites.scss
```

## Bootstrap 4 Sass Functions

> These are Sass functions used in Bootstrap and are only available to Clay Base variables, mixins, and components. If you need to use any of Bootstrap's functions (e.g., `color-yiq()`) in your variables you need to import this file first.

```
src/scss/bootstrap/_functions.scss
```

## Bootstrap 4 Variables

```
src/scss/bootstrap/_variables.scss
```

## Bootstrap 4 Mixins

```
src/scss/bootstrap/mixins/_breakpoints.scss
src/scss/bootstrap/mixins/_hover.scss
src/scss/bootstrap/mixins/_image.scss
src/scss/bootstrap/mixins/_badge.scss
src/scss/bootstrap/mixins/_resize.scss
src/scss/bootstrap/mixins/_screen-reader.scss
src/scss/bootstrap/mixins/_size.scss
src/scss/bootstrap/mixins/_reset-text.scss
src/scss/bootstrap/mixins/_text-emphasis.scss
src/scss/bootstrap/mixins/_text-hide.scss
src/scss/bootstrap/mixins/_text-truncate.scss
src/scss/bootstrap/mixins/_visibility.scss
src/scss/bootstrap/mixins/_alert.scss
src/scss/bootstrap/mixins/_buttons.scss
src/scss/bootstrap/mixins/_caret.scss
src/scss/bootstrap/mixins/_pagination.scss
src/scss/bootstrap/mixins/_lists.scss
src/scss/bootstrap/mixins/_list-group.scss
src/scss/bootstrap/mixins/_nav-divider.scss
src/scss/bootstrap/mixins/_forms.scss
src/scss/bootstrap/mixins/_table-row.scss
src/scss/bootstrap/mixins/_background-variant.scss
src/scss/bootstrap/mixins/_border-radius.scss
src/scss/bootstrap/mixins/_box-shadow.scss
src/scss/bootstrap/mixins/_gradients.scss
src/scss/bootstrap/mixins/_transition.scss
src/scss/bootstrap/mixins/_clearfix.scss
src/scss/bootstrap/mixins/_grid-framework.scss
src/scss/bootstrap/mixins/_grid.scss
src/scss/bootstrap/mixins/_float.scss
```

## Bootstrap 4 CSS Variable Implementation (Browser support is sparse)

```
src/scss/bootstrap/_root.scss
```

## Bootstrap 4's version of Normalize.css

```
src/scss/bootstrap/_reboot.scss
```

## Bootstrap 4 Components

```
src/scss/bootstrap/_type.scss
src/scss/bootstrap/_images.scss
src/scss/bootstrap/_code.scss
src/scss/bootstrap/_grid.scss
src/scss/bootstrap/_tables.scss
src/scss/bootstrap/_forms.scss
src/scss/bootstrap/_buttons.scss
src/scss/bootstrap/_transitions.scss
src/scss/bootstrap/_dropdown.scss
src/scss/bootstrap/_button-group.scss
src/scss/bootstrap/_input-group.scss
src/scss/bootstrap/_custom-forms.scss
src/scss/bootstrap/_nav.scss
src/scss/bootstrap/_navbar.scss
src/scss/bootstrap/_card.scss
src/scss/bootstrap/_breadcrumb.scss
src/scss/bootstrap/_pagination.scss
src/scss/bootstrap/_badge.scss
src/scss/bootstrap/_jumbotron.scss
src/scss/bootstrap/_alert.scss
src/scss/bootstrap/_progress.scss
src/scss/bootstrap/_media.scss
src/scss/bootstrap/_list-group.scss
src/scss/bootstrap/_close.scss
src/scss/bootstrap/_modal.scss
src/scss/bootstrap/_tooltip.scss
src/scss/bootstrap/_popover.scss
src/scss/bootstrap/_carousel.scss
src/scss/bootstrap/_utilities.scss
src/scss/bootstrap/_print.scss
```

## Clay CSS Base Theme Variables

```
src/scss/variables/_globals.scss
src/scss/variables/_alerts.scss
src/scss/variables/_badges.scss
src/scss/variables/_breadcrumbs.scss
src/scss/variables/_buttons.scss
src/scss/variables/_labels.scss
src/scss/variables/_stickers.scss
src/scss/variables/_cards.scss
src/scss/variables/_dropdowns.scss
src/scss/variables/_forms.scss
src/scss/variables/_links.scss
src/scss/variables/_custom-forms.scss
src/scss/variables/_list-group.scss
src/scss/variables/_loaders.scss
src/scss/variables/_modals.scss
src/scss/variables/_multi-step-nav.scss
src/scss/variables/_navs.scss
src/scss/variables/_icons.scss
src/scss/variables/_menubar.scss
src/scss/variables/_navbar.scss
src/scss/variables/_application-bar.scss
src/scss/variables/_management-bar.scss
src/scss/variables/_navigation-bar.scss
src/scss/variables/_pagination.scss
src/scss/variables/_panels.scss
src/scss/variables/_popovers.scss
src/scss/variables/_progress-bars.scss
src/scss/variables/_quick-action.scss
src/scss/variables/_sheets.scss
src/scss/variables/_side-navigation.scss
src/scss/variables/_sidebar.scss
src/scss/variables/_tables.scss
src/scss/variables/_tbar.scss
src/scss/variables/_timelines.scss
src/scss/variables/_toggle-switch.scss
src/scss/variables/_tooltip.scss
src/scss/variables/_type.scss
src/scss/variables/_utilities.scss
```

## Clay CSS Mixins

```
src/scss/mixins/_aspect-ratio.scss
src/scss/mixins/_background.scss
src/scss/mixins/_badges.scss
src/scss/mixins/_box-shadow.scss
src/scss/mixins/_buttons.scss
src/scss/mixins/_cards.scss
src/scss/mixins/_grid.scss
src/scss/mixins/_input-groups.scss
src/scss/mixins/_labels.scss
src/scss/mixins/_links.scss
src/scss/mixins/_list-group.scss
src/scss/mixins/_loaders.scss
src/scss/mixins/_menubar.scss
src/scss/mixins/_modals.scss
src/scss/mixins/_monospace.scss
src/scss/mixins/_nav.scss
src/scss/mixins/_nav-nested.scss
src/scss/mixins/_navbar.scss
src/scss/mixins/_panels.scss
src/scss/mixins/_position.scss
src/scss/mixins/_scale-component.scss
src/scss/mixins/_sheet.scss
src/scss/mixins/_sidebar.scss
src/scss/mixins/_stickers.scss
src/scss/mixins/_tbar.scss
src/scss/mixins/_timelines.scss
src/scss/mixins/_toggle-switch.scss
src/scss/mixins/_type.scss
src/scss/mixins/_utilities.scss
```

## Clay CSS Import for Google Fonts (not imported by default)

```
@if ($font-import-url) {
	@import url($font-import-url);
}
```

## Clay CSS Components

```
src/scss/components/_grid.scss
src/scss/components/_alerts.scss
src/scss/components/_aspect-ratio.scss
src/scss/components/_badges.scss
src/scss/components/_breadcrumbs.scss
src/scss/components/_button-groups.scss
src/scss/components/_buttons.scss
src/scss/components/_labels.scss
src/scss/components/_stickers.scss
src/scss/components/_cards.scss
src/scss/components/_dropdowns.scss
src/scss/components/_forms.scss
src/scss/components/_links.scss
src/scss/components/_custom-forms.scss
src/scss/components/_form-validation.scss
src/scss/components/_icons.scss
src/scss/components/_input-groups.scss
src/scss/components/_list-group.scss
src/scss/components/_modals.scss
src/scss/components/_multi-step-nav.scss
src/scss/components/_navs.scss
src/scss/components/_menubar.scss
src/scss/components/_navbar.scss
src/scss/components/_application-bar.scss
src/scss/components/_management-bar.scss
src/scss/components/_navigation-bar.scss
src/scss/components/_pagination.scss
src/scss/components/_panels.scss
src/scss/components/_popovers.scss
src/scss/components/_progress-bars.scss
src/scss/components/_quick-action.scss
src/scss/components/_sheets.scss
src/scss/components/_side-navigation.scss
src/scss/components/_sidebar.scss
src/scss/components/_tables.scss
src/scss/components/_tbar.scss
src/scss/components/_timelines.scss
src/scss/components/_toggle-switch.scss
src/scss/components/_tooltip.scss
src/scss/components/_type.scss
src/scss/components/_utilities.scss
src/scss/components/_loaders.scss
```