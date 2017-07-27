---
title: Extending Toggles
description: Components
layout: "guide"
weight: 100
---

<article id="1">

For toggle overview, see <a href="../components/toggles.html">toggles</a>.

<img src="/images/switch_components.png" style="width: 700px;"/>

### Custom Toggle Switch using Images

> Customize:

> The **toggle-switch button in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar:after {lb}{rb}`.

> The **toggle-switch button icon in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon.button-icon {lb}{rb}`.

> The **toggle-switch bar in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar:before {lb}{rb}`.

> The **toggle-switch bar icon in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {lb}{rb}`.

> The **toggle-switch button in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar:after {lb}{rb}`.

> The **toggle-switch button icon in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon.button-icon`.

> The **toggle-switch bar in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar:before {lb}{rb}`.

> The **toggle-switch bar icon in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {lb}{rb}`.

<style>
{literal}
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
{/literal}
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

##### CSS

```css
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
```

##### HTML

```xml
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

</article>

<article id="2">

### iOS Style Toggle Switches

<style>
{literal}
/* Toggle Switch Off Button */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
	background-color: #FFF;
	border-radius: 20px;
	border-width: 0;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	height: 20px;
	left: 2px;
	top: 2px;
	width: 20px;
}
/* Toggle Switch On Button */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
	border-width: 0;
	left: 23px;
}
/* Toggle Switch Off Bar */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
	background-color: #FEFEFE;
	border: 1px solid #E6E6E6;
	border-radius: 20px;
}
/* Toggle Switch On Bar */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:before {
	background-color: #4BD863;
	border-color: #4BD863;
}
/* Toggle Switch Off Bar Icon */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
	color: #B5B5B5;
	font-size: 15px;
}
/* Toggle Switch On Bar Icon */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
	color: #FFF;
}
@media (min-width: 768px) {
	.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
		height: 27px;
		width: 27px;
	}
	.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
		left: 31px;
	}
}
{/literal}
</style>

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

##### CSS

```css
/* Toggle Switch Off Button */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
	background-color: #FFF;
	border-radius: 20px;
	border-width: 0;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	height: 20px;
	left: 2px;
	top: 2px;
	width: 20px;
}

/* Toggle Switch On Button */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
	border-width: 0;
	left: 23px;
}

/* Toggle Switch Off Bar */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:before {
	background-color: #FEFEFE;
	border: 1px solid #E6E6E6;
	border-radius: 20px;
}

/* Toggle Switch On Bar */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:before {
	background-color: #4BD863;
	border-color: #4BD863;
}

/* Toggle Switch Off Bar Icon */
.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {
	color: #B5B5B5;
	font-size: 15px;
}

/* Toggle Switch On Bar Icon */
.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {
	color: #FFF;
}

@media (min-width: 768px) {
	.ios-toggle-switch .toggle-switch-check:empty ~ .toggle-switch-bar:after {
		height: 27px;
		width: 27px;
	}

	.ios-toggle-switch .toggle-switch-check:checked ~ .toggle-switch-bar:after {
		left: 31px;
	}
}
```

##### HTML

```xml
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
