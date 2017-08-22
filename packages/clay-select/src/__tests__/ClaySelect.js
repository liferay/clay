'use strict';

import ClaySelect from '../ClaySelect';

let select;

describe('ClaySelect', function() {
	afterEach(() => {
		if (select) {
			select.dispose();
		}
	});

	it('should generate a select element', function() {
		select = new ClaySelect({
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a select element with label', function() {
		select = new ClaySelect({
			label: 'My Select',
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a select element with name', function() {
		select = new ClaySelect({
			name: 'myselectname',
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a select element with id', function() {
		select = new ClaySelect({
			id: 'myselectid',
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate an inline select element', function() {
		select = new ClaySelect({
			inline: true,
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate an inline select element with label', function() {
		select = new ClaySelect({
			inline: true,
			label: 'My Select',
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a select element with preselected option', function() {
		select = new ClaySelect({
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					selected: true,
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a disabled select element', function() {
		select = new ClaySelect({
			disabled: true,
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate a multiple select element', function() {
		select = new ClaySelect({
			multiple: true,
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});

	it('should generate an inline multiple select element', function() {
		select = new ClaySelect({
			inline: true,
			multiple: true,
			options: [
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		});

		expect(select).toMatchSnapshot();
	});
});
