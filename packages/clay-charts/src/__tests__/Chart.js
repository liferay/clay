import {bb} from 'billboard.js';
import Chart from '../Chart';

beforeAll(() => {
	jest.spyOn(bb, 'generate').mockImplementation();
});

beforeEach(() => {
	bb.generate.mockReset();
});

afterAll(() => {
	bb.generate.mockReset();
	bb.generate.mockRestore();
});

describe('Chart', () => {
	it('should be pass correctly formatted configuration options to billboard.js', done => {
		const chart = new Chart({
			data: [],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			expect(config.bindto).toBe(chart.refs.chart);

			config.bindto = undefined;

			expect(JSON.stringify(config)).toMatchSnapshot();
			done();
		});
	});

	it('should format columns array into billboard.js compatible data', done => {
		const chart = new Chart({
			data: [
				{
					axis: 'y',
					class: 'data1',
					color: 'red',
					data: [1, 2, 3],
					hide: true,
					id: 'data1',
					name: 'Data 1',
					regions: [
						{
							end: 2,
							start: 1,
							style: 'dashed',
						},
					],
					type: 'line',
					x: 'x1',
				},
				{
					axis: 'y2',
					class: 'data2',
					color: 'blue',
					data: [1, 2, 3],
					hide: false,
					id: 'data2',
					name: 'Data 2',
					regions: [
						{
							end: 3,
							start: 2,
							style: 'dashed',
						},
					],
					type: 'spline',
					x: 'x2',
				},
			],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			config.bindto = undefined;

			expect(JSON.stringify(config)).toMatchSnapshot();
			done();
		});
	});

	it('should transform chart new type is passed', done => {
		const transformMock = jest.fn();

		bb.generate.mockReturnValue({
			transform: transformMock,
		});

		const chart = new Chart({
			data: [],
			type: 'line',
		});

		chart.on('chartReady', () => {
			chart.type = 'spline';

			expect(transformMock.mock.calls[0][0]).toBe('spline');
			done();
		});
	});

	it('should rerender chart when new data is passed', done => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.on('chartReady', () => {
			chart.on('dataResolved', () => {
				const config = JSON.stringify(loadMock.mock.calls[0][0]);

				expect(config).toMatchSnapshot();
				done();
			});

			chart.data = [
				{
					id: 'data1',
					data: [1, 2, 3, 4],
				},
			];
		});
	});

	it('should unload removed data when new data is passed', done => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.on('chartReady', () => {
			chart.on('dataResolved', () => {
				const config = JSON.stringify(loadMock.mock.calls[0][0]);

				expect(config).toMatchSnapshot();
				done();
			});

			chart.data = [
				{
					id: 'data2',
					data: [1, 2, 3],
				},
			];
		});
	});

	it('should consume `data` as a Promise', done => {
		const data = [
			{
				id: 'data2',
				data: [1, 2, 3],
			},
		];

		const chart = new Chart({
			data() {
				return Promise.resolve(data);
			},
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			expect(config.data.columns[0].length).toBe(4);
			expect(config.data.columns[0][0]).toBe('data2');
			expect(config.data.columns[0][1]).toBe(1);
			expect(config.data.columns[0][2]).toBe(2);
			expect(config.data.columns[0][3]).toBe(3);
			expect(chart._resolvedData).toBe(data);

			done();
		});
	});

	it('should consume data as an Array', done => {
		const data = [
			{
				id: 'data1',
				data: [4, 5, 6, 7],
			},
		];

		const chart = new Chart({
			data: data,
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			expect(config.data.columns[0].length).toBe(5);
			expect(config.data.columns[0][0]).toBe('data1');
			expect(config.data.columns[0][1]).toBe(4);
			expect(config.data.columns[0][2]).toBe(5);
			expect(config.data.columns[0][3]).toBe(6);
			expect(config.data.columns[0][4]).toBe(7);
			expect(chart._resolvedData).toBe(data);
			done();
		});
	});

	it('should support a pollingInterval', done => {
		const data = [
			{
				id: 'data1',
				data: [1, 2, 3, 4],
			},
			{
				id: 'data2',
				data: [5, 6, 7, 8],
			},
		];

		const chart = new Chart({
			data: data,
			pollingInterval: 500,
		});

		chart.on('chartReady', () => {
			expect(chart._resolvedData).toBe(data);
			expect(chart._pollingInterval).toBeDefined();
			done();
		});
	});

	it('should support xs property', done => {
		const data = [
			{
				id: 'data1',
				data: [1, 2, 3, 4],
			},
			{
				id: 'data2',
				data: [5, 6, 7, 8],
			},
		];

		const chart = new Chart({
			data: data,
			xs: {
				data1: 'x1',
				data2: 'x2',
			},
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];

			expect(config.data.xs).toBeInstanceOf(Object);
			expect(config.data.xs.data1).toEqual('x1');
			expect(config.data.xs.data2).toEqual('x2');

			done();
		});

		chart.on('chartError', err => {
			console.log('hou', err);
		});
	});

	describe('lifecycle', () => {
		let chart;

		beforeEach(() => {
			jest.spyOn(Chart.prototype, 'attached');
			jest.spyOn(Chart.prototype, 'detached');
			jest.spyOn(Chart.prototype, 'disposed');

			jest.spyOn(Chart.RENDERER, 'render');
			jest.spyOn(Chart.RENDERER, 'update');
		});

		afterEach(() => {
			Chart.prototype.attached.mockRestore();
			Chart.prototype.detached.mockRestore();
			Chart.prototype.disposed.mockRestore();

			Chart.RENDERER.render.mockRestore();
			Chart.RENDERER.update.mockRestore();
		});

		it('should run component render lifecycle', () => {
			const renderListener = jest.fn();

			/* eslint-disable */
			class TestChart extends Chart {
				created() {
					this.on('render', renderListener);
				}
			}
			/* eslint-enable */

			chart = new TestChart({data: []});

			expect(Chart.RENDERER.render).toHaveBeenCalledTimes(1);
			expect(renderListener).toHaveBeenCalledTimes(1);
			expect(Chart.prototype.attached).toHaveBeenCalledTimes(1);
			expect(Chart.prototype.detached).not.toHaveBeenCalled();
		});

		it('should not run component render lifecycle if "false" is passed as second param', () => {
			const renderListener = jest.fn();

			/* eslint-disable */
			class TestChart extends Chart {
				created() {
					this.on('render', renderListener);
				}
			}
			/* eslint-enable */

			chart = new TestChart({data: []}, false);

			expect(Chart.RENDERER.render).not.toHaveBeenCalled();
			expect(renderListener).not.toHaveBeenCalled();
			expect(Chart.prototype.attached).not.toHaveBeenCalled();
			expect(Chart.prototype.detached).not.toHaveBeenCalled();
		});

		it('should be able to manually invoke detach/attach lifecycle', () => {
			chart = new Chart({data: []});
			expect(Chart.prototype.attached).toHaveBeenCalledTimes(1);

			chart.detach();
			chart.detach(); // Allow multiple
			expect(chart.element.parentNode).toBeNull();
			expect(chart.inDocument).toBeFalsy();
			expect(Chart.prototype.detached).toHaveBeenCalledTimes(1);

			chart.attach();
			chart.attach(); // Allow multiple
			expect(chart.element.parentNode).not.toBeNull();
			expect(chart.inDocument).toBeTruthy();
			expect(Chart.prototype.attached).toHaveBeenCalledTimes(2);
		});

		it('should not throw error if attach() is called before component is rendered', () => {
			chart = new Chart(null, false);

			const fn = () => chart.attach();

			expect(fn).not.toThrow();
			expect(chart.inDocument).toBeTruthy();
		});

		it('should run "willAttach" lifecycle method when the component is about to attach', () => {
			/* eslint-disable */
			class TestChart extends Chart {}
			/* eslint-enable */

			jest.spyOn(TestChart.prototype, 'willAttach');
			chart = new TestChart();

			expect(chart.willAttach).toHaveBeenCalled();
			expect(Chart.prototype.attached).toHaveBeenCalled();
			expect(chart.willAttach).toHaveBeenCalledTimes(1);
		});

		it('should emit "willAttach" lifecycle event when the component is about to attach', () => {
			const listener = jest.fn();

			/* eslint-disable */
			class TestChart extends Chart {
				created() {
					this.on('willAttach', listener);
				}
			}
			/* eslint-enable */
			chart = new TestChart();

			expect(listener).toHaveBeenCalled();
			expect(Chart.prototype.attached).toHaveBeenCalled();
			expect(listener).toHaveBeenCalledTimes(1);
		});

		it('should emit "attached" event when component is attached', () => {
			chart = new Chart(null, false);

			const listener = jest.fn();

			chart.on('attached', listener);
			chart.attach('.parent', '.sibling');

			expect(listener).toHaveBeenCalledTimes(1);
		});

		it('should return attach data via the `getAttachData` function', () => {
			chart = new Chart(null, false);
			chart.attach('.parent', '.sibling');

			const attachData = chart.getAttachData();

			expect(attachData).not.toBeNull();
			expect(attachData.parent).toEqual('.parent');
			expect(attachData.sibling).toEqual('.sibling');
		});

		it('should run "rendered" lifecycle method when the component is rendered', () => {
			/* eslint-disable */
			class TestChart extends Chart {}
			/* eslint-enable */

			jest.spyOn(TestChart.prototype, 'rendered');
			chart = new TestChart();

			expect(chart.rendered).toHaveBeenCalledTimes(1);
		});

		it('should emit "rendered" event when the component is rendered', () => {
			const listener = jest.fn();

			/* eslint-disable */
			class TestChart extends Chart {
				created() {
					this.on('rendered', listener);
				}
			}
			/* eslint-enable */
			chart = new TestChart();

			expect(listener).toHaveBeenCalledTimes(1);
		});

		it('should return component instance from lifecycle triggering methods', () => {
			chart = new Chart();

			expect(chart).toEqual(chart.detach());
			expect(chart).toEqual(chart.attach());
		});

		it('should run "willDetach" lifecycle method when the component is about to detach', () => {
			/* eslint-disable */
			class TestChart extends Chart {}
			/* eslint-enable */

			jest.spyOn(TestChart.prototype, 'willDetach');
			chart = new TestChart();

			expect(chart.willDetach).toHaveBeenCalledTimes(0);

			chart.detach();

			expect(chart.willDetach).toHaveBeenCalledTimes(1);
			expect(Chart.prototype.detached).toHaveBeenCalledTimes(1);
		});

		it('should emit "willDetach" lifecycle event when the component is about to detach', () => {
			const listener = jest.fn();

			/* eslint-disable */
			class TestChart extends Chart {
				created() {
					this.on('willDetach', listener);
				}
			}
			/* eslint-enable */

			chart = new TestChart();

			expect(listener).toHaveBeenCalledTimes(0);

			chart.detach();

			expect(listener).toHaveBeenCalledTimes(1);
			expect(Chart.prototype.detached).toHaveBeenCalledTimes(1);
		});

		it('should dispose component', () => {
			chart = new Chart();

			expect(chart.element.parentNode).not.toBeNull();
			const element = chart.element;

			chart.dispose();
			expect(element.parentNode).toBeNull();

			expect(Chart.prototype.detached).toHaveBeenCalledTimes(1);
		});

		it('should call "disposed" lifecycle function when component is disposed', () => {
			chart = new Chart();
			expect(chart.disposed).not.toHaveBeenCalled();

			chart.dispose();
			expect(chart.disposed).toHaveBeenCalledTimes(1);
		});

		it('should emit "disposed" event when component is disposed', () => {
			const listener = jest.fn();

			chart = new Chart({
				events: {
					disposed: listener,
				},
			});

			expect(listener).not.toHaveBeenCalled();

			chart.dispose();
			expect(listener).toHaveBeenCalledTimes(1);
		});
	});
});
