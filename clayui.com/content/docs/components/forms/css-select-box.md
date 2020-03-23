---
title: 'Select Box'
description: 'This section demonstrates the different text input types, including usage and validation states.'
---

<h1>Select Box CSS</h1>
<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Basic Usage](#basic-usage)
    -   [With Reorder Buttons](#with-reorder-buttons)

</div>
</div>

### Clay Select Box

<div class="sheet-example">
    <div class="form-group">
        <label for="clayReorderNoActionsDemo1">Clay Select Box</label>
        <div class="clay-reorder">
            <select class="form-control form-control-inset" id="clayReorderNoActionsDemo1" multiple>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div class="clay-reorder-underlay form-control"></div>
        </div>
    </div>
</div>

#### With Reorder Buttons

<div class="sheet-example">
    <div class="form-group">
        <label for="claySelectBoxWithActionsDemo1">Clay Select Box</label>
        <div class="clay-reorder">
            <select class="form-control form-control-inset" id="claySelectBoxWithActionsDemo1" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
</div>
