---
title: "Date & Time Pickers"
description: "Date and Time pickers let users select a date and time for a form."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Example](#example)
- [Field](#field)
- [Date Picker](#date-picker)
- [Time Picker](#time-picker)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/picker-date-time/">Date & Time Pickers Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	This requires custom javascript.
</div>

## Example

The DropDown content of the DatePicker consists of `Header`, `Body` and `Footer`. `Footer`: You can add elements that complement the Date Picker like the Time Picker.

```html
<div class="date-picker-calendar-header">...</div>
<div class="date-picker-calendar-body">...</div>
<div class="date-picker-calendar-footer">...</div>
```

<div class="sheet-example">
	<div class="date-picker">
		<div class="clay-site-dropdown-menu-container date-picker-dropdown-menu">
			<div class="dropdown-menu date-picker-calendar">
				<div class="date-picker-calendar-header">
					<div class="date-picker-nav">
						<div class="date-picker-nav-item input-date-picker-month">
							<select class="form-control" disabled="" name="month">
								<option value="0">January</option>
								<option value="1">February</option>
								<option value="2">March</option>
								<option value="3">April</option>
								<option value="4">May</option>
								<option value="5">June</option>
								<option value="6">July</option>
								<option value="7">August</option>
								<option value="8">September</option>
								<option value="9">October</option>
								<option value="10">November</option>
								<option value="11">December</option>
							</select>
						</div>
						<div class="date-picker-nav-item input-date-picker-year">
							<select class="form-control" name="year">
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
							</select>
						</div>
						<div class="date-picker-nav-item date-picker-nav-item-expand date-picker-nav-controls">
							<button aria-label="Select the previous month" class="btn nav-btn nav-btn-monospaced" disabled="" type="button">
								<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-left" />
								</svg>
							</button>
							<button aria-label="Select current date" class="btn nav-btn nav-btn-monospaced" type="button">
								<svg class="lexicon-icon lexicon-icon-simple-circle" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#simple-circle" />
								</svg>
							</button>
							<button aria-label="Select the next month" class="btn nav-btn nav-btn-monospaced" type="button">
								<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-right" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="date-picker-calendar-body">
					<div class="date-picker-days-row date-picker-row">
						<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>M</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>W</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>F</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 01 27" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">27</button>
						<button aria-label="2019 01 28" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">28</button>
						<button aria-label="2019 01 29" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">29</button>
						<button aria-label="2019 01 30" class="active date-picker-date date-picker-calendar-item previous-month-date" type="button">30</button>
						<button aria-label="2019 01 31" class="date-picker-date date-picker-calendar-item previous-month-date" type="button">31</button>
						<button aria-label="2019 02 01" class="date-picker-date date-picker-calendar-item" type="button">1</button>
						<button aria-label="2019 02 02" class="date-picker-date date-picker-calendar-item" type="button">2</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 03" class="date-picker-date date-picker-calendar-item" type="button">3</button>
						<button aria-label="2019 02 04" class="date-picker-date date-picker-calendar-item" type="button">4</button>
						<button aria-label="2019 02 05" class="date-picker-date date-picker-calendar-item" type="button">5</button>
						<button aria-label="2019 02 06" class="date-picker-date date-picker-calendar-item" type="button">6</button>
						<button aria-label="2019 02 07" class="date-picker-date date-picker-calendar-item" type="button">7</button>
						<button aria-label="2019 02 08" class="date-picker-date date-picker-calendar-item" type="button">8</button>
						<button aria-label="2019 02 09" class="date-picker-date date-picker-calendar-item" type="button">9</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 10" class="date-picker-date date-picker-calendar-item" type="button">10</button>
						<button aria-label="2019 02 11" class="date-picker-date date-picker-calendar-item" type="button">11</button>
						<button aria-label="2019 02 12" class="date-picker-date date-picker-calendar-item" type="button">12</button>
						<button aria-label="2019 02 13" class="date-picker-date date-picker-calendar-item active" tabindex="-1" type="button">13</button>
						<button aria-label="2019 02 14" class="date-picker-date date-picker-calendar-item" type="button">14</button>
						<button aria-label="2019 02 15" class="date-picker-date date-picker-calendar-item" type="button">15</button>
						<button aria-label="2019 02 16" class="date-picker-date date-picker-calendar-item" type="button">16</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 17" class="date-picker-date date-picker-calendar-item" type="button">17</button>
						<button aria-label="2019 02 18" class="date-picker-date date-picker-calendar-item" type="button">18</button>
						<button aria-label="2019 02 19" class="date-picker-date date-picker-calendar-item" type="button">19</button>
						<button aria-label="2019 02 20" class="date-picker-date date-picker-calendar-item" type="button">20</button>
						<button aria-label="2019 02 21" class="date-picker-date date-picker-calendar-item" type="button">21</button>
						<button aria-label="2019 02 22" class="date-picker-date date-picker-calendar-item" type="button">22</button>
						<button aria-label="2019 02 23" class="date-picker-date date-picker-calendar-item" type="button">23</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 24" class="date-picker-date date-picker-calendar-item" type="button">24</button>
						<button aria-label="2019 02 25" class="date-picker-date date-picker-calendar-item" type="button">25</button>
						<button aria-label="2019 02 26" class="date-picker-date date-picker-calendar-item" type="button">26</button>
						<button aria-label="2019 02 27" class="date-picker-date date-picker-calendar-item" type="button">27</button>
						<button aria-label="2019 02 28" class="date-picker-date date-picker-calendar-item" type="button">28</button>
						<button aria-label="2019 03 01" class="active date-picker-date date-picker-calendar-item next-month-date" type="button">1</button>
						<button aria-label="2019 03 02" class="date-picker-date date-picker-calendar-item next-month-date" type="button">2</button>
					</div>
				</div>
				<div class="date-picker-calendar-footer">
					<div class="time-picker">
						<div class="input-group">
							<div class="input-group-item input-group-item-shrink">
								<span class="input-group-text">
									<svg class="lexicon-icon lexicon-icon-time" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#time" />
									</svg>
								</span>
							</div>
							<div class="input-group-item">
								<input class="form-control" name="timer" type="time" value="00:00">
							</div>
							<div class="input-group-item input-group-item-shrink">
								<span class="input-group-text">(GMT+01:00)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="date-picker">
	<div class="input-group">
		<div class="input-group-item">
			<input name="datePicker" type="hidden" value="">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="YYYY-MM-DD" type="text" value="">
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled date-picker-dropdown-toggle" type="button">
					<svg class="lexicon-icon lexicon-icon-calendar" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#calendar" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="date-picker-dropdown-menu dropdown-menu show">
		<div class="date-picker-calendar">
			<div class="date-picker-calendar-header">
				<div class="date-picker-nav">
					<div class="date-picker-nav-item input-date-picker-month">
						<select class="form-control" disabled="" name="month">
							<option value="0">January</option>
							<option value="1">February</option>
							<option value="2">March</option>
							<option value="3">April</option>
							<option value="4">May</option>
							<option value="5">June</option>
							<option value="6">July</option>
							<option value="7">August</option>
							<option value="8">September</option>
							<option value="9">October</option>
							<option value="10">November</option>
							<option value="11">December</option>
						</select>
					</div>
					<div class="date-picker-nav-item input-date-picker-year">
						<select class="form-control" name="year">
							<option value="1997">1997</option>
							<option value="1998">1998</option>
							...
						</select>
					</div>
					<div class="date-picker-nav-item date-picker-nav-item-expand date-picker-nav-controls">
						<button aria-label="Select the previous month" class="btn nav-btn nav-btn-monospaced" disabled="" type="button">
							<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-left" />
							</svg>
						</button>
						<button aria-label="Select current date" class="btn nav-btn nav-btn-monospaced" type="button">
							<svg class="lexicon-icon lexicon-icon-simple-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#simple-circle" />
							</svg>
						</button>
						<button aria-label="Select the next month" class="btn nav-btn nav-btn-monospaced" type="button">
							<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-right" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="date-picker-calendar-body">
				<div class="date-picker-days-row date-picker-row">
					<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>M</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>W</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>F</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 01 27" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">27</button>
					<button aria-label="2019 01 28" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">28</button>
					<button aria-label="2019 01 29" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">29</button>
					<button aria-label="2019 01 30" class="active date-picker-date date-picker-calendar-item previous-month-date" type="button">30</button>
					<button aria-label="2019 01 31" class="date-picker-date date-picker-calendar-item previous-month-date" type="button">31</button>
					<button aria-label="2019 02 01" class="date-picker-date date-picker-calendar-item" type="button">1</button>
					<button aria-label="2019 02 02" class="date-picker-date date-picker-calendar-item" type="button">2</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 03" class="date-picker-date date-picker-calendar-item" type="button">3</button>
					<button aria-label="2019 02 04" class="date-picker-date date-picker-calendar-item" type="button">4</button>
					<button aria-label="2019 02 05" class="date-picker-date date-picker-calendar-item" type="button">5</button>
					<button aria-label="2019 02 06" class="date-picker-date date-picker-calendar-item" type="button">6</button>
					<button aria-label="2019 02 07" class="date-picker-date date-picker-calendar-item" type="button">7</button>
					<button aria-label="2019 02 08" class="date-picker-date date-picker-calendar-item" type="button">8</button>
					<button aria-label="2019 02 09" class="date-picker-date date-picker-calendar-item" type="button">9</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 10" class="date-picker-date date-picker-calendar-item" type="button">10</button>
					<button aria-label="2019 02 11" class="date-picker-date date-picker-calendar-item" type="button">11</button>
					<button aria-label="2019 02 12" class="date-picker-date date-picker-calendar-item" type="button">12</button>
					<button aria-label="2019 02 13" class="date-picker-date date-picker-calendar-item active" tabindex="-1" type="button">13</button>
					<button aria-label="2019 02 14" class="date-picker-date date-picker-calendar-item" type="button">14</button>
					<button aria-label="2019 02 15" class="date-picker-date date-picker-calendar-item" type="button">15</button>
					<button aria-label="2019 02 16" class="date-picker-date date-picker-calendar-item" type="button">16</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 17" class="date-picker-date date-picker-calendar-item" type="button">17</button>
					<button aria-label="2019 02 18" class="date-picker-date date-picker-calendar-item" type="button">18</button>
					<button aria-label="2019 02 19" class="date-picker-date date-picker-calendar-item" type="button">19</button>
					<button aria-label="2019 02 20" class="date-picker-date date-picker-calendar-item" type="button">20</button>
					<button aria-label="2019 02 21" class="date-picker-date date-picker-calendar-item" type="button">21</button>
					<button aria-label="2019 02 22" class="date-picker-date date-picker-calendar-item" type="button">22</button>
					<button aria-label="2019 02 23" class="date-picker-date date-picker-calendar-item" type="button">23</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 24" class="date-picker-date date-picker-calendar-item" type="button">24</button>
					<button aria-label="2019 02 25" class="date-picker-date date-picker-calendar-item" type="button">25</button>
					<button aria-label="2019 02 26" class="date-picker-date date-picker-calendar-item" type="button">26</button>
					<button aria-label="2019 02 27" class="date-picker-date date-picker-calendar-item" type="button">27</button>
					<button aria-label="2019 02 28" class="date-picker-date date-picker-calendar-item" type="button">28</button>
					<button aria-label="2019 03 01" class="active date-picker-date date-picker-calendar-item next-month-date" type="button">1</button>
					<button aria-label="2019 03 02" class="date-picker-date date-picker-calendar-item next-month-date" type="button">2</button>
				</div>
			</div>
			<div class="date-picker-calendar-footer">
				<div class="time-picker">
					<div class="input-group">
						<div class="input-group-item input-group-item-shrink">
							<span class="input-group-text">
								<svg class="lexicon-icon lexicon-icon-time" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#time" />
								</svg>
							</span>
						</div>
						<div class="input-group-item">
							<input class="form-control" name="timer" type="time" value="00:00">
						</div>
						<div class="input-group-item input-group-item-shrink">
							<span class="input-group-text">(GMT+01:00)</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Field

<div class="sheet-example">
	<div class="input-group">
		<div class="input-group-item">
			<input name="datePicker" type="hidden" value="">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="YYYY-MM-DD" type="text" value="">
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled date-picker-dropdown-toggle" type="button">
					<svg class="lexicon-icon lexicon-icon-calendar" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#calendar" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="input-group-item">
		<input name="datePicker" type="hidden" value="">
		<input class="form-control input-group-inset input-group-inset-after" placeholder="YYYY-MM-DD" type="text" value="">
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled date-picker-dropdown-toggle" type="button">
				<svg class="lexicon-icon lexicon-icon-calendar" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#calendar" />
				</svg>
			</button>
		</div>
	</div>
</div>
```

## Date Picker

<div class="sheet-example">
	<div class="date-picker">
		<div class="clay-site-dropdown-menu-container date-picker-dropdown-menu">
			<div class="dropdown-menu date-picker-calendar">
				<div class="date-picker-calendar-header">
					<div class="date-picker-nav">
						<div class="date-picker-nav-item input-date-picker-month">
							<select class="form-control" disabled="" name="month">
								<option value="0">January</option>
								<option value="1">February</option>
								<option value="2">March</option>
								<option value="3">April</option>
								<option value="4">May</option>
								<option value="5">June</option>
								<option value="6">July</option>
								<option value="7">August</option>
								<option value="8">September</option>
								<option value="9">October</option>
								<option value="10">November</option>
								<option value="11">December</option>
							</select>
						</div>
						<div class="date-picker-nav-item input-date-picker-year">
							<select class="form-control" name="year">
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
							</select>
						</div>
						<div class="date-picker-nav-item date-picker-nav-item-expand date-picker-nav-controls">
							<button aria-label="Select the previous month" class="btn nav-btn nav-btn-monospaced" disabled="" type="button">
								<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-left" />
								</svg>
							</button>
							<button aria-label="Select current date" class="btn nav-btn nav-btn-monospaced" type="button">
								<svg class="lexicon-icon lexicon-icon-simple-circle" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#simple-circle" />
								</svg>
							</button>
							<button aria-label="Select the next month" class="btn nav-btn nav-btn-monospaced" type="button">
								<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-right" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="date-picker-calendar-body">
					<div class="date-picker-days-row date-picker-row">
						<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>M</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>W</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>F</abbr></div>
						<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 01 27" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">27</button>
						<button aria-label="2019 01 28" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">28</button>
						<button aria-label="2019 01 29" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">29</button>
						<button aria-label="2019 01 30" class="active date-picker-date date-picker-calendar-item previous-month-date" type="button">30</button>
						<button aria-label="2019 01 31" class="date-picker-date date-picker-calendar-item previous-month-date" type="button">31</button>
						<button aria-label="2019 02 01" class="date-picker-date date-picker-calendar-item" type="button">1</button>
						<button aria-label="2019 02 02" class="date-picker-date date-picker-calendar-item" type="button">2</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 03" class="date-picker-date date-picker-calendar-item" type="button">3</button>
						<button aria-label="2019 02 04" class="date-picker-date date-picker-calendar-item" type="button">4</button>
						<button aria-label="2019 02 05" class="date-picker-date date-picker-calendar-item" type="button">5</button>
						<button aria-label="2019 02 06" class="date-picker-date date-picker-calendar-item" type="button">6</button>
						<button aria-label="2019 02 07" class="date-picker-date date-picker-calendar-item" type="button">7</button>
						<button aria-label="2019 02 08" class="date-picker-date date-picker-calendar-item" type="button">8</button>
						<button aria-label="2019 02 09" class="date-picker-date date-picker-calendar-item" type="button">9</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 10" class="date-picker-date date-picker-calendar-item" type="button">10</button>
						<button aria-label="2019 02 11" class="date-picker-date date-picker-calendar-item" type="button">11</button>
						<button aria-label="2019 02 12" class="date-picker-date date-picker-calendar-item" type="button">12</button>
						<button aria-label="2019 02 13" class="date-picker-date date-picker-calendar-item active" tabindex="-1" type="button">13</button>
						<button aria-label="2019 02 14" class="date-picker-date date-picker-calendar-item" type="button">14</button>
						<button aria-label="2019 02 15" class="date-picker-date date-picker-calendar-item" type="button">15</button>
						<button aria-label="2019 02 16" class="date-picker-date date-picker-calendar-item" type="button">16</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 17" class="date-picker-date date-picker-calendar-item" type="button">17</button>
						<button aria-label="2019 02 18" class="date-picker-date date-picker-calendar-item" type="button">18</button>
						<button aria-label="2019 02 19" class="date-picker-date date-picker-calendar-item" type="button">19</button>
						<button aria-label="2019 02 20" class="date-picker-date date-picker-calendar-item" type="button">20</button>
						<button aria-label="2019 02 21" class="date-picker-date date-picker-calendar-item" type="button">21</button>
						<button aria-label="2019 02 22" class="date-picker-date date-picker-calendar-item" type="button">22</button>
						<button aria-label="2019 02 23" class="date-picker-date date-picker-calendar-item" type="button">23</button>
					</div>
					<div class="date-picker-date-row date-picker-row">
						<button aria-label="2019 02 24" class="date-picker-date date-picker-calendar-item" type="button">24</button>
						<button aria-label="2019 02 25" class="date-picker-date date-picker-calendar-item" type="button">25</button>
						<button aria-label="2019 02 26" class="date-picker-date date-picker-calendar-item" type="button">26</button>
						<button aria-label="2019 02 27" class="date-picker-date date-picker-calendar-item" type="button">27</button>
						<button aria-label="2019 02 28" class="date-picker-date date-picker-calendar-item" type="button">28</button>
						<button aria-label="2019 03 01" class="active date-picker-date date-picker-calendar-item next-month-date" type="button">1</button>
						<button aria-label="2019 03 02" class="date-picker-date date-picker-calendar-item next-month-date" type="button">2</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="date-picker">
	<div class="input-group">
		<div class="input-group-item">
			<input name="datePicker" type="hidden" value="">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="YYYY-MM-DD" type="text" value="">
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled date-picker-dropdown-toggle" type="button">
					<svg class="lexicon-icon lexicon-icon-calendar" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#calendar" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="date-picker-dropdown-menu dropdown-menu show">
		<div class="date-picker-calendar">
			<div class="date-picker-calendar-header">
				<div class="date-picker-nav">
					<div class="date-picker-nav-item input-date-picker-month">
						<select class="form-control" disabled="" name="month">
							<option value="0">January</option>
							<option value="1">February</option>
							<option value="2">March</option>
							<option value="3">April</option>
							<option value="4">May</option>
							<option value="5">June</option>
							<option value="6">July</option>
							<option value="7">August</option>
							<option value="8">September</option>
							<option value="9">October</option>
							<option value="10">November</option>
							<option value="11">December</option>
						</select>
					</div>
					<div class="date-picker-nav-item input-date-picker-year">
						<select class="form-control" name="year">
							<option value="1997">1997</option>
							<option value="1998">1998</option>
							...
						</select>
					</div>
					<div class="date-picker-nav-item date-picker-nav-item-expand date-picker-nav-controls">
						<button aria-label="Select the previous month" class="btn nav-btn nav-btn-monospaced" disabled="" type="button">
							<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-left" />
							</svg>
						</button>
						<button aria-label="Select current date" class="btn nav-btn nav-btn-monospaced" type="button">
							<svg class="lexicon-icon lexicon-icon-simple-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#simple-circle" />
							</svg>
						</button>
						<button aria-label="Select the next month" class="btn nav-btn nav-btn-monospaced" type="button">
							<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-right" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="date-picker-calendar-body">
				<div class="date-picker-days-row date-picker-row">
					<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>M</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>W</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>T</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>F</abbr></div>
					<div class="date-picker-day date-picker-calendar-item"><abbr>S</abbr></div>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 01 27" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">27</button>
					<button aria-label="2019 01 28" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">28</button>
					<button aria-label="2019 01 29" class="date-picker-date date-picker-calendar-item previous-month-date" disabled="" type="button">29</button>
					<button aria-label="2019 01 30" class="active date-picker-date date-picker-calendar-item previous-month-date" type="button">30</button>
					<button aria-label="2019 01 31" class="date-picker-date date-picker-calendar-item previous-month-date" type="button">31</button>
					<button aria-label="2019 02 01" class="date-picker-date date-picker-calendar-item" type="button">1</button>
					<button aria-label="2019 02 02" class="date-picker-date date-picker-calendar-item" type="button">2</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 03" class="date-picker-date date-picker-calendar-item" type="button">3</button>
					<button aria-label="2019 02 04" class="date-picker-date date-picker-calendar-item" type="button">4</button>
					<button aria-label="2019 02 05" class="date-picker-date date-picker-calendar-item" type="button">5</button>
					<button aria-label="2019 02 06" class="date-picker-date date-picker-calendar-item" type="button">6</button>
					<button aria-label="2019 02 07" class="date-picker-date date-picker-calendar-item" type="button">7</button>
					<button aria-label="2019 02 08" class="date-picker-date date-picker-calendar-item" type="button">8</button>
					<button aria-label="2019 02 09" class="date-picker-date date-picker-calendar-item" type="button">9</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 10" class="date-picker-date date-picker-calendar-item" type="button">10</button>
					<button aria-label="2019 02 11" class="date-picker-date date-picker-calendar-item" type="button">11</button>
					<button aria-label="2019 02 12" class="date-picker-date date-picker-calendar-item" type="button">12</button>
					<button aria-label="2019 02 13" class="date-picker-date date-picker-calendar-item active" tabindex="-1" type="button">13</button>
					<button aria-label="2019 02 14" class="date-picker-date date-picker-calendar-item" type="button">14</button>
					<button aria-label="2019 02 15" class="date-picker-date date-picker-calendar-item" type="button">15</button>
					<button aria-label="2019 02 16" class="date-picker-date date-picker-calendar-item" type="button">16</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 17" class="date-picker-date date-picker-calendar-item" type="button">17</button>
					<button aria-label="2019 02 18" class="date-picker-date date-picker-calendar-item" type="button">18</button>
					<button aria-label="2019 02 19" class="date-picker-date date-picker-calendar-item" type="button">19</button>
					<button aria-label="2019 02 20" class="date-picker-date date-picker-calendar-item" type="button">20</button>
					<button aria-label="2019 02 21" class="date-picker-date date-picker-calendar-item" type="button">21</button>
					<button aria-label="2019 02 22" class="date-picker-date date-picker-calendar-item" type="button">22</button>
					<button aria-label="2019 02 23" class="date-picker-date date-picker-calendar-item" type="button">23</button>
				</div>
				<div class="date-picker-date-row date-picker-row">
					<button aria-label="2019 02 24" class="date-picker-date date-picker-calendar-item" type="button">24</button>
					<button aria-label="2019 02 25" class="date-picker-date date-picker-calendar-item" type="button">25</button>
					<button aria-label="2019 02 26" class="date-picker-date date-picker-calendar-item" type="button">26</button>
					<button aria-label="2019 02 27" class="date-picker-date date-picker-calendar-item" type="button">27</button>
					<button aria-label="2019 02 28" class="date-picker-date date-picker-calendar-item" type="button">28</button>
					<button aria-label="2019 03 01" class="active date-picker-date date-picker-calendar-item next-month-date" type="button">1</button>
					<button aria-label="2019 03 02" class="date-picker-date date-picker-calendar-item next-month-date" type="button">2</button>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Time Picker

<div class="sheet-example">
	<div class="col-md-5">
		<div class="input-group">
			<div class="input-group-item">
				<input class="form-control" name="timer" type="time" value="00:00">
			</div>
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text">(GMT+01:00)</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="input-group-item">
		<input class="form-control" name="timer" type="time" value="00:00">
	</div>
	<div class="input-group-item input-group-item-shrink">
		<span class="input-group-text">(GMT+01:00)</span>
	</div>
</div>
```