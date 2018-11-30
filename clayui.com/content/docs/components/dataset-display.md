---
title: "Dataset Display"
---

A dataset display is the combination of a <a href="/docs/components/toolbars/management-toolbar.html">management bar</a> with one or multiple data visualization types and a possible mechanism of pagination. The most common visualization types used are <a href="/docs/components/table/table.html">table</a>, <a href="/docs/components/list.html">list</a>, and <a href="/docs/components/card.html">card</a>.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/components/dataset-display.html">Dataset Display Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Example

<div class="clay-dataset-display">
    <div>
        <nav class="management-bar management-bar-light navbar navbar-expand-md">
            <div class="container-fluid container-fluid-max-xl">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="custom-control custom-checkbox"><label><input class="custom-control-input" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">select-items</span></span></label></div>
                    </li>
                    <li class="dropdown nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-link btn-unstyled" type="button">
                                <span class="navbar-breakpoint-down-d-none">
                                    Filter and Order
                                    <svg class="lexicon-icon lexicon-icon-caret-bottom inline-item inline-item-after" focusable="false" role="presentation">
                                        <title>caret-bottom</title>
                                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                                    </svg>
                                </span>
                                <span class="navbar-breakpoint-d-none">
                                    <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                                        <title>filter</title>
                                        <use href="/images/icons/icons.svg#filter"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <button class="btn nav-link nav-link-monospaced order-arrow-up-active btn-unstyled" aria-label="order-arrow" title="Order" type="button">
                            <svg class="lexicon-icon lexicon-icon-order-arrow" focusable="false" role="presentation">
                                <title>order-arrow</title>
                                <use href="/images/icons/icons.svg#order-arrow"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
                <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                    <div class="container-fluid container-fluid-max-xl">
                        <form action="mySearchURL" method="GET" name="mySearchName" role="search">
                            <div class="input-group">
                                <div class="input-group-item">
                                    <input aria-label="Search" class="form-control input-group-inset input-group-inset-after" name="mySearchInputName" placeholder="Search for..." type="text"/>
                                    <span class="input-group-inset-item input-group-inset-item-after">
                                        <button class="btn navbar-breakpoint-d-none btn-unstyled" aria-label="times" type="button">
                                            <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                                <title>times</title>
                                                <use href="/images/icons/icons.svg#times"></use>
                                            </svg>
                                        </button>
                                        <button class="btn btn-unstyled" aria-label="search" type="submit">
                                            <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                                <title>search</title>
                                                <use href="/images/icons/icons.svg#search"></use>
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item navbar-breakpoint-d-none">
                        <button class="btn nav-link nav-link-monospaced btn-unstyled" aria-label="search" type="button">
                            <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                <title>search</title>
                                <use href="/images/icons/icons.svg#search"></use>
                            </svg>
                        </button>
                    </li>
                    <li class="dropdown nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-link nav-link-monospaced btn-unstyled" title="Display Style" type="button">
                                <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                                    <title>table</title>
                                    <use href="/images/icons/icons.svg#table"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-btn nav-btn-monospaced btn-primary" title="New" type="button">
                                <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                                    <title>plus</title>
                                    <use href="/images/icons/icons.svg#plus"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container-fluid container-fluid-max-xl container-no-gutters-sm-down container-view">
        <form>
            <div class="table-responsive">
                <table class="table table-autofit table-hover table-list show-quick-actions-on-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="table-cell-expand">
                                <button class="btn btn-unstyled" type="button">
                                    Name
                                    <span class="inline-item inline-item-after">
                                        <svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
                                            <title>order-arrow-up</title>
                                            <use href="/images/icons/icons.svg#order-arrow-up"></use>
                                        </svg>
                                    </span>
                                </button>
                            </th>
                            <th>Origin</th>
                            <th>Time</th>
                            <th>SpicyLevel</th>
                            <th>Download</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-divider" id="group-0">
                            <td colspan="7">Folders</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-0" class="custom-control-input" name="folder" value="1" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Photos</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-0" class="custom-control-input" name="folder" value="2" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Videos</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider" id="group-1">
                            <td colspan="7">Recipes</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="3" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Hamburger</span></span></h1>
                            </td>
                            <td><span class="text-truncate">U.S.A</span></td>
                            <td class="text-right">10 min.</td>
                            <td><span class="label label-success"><span class="label-item label-item-expand">Not Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="2" class="progress-bar" role="progressbar" style="width: 2%;"></div>
                                    </div>
                                    <div class="progress-group-addon">2%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="4" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Ramen</span></span></h1>
                            </td>
                            <td><span class="text-truncate">China</span></td>
                            <td class="text-right">90 min.</td>
                            <td><span class="label label-warning"><span class="label-item label-item-expand">Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="8" class="progress-bar" role="progressbar" style="width: 8%;"></div>
                                    </div>
                                    <div class="progress-group-addon">8%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="5" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Paella</span></span></h1>
                            </td>
                            <td><span class="text-truncate">Spain</span></td>
                            <td class="text-right">90 min.</td>
                            <td><span class="label label-success"><span class="label-item label-item-expand">Not Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="9" class="progress-bar" role="progressbar" style="width: 9%;"></div>
                                    </div>
                                    <div class="progress-group-addon">9%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="6" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Pizza</span></span></h1>
                            </td>
                            <td><span class="text-truncate">Italy</span></td>
                            <td class="text-right">30 min.</td>
                            <td><span class="label label-success"><span class="label-item label-item-expand">Not Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="6" class="progress-bar" role="progressbar" style="width: 6%;"></div>
                                    </div>
                                    <div class="progress-group-addon">6%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="7" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Carcamusas</span></span></h1>
                            </td>
                            <td><span class="text-truncate">Toledo</span></td>
                            <td class="text-right">50 min.</td>
                            <td><span class="label label-warning"><span class="label-item label-item-expand">Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="5" class="progress-bar" role="progressbar" style="width: 5%;"></div>
                                    </div>
                                    <div class="progress-group-addon">5%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" value="8" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Tacos</span></span></h1>
                            </td>
                            <td><span class="text-truncate">Mexico</span></td>
                            <td class="text-right">30 min.</td>
                            <td><span class="label label-danger"><span class="label-item label-item-expand">Very Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="5" class="progress-bar" role="progressbar" style="width: 5%;"></div>
                                    </div>
                                    <div class="progress-group-addon">5%</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider" id="group-2">
                            <td colspan="7">Chefs</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-2" class="custom-control-input" name="chef" value="9" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Ferrán Adriá</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-2" class="custom-control-input" name="chef" value="10" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Gordon Ramsay</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-2" class="custom-control-input" name="chef" value="11" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Alberto Chicote</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>

```soy
{call ClayDatasetDisplay.render}
    {param actionItems: actionItemsWithQuickItems /}
    {param creationMenu: creationMenuConfiguration /}
    {param filterItems: listOfFilterMenuItems /}
    {param items: itemsOfDataset /}
    {param selectedView: 2 /}
    {param searchActionURL: 'mySearchURL' /}
    {param searchFormName: 'mySearchName' /}
    {param searchInputName: 'mySearchInputName' /}
    {param selectable: true /}
    {param spritemap: spritemap /}
    {param title: 'Group Header 1' /}
    {param views: viewsList /}
{/call}
```
```html
<clay-dataset-display
    actionItems="actionItemsWithQuickItems"
    creationMenu="creationMenuConfiguration"
    filterItems="listOfFilterMenuItems"
    items="itemsOfDataset"
    selectedView="2"
    searchActionURL="mySearchURL"
    searchFormName="mySearchName"
    searchInputName="mySearchInputName"
    selectable="true"
    spritemap="spritemap"
    title="Group Header 1"
    views="viewsList"
></clay-dataset-display>
```
```html
<div class="clay-dataset-display">
    <div>
        <nav class="management-bar management-bar-light navbar navbar-expand-md">
            <div class="container-fluid container-fluid-max-xl">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="custom-control custom-checkbox"><label><input class="custom-control-input" type="checkbox"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">select-items</span></span></label></div>
                    </li>
                    <li class="dropdown nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-link btn-unstyled" type="button">
                                <span class="navbar-breakpoint-down-d-none">
                                    filter-and-order
                                    <svg class="lexicon-icon lexicon-icon-caret-bottom inline-item inline-item-after" focusable="false" role="presentation">
                                        <title>caret-bottom</title>
                                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                                    </svg>
                                </span>
                                <span class="navbar-breakpoint-d-none">
                                    <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                                        <title>filter</title>
                                        <use href="/images/icons/icons.svg#filter"></use>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <button class="btn nav-link nav-link-monospaced order-arrow-up-active btn-unstyled" aria-label="order-arrow" title="order" type="button">
                            <svg class="lexicon-icon lexicon-icon-order-arrow" focusable="false" role="presentation">
                                <title>order-arrow</title>
                                <use href="/images/icons/icons.svg#order-arrow"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
                <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                    <div class="container-fluid container-fluid-max-xl">
                        <form action="mySearchURL" method="GET" name="mySearchName" role="search">
                            <div class="input-group">
                                <div class="input-group-item">
                                    <input aria-label="Search" class="form-control input-group-inset input-group-inset-after" name="mySearchInputName" placeholder="search-for" type="text"/>
                                    <span class="input-group-inset-item input-group-inset-item-after">
                                        <button class="btn navbar-breakpoint-d-none btn-unstyled" aria-label="times" type="button">
                                            <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                                <title>times</title>
                                                <use href="/images/icons/icons.svg#times"></use>
                                            </svg>
                                        </button>
                                        <button class="btn btn-unstyled" aria-label="search" type="submit">
                                            <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                                <title>search</title>
                                                <use href="/images/icons/icons.svg#search"></use>
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item navbar-breakpoint-d-none">
                        <button class="btn nav-link nav-link-monospaced btn-unstyled" aria-label="search" type="button">
                            <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                <title>search</title>
                                <use href="/images/icons/icons.svg#search"></use>
                            </svg>
                        </button>
                    </li>
                    <li class="dropdown nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-link nav-link-monospaced btn-unstyled" title="display-style" type="button">
                                <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                                    <title>table</title>
                                    <use href="/images/icons/icons.svg#table"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button aria-expanded="false" aria-haspopup="true" aria-label="toggle" class="dropdown-toggle btn nav-btn nav-btn-monospaced btn-primary" title="new" type="button">
                                <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                                    <title>plus</title>
                                    <use href="/images/icons/icons.svg#plus"></use>
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container-fluid container-fluid-max-xl container-no-gutters-sm-down container-view">
        <form>
            <div class="table-responsive">
                <table class="table table-autofit table-hover table-list show-quick-actions-on-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="table-cell-expand">
                                <button class="btn btn-unstyled" type="button">
                                    Name
                                    <span class="inline-item inline-item-after">
                                        <svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
                                            <title>order-arrow-up</title>
                                            <use href="/images/icons/icons.svg#order-arrow-up"></use>
                                        </svg>
                                    </span>
                                </button>
                            </th>
                            <th>Origin</th>
                            <th>Time</th>
                            <th>SpicyLevel</th>
                            <th>Download</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-divider" id="group-0">
                            <td colspan="7">Folders</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-0" class="custom-control-input" name="folder" type="checkbox" value="1"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Photos</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-0" class="custom-control-input" name="folder" type="checkbox" value="2"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Videos</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider" id="group-1">
                            <td colspan="7">Recipes</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-1" class="custom-control-input" name="recipe" type="checkbox" value="3"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Hamburger</span></span></h1>
                            </td>
                            <td><span class="text-truncate">U.S.A</span></td>
                            <td class="text-right">10 min.</td>
                            <td><span class="label label-success"><span class="label-item label-item-expand">Not Spicy</span></span></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="2" class="progress-bar" role="progressbar" style="width: 2%;"></div>
                                    </div>
                                    <div class="progress-group-addon">2%</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="table-divider" id="group-2">
                            <td colspan="7">Chefs</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox"><label><input aria-labelledby="group-2" class="custom-control-input" name="chef" type="checkbox" value="9"/><span class="custom-control-label"><span class="custom-control-label-text sr-only">deselect</span></span></label></div>
                            </td>
                            <td class="table-cell-expand">
                                <h1 class="table-list-title"><span class="text-truncate-inline"><span class="text-truncate">Ferrán Adriá</span></span></h1>
                            </td>
                            <td><span class="text-truncate"></span></td>
                            <td class="text-right"></td>
                            <td></td>
                            <td><button class="btn btn-sm btn-secondary" type="button">Download</button></td>
                            <td>
                                <div class="progress-group progress-info">
                                    <div class="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar" role="progressbar" style="width: 0%;"></div>
                                    </div>
                                    <div class="progress-group-addon">0%</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
```

#### API

<div>
	[APITable "clay-dataset-display/src/ClayDatasetDisplay.js"]
</div>

