---
title: "Progress Bars"
---

<article>

### Progress Groups

Place an addon on either side of a progress component with <code>progress-group</code> and <code>progress-group-addon</code>.

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;">
        </div>
	</div>
	<div class="progress-group-addon">
        30%
    </div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
	</div>
	<div class="progress-group-addon">70%</div>
</div>

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
		</div>
	</div>
</div>

<div class="progress-group">
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
        </div>
    </div>
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
</div>

```html

<!-- Progress group with default progress bar -->

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;">
        </div>
	</div>
	<div class="progress-group-addon">
        30%
    </div>
</div>

<!-- Progress group with warning progress bar -->

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
	</div>
	<div class="progress-group-addon">70%</div>
</div>

<!-- Progress Group with progress bar success and a group-addon -->

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
		</div>
	</div>
</div>

<!-- Progress Group with default progress success and a group-addon -->

<div class="progress-group">
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
        </div>
    </div>
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
</div>
```

</article>

<article>

### Progress Group Stacked

Add <code>progress-group-stacked</code> to <code>progress-group</code> stack the addons and progress component.

<div class="progress-group progress-group-stacked">
    <div class="progress-group-addon">60% Completed</div>
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M487.4,195.2L487.4,195.2L466,192c-4.1-13.6-9.5-26.7-16.2-39.2l12.9-17.5c8.5-11.5,7.3-27.5-2.8-37.6
            l-45.6-45.6c-10.1-10.1-26.1-11.3-37.6-2.8l-17.5,12.9C346.7,55.6,333.6,50.2,320,46l-3.2-21.5C314.7,10.4,302.5,0,288.2,0h-64.5
            c-14.3,0-26.4,10.4-28.5,24.6L192,46c-13.6,4.1-26.7,9.5-39.2,16.2l-17.5-12.9c-11.5-8.5-27.5-7.3-37.6,2.8L52.2,97.8
            c-10.1,10.1-11.3,26.1-2.8,37.6l12.9,17.5C55.6,165.3,50.2,178.4,46,192l-21.5,3.2C10.5,197.3,0,209.5,0,223.8v64.5
            c0,14.3,10.5,26.4,24.6,28.5L46,320c4.1,13.6,9.5,26.7,16.2,39.2l-12.9,17.5c-8.5,11.5-7.3,27.5,2.8,37.6l45.6,45.6
            c10.1,10.1,26.1,11.3,37.6,2.8l17.5-12.9c12.5,6.7,25.6,12.1,39.2,16.2l3.2,21.5c2.1,14.1,14.3,24.6,28.5,24.6h64.5
            c14.3,0,26.4-10.5,28.5-24.6L320,466c13.6-4.1,26.7-9.5,39.2-16.2l17.5,12.9c11.5,8.5,27.5,7.3,37.6-2.8l45.6-45.6
            c10.1-10.1,11.3-26.1,2.8-37.6l-12.9-17.5c6.7-12.5,12.1-25.6,16.2-39.2l21.5-3.2c14.1-2.1,24.6-14.3,24.6-28.5v-64.5
            C512,209.5,501.6,197.3,487.4,195.2z M256,352c-53,0-96-43-96-96s43-96,96-96c53,0,96,43,96,96C352,309,309,352,256,352z"></path>
            <path class="lexicon-icon-outline" d="M256,160c-53,0-96,43-96,96s43,96,96,96s96-43,96-96S309,160,256,160z M256,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64
            s64,28.7,64,64C320,291.3,291.3,320,256,320z"></path>
            <path class="lexicon-icon-outline" d="M487.4,195.2L466,192c-4.1-13.6-9.5-26.7-16.2-39.2l12.9-17.5c8.5-11.5,7.3-27.5-2.8-37.6l-45.6-45.6
            c-10.1-10.1-26.1-11.3-37.6-2.8l-17.5,12.9C346.7,55.6,333.6,50.2,320,46l-3.2-21.5C314.7,10.4,302.5,0,288.2,0h-64.5
            c-14.3,0-26.4,10.4-28.5,24.6L192,46c-13.6,4.1-26.7,9.5-39.2,16.2l-17.5-12.9c-11.5-8.5-27.5-7.3-37.6,2.8L52.2,97.8
            c-10.1,10.1-11.3,26.1-2.8,37.6l12.9,17.5C55.6,165.3,50.2,178.4,46,192l-21.5,3.2C10.5,197.3,0,209.5,0,223.8v64.5
            c0,14.3,10.4,26.4,24.6,28.5L46,320c4.1,13.6,9.5,26.7,16.2,39.2l-12.9,17.5c-8.5,11.5-7.3,27.5,2.8,37.6l45.6,45.6
            c10.1,10.1,26.1,11.3,37.6,2.8l17.5-12.9c12.5,6.7,25.6,12.1,39.2,16.2l3.2,21.5c2.1,14.1,14.3,24.6,28.5,24.6h64.5
            c14.3,0,26.4-10.5,28.5-24.6L320,466c13.6-4.1,26.7-9.5,39.2-16.2l17.5,12.9c11.5,8.5,27.5,7.3,37.6-2.8l45.6-45.6
            c10.1-10.1,11.3-26.1,2.8-37.6l-12.9-17.5c6.7-12.5,12.1-25.6,16.2-39.2l21.5-3.2c14.1-2.1,24.6-14.3,24.6-28.5v-64.5
            C512,209.5,501.6,197.3,487.4,195.2L487.4,195.2z M475.4,281.6l-39.3,5.9c-4.7,27-15.3,52-30.5,73.6l23.6,32l-36.2,36.2l-32-23.6
            c-21.6,15.2-46.6,25.8-73.6,30.5l-5.9,39.3h-51.2l-5.9-39.3c-27-4.7-52-15.3-73.6-30.5l-32,23.6l-36.2-36.2l23.6-32
            c-15.2-21.6-25.8-46.6-30.5-73.6l-39.3-5.9v-51.2l39.3-5.9c4.7-27,15.3-52,30.5-73.6l-23.6-32l36.2-36.2l32,23.6
            c21.6-15.2,46.6-25.8,73.6-30.5l5.9-39.3h51.2l5.9,39.3c27,4.7,52,15.3,73.6,30.5l32-23.6l36.2,36.2l-23.6,32
            c15.2,21.6,25.8,46.6,30.5,73.6l39.3,5.9V281.6L475.4,281.6z"></path>
        </svg>
    </div>
</div>

```html
<div class="progress-group progress-group-stacked">
    <div class="progress-group-addon">60% Completed</div>
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">
        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog" viewBox="0 0 512 512">
            <path class="lexicon-icon-body" fill="none" d="M487.4,195.2L487.4,195.2L466,192c-4.1-13.6-9.5-26.7-16.2-39.2l12.9-17.5c8.5-11.5,7.3-27.5-2.8-37.6
            l-45.6-45.6c-10.1-10.1-26.1-11.3-37.6-2.8l-17.5,12.9C346.7,55.6,333.6,50.2,320,46l-3.2-21.5C314.7,10.4,302.5,0,288.2,0h-64.5
            c-14.3,0-26.4,10.4-28.5,24.6L192,46c-13.6,4.1-26.7,9.5-39.2,16.2l-17.5-12.9c-11.5-8.5-27.5-7.3-37.6,2.8L52.2,97.8
            c-10.1,10.1-11.3,26.1-2.8,37.6l12.9,17.5C55.6,165.3,50.2,178.4,46,192l-21.5,3.2C10.5,197.3,0,209.5,0,223.8v64.5
            c0,14.3,10.5,26.4,24.6,28.5L46,320c4.1,13.6,9.5,26.7,16.2,39.2l-12.9,17.5c-8.5,11.5-7.3,27.5,2.8,37.6l45.6,45.6
            c10.1,10.1,26.1,11.3,37.6,2.8l17.5-12.9c12.5,6.7,25.6,12.1,39.2,16.2l3.2,21.5c2.1,14.1,14.3,24.6,28.5,24.6h64.5
            c14.3,0,26.4-10.5,28.5-24.6L320,466c13.6-4.1,26.7-9.5,39.2-16.2l17.5,12.9c11.5,8.5,27.5,7.3,37.6-2.8l45.6-45.6
            c10.1-10.1,11.3-26.1,2.8-37.6l-12.9-17.5c6.7-12.5,12.1-25.6,16.2-39.2l21.5-3.2c14.1-2.1,24.6-14.3,24.6-28.5v-64.5
            C512,209.5,501.6,197.3,487.4,195.2z M256,352c-53,0-96-43-96-96s43-96,96-96c53,0,96,43,96,96C352,309,309,352,256,352z"></path>
            <path class="lexicon-icon-outline" d="M256,160c-53,0-96,43-96,96s43,96,96,96s96-43,96-96S309,160,256,160z M256,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64
            s64,28.7,64,64C320,291.3,291.3,320,256,320z"></path>
            <path class="lexicon-icon-outline" d="M487.4,195.2L466,192c-4.1-13.6-9.5-26.7-16.2-39.2l12.9-17.5c8.5-11.5,7.3-27.5-2.8-37.6l-45.6-45.6
            c-10.1-10.1-26.1-11.3-37.6-2.8l-17.5,12.9C346.7,55.6,333.6,50.2,320,46l-3.2-21.5C314.7,10.4,302.5,0,288.2,0h-64.5
            c-14.3,0-26.4,10.4-28.5,24.6L192,46c-13.6,4.1-26.7,9.5-39.2,16.2l-17.5-12.9c-11.5-8.5-27.5-7.3-37.6,2.8L52.2,97.8
            c-10.1,10.1-11.3,26.1-2.8,37.6l12.9,17.5C55.6,165.3,50.2,178.4,46,192l-21.5,3.2C10.5,197.3,0,209.5,0,223.8v64.5
            c0,14.3,10.4,26.4,24.6,28.5L46,320c4.1,13.6,9.5,26.7,16.2,39.2l-12.9,17.5c-8.5,11.5-7.3,27.5,2.8,37.6l45.6,45.6
            c10.1,10.1,26.1,11.3,37.6,2.8l17.5-12.9c12.5,6.7,25.6,12.1,39.2,16.2l3.2,21.5c2.1,14.1,14.3,24.6,28.5,24.6h64.5
            c14.3,0,26.4-10.5,28.5-24.6L320,466c13.6-4.1,26.7-9.5,39.2-16.2l17.5,12.9c11.5,8.5,27.5,7.3,37.6-2.8l45.6-45.6
            c10.1-10.1,11.3-26.1,2.8-37.6l-12.9-17.5c6.7-12.5,12.1-25.6,16.2-39.2l21.5-3.2c14.1-2.1,24.6-14.3,24.6-28.5v-64.5
            C512,209.5,501.6,197.3,487.4,195.2L487.4,195.2z M475.4,281.6l-39.3,5.9c-4.7,27-15.3,52-30.5,73.6l23.6,32l-36.2,36.2l-32-23.6
            c-21.6,15.2-46.6,25.8-73.6,30.5l-5.9,39.3h-51.2l-5.9-39.3c-27-4.7-52-15.3-73.6-30.5l-32,23.6l-36.2-36.2l23.6-32
            c-15.2-21.6-25.8-46.6-30.5-73.6l-39.3-5.9v-51.2l39.3-5.9c4.7-27,15.3-52,30.5-73.6l-23.6-32l36.2-36.2l32,23.6
            c21.6-15.2,46.6-25.8,73.6-30.5l5.9-39.3h51.2l5.9,39.3c27,4.7,52,15.3,73.6,30.5l32-23.6l36.2,36.2l-23.6,32
            c15.2,21.6,25.8,46.6,30.5,73.6l39.3,5.9V281.6L475.4,281.6z"></path>
        </svg>
    </div>
</div>
```

</article>

<article class="clay-site-progress-bar-page clay-site-row-spacer">

### Progress Variants

Add <code>progress-danger</code>, <code>progress-info</code>, <code>progress-success</code>, or <code>progress-warning</code> to <code>progress-group</code> or <code>progress</code> to provide visual feedback for different progress states. Color a block of text or icon by wrapping it with <code>progress-group-feedback</code>.

<div class="alert alert-warning">
	Using the variant classes will set the <code>background-color</code> on <code>progress-bar</code>, no need to use Bootstrap 4 background utility classes.
</div>

###### Progress

<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-success">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-info">
    <div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-warning">
    <div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<div class="progress progress-danger">
    <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>

```html
<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<!-- Progress Success -->

<div class="progress progress-success">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<!-- Progress Info -->

<div class="progress progress-info">
    <div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<!-- Progress Warning -->

<div class="progress progress-warning">
    <div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<!-- Progress Danger -->

<div class="progress progress-danger">
    <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>
```

###### Progress Group

<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>

<div class="progress-group progress-success">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
        </div>
    </div>
</div>

<div class="progress-group progress-info">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open" viewBox="0 0 512 512">
                <path class="lexicon-icon-body" fill="none" d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256c0,68.4,26.6,132.7,75,181
                    c48.4,48.4,112.6,75,181,75c68.4,0,132.7-26.6,181-75c48.4-48.4,75-112.6,75-181C512,187.6,485.4,123.3,437,75z"></path>
                <path class="lexicon-icon-outline" d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256c0,68.4,26.6,132.7,75,181
                    c48.4,48.4,112.6,75,181,75c68.4,0,132.7-26.6,181-75c48.4-48.4,75-112.6,75-181C512,187.6,485.4,123.3,437,75z M256,448
                    c-105.9,0-192-86.1-192-192S150.1,64,256,64s192,86.1,192,192S361.9,448,256,448z"></path>
                <path class="lexicon-icon-outline" d="M256,192c-17.7,0-32,14.3-32,32v160c0,17.7,14.3,32,32,32c17.7,0,32-14.3,32-32V224C288,206.3,273.7,192,256,192z"></path>
                <circle class="lexicon-icon-outline" cx="256" cy="128" r="32"></circle>
            </svg>
        </div>
    </div>
</div>

<div class="progress-group progress-warning">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-body" fill="none" d="M491.9,156.3C479,125.8,460.5,98.5,437,75S386.2,33,355.7,20.1C324.1,6.8,290.5,0,256,0s-68.1,6.8-99.7,20.1
                C125.8,33,98.5,51.5,75,75S33,125.8,20.1,156.3C6.8,187.9,0,221.5,0,256s6.8,68.1,20.1,99.7C33,386.2,51.5,413.5,75,437
                s50.9,41.9,81.4,54.8c31.6,13.4,65.1,20.1,99.7,20.1s68.1-6.8,99.7-20.1c30.5-12.9,57.9-31.3,81.4-54.8s41.9-50.9,54.8-81.4
                c13.4-31.6,20.1-65.1,20.1-99.7S505.2,187.9,491.9,156.3L491.9,156.3z"></path>
                <path class="lexicon-icon-outline" d="M240,288h32l16-160h-64L240,288z"></path>
                <path class="lexicon-icon-outline" d="M288,352c0,17.7-14.3,32-32,32s-32-14.3-32-32s14.3-32,32-32S288,334.3,288,352z"></path>
                <path class="lexicon-icon-outline" d="M491.9,156.3C479,125.8,460.5,98.5,437,75S386.2,33,355.7,20.1C324.1,6.8,290.5,0,256,0s-68.1,6.8-99.7,20.1
                C125.8,33,98.5,51.5,75,75S33,125.8,20.1,156.3C6.8,187.9,0,221.5,0,256s6.8,68.1,20.1,99.7C33,386.2,51.5,413.5,75,437
                s50.9,41.9,81.4,54.8c31.6,13.4,65.1,20.1,99.7,20.1s68.1-6.8,99.7-20.1c30.5-12.9,57.9-31.3,81.4-54.8s41.9-50.9,54.8-81.4
                c13.4-31.6,20.1-65.1,20.1-99.7S505.2,187.9,491.9,156.3L491.9,156.3z M256,448c-106,0-192-86-192-192S150,64,256,64s192,86,192,192
                S362,448,256,448z"></path>
            </svg>
        </div>
    </div>
</div>

```html
<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>

<div class="progress-group progress-success">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-outline" d="M254.2,304.9c49.9-58.2,134-156.4,169.5-197.8l0,0c5.9-6.8,14.6-11.2,24.3-11.2c17.7,0,32,14.3,32,32
                c0,8-2.9,15.2-7.7,20.8l0,0c-41.7,48.6-150.3,175.4-192,224l0,0c-5.9,6.8-14.6,11.2-24.3,11.2c-8.8,0-16.8-3.6-22.6-9.4
                c-45.3-45.3-50.7-50.7-96-96c-5.8-5.8-9.4-13.8-9.4-22.6c0-17.7,14.3-32,32-32c8.8,0,16.8,3.6,22.6,9.4
                C218.2,268.9,229.2,279.9,254.2,304.9z M507.3,207.1c-18.3,21.4-39.5,46.1-60.6,70.6C435.9,373.6,354.7,448,256,448
                c-106,0-192-86-192-192S150,64,256,64c35.5,0,68.7,9.6,97.2,26.4c15.1-17.6,29.5-34.4,42.1-49.2C355.3,15.2,307.4,0,256,0
                C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256C512,239.3,510.4,223,507.3,207.1z"></path>
            </svg>
        </div>
    </div>
</div>

<div class="progress-group progress-info">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open" viewBox="0 0 512 512">
                <path class="lexicon-icon-body" fill="none" d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256c0,68.4,26.6,132.7,75,181
                    c48.4,48.4,112.6,75,181,75c68.4,0,132.7-26.6,181-75c48.4-48.4,75-112.6,75-181C512,187.6,485.4,123.3,437,75z"></path>
                <path class="lexicon-icon-outline" d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256c0,68.4,26.6,132.7,75,181
                    c48.4,48.4,112.6,75,181,75c68.4,0,132.7-26.6,181-75c48.4-48.4,75-112.6,75-181C512,187.6,485.4,123.3,437,75z M256,448
                    c-105.9,0-192-86.1-192-192S150.1,64,256,64s192,86.1,192,192S361.9,448,256,448z"></path>
                <path class="lexicon-icon-outline" d="M256,192c-17.7,0-32,14.3-32,32v160c0,17.7,14.3,32,32,32c17.7,0,32-14.3,32-32V224C288,206.3,273.7,192,256,192z"></path>
                <circle class="lexicon-icon-outline" cx="256" cy="128" r="32"></circle>
            </svg>
        </div>
    </div>
</div>

<div class="progress-group progress-warning">
    <div class="progress">
        <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
    </div>
    <div class="progress-group-addon">
        <div class="progress-group-feedback">
            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-circle" viewBox="0 0 512 512">
                <path class="lexicon-icon-body" fill="none" d="M491.9,156.3C479,125.8,460.5,98.5,437,75S386.2,33,355.7,20.1C324.1,6.8,290.5,0,256,0s-68.1,6.8-99.7,20.1
                C125.8,33,98.5,51.5,75,75S33,125.8,20.1,156.3C6.8,187.9,0,221.5,0,256s6.8,68.1,20.1,99.7C33,386.2,51.5,413.5,75,437
                s50.9,41.9,81.4,54.8c31.6,13.4,65.1,20.1,99.7,20.1s68.1-6.8,99.7-20.1c30.5-12.9,57.9-31.3,81.4-54.8s41.9-50.9,54.8-81.4
                c13.4-31.6,20.1-65.1,20.1-99.7S505.2,187.9,491.9,156.3L491.9,156.3z"></path>
                <path class="lexicon-icon-outline" d="M240,288h32l16-160h-64L240,288z"></path>
                <path class="lexicon-icon-outline" d="M288,352c0,17.7-14.3,32-32,32s-32-14.3-32-32s14.3-32,32-32S288,334.3,288,352z"></path>
                <path class="lexicon-icon-outline" d="M491.9,156.3C479,125.8,460.5,98.5,437,75S386.2,33,355.7,20.1C324.1,6.8,290.5,0,256,0s-68.1,6.8-99.7,20.1
                C125.8,33,98.5,51.5,75,75S33,125.8,20.1,156.3C6.8,187.9,0,221.5,0,256s6.8,68.1,20.1,99.7C33,386.2,51.5,413.5,75,437
                s50.9,41.9,81.4,54.8c31.6,13.4,65.1,20.1,99.7,20.1s68.1-6.8,99.7-20.1c30.5-12.9,57.9-31.3,81.4-54.8s41.9-50.9,54.8-81.4
                c13.4-31.6,20.1-65.1,20.1-99.7S505.2,187.9,491.9,156.3L491.9,156.3z M256,448c-106,0-192-86-192-192S150,64,256,64s192,86,192,192
                S362,448,256,448z"></path>
            </svg>
        </div>
    </div>
</div>
```

</article>

<article class="clay-site-progress-bar-page clay-site-row-spacer">

###### Multiple Progress Bars

If you need multiple progress bars, use Bootstrap 4's background utilities, <code>bg-primary</code>, <code>bg-success</code>, <code>bg-info</code>, <code>bg-warning</code>, and <code>bg-danger</code> on <code>progress-bar</code>.

<div class="progress">
    <div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
    <div class="bg-success progress-bar" style="width: 25%">25%</div>
    <div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<div class="progress">
    <div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
    <div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<div class="progress">
    <div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
    <div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<div class="progress">
    <div class="bg-danger progress-bar" style="width: 45%">45%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="progress">
    <div class="progress-bar" style="width: 10%">10%</div>
    <div class="bg-warning progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar" style="width: 10%">10%</div>
    <div class="bg-info progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
    <div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>

```html
<!-- Progress with bg-success -->
<div class="progress">
    <div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
    <div class="bg-success progress-bar" style="width: 25%">25%</div>
    <div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<!-- Progress with bg-info -->
<div class="progress">
    <div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
    <div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<!-- Progress with bg-warning -->
<div class="progress">
    <div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
    <div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<!-- Progress with bg-danger -->
<div class="progress">
    <div class="bg-danger progress-bar" style="width: 45%">45%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="progress">
    <div class="progress-bar" style="width: 10%">10%</div>
    <div class="bg-warning progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar" style="width: 10%">10%</div>
    <div class="bg-info progress-bar" style="width: 10%">10%</div>
    <div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
    <div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
    <div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>
```

</article>

<article class="clay-site-progress-bar-page clay-site-row-spacer">

### Progress Sizes

###### Normal

<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>

```html
<div class="progress">
    <div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>
```

###### Large

<div class="progress progress-lg">
    <div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>

```html
<div class="progress progress-lg">
    <div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
    <div class="progress">
        <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
    </div>
    <div class="progress-group-addon">60%</div>
</div>
```

</article>

<article>

### Progress with Bootstrap 4 Background Utility

<div class="progress">
    <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<div class="progress">
    <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<div class="progress">
    <div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<div class="progress">
    <div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>


```html
<!-- Progress with bg-success -->
<div class="progress">
    <div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<!-- Progress with bg-info -->
<div class="progress">
    <div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<!-- Progress with bg-warning -->
<div class="progress">
    <div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<!-- Progress with bg-danger -->
<div class="progress">
    <div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>
```

</article>
