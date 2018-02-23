# Change Log

## [v2.0.0-rc.3](https://github.com/liferay/clay/tree/v2.0.0-rc.3) (2018-02-23)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.2...v2.0.0-rc.3)

**Implemented enhancements:**

- Add Advanced Search to ClayManagementToolbar [\#609](https://github.com/liferay/clay/issues/609)
- Change API for the stickers on ClayCards [\#603](https://github.com/liferay/clay/issues/603)
- Dropdown trigger need space between icon and label when both are passed [\#597](https://github.com/liferay/clay/issues/597)
- Create `data` API to replace `columns` in Charts [\#526](https://github.com/liferay/clay/issues/526)

**Fixed bugs:**

- Prevent component from breaking during server side rendering [\#626](https://github.com/liferay/clay/issues/626)
- Range in ClayPagination is wrong [\#623](https://github.com/liferay/clay/issues/623)
- Button toggle from site menu is broken on Mobile [\#615](https://github.com/liferay/clay/issues/615)
- The tick count for axisY should expect a number not a bool [\#610](https://github.com/liferay/clay/issues/610)
- Safari: Card Page doesn't properly layout cards [\#590](https://github.com/liferay/clay/issues/590)

**Closed issues:**

- Migrate site to Electric 3 [\#617](https://github.com/liferay/clay/issues/617)
- Update some Button markups, Dropdowns and Subnav in claycss [\#613](https://github.com/liferay/clay/issues/613)
- `.table` should have border-bottom and content should be vertically centered [\#594](https://github.com/liferay/clay/issues/594)
- Form Inline from BS4 is not supported by Clay [\#592](https://github.com/liferay/clay/issues/592)
- ClayAlert disposed instances issues [\#582](https://github.com/liferay/clay/issues/582)

**Merged pull requests:**

- v2.0.0-rc.3 [\#632](https://github.com/liferay/clay/pull/632) ([jbalsas](https://github.com/jbalsas))
- \#594 Update `.table` styles to match Lexicon 2 [\#631](https://github.com/liferay/clay/pull/631) ([carloslancha](https://github.com/carloslancha))
- Migrate claycss.com to electric 3 | Fixes \#617 [\#630](https://github.com/liferay/clay/pull/630) ([carloslancha](https://github.com/carloslancha))
- Create `data` API to replace `columns` in Charts [\#629](https://github.com/liferay/clay/pull/629) ([julien](https://github.com/julien))
- Check if the dispose has already been done and does nothing | Fixes \#582 [\#625](https://github.com/liferay/clay/pull/625) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Fix ClayPagination range | Fixes \#623 [\#624](https://github.com/liferay/clay/pull/624) ([carloslancha](https://github.com/carloslancha))
- Add Advanced Search to ClayManagementToolbar | Fixes \#609 [\#622](https://github.com/liferay/clay/pull/622) ([carloslancha](https://github.com/carloslancha))
- Add Sidebar.js for toggle classes of sidebar | Fixes \#615 [\#616](https://github.com/liferay/clay/pull/616) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update some Button markups, Dropdowns and Subnav in claycss | Fixes \#613 [\#614](https://github.com/liferay/clay/pull/614) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Regen snapshots | Fixes \#481 [\#612](https://github.com/liferay/clay/pull/612) ([carloslancha](https://github.com/carloslancha))
- \#610 Check for Number instead of Boolean on axisY.tick.count prop [\#611](https://github.com/liferay/clay/pull/611) ([kienD](https://github.com/kienD))
- Add search results bar in ClayManagementToolbar | Fixes \#572 [\#608](https://github.com/liferay/clay/pull/608) ([carloslancha](https://github.com/carloslancha))
- Change API for the stickers on ClayCards | Fixes \#603 [\#606](https://github.com/liferay/clay/pull/606) ([carloslancha](https://github.com/carloslancha))
- Dropdown trigger need space between icon and label when both are passed | Fixes \#597 [\#599](https://github.com/liferay/clay/pull/599) ([carloslancha](https://github.com/carloslancha))
- Update metal-soy in clay-charts [\#596](https://github.com/liferay/clay/pull/596) ([carloslancha](https://github.com/carloslancha))
- Breaking: \(Fixes \#592\) Remove references to BS4's `.form-inline` comp… [\#593](https://github.com/liferay/clay/pull/593) ([pat270](https://github.com/pat270))
- Update: \(Fixes \#590\) Mixin `clay-custom-grid-columns` added option to… [\#591](https://github.com/liferay/clay/pull/591) ([pat270](https://github.com/pat270))
- Update the URL of the packages in the package.json [\#589](https://github.com/liferay/clay/pull/589) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0-rc.2](https://github.com/liferay/clay/tree/v2.0.0-rc.2) (2018-02-20)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.1...v2.0.0-rc.2)

**Implemented enhancements:**

- Add search results bar in ClayManagementToolbar [\#572](https://github.com/liferay/clay/issues/572)
- Implement Search only content markup in ManagmentToolbar [\#543](https://github.com/liferay/clay/issues/543)

**Fixed bugs:**

- InfoButton in ClayManagementToolbar should never be disabled [\#583](https://github.com/liferay/clay/issues/583)
- Fix connection with coveralls [\#575](https://github.com/liferay/clay/issues/575)
- Filter button in ClayManagementToolbar does not appear on mobile [\#571](https://github.com/liferay/clay/issues/571)
- Upadte styles for new Clay Card Grid List Markup [\#542](https://github.com/liferay/clay/issues/542)
- IE: Tabbing through the document focuses SVG elements [\#536](https://github.com/liferay/clay/issues/536)
- Disabled attribute markup is incorrect for button [\#522](https://github.com/liferay/clay/issues/522)

**Closed issues:**

- infoButton in ClayManagementoToolbar can not be disabled [\#581](https://github.com/liferay/clay/issues/581)
- Test throwing exceptions [\#579](https://github.com/liferay/clay/issues/579)
- Change all trailing underscores to leading [\#573](https://github.com/liferay/clay/issues/573)
- Update ClaySelect Markup [\#558](https://github.com/liferay/clay/issues/558)
- Subnav needs a refactor to support more use cases [\#557](https://github.com/liferay/clay/issues/557)
- Fieldset element inside Sheet mess up spacing because it doesn't support margin collapse [\#551](https://github.com/liferay/clay/issues/551)
- sheet-title can contain an "add button" right aligned [\#547](https://github.com/liferay/clay/issues/547)
- Tabbing through items with box-shadow in a Blink browser \(Chrome\) leaves remnants of the shadow [\#546](https://github.com/liferay/clay/issues/546)
- aspect-ratio-bg-contain [\#545](https://github.com/liferay/clay/issues/545)

**Merged pull requests:**

- v2.0.0-rc.2 [\#588](https://github.com/liferay/clay/pull/588) ([jbalsas](https://github.com/jbalsas))
- Regen snapshots | Fixes \#571 [\#587](https://github.com/liferay/clay/pull/587) ([carloslancha](https://github.com/carloslancha))
- Update coveralls badge | Fixes \#575 [\#586](https://github.com/liferay/clay/pull/586) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Regen snapshots | Fixes \#583 [\#584](https://github.com/liferay/clay/pull/584) ([carloslancha](https://github.com/carloslancha))
- Stub console.error | Fixes \#579 [\#580](https://github.com/liferay/clay/pull/580) ([carloslancha](https://github.com/carloslancha))
- Add "info button" to ClayManagementToolbar | Fixes \#481 [\#577](https://github.com/liferay/clay/pull/577) ([carloslancha](https://github.com/carloslancha))
- Change trailing to leading underscores in clay-charts | Fixes \#573 [\#574](https://github.com/liferay/clay/pull/574) ([carloslancha](https://github.com/carloslancha))
- Removing variable no more used in ClayCardGrid [\#570](https://github.com/liferay/clay/pull/570) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Add missing features and search only layout to Management Toolbar | Fixes \#543 [\#568](https://github.com/liferay/clay/pull/568) ([carloslancha](https://github.com/carloslancha))
- Update styles for new Clay Card Grid List Markup | Fixes \#542 [\#567](https://github.com/liferay/clay/pull/567) ([carloslancha](https://github.com/carloslancha))
- \(\#542\) Put `card-section-header` inside `card-page li` [\#566](https://github.com/liferay/clay/pull/566) ([pat270](https://github.com/pat270))
- \#557 Create `.subnav-tbar` component and remove `.subnav` component [\#565](https://github.com/liferay/clay/pull/565) ([pat270](https://github.com/pat270))
- Add flag to indicate when focusable is true or not | Fixes \#536 [\#563](https://github.com/liferay/clay/pull/563) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Adds disabled="true" to force your render separate from other attributes | Fixes \#522 [\#561](https://github.com/liferay/clay/pull/561) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update some tabs for to get highlights from webcomponents in claycss [\#560](https://github.com/liferay/clay/pull/560) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update ClaySelect markup and remove wrapperType to use the inline API| Fixes \#558 [\#559](https://github.com/liferay/clay/pull/559) ([matuzalemsteles](https://github.com/matuzalemsteles))
- ClayCSS Docs Update Form Elements and Form Validation markup [\#556](https://github.com/liferay/clay/pull/556) ([pat270](https://github.com/pat270))
- ClayCSS Docs update Input Group markup [\#555](https://github.com/liferay/clay/pull/555) ([pat270](https://github.com/pat270))
- \#546 Button added `backface-visibility: hidden` to `.… [\#554](https://github.com/liferay/clay/pull/554) ([pat270](https://github.com/pat270))
- \#545 Add `.aspect-ratio-bg-contain` [\#553](https://github.com/liferay/clay/pull/553) ([pat270](https://github.com/pat270))
- \#551 Add support for Fieldset in Sheet [\#552](https://github.com/liferay/clay/pull/552) ([pat270](https://github.com/pat270))
- \(\#547\) sheet-subtitle can contain an "add button" right aligned [\#549](https://github.com/liferay/clay/pull/549) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.1](https://github.com/liferay/clay/tree/v2.0.0-rc.1) (2018-02-09)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.0...v2.0.0-rc.1)

**Implemented enhancements:**

- Create a Map Chart in Clay Charts [\#509](https://github.com/liferay/clay/issues/509)
- Add "info button" to ClayManagementToolbar [\#481](https://github.com/liferay/clay/issues/481)

**Fixed bugs:**

- Side Navigation plugin mobile breakpoint is ~15px too high [\#504](https://github.com/liferay/clay/issues/504)
- Wrong delTemplate ClayDropdownBase [\#485](https://github.com/liferay/clay/issues/485)

**Closed issues:**

- Inputs with help or error messages must have the same parent element [\#537](https://github.com/liferay/clay/issues/537)
- Website not accessible: ERR\_TOO\_MANY\_REDIRECTS [\#528](https://github.com/liferay/clay/issues/528)
- We need to update Clay Dropdown markup [\#527](https://github.com/liferay/clay/issues/527)
- Accessibility issue in ClayManagementToolbar [\#518](https://github.com/liferay/clay/issues/518)
- Breaking input-group-item in Firefox [\#516](https://github.com/liferay/clay/issues/516)
- management bar does not look correctly when contains only a search [\#512](https://github.com/liferay/clay/issues/512)
- Enable chart background "patterns" on demand [\#495](https://github.com/liferay/clay/issues/495)
- Move charts demos to claycss.com [\#456](https://github.com/liferay/clay/issues/456)

**Merged pull requests:**

- Updates CHANGELOG for v2.0.0-rc.0 [\#541](https://github.com/liferay/clay/pull/541) ([jbalsas](https://github.com/jbalsas))
- \#537 Inputs with help or error messages must have the same parent element [\#540](https://github.com/liferay/clay/pull/540) ([pat270](https://github.com/pat270))
- Update the Table markup at claycss.com [\#539](https://github.com/liferay/clay/pull/539) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update markups on form elements at claycss.com [\#538](https://github.com/liferay/clay/pull/538) ([matuzalemsteles](https://github.com/matuzalemsteles))
- \#512 management bar does not look correctly when contains only a search [\#535](https://github.com/liferay/clay/pull/535) ([pat270](https://github.com/pat270))
- Update metal-tools-soy to 6.0.0 | Fixes \#530 [\#533](https://github.com/liferay/clay/pull/533) ([carloslancha](https://github.com/carloslancha))
- Makes sure we run soy before generating the site \(Fixes \#509\) [\#529](https://github.com/liferay/clay/pull/529) ([jbalsas](https://github.com/jbalsas))
- Update: \(Fixes \#516\) Forms `.form-control` in Firefox should shrink t… [\#524](https://github.com/liferay/clay/pull/524) ([pat270](https://github.com/pat270))
- Add Chart examples to claycss.com [\#521](https://github.com/liferay/clay/pull/521) ([julien](https://github.com/julien))
- Fix accessibility issue | Fixes \#518 [\#519](https://github.com/liferay/clay/pull/519) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update prettier-eslint-cli to 4.7.0 [\#514](https://github.com/liferay/clay/pull/514) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Use tiles when it's true | Fixes \#495 [\#513](https://github.com/liferay/clay/pull/513) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update: \(Fixes \#504\) Side Navigation JS breakpoint region should use window size + scrollbar [\#506](https://github.com/liferay/clay/pull/506) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.0](https://github.com/liferay/clay/tree/v2.0.0-rc.0) (2018-02-01)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.8...v2.0.0-rc.0)

**Implemented enhancements:**

- Update metal-tools-soy | Some markup fails compiling with metal-tools-soy 6.0.0 [\#530](https://github.com/liferay/clay/issues/530)
- Wedeploy branch is being tested in Travis [\#483](https://github.com/liferay/clay/issues/483)

**Closed issues:**

- .dropdown-menu-right should work in all Navbar variants [\#500](https://github.com/liferay/clay/issues/500)
- Items in Navigation Bar mobile menu aren't vertically aligned on the left [\#498](https://github.com/liferay/clay/issues/498)
- Form Group Autofit should better support Horizontal Forms [\#492](https://github.com/liferay/clay/issues/492)
- Tweak font sizes to match Lexicon 2 in Tables, Navigation Bar, Application Bar, and Management Bar [\#490](https://github.com/liferay/clay/issues/490)
- ClayDropdown is not being aligned in the best way [\#452](https://github.com/liferay/clay/issues/452)

**Merged pull requests:**

- Updates CHANGELOG for v2.0.0-beta.8 [\#503](https://github.com/liferay/clay/pull/503) ([jbalsas](https://github.com/jbalsas))
- .dropdown-menu-right should work in all Navbar variants [\#501](https://github.com/liferay/clay/pull/501) ([pat270](https://github.com/pat270))
- Update: \(Fixes \#498\) Navigation Bar mobile menu should be properly al… [\#499](https://github.com/liferay/clay/pull/499) ([pat270](https://github.com/pat270))
- Remove unnecessary use of minValue and maxValue in the ProgressBar [\#497](https://github.com/liferay/clay/pull/497) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Some updates from the claycss.com [\#496](https://github.com/liferay/clay/pull/496) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Add missing contents property to legend option [\#494](https://github.com/liferay/clay/pull/494) ([julien](https://github.com/julien))
- Form Group Autofit added `.form-group-item-label` and `.form-group-item-label-spacer` for horizontally aligned labels [\#493](https://github.com/liferay/clay/pull/493) ([pat270](https://github.com/pat270))
- Update: \(Fixes \#490\) Tweak font-sizes to match Lexicon V2 [\#491](https://github.com/liferay/clay/pull/491) ([pat270](https://github.com/pat270))
- Update Dropdown markup in claycss.com [\#489](https://github.com/liferay/clay/pull/489) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Update ClayPaginationBar demos [\#487](https://github.com/liferay/clay/pull/487) ([carloslancha](https://github.com/carloslancha))
- Remove isInList param from ClayDropdownBase's radaiogroup deltemplate variant | Fixes 485 [\#486](https://github.com/liferay/clay/pull/486) ([carloslancha](https://github.com/carloslancha))
- Excludes wedeploy branch from travis [\#484](https://github.com/liferay/clay/pull/484) ([jbalsas](https://github.com/jbalsas))
- Fix the align of the dropdown when expanded in ClayDropdown | Fixes \#452 [\#482](https://github.com/liferay/clay/pull/482) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0-beta.8](https://github.com/liferay/clay/tree/v2.0.0-beta.8) (2018-01-25)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.7...v2.0.0-beta.8)

**Closed issues:**

- lib directory of clay is not published to npm [\#479](https://github.com/liferay/clay/issues/479)

**Merged pull requests:**

- Generates CHANGELOG [\#480](https://github.com/liferay/clay/pull/480) ([jbalsas](https://github.com/jbalsas))
- Publish lib dir to npm [\#478](https://github.com/liferay/clay/pull/478) ([robframpton](https://github.com/robframpton))

## [v2.0.0-beta.7](https://github.com/liferay/clay/tree/v2.0.0-beta.7) (2018-01-25)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.0-alpha.16...v2.0.0-beta.7)

**Closed issues:**

- Atlas Nav with collapse-icon should be vertically centered with first line of text [\#475](https://github.com/liferay/clay/issues/475)
- ClayHorizontalCard ellipsis text [\#462](https://github.com/liferay/clay/issues/462)
- Menubar \(Vertical\) should break at 991px [\#453](https://github.com/liferay/clay/issues/453)
- Dropdown menu should support several lists inside [\#450](https://github.com/liferay/clay/issues/450)
- Forms in IOS Safari have shadow on top [\#447](https://github.com/liferay/clay/issues/447)
- clay-card markup is not correctly formatted [\#444](https://github.com/liferay/clay/issues/444)
- Disabled state for ClayManagementToolbar [\#439](https://github.com/liferay/clay/issues/439)
- Should ClayCard be renamed? [\#430](https://github.com/liferay/clay/issues/430)
- ClayCard labels seem very close to each other \(missing horizontal space\) [\#429](https://github.com/liferay/clay/issues/429)
- Dropdown menu with lists markup is not looking correctly [\#425](https://github.com/liferay/clay/issues/425)
- ClayTable headers [\#404](https://github.com/liferay/clay/issues/404)
- Missing popper.js sourcemaps [\#374](https://github.com/liferay/clay/issues/374)

**Merged pull requests:**

- v2.0.0-beta.7 [\#477](https://github.com/liferay/clay/pull/477) ([jbalsas](https://github.com/jbalsas))
- Vertically center collapse-icon to first line of text for components that use it [\#476](https://github.com/liferay/clay/pull/476) ([pat270](https://github.com/pat270))
- Update more icons url [\#474](https://github.com/liferay/clay/pull/474) ([carloslancha](https://github.com/carloslancha))
- Update: \(\#450\) Dropdown `.dropdown-menu \> .list-unstyled` should have… [\#473](https://github.com/liferay/clay/pull/473) ([pat270](https://github.com/pat270))
- Update: \(\#439\) Input Group Inset should have `:disabled` styles [\#472](https://github.com/liferay/clay/pull/472) ([pat270](https://github.com/pat270))
- \#453 Added `.container-form-lg`, `.menubar-vertical-expand-lg`, and demos to break at lg breakpoint [\#471](https://github.com/liferay/clay/pull/471) ([pat270](https://github.com/pat270))
- Update icons url [\#470](https://github.com/liferay/clay/pull/470) ([carloslancha](https://github.com/carloslancha))
- Claycss general adjustment [\#469](https://github.com/liferay/clay/pull/469) ([marcoscv-work](https://github.com/marcoscv-work))
- Update yarn.lock [\#468](https://github.com/liferay/clay/pull/468) ([robframpton](https://github.com/robframpton))
- Add disabled state to ClayManagementToolbar | Fixes \#439 [\#465](https://github.com/liferay/clay/pull/465) ([carloslancha](https://github.com/carloslancha))
- Update atlas.css urls in demos [\#464](https://github.com/liferay/clay/pull/464) ([robframpton](https://github.com/robframpton))
- Fix icon markup on ClayHorizontalCard | Fixes \#462 [\#463](https://github.com/liferay/clay/pull/463) ([carloslancha](https://github.com/carloslancha))
- Use new markup for ClayDropdown  | Fixes \#425 and \#450 [\#461](https://github.com/liferay/clay/pull/461) ([carloslancha](https://github.com/carloslancha))
- Run npm compile script [\#457](https://github.com/liferay/clay/pull/457) ([robframpton](https://github.com/robframpton))
- Update some markups at claycss.com [\#455](https://github.com/liferay/clay/pull/455) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Fix render unnecessary custom-control-label-text on other components in ClayCheckbox [\#451](https://github.com/liferay/clay/pull/451) ([matuzalemsteles](https://github.com/matuzalemsteles))
- Build [\#449](https://github.com/liferay/clay/pull/449) ([robframpton](https://github.com/robframpton))
- Update: \(Fixes \#447\) Forms in ios have shadow on top due to default b… [\#448](https://github.com/liferay/clay/pull/448) ([pat270](https://github.com/pat270))
- Clay Table Updates [\#446](https://github.com/liferay/clay/pull/446) ([pat270](https://github.com/pat270))
- Fixes \#429 and \#444 [\#445](https://github.com/liferay/clay/pull/445) ([carloslancha](https://github.com/carloslancha))
- Renames ClayCard to ClayCardBase [\#443](https://github.com/liferay/clay/pull/443) ([julien](https://github.com/julien))
- Remove web components examples from demos [\#442](https://github.com/liferay/clay/pull/442) ([carloslancha](https://github.com/carloslancha))
- Fix checkbox and radio styles [\#441](https://github.com/liferay/clay/pull/441) ([carloslancha](https://github.com/carloslancha))
- Managementtoolbar markup fix [\#440](https://github.com/liferay/clay/pull/440) ([marcoscv-work](https://github.com/marcoscv-work))
- Update: \(\#429\) Badges added option to configure `$badge-spacer-x` and… [\#438](https://github.com/liferay/clay/pull/438) ([pat270](https://github.com/pat270))
- Update Bootstrap to 572d00a \(v4.0.0\) [\#437](https://github.com/liferay/clay/pull/437) ([pat270](https://github.com/pat270))
- Remove unused dep from clay-portal [\#436](https://github.com/liferay/clay/pull/436) ([robframpton](https://github.com/robframpton))
- Search icon fix [\#435](https://github.com/liferay/clay/pull/435) ([marcoscv-work](https://github.com/marcoscv-work))
- Remove lint-staged and related tasks [\#434](https://github.com/liferay/clay/pull/434) ([carloslancha](https://github.com/carloslancha))
- Add BubbleChart [\#433](https://github.com/liferay/clay/pull/433) ([julien](https://github.com/julien))
- Updates Sidebar and related components to Lexicon V2 [\#432](https://github.com/liferay/clay/pull/432) ([pat270](https://github.com/pat270))
- Implement Portals for clay-dropdown components [\#428](https://github.com/liferay/clay/pull/428) ([robframpton](https://github.com/robframpton))
- Card markup update [\#424](https://github.com/liferay/clay/pull/424) ([marcoscv-work](https://github.com/marcoscv-work))

## [v1.0.0-alpha.16](https://github.com/liferay/clay/tree/v1.0.0-alpha.16) (2018-01-17)
[Full Changelog](https://github.com/liferay/clay/compare/v.1.0.0-alpha.15...v1.0.0-alpha.16)

**Merged pull requests:**

- v1.0.0-alpha.15 [\#422](https://github.com/liferay/clay/pull/422) ([jbalsas](https://github.com/jbalsas))
- Add class to managmenttoolbar [\#421](https://github.com/liferay/clay/pull/421) ([marcoscv-work](https://github.com/marcoscv-work))
- Add missing SoyDocs [\#420](https://github.com/liferay/clay/pull/420) ([carloslancha](https://github.com/carloslancha))
- \[Site\] Updates previous lexiconcss site link [\#418](https://github.com/liferay/clay/pull/418) ([jbalsas](https://github.com/jbalsas))
- Fix managementtoolbar styles [\#417](https://github.com/liferay/clay/pull/417) ([julien](https://github.com/julien))
- Update README [\#416](https://github.com/liferay/clay/pull/416) ([julien](https://github.com/julien))
- Update css classes for checkbox,list and radio [\#415](https://github.com/liferay/clay/pull/415) ([julien](https://github.com/julien))
- Empty string for contentRenderers are mandatory to make it work in java [\#414](https://github.com/liferay/clay/pull/414) ([carloslancha](https://github.com/carloslancha))
- Fix ClayPagination range when current page is last page [\#413](https://github.com/liferay/clay/pull/413) ([carloslancha](https://github.com/carloslancha))
- Ensure that NODE\_ENV variable is set to 'test' on all environments to avoid inconsistencies during Metal's render/attach lifecycle [\#411](https://github.com/liferay/clay/pull/411) ([robframpton](https://github.com/robframpton))

## [v.1.0.0-alpha.15](https://github.com/liferay/clay/tree/v.1.0.0-alpha.15) (2018-01-15)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.6...v.1.0.0-alpha.15)

## [v2.0.0-beta.6](https://github.com/liferay/clay/tree/v2.0.0-beta.6) (2018-01-12)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.5...v2.0.0-beta.6)

**Closed issues:**

- Simplify loading-animation icon [\#407](https://github.com/liferay/clay/issues/407)
- ClayLink styles [\#396](https://github.com/liferay/clay/issues/396)

## [v2.0.0-beta.5](https://github.com/liferay/clay/tree/v2.0.0-beta.5) (2017-12-25)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.4...v2.0.0-beta.5)

**Closed issues:**

- ClayButton borderless [\#397](https://github.com/liferay/clay/issues/397)
- Clay Buttons with icons has no padding [\#395](https://github.com/liferay/clay/issues/395)
- Loading icons [\#394](https://github.com/liferay/clay/issues/394)
- ClayCard List [\#393](https://github.com/liferay/clay/issues/393)
- Feature Request - Alphbetical Sorting on Dropdown/up Menus [\#391](https://github.com/liferay/clay/issues/391)
- ClayCard User image [\#390](https://github.com/liferay/clay/issues/390)
- Clay User Card Sticker size [\#389](https://github.com/liferay/clay/issues/389)
- ClayCard links [\#388](https://github.com/liferay/clay/issues/388)
- ClayCards clickable area [\#387](https://github.com/liferay/clay/issues/387)
- Active state nav-bar [\#381](https://github.com/liferay/clay/issues/381)

**Merged pull requests:**

- Styles [\#403](https://github.com/liferay/clay/pull/403) ([marcoscv-work](https://github.com/marcoscv-work))
- Landing page adjustments [\#401](https://github.com/liferay/clay/pull/401) ([marcoscv-work](https://github.com/marcoscv-work))
- New Clay landing page [\#400](https://github.com/liferay/clay/pull/400) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.0.0-beta.4](https://github.com/liferay/clay/tree/v2.0.0-beta.4) (2017-12-04)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.26...v2.0.0-beta.4)

**Closed issues:**

- List group notifications [\#386](https://github.com/liferay/clay/issues/386)
- Uppercase in label-lg is optional [\#385](https://github.com/liferay/clay/issues/385)
- v1.x atlas.css, lexicon-base.css, and bootstrap.css Glyphicon file paths point to the wrong directory [\#379](https://github.com/liferay/clay/issues/379)

## [v1.0.26](https://github.com/liferay/clay/tree/v1.0.26) (2017-11-28)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.3...v1.0.26)

**Closed issues:**

- Plus button can be a button and a link [\#384](https://github.com/liferay/clay/issues/384)
- Combination of btn-sm & btn-monospaced is vertically misaligned [\#380](https://github.com/liferay/clay/issues/380)
- Executing a search via javascript [\#378](https://github.com/liferay/clay/issues/378)

## [v2.0.0-beta.3](https://github.com/liferay/clay/tree/v2.0.0-beta.3) (2017-11-20)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.2...v2.0.0-beta.3)

## [v2.0.0-beta.2](https://github.com/liferay/clay/tree/v2.0.0-beta.2) (2017-11-10)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.1...v2.0.0-beta.2)

## [v2.0.0-beta.1](https://github.com/liferay/clay/tree/v2.0.0-beta.1) (2017-10-27)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.0...v2.0.0-beta.1)

## [v2.0.0-beta.0](https://github.com/liferay/clay/tree/v2.0.0-beta.0) (2017-10-27)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.11...v2.0.0-beta.0)

**Merged pull requests:**

- Misc: Don't run maven-publish task for now [\#376](https://github.com/liferay/clay/pull/376) ([pat270](https://github.com/pat270))

## [v2.0.0-alpha.11](https://github.com/liferay/clay/tree/v2.0.0-alpha.11) (2017-10-16)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.10...v2.0.0-alpha.11)

## [v2.0.0-alpha.10](https://github.com/liferay/clay/tree/v2.0.0-alpha.10) (2017-10-07)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.25...v2.0.0-alpha.10)

## [v1.0.25](https://github.com/liferay/clay/tree/v1.0.25) (2017-10-06)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.9...v1.0.25)

## [v2.0.0-alpha.9](https://github.com/liferay/clay/tree/v2.0.0-alpha.9) (2017-09-27)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.8...v2.0.0-alpha.9)

**Closed issues:**

- v2-beta: Consolidate z-index variables in one place [\#357](https://github.com/liferay/clay/issues/357)
- Clay API documentation page links targeting http instead of https [\#335](https://github.com/liferay/clay/issues/335)

## [v2.0.0-alpha.8](https://github.com/liferay/clay/tree/v2.0.0-alpha.8) (2017-09-01)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.7...v2.0.0-alpha.8)

**Closed issues:**

- v2-beta: Remove btn-action [\#365](https://github.com/liferay/clay/issues/365)
- v2-beta: breadcrumb-vertical from Lexicon 1.0 remove or keep it [\#362](https://github.com/liferay/clay/issues/362)
- v2-beta: Toggle-card from Lexicon 1.0 remove or keep it [\#361](https://github.com/liferay/clay/issues/361)
- v2-beta: Custom Forms from BS4 should be fully configurable through Sass variables [\#349](https://github.com/liferay/clay/issues/349)
- v2-beta: Pager from BS3 remove or keep it [\#346](https://github.com/liferay/clay/issues/346)
- v2-beta: Remove Font Awesome [\#342](https://github.com/liferay/clay/issues/342)

**Merged pull requests:**

- Breadcrumb-horizontal dropped in clay to compact layer [\#363](https://github.com/liferay/clay/pull/363) ([marcoscv-work](https://github.com/marcoscv-work))
- Toggle-card dropped in clay to compact layer [\#359](https://github.com/liferay/clay/pull/359) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.0.0-alpha.7](https://github.com/liferay/clay/tree/v2.0.0-alpha.7) (2017-08-28)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.6...v2.0.0-alpha.7)

## [v2.0.0-alpha.6](https://github.com/liferay/clay/tree/v2.0.0-alpha.6) (2017-08-18)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.5...v2.0.0-alpha.6)

## [v2.0.0-alpha.5](https://github.com/liferay/clay/tree/v2.0.0-alpha.5) (2017-08-11)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.4...v2.0.0-alpha.5)

**Closed issues:**

- Alerts [\#356](https://github.com/liferay/clay/issues/356)
- Progress bar [\#355](https://github.com/liferay/clay/issues/355)

## [v2.0.0-alpha.4](https://github.com/liferay/clay/tree/v2.0.0-alpha.4) (2017-08-05)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.24...v2.0.0-alpha.4)

## [v1.0.24](https://github.com/liferay/clay/tree/v1.0.24) (2017-08-04)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.3...v1.0.24)

**Closed issues:**

- v2-beta: Toolbar component remove, keep, or convert to flex box [\#348](https://github.com/liferay/clay/issues/348)
- v2-beta: Popover and Tooltips to BS4 [\#343](https://github.com/liferay/clay/issues/343)

## [v2.0.0-alpha.3](https://github.com/liferay/clay/tree/v2.0.0-alpha.3) (2017-08-01)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.2...v2.0.0-alpha.3)

**Closed issues:**

- Sticker [\#354](https://github.com/liferay/clay/issues/354)
- v2-beta: Dropdown convert positioning to BS4 [\#344](https://github.com/liferay/clay/issues/344)

## [v2.0.0-alpha.2](https://github.com/liferay/clay/tree/v2.0.0-alpha.2) (2017-07-24)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.1...v2.0.0-alpha.2)

## [v2.0.0-alpha.1](https://github.com/liferay/clay/tree/v2.0.0-alpha.1) (2017-07-24)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.23...v2.0.0-alpha.1)

## [v1.0.23](https://github.com/liferay/clay/tree/v1.0.23) (2017-07-21)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.22...v1.0.23)

**Closed issues:**

- v2-beta: select.form-control styles from Atlas should also work in Lexicon Base [\#350](https://github.com/liferay/clay/issues/350)
- BS4 compat layer - Buttons shadow [\#339](https://github.com/liferay/clay/issues/339)

**Merged pull requests:**

- Updates clay site [\#352](https://github.com/liferay/clay/pull/352) ([zenorocha](https://github.com/zenorocha))

## [v1.0.22](https://github.com/liferay/clay/tree/v1.0.22) (2017-06-30)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.21...v1.0.22)

## [v1.0.21](https://github.com/liferay/clay/tree/v1.0.21) (2017-06-27)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.20...v1.0.21)

## [v1.0.20](https://github.com/liferay/clay/tree/v1.0.20) (2017-06-15)
[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.0...v1.0.20)

## [v2.0.0-alpha.0](https://github.com/liferay/clay/tree/v2.0.0-alpha.0) (2017-05-18)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.19...v2.0.0-alpha.0)

## [v1.0.19](https://github.com/liferay/clay/tree/v1.0.19) (2017-04-03)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.18...v1.0.19)

**Closed issues:**

- Tables should be able to be customized to v2 styles [\#315](https://github.com/liferay/clay/issues/315)
- List Group should be able to be customized to v2 styles [\#314](https://github.com/liferay/clay/issues/314)

## [v1.0.18](https://github.com/liferay/clay/tree/v1.0.18) (2017-03-06)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.17...v1.0.18)

**Closed issues:**

- Checkbox inputs don't align with their label when there is a lot of description text below [\#331](https://github.com/liferay/clay/issues/331)

**Merged pull requests:**

- Misc: Comments in released files should contain the correct version [\#324](https://github.com/liferay/clay/pull/324) ([pat270](https://github.com/pat270))

## [v1.0.17](https://github.com/liferay/clay/tree/v1.0.17) (2017-02-21)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.16...v1.0.17)

## [v1.0.16](https://github.com/liferay/clay/tree/v1.0.16) (2017-02-14)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.15...v1.0.16)

## [v1.0.15](https://github.com/liferay/clay/tree/v1.0.15) (2017-01-12)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.14...v1.0.15)

## [v1.0.14](https://github.com/liferay/clay/tree/v1.0.14) (2016-12-09)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.13...v1.0.14)

## [v1.0.13](https://github.com/liferay/clay/tree/v1.0.13) (2016-12-01)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.12...v1.0.13)

**Closed issues:**

- In Atlas theme, table-list class is not compatible with table-striped and table-hover classes [\#290](https://github.com/liferay/clay/issues/290)
- Avoid label multi lines in toggles [\#289](https://github.com/liferay/clay/issues/289)

## [v1.0.12](https://github.com/liferay/clay/tree/v1.0.12) (2016-11-21)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.11...v1.0.12)

## [v1.0.11](https://github.com/liferay/clay/tree/v1.0.11) (2016-11-03)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.10...v1.0.11)

## [v1.0.10](https://github.com/liferay/clay/tree/v1.0.10) (2016-10-13)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.9...v1.0.10)

## [v1.0.9](https://github.com/liferay/clay/tree/v1.0.9) (2016-10-13)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.8...v1.0.9)

## [v1.0.8](https://github.com/liferay/clay/tree/v1.0.8) (2016-09-12)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.7...v1.0.8)

## [v1.0.7](https://github.com/liferay/clay/tree/v1.0.7) (2016-08-31)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.6...v1.0.7)

## [v1.0.6](https://github.com/liferay/clay/tree/v1.0.6) (2016-08-23)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.5...v1.0.6)

## [v1.0.5](https://github.com/liferay/clay/tree/v1.0.5) (2016-08-16)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.4...v1.0.5)

## [v1.0.4](https://github.com/liferay/clay/tree/v1.0.4) (2016-06-24)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.3...v1.0.4)

## [v1.0.3](https://github.com/liferay/clay/tree/v1.0.3) (2016-06-22)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.2...v1.0.3)

## [v1.0.2](https://github.com/liferay/clay/tree/v1.0.2) (2016-06-13)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/liferay/clay/tree/v1.0.1) (2016-06-08)
[Full Changelog](https://github.com/liferay/clay/compare/v1.0.0...v1.0.1)

## [v1.0.0](https://github.com/liferay/clay/tree/v1.0.0) (2016-05-26)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.16...v1.0.0)

**Closed issues:**

- Add variables for sidenav transition values [\#170](https://github.com/liferay/clay/issues/170)

## [v0.2.16](https://github.com/liferay/clay/tree/v0.2.16) (2016-05-20)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.15...v0.2.16)

## [v0.2.15](https://github.com/liferay/clay/tree/v0.2.15) (2016-05-17)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.14...v0.2.15)

**Closed issues:**

- Add link to the website in the repo metadata [\#174](https://github.com/liferay/clay/issues/174)
- Add a CDN usage for the CSS and JS files. [\#160](https://github.com/liferay/clay/issues/160)

## [v0.2.14](https://github.com/liferay/clay/tree/v0.2.14) (2016-04-19)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.13...v0.2.14)

## [v0.2.13](https://github.com/liferay/clay/tree/v0.2.13) (2016-04-18)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.12...v0.2.13)

## [v0.2.12](https://github.com/liferay/clay/tree/v0.2.12) (2016-03-25)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.11...v0.2.12)

## [v0.2.11](https://github.com/liferay/clay/tree/v0.2.11) (2016-03-23)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.10...v0.2.11)

## [v0.2.10](https://github.com/liferay/clay/tree/v0.2.10) (2016-03-08)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.9...v0.2.10)

## [v0.2.9](https://github.com/liferay/clay/tree/v0.2.9) (2016-03-01)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.8...v0.2.9)

## [v0.2.8](https://github.com/liferay/clay/tree/v0.2.8) (2016-02-25)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.7...v0.2.8)

**Closed issues:**

- Textarea resizing can exceed its parent dimensions [\#140](https://github.com/liferay/clay/issues/140)
- Firefox issue with fieldsets [\#138](https://github.com/liferay/clay/issues/138)
- Control for asynchronous requests [\#124](https://github.com/liferay/clay/issues/124)

## [v0.2.7](https://github.com/liferay/clay/tree/v0.2.7) (2016-02-24)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.6...v0.2.7)

## [v0.2.6](https://github.com/liferay/clay/tree/v0.2.6) (2016-02-22)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.5...v0.2.6)

## [v0.2.5](https://github.com/liferay/clay/tree/v0.2.5) (2016-02-22)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.4...v0.2.5)

## [v0.2.4](https://github.com/liferay/clay/tree/v0.2.4) (2016-02-22)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.3...v0.2.4)

## [v0.2.3](https://github.com/liferay/clay/tree/v0.2.3) (2016-02-20)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.2...v0.2.3)

**Closed issues:**

- modal styles causes document to scroll to top in Chrome [\#132](https://github.com/liferay/clay/issues/132)
- When screen size is more than 1300px and the product menu is opened the sidenav-container has not space enough [\#129](https://github.com/liferay/clay/issues/129)

## [v0.2.2](https://github.com/liferay/clay/tree/v0.2.2) (2016-02-08)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.1...v0.2.2)

**Closed issues:**

- Link source with live demo and live demo with source [\#123](https://github.com/liferay/clay/issues/123)
- Sidenav plugin cannot be destroyed and recreated [\#116](https://github.com/liferay/clay/issues/116)

## [v0.2.1](https://github.com/liferay/clay/tree/v0.2.1) (2016-01-29)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.0...v0.2.1)

## [v0.2.0](https://github.com/liferay/clay/tree/v0.2.0) (2016-01-29)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.32...v0.2.0)

## [v0.1.32](https://github.com/liferay/clay/tree/v0.1.32) (2016-01-29)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.31...v0.1.32)

**Closed issues:**

- The "x" displayed in IE for Navbar is inconsistent [\#117](https://github.com/liferay/clay/issues/117)

## [v0.1.31](https://github.com/liferay/clay/tree/v0.1.31) (2016-01-14)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.30...v0.1.31)

## [v0.1.30](https://github.com/liferay/clay/tree/v0.1.30) (2016-01-14)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.29...v0.1.30)

## [v0.1.29](https://github.com/liferay/clay/tree/v0.1.29) (2016-01-14)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.28...v0.1.29)

**Closed issues:**

- Sidenav plugin follows the href of the toggler [\#109](https://github.com/liferay/clay/issues/109)
- The styling of the Blogs Action example is not the right one when using links for the title [\#88](https://github.com/liferay/clay/issues/88)

## [v0.1.28](https://github.com/liferay/clay/tree/v0.1.28) (2015-12-23)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.27...v0.1.28)

## [v0.1.27](https://github.com/liferay/clay/tree/v0.1.27) (2015-12-22)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.26...v0.1.27)

## [v0.1.26](https://github.com/liferay/clay/tree/v0.1.26) (2015-12-22)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.25...v0.1.26)

**Implemented enhancements:**

- Add support for placing text inside of the toggle's switch-handle [\#81](https://github.com/liferay/clay/issues/81)

**Closed issues:**

- Dropdown menus extra classes not aligned in mobile version [\#91](https://github.com/liferay/clay/issues/91)
- Increase size of checkbox in Atlas Theme [\#82](https://github.com/liferay/clay/issues/82)

## [v0.1.25](https://github.com/liferay/clay/tree/v0.1.25) (2015-12-04)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.24...v0.1.25)

## [v0.1.24](https://github.com/liferay/clay/tree/v0.1.24) (2015-12-02)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.23...v0.1.24)

## [v0.1.23](https://github.com/liferay/clay/tree/v0.1.23) (2015-12-02)
[Full Changelog](https://github.com/liferay/clay/compare/v0.2.0-0...v0.1.23)

**Implemented enhancements:**

- Add new Lexicon icons [\#80](https://github.com/liferay/clay/issues/80)

**Closed issues:**

- LPS-59141 - Floating Action Buttons always cover dropdowns and popovers [\#78](https://github.com/liferay/clay/issues/78)

## [v0.2.0-0](https://github.com/liferay/clay/tree/v0.2.0-0) (2015-11-12)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.22...v0.2.0-0)

## [v0.1.22](https://github.com/liferay/clay/tree/v0.1.22) (2015-11-12)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.21...v0.1.22)

## [v0.1.21](https://github.com/liferay/clay/tree/v0.1.21) (2015-10-30)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.20...v0.1.21)

## [v0.1.20](https://github.com/liferay/clay/tree/v0.1.20) (2015-10-28)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.19...v0.1.20)

## [v0.1.19](https://github.com/liferay/clay/tree/v0.1.19) (2015-09-30)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.18...v0.1.19)

## [v0.1.18](https://github.com/liferay/clay/tree/v0.1.18) (2015-09-24)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.17...v0.1.18)

## [v0.1.17](https://github.com/liferay/clay/tree/v0.1.17) (2015-09-16)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.16...v0.1.17)

## [v0.1.16](https://github.com/liferay/clay/tree/v0.1.16) (2015-09-03)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.15...v0.1.16)

**Implemented enhancements:**

- Create Flexbox version of the Cards component [\#9](https://github.com/liferay/clay/issues/9)

**Fixed bugs:**

- Btn-action-secondary should have z-index [\#11](https://github.com/liferay/clay/issues/11)

**Closed issues:**

- Document Sidebar component [\#8](https://github.com/liferay/clay/issues/8)

## [v0.1.15](https://github.com/liferay/clay/tree/v0.1.15) (2015-08-27)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.14...v0.1.15)

**Closed issues:**

- Button group z-index causing issues in liferay-portal [\#7](https://github.com/liferay/clay/issues/7)

## [v0.1.14](https://github.com/liferay/clay/tree/v0.1.14) (2015-08-24)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.13...v0.1.14)

## [v0.1.13](https://github.com/liferay/clay/tree/v0.1.13) (2015-08-21)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.12...v0.1.13)

## [v0.1.12](https://github.com/liferay/clay/tree/v0.1.12) (2015-08-21)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.11...v0.1.12)

**Closed issues:**

- Read-only inputs are partially obstructed by padding in Firefox [\#6](https://github.com/liferay/clay/issues/6)

## [v0.1.11](https://github.com/liferay/clay/tree/v0.1.11) (2015-08-17)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.10...v0.1.11)

## [v0.1.10](https://github.com/liferay/clay/tree/v0.1.10) (2015-08-06)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.9...v0.1.10)

## [v0.1.9](https://github.com/liferay/clay/tree/v0.1.9) (2015-08-03)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.8...v0.1.9)

## [v0.1.8](https://github.com/liferay/clay/tree/v0.1.8) (2015-07-28)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.7...v0.1.8)

## [v0.1.7](https://github.com/liferay/clay/tree/v0.1.7) (2015-07-27)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.6...v0.1.7)

## [v0.1.6](https://github.com/liferay/clay/tree/v0.1.6) (2015-07-16)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.5...v0.1.6)

## [v0.1.5](https://github.com/liferay/clay/tree/v0.1.5) (2015-07-14)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.4...v0.1.5)

## [v0.1.4](https://github.com/liferay/clay/tree/v0.1.4) (2015-07-08)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.3...v0.1.4)

## [v0.1.3](https://github.com/liferay/clay/tree/v0.1.3) (2015-06-29)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.2...v0.1.3)

## [v0.1.2](https://github.com/liferay/clay/tree/v0.1.2) (2015-06-29)
[Full Changelog](https://github.com/liferay/clay/compare/v0.1.1...v0.1.2)

## [v0.1.1](https://github.com/liferay/clay/tree/v0.1.1) (2015-06-25)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*