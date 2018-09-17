---
title: "Toggle Switch"
---

<article>

### Toggle Switch with Checkbox

<div class="sheet">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle"></span>
        </span>
    </label>
</div>

```html
<label class="toggle-switch">
    <input class="toggle-switch-check" type="checkbox">
    <span aria-hidden="true" class="toggle-switch-bar">
        <span class="toggle-switch-handle"></span>
    </span>
</label>
```

</article>

<article>

### Toggle Switch with Radio

<div class="sheet">
    <label class="toggle-switch">
        <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle"></span>
        </span>
    </label>
    <label class="toggle-switch">
        <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option2">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle"></span>
        </span>
    </label>
    <label class="toggle-switch">
        <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option3">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle"></span>
        </span>
    </label>
</div>

```html
<label class="toggle-switch">
    <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1">
    <span aria-hidden="true" class="toggle-switch-bar">
        <span class="toggle-switch-handle"></span>
    </span>
</label>
<label class="toggle-switch">
    <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option2">
    <span aria-hidden="true" class="toggle-switch-bar">
        <span class="toggle-switch-handle"></span>
    </span>
</label>
<label class="toggle-switch">
    <input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option3">
    <span aria-hidden="true" class="toggle-switch-bar">
        <span class="toggle-switch-handle"></span>
    </span>
</label>
```

</article>

<article>

### Toggle Switch with Data Attributes

Use data attributes <code>data-label-on=""</code> and <code>data-label-off=""</code> on <code>&lt;span class="toggle-switch-handle"&gt;&lt;/span&gt;</code> to display specific text when the switch is on and off.

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="Switch is off." data-label-on="Switch is on.">
				</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Toggle Switch with data-label-on</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="Switch is off." data-label-on="Switch is on.">
            </span>
        </span>
    </label>
</div>
```

</article>

<article>

### Toggle Switch Text

Add additional text with class <code>toggle-switch-text</code>.

<div class="sheet">
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span class="toggle-switch-label">Adding Required Text</span>
            <span class="toggle-switch-text">Required *</span>
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
                </span>
            </span>
        </label>
    </div>
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span class="toggle-switch-label">Adding Required Text</span>
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
                </span>
            </span>
            <span class="toggle-switch-text">Required *</span>
        </label>
    </div>
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span class="toggle-switch-label">Required Text on Right</span>
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
                </span>
            </span>
            <span class="toggle-switch-text toggle-switch-text-right">Required *</span>
        </label>
    </div>
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span class="toggle-switch-label">Required Text on Left</span>
            <span class="toggle-switch-text toggle-switch-text-left">Required *</span>
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
                </span>
            </span>
        </label>
    </div>
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span class="toggle-switch-label">The Kitchen Sink</span>
            <span class="toggle-switch-text">Top Text</span>
            <span class="toggle-switch-text toggle-switch-text-left">Error</span>
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle" data-label-off="OFF" data-label-on="ON">
                </span>
            </span>
            <span class="toggle-switch-text toggle-switch-text-right">Required *</span>
            <span class="toggle-switch-text">Bottom Text</span>
        </label>
    </div>
</div>

```html
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Adding Required Text</span>
        <span class="toggle-switch-text">Required *</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Adding Required Text</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
            </span>
        </span>
        <span class="toggle-switch-text">Required *</span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Required Text on Right</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
            </span>
        </span>
        <span class="toggle-switch-text toggle-switch-text-right">Required *</span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Required Text on Left</span>
        <span class="toggle-switch-text toggle-switch-text-left">Required *</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">The Kitchen Sink</span>
        <span class="toggle-switch-text">Top Text</span>
        <span class="toggle-switch-text toggle-switch-text-left">Error</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="OFF" data-label-on="ON">
            </span>
        </span>
        <span class="toggle-switch-text toggle-switch-text-right">Required *</span>
        <span class="toggle-switch-text">Bottom Text</span>
    </label>
</div>
```

</article>

<article>

### Toggle Switches with Icons

Add an icon to the switch for the on position with <code>&lt;span class="button-icon button-icon-on icon-volume-up toggle-switch-icon"&gt;&lt;/span&gt;</code>.

Add an icon to the switch for the off position with <code>&lt;span class="button-icon button-icon-off icon-volume-off toggle-switch-icon"&gt;&lt;/span&gt;</code>.

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock" viewBox="0 0 512 512">
                            <path class="lexicon-icon-outline" d="M364.8,223.9H192v-96.1c0-84,128-84.7,128,0v31.5h32v-31.5c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M288,416h-64v-96.1h64V416z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock" viewBox="0 0 512 512">
                            <path class="lexicon-icon-outline" d="M364.8,223.9H352v-96.1c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M192,127.8c0-84,128-84.7,128,0v96.1H192V127.8z M288,416h-64v-96.1h64V416z"></path>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z"></path>
                            <path class="lexicon-icon-outline" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M256,384c-70.7,0-128-57.3-128-128
                                s57.3-128,128-128s128,57.3,128,128S326.7,384,256,384z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging" viewBox="0 0 512 512">
                            <g>
                                <path class="lexicon-icon-outline" d="M384,254.7c0,0.4,0,0.8,0,1.3c0,16.8-3.2,32.8-9.1,47.5L493,352c12.6-30.9,19-63.6,19-97.3V254L384,254.7z"></path>
                                <path class="lexicon-icon-outline" d="M323.1,147l68.8-110.2C363.5,18.9,332.5,7,299.6,1.3l-22,128.5C294,132.6,309.4,138.5,323.1,147z"></path>
                                <path class="lexicon-icon-outline" d="M377.3,215.2l122.2-39.8c-10.3-31.8-26.4-60.9-48-86.6L353,172.5C363.7,184.9,372,199.3,377.3,215.2z"></path>
                                <path class="lexicon-icon-outline" d="M161.8,169.3L66,82.3c-22.4,24.9-39.5,53.5-50.8,84.9l120.9,43.9C141.9,195.6,150.7,181.4,161.8,169.3z"></path>
                                <path class="lexicon-icon-outline" d="M238.5,129.2L220.7,0c-33.1,4.6-64.5,15.5-93.4,32.4l65.2,112.5C206.4,136.9,221.9,131.5,238.5,129.2z"></path>
                                <path class="lexicon-icon-outline" d="M256,384c-9.3,0-18.4-1-27.2-2.9l-26.7,125.2c17.7,3.8,35.5,5.9,54.1,5.7c14.8,0,29.8-1.3,44.4-3.9L278.5,382
                                    C271.2,383.3,263.7,384,256,384z"></path>
                                <path class="lexicon-icon-outline" d="M316,369.1l59.5,113.2c29.4-15.6,55.2-36.6,76.6-62.2l-97.7-82.3C343.9,350.5,330.8,361.2,316,369.1z"></path>
                                <path class="lexicon-icon-outline" d="M128,256c0-2,0.1-4,0.1-6l-128-4.6c-0.1,3.1-0.2,6.2-0.2,9.4c0,30.3,5.2,60.1,15.5,88.4l119.9-44.1
                                    C130.6,285.6,128,271.1,128,256z"></path>
                                <path class="lexicon-icon-outline" d="M154.5,334L53.9,412.7c20.5,26.4,45.5,48.3,74.3,65l63.7-110.9C177.4,358.4,164.7,347.2,154.5,334z"></path>
                            </g>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5
                                V52.4C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z"></path>
                            <path class="lexicon-icon-outline" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5V52.4
                                C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z M448,448H256V64h192V448z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416
                                C512,490.4,490.4,512,464,512L464,512z"></path>
                            <path class="lexicon-icon-outline" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416C512,490.4,490.4,512,464,512
                                L464,512z M160,448h288V64H160V448z"></path>
                            <path class="lexicon-icon-outline" d="M31,0C13.9,0,0,13.9,0,31V481c0,17.1,13.9,31,31,31s31-13.9,31-31V31C62.1,13.9,48.2,0,31,0C31,0,31,0,31,0z"></path>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M364.8,223.9H192v-96.1c0-84,128-84.7,128,0v31.5h32v-31.5c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M288,416h-64v-96.1h64V416z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M364.8,223.9H352v-96.1c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M192,127.8c0-84,128-84.7,128,0v96.1H192V127.8z M288,416h-64v-96.1h64V416z"></path>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Toggle Switch with data-label-on</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-live" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z"></path>
                        <path class="lexicon-icon-outline" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M256,384c-70.7,0-128-57.3-128-128
                            s57.3-128,128-128s128,57.3,128,128S326.7,384,256,384z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging" viewBox="0 0 512 512">
                        <g>
                            <path class="lexicon-icon-outline" d="M384,254.7c0,0.4,0,0.8,0,1.3c0,16.8-3.2,32.8-9.1,47.5L493,352c12.6-30.9,19-63.6,19-97.3V254L384,254.7z"></path>
                            <path class="lexicon-icon-outline" d="M323.1,147l68.8-110.2C363.5,18.9,332.5,7,299.6,1.3l-22,128.5C294,132.6,309.4,138.5,323.1,147z"></path>
                            <path class="lexicon-icon-outline" d="M377.3,215.2l122.2-39.8c-10.3-31.8-26.4-60.9-48-86.6L353,172.5C363.7,184.9,372,199.3,377.3,215.2z"></path>
                            <path class="lexicon-icon-outline" d="M161.8,169.3L66,82.3c-22.4,24.9-39.5,53.5-50.8,84.9l120.9,43.9C141.9,195.6,150.7,181.4,161.8,169.3z"></path>
                            <path class="lexicon-icon-outline" d="M238.5,129.2L220.7,0c-33.1,4.6-64.5,15.5-93.4,32.4l65.2,112.5C206.4,136.9,221.9,131.5,238.5,129.2z"></path>
                            <path class="lexicon-icon-outline" d="M256,384c-9.3,0-18.4-1-27.2-2.9l-26.7,125.2c17.7,3.8,35.5,5.9,54.1,5.7c14.8,0,29.8-1.3,44.4-3.9L278.5,382
                                C271.2,383.3,263.7,384,256,384z"></path>
                            <path class="lexicon-icon-outline" d="M316,369.1l59.5,113.2c29.4-15.6,55.2-36.6,76.6-62.2l-97.7-82.3C343.9,350.5,330.8,361.2,316,369.1z"></path>
                            <path class="lexicon-icon-outline" d="M128,256c0-2,0.1-4,0.1-6l-128-4.6c-0.1,3.1-0.2,6.2-0.2,9.4c0,30.3,5.2,60.1,15.5,88.4l119.9-44.1
                                C130.6,285.6,128,271.1,128,256z"></path>
                            <path class="lexicon-icon-outline" d="M154.5,334L53.9,412.7c20.5,26.4,45.5,48.3,74.3,65l63.7-110.9C177.4,358.4,164.7,347.2,154.5,334z"></path>
                        </g>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5
                            V52.4C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z"></path>
                        <path class="lexicon-icon-outline" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5V52.4
                            C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z M448,448H256V64h192V448z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416
                            C512,490.4,490.4,512,464,512L464,512z"></path>
                        <path class="lexicon-icon-outline" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416C512,490.4,490.4,512,464,512
                            L464,512z M160,448h288V64H160V448z"></path>
                        <path class="lexicon-icon-outline" d="M31,0C13.9,0,0,13.9,0,31V481c0,17.1,13.9,31,31,31s31-13.9,31-31V31C62.1,13.9,48.2,0,31,0C31,0,31,0,31,0z"></path>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
```

</article>

<article>

### Toggle Switches with Icons (Alternate)

Add an icon to the switch for the on position with <code>&lt;span class="icon-ok toggle-switch-icon toggle-switch-icon-on"&gt;&lt;/span&gt;</code>.

Add an icon to the switch for the off position with <code>&lt;span class="icon-remove toggle-switch-icon toggle-switch-icon-off"&gt;&lt;/span&gt;</code>.

<div class="sheet">
    <div class="form-group">
        <label class="toggle-switch">
            <input class="toggle-switch-check" type="checkbox">
            <span aria-hidden="true" class="toggle-switch-bar">
                <span class="toggle-switch-handle">
                    <span class="toggle-switch-icon toggle-switch-icon-on">
                        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M502.091 60.993c-9.909-9.91-25.962-9.91-35.843 0l-336.988 336.988-83.508-83.451c-9.881-9.909-25.962-9.909-35.843 0-9.909 9.909-9.909 25.962 0 35.843l98.257 98.257c2.608 2.608 5.679 4.433 8.924 5.679 4.028 2.464 8.403 4.115 12.952 4.115 6.49 0 12.981-2.464 17.936-7.418l354.112-354.141c9.909-9.909 9.909-25.962 0-35.871l0-0.001z"></path>
                        </svg>
                    </span>
                    <span class="toggle-switch-icon toggle-switch-icon-off">
                        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
                        </svg>
                    </span>
                </span>
            </span>
        </label>
    </div>
</div>

```html
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
                <span class="toggle-switch-icon toggle-switch-icon-on">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check" viewBox="0 0 512 512">
                    <path class="lexicon-icon-outline" d="M502.091 60.993c-9.909-9.91-25.962-9.91-35.843 0l-336.988 336.988-83.508-83.451c-9.881-9.909-25.962-9.909-35.843 0-9.909 9.909-9.909 25.962 0 35.843l98.257 98.257c2.608 2.608 5.679 4.433 8.924 5.679 4.028 2.464 8.403 4.115 12.952 4.115 6.49 0 12.981-2.464 17.936-7.418l354.112-354.141c9.909-9.909 9.909-25.962 0-35.871l0-0.001z"></path>
                    </svg>
                </span>
                <span class="toggle-switch-icon toggle-switch-icon-off">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-times" viewBox="0 0 512 512">
                    <path class="lexicon-icon-outline" d="M295.781 256l205.205-205.205c10.998-10.998 10.998-28.814 0-39.781-10.998-10.998-28.815-10.998-39.781 0l-205.205 205.205-205.205-205.238c-10.966-10.998-28.814-10.998-39.781 0-10.998 10.998-10.998 28.814 0 39.781l205.205 205.238-205.205 205.205c-10.998 10.998-10.998 28.815 0 39.781 5.467 5.531 12.671 8.265 19.874 8.265s14.407-2.734 19.907-8.233l205.205-205.238 205.205 205.205c5.5 5.5 12.703 8.233 19.906 8.233s14.407-2.734 19.906-8.233c10.998-10.998 10.998-28.815 0-39.781l-205.238-205.205z"></path>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
```

</article>

<article>

### Disabled Toggle Switches

Disable a toggle-switch by adding the attribute <code>disabled</code> to <code>&lt;input type="checkbox"&gt;</code>.

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" disabled="" type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock" viewBox="0 0 512 512">
                            <path class="lexicon-icon-outline" d="M364.8,223.9H192v-96.1c0-84,128-84.7,128,0v31.5h32v-31.5c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M288,416h-64v-96.1h64V416z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock" viewBox="0 0 512 512">
                            <path class="lexicon-icon-outline" d="M364.8,223.9H352v-96.1c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M192,127.8c0-84,128-84.7,128,0v96.1H192V127.8z M288,416h-64v-96.1h64V416z"></path>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="disabled toggle-switch">
			<input class="toggle-switch-check" disabled="" type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z"></path>
                            <path class="lexicon-icon-outline" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M256,384c-70.7,0-128-57.3-128-128
                                s57.3-128,128-128s128,57.3,128,128S326.7,384,256,384z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging" viewBox="0 0 512 512">
                            <g>
                                <path class="lexicon-icon-outline" d="M384,254.7c0,0.4,0,0.8,0,1.3c0,16.8-3.2,32.8-9.1,47.5L493,352c12.6-30.9,19-63.6,19-97.3V254L384,254.7z"></path>
                                <path class="lexicon-icon-outline" d="M323.1,147l68.8-110.2C363.5,18.9,332.5,7,299.6,1.3l-22,128.5C294,132.6,309.4,138.5,323.1,147z"></path>
                                <path class="lexicon-icon-outline" d="M377.3,215.2l122.2-39.8c-10.3-31.8-26.4-60.9-48-86.6L353,172.5C363.7,184.9,372,199.3,377.3,215.2z"></path>
                                <path class="lexicon-icon-outline" d="M161.8,169.3L66,82.3c-22.4,24.9-39.5,53.5-50.8,84.9l120.9,43.9C141.9,195.6,150.7,181.4,161.8,169.3z"></path>
                                <path class="lexicon-icon-outline" d="M238.5,129.2L220.7,0c-33.1,4.6-64.5,15.5-93.4,32.4l65.2,112.5C206.4,136.9,221.9,131.5,238.5,129.2z"></path>
                                <path class="lexicon-icon-outline" d="M256,384c-9.3,0-18.4-1-27.2-2.9l-26.7,125.2c17.7,3.8,35.5,5.9,54.1,5.7c14.8,0,29.8-1.3,44.4-3.9L278.5,382
                                    C271.2,383.3,263.7,384,256,384z"></path>
                                <path class="lexicon-icon-outline" d="M316,369.1l59.5,113.2c29.4-15.6,55.2-36.6,76.6-62.2l-97.7-82.3C343.9,350.5,330.8,361.2,316,369.1z"></path>
                                <path class="lexicon-icon-outline" d="M128,256c0-2,0.1-4,0.1-6l-128-4.6c-0.1,3.1-0.2,6.2-0.2,9.4c0,30.3,5.2,60.1,15.5,88.4l119.9-44.1
                                    C130.6,285.6,128,271.1,128,256z"></path>
                                <path class="lexicon-icon-outline" d="M154.5,334L53.9,412.7c20.5,26.4,45.5,48.3,74.3,65l63.7-110.9C177.4,358.4,164.7,347.2,154.5,334z"></path>
                            </g>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input checked="" class="toggle-switch-check" disabled="" type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5
                                V52.4C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z"></path>
                            <path class="lexicon-icon-outline" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5V52.4
                                C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z M448,448H256V64h192V448z"></path>
                        </svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed" viewBox="0 0 512 512">
                            <path class="lexicon-icon-body" fill="none" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416
                                C512,490.4,490.4,512,464,512L464,512z"></path>
                            <path class="lexicon-icon-outline" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416C512,490.4,490.4,512,464,512
                                L464,512z M160,448h288V64H160V448z"></path>
                            <path class="lexicon-icon-outline" d="M31,0C13.9,0,0,13.9,0,31V481c0,17.1,13.9,31,31,31s31-13.9,31-31V31C62.1,13.9,48.2,0,31,0C31,0,31,0,31,0z"></path>
                        </svg>
					</span>
				</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="form-group">
    <label class="toggle-switch">
        <input class="toggle-switch-check" disabled="" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M364.8,223.9H192v-96.1c0-84,128-84.7,128,0v31.5h32v-31.5c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M288,416h-64v-96.1h64V416z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock" viewBox="0 0 512 512">
                        <path class="lexicon-icon-outline" d="M364.8,223.9H352v-96.1c0-127.4-192-128.1-192,0v96.1h-19.2c-28.2,0-44.8,23-44.8,51.2v153.7c0,28.2,16.6,51.2,44.8,51.2h224c28.2,0,51.2-23,51.2-51.2V275.1C416,246.9,393,223.9,364.8,223.9z M192,127.8c0-84,128-84.7,128,0v96.1H192V127.8z M288,416h-64v-96.1h64V416z"></path>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="disabled toggle-switch">
        <input class="toggle-switch-check" disabled="" type="checkbox">
        <span class="toggle-switch-label">Toggle Switch with data-label-on</span>
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-live" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z"></path>
                        <path class="lexicon-icon-outline" d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M256,384c-70.7,0-128-57.3-128-128
                            s57.3-128,128-128s128,57.3,128,128S326.7,384,256,384z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging" viewBox="0 0 512 512">
                        <g>
                            <path class="lexicon-icon-outline" d="M384,254.7c0,0.4,0,0.8,0,1.3c0,16.8-3.2,32.8-9.1,47.5L493,352c12.6-30.9,19-63.6,19-97.3V254L384,254.7z"></path>
                            <path class="lexicon-icon-outline" d="M323.1,147l68.8-110.2C363.5,18.9,332.5,7,299.6,1.3l-22,128.5C294,132.6,309.4,138.5,323.1,147z"></path>
                            <path class="lexicon-icon-outline" d="M377.3,215.2l122.2-39.8c-10.3-31.8-26.4-60.9-48-86.6L353,172.5C363.7,184.9,372,199.3,377.3,215.2z"></path>
                            <path class="lexicon-icon-outline" d="M161.8,169.3L66,82.3c-22.4,24.9-39.5,53.5-50.8,84.9l120.9,43.9C141.9,195.6,150.7,181.4,161.8,169.3z"></path>
                            <path class="lexicon-icon-outline" d="M238.5,129.2L220.7,0c-33.1,4.6-64.5,15.5-93.4,32.4l65.2,112.5C206.4,136.9,221.9,131.5,238.5,129.2z"></path>
                            <path class="lexicon-icon-outline" d="M256,384c-9.3,0-18.4-1-27.2-2.9l-26.7,125.2c17.7,3.8,35.5,5.9,54.1,5.7c14.8,0,29.8-1.3,44.4-3.9L278.5,382
                                C271.2,383.3,263.7,384,256,384z"></path>
                            <path class="lexicon-icon-outline" d="M316,369.1l59.5,113.2c29.4-15.6,55.2-36.6,76.6-62.2l-97.7-82.3C343.9,350.5,330.8,361.2,316,369.1z"></path>
                            <path class="lexicon-icon-outline" d="M128,256c0-2,0.1-4,0.1-6l-128-4.6c-0.1,3.1-0.2,6.2-0.2,9.4c0,30.3,5.2,60.1,15.5,88.4l119.9-44.1
                                C130.6,285.6,128,271.1,128,256z"></path>
                            <path class="lexicon-icon-outline" d="M154.5,334L53.9,412.7c20.5,26.4,45.5,48.3,74.3,65l63.7-110.9C177.4,358.4,164.7,347.2,154.5,334z"></path>
                        </g>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
<div class="form-group">
    <label class="toggle-switch">
        <input checked="" class="toggle-switch-check" disabled="" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
                <span class="button-icon button-icon-on toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5
                            V52.4C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z"></path>
                        <path class="lexicon-icon-outline" d="M465.5,5.8H46.5C20.9,5.8,0,26.7,0,52.3v407.3c0,25.7,20.9,46.5,46.5,46.5h418.9c25.7,0,46.5-20.9,46.5-46.5V52.4
                            C512,26.7,491.1,5.8,465.5,5.8L465.5,5.8L465.5,5.8z M448,448H256V64h192V448z"></path>
                    </svg>
                </span>
                <span class="button-icon button-icon-off toggle-switch-icon">
                    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed" viewBox="0 0 512 512">
                        <path class="lexicon-icon-body" fill="none" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416
                            C512,490.4,490.4,512,464,512L464,512z"></path>
                        <path class="lexicon-icon-outline" d="M464,512H144c-26.5,0-48-21.5-48-48v-416c0-26.4,21.5-48,48-48h320c26.5,0,48,21.5,48,48v416C512,490.4,490.4,512,464,512
                            L464,512z M160,448h288V64H160V448z"></path>
                        <path class="lexicon-icon-outline" d="M31,0C13.9,0,0,13.9,0,31V481c0,17.1,13.9,31,31,31s31-13.9,31-31V31C62.1,13.9,48.2,0,31,0C31,0,31,0,31,0z"></path>
                    </svg>
                </span>
            </span>
        </span>
    </label>
</div>
```

</article>

<article>

### Extending Toggles

This section is used to explain how customize toggles, use at your own risk.

<img alt="explaining how switch works" style="width: 700px;" src="/images/switch_components.png"></img>

#### Custom Toggle Switch using Images

Customize:

the **toggle-switch button in the off** position with <code>.toggle-switch-check:empty ~ .toggle-switch-bar:after {}</code>.

the **toggle-switch button icon in the off** position with <code>.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon.button-icon {}</code>.

the **toggle-switch bar in the off** position with <code>.toggle-switch-check:empty ~ .toggle-switch-bar:before {}</code>.

the **toggle-switch bar icon in the off** position with <code>.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {}</code>.

the **toggle-switch button in the on** position with <code>.toggle-switch-check:checked ~ .toggle-switch-bar:after {}</code>.

the **toggle-switch button icon in the on** position with <code>.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon.button-icon</code>.

the **toggle-switch bar in the on** position with <code>.toggle-switch-check:checked ~ .toggle-switch-bar:before {}</code>.

the **toggle-switch bar icon in the on** position with <code>.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {}</code>.

<style>
    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
        background-color: transparent;
        background-image: url(/images/switch_button.png);
        background-repeat: no-repeat;
        background-size: 100%;
        border-width: 0;
        bottom: 0;
        height: auto;
        left: 2px;
        top: 1px;
        width: 22px;
    }

    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
        background-color: transparent;
        background-image: url(/images/switch_base.png);
        background-repeat: no-repeat;
        background-size: 100%;
        border-radius: 20px;
        border-width: 0;
        width: 51px;
    }

    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
        background-image: url(/images/switch_off_icon.png);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 15px;
        left: 28px;
        top: 4px;
        width: 15px;
    }

    #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
        left: 26px;
    }

    #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
        background-image: url(/images/switch_on_icon.png);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 17px;
        left: 5px;
        top: 4px;
        width: 17px;
    }

    @media (min-width: 768px) {
        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
            width: 30px;
        }

        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
            width: 68px;
        }

        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
            height: 17px;
            left: 40px;
            top: 7px;
            width: 17px;
        }

        #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
            left: 35px;
        }

        #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
            left: 12px;
            top: 8px;
        }
    }
</style>

<div class="form-group" id="demoToggleSwitch" style="margin-bottom:0;">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
                    <span class="toggle-switch-icon toggle-switch-icon-on"></span>
                    <span class="toggle-switch-icon toggle-switch-icon-off"></span>
            </span>
        </span>
    </label>
</div>

```html
<style>
    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
        background-color: transparent;
        background-image: url(/images/switch_button.png);
        background-repeat: no-repeat;
        background-size: 100%;
        border-width: 0;
        bottom: 0;
        height: auto;
        left: 2px;
        top: 1px;
        width: 22px;
    }

    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
        background-color: transparent;
        background-image: url(/images/switch_base.png);
        background-repeat: no-repeat;
        background-size: 100%;
        border-radius: 20px;
        border-width: 0;
        width: 51px;
    }

    #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
        background-image: url(/images/switch_off_icon.png);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 15px;
        left: 28px;
        top: 4px;
        width: 15px;
    }

    #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
        left: 26px;
    }

    #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
        background-image: url(/images/switch_on_icon.png);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 17px;
        left: 5px;
        top: 4px;
        width: 17px;
    }

    @media (min-width: 768px) {
        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
            width: 30px;
        }

        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
            width: 68px;
        }

        #demoToggleSwitch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
            height: 17px;
            left: 40px;
            top: 7px;
            width: 17px;
        }

        #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
            left: 35px;
        }

        #demoToggleSwitch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
            left: 12px;
            top: 8px;
        }
    }
</style>

<div class="form-group" id="demoToggleSwitch" style="margin-bottom:0;">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
                    <span class="toggle-switch-icon toggle-switch-icon-on"></span>
                    <span class="toggle-switch-icon toggle-switch-icon-off"></span>
            </span>
        </span>
    </label>
</div>
```

iOS Style Toggle Switches

<div class="form-group ios-toggle-switch" style="margin-bottom:0;">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
            </span>
        </span>
    </label>
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
                <span class="toggle-switch-icon toggle-switch-icon-on">|</span>
                <span class="icon-circle-blank toggle-switch-icon toggle-switch-icon-off"></span>
            </span>
        </span>
    </label>
</div>

```html
<div class="form-group ios-toggle-switch" style="margin-bottom:0;">
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
            </span>
        </span>
    </label>
    <label class="toggle-switch">
        <input class="toggle-switch-check" type="checkbox">
        <span aria-hidden="true" class="toggle-switch-bar">
            <span class="toggle-switch-handle">
                <span class="toggle-switch-icon toggle-switch-icon-on">|</span>
                <span class="icon-circle-blank toggle-switch-icon toggle-switch-icon-off"></span>
            </span>
        </span>
    </label>
</div>
```


</article>