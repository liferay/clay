/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@testing-library/jest-dom/extend-expect';
import ClayMultiStepNav, {ClayMultiStepNavWithBasicItems} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'path/to/spritemap';

const ClayMultiStepNavWithState = () => {
	const [value, setValue] = React.useState<number>(1);

	const steps = [
		{
			active: value === 0,
			complete: value > 0,
			onClick: () => setValue(0),
			subTitle: 'SubOne',
			title: 'One',
		},
		{
			active: value === 1,
			complete: value > 1,
			onClick: () => setValue(1),
			subTitle: 'SubTwo',
			title: 'Two',
		},
		{
			active: value === 2,
			complete: value > 2,
			onClick: () => setValue(2),
			subTitle: 'SubThree',
			title: 'Three',
		},
		{
			active: value === 3,
			complete: value > 3,
			onClick: () => setValue(3),
			subTitle: 'SubFour',
			title: 'Four',
		},
	];

	return (
		<ClayMultiStepNav>
			{steps.map(
				({active, complete, onClick, subTitle, title}, i: number) => (
					<ClayMultiStepNav.Item
						active={active}
						complete={complete}
						expand={i + 1 !== steps.length}
						key={i}
					>
						<ClayMultiStepNav.Title>{title}</ClayMultiStepNav.Title>
						<ClayMultiStepNav.Divider />
						<ClayMultiStepNav.Indicator
							complete={complete}
							label={1 + i}
							onClick={onClick}
							spritemap="/foo/bar"
							subTitle={subTitle}
						/>
					</ClayMultiStepNav.Item>
				)
			)}
		</ClayMultiStepNav>
	);
};

const ClayMultiStepNavWithBasicItemsWithState = (props: any) => {
	const [active, setActive] = React.useState(0);

	return (
		<ClayMultiStepNavWithBasicItems
			activeIndex={active}
			onIndexChange={setActive}
			spritemap={spritemap}
			{...props}
		/>
	);
};

describe('ClayMultiStepNav', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayMultiStepNavWithState />);

		expect(container).toMatchSnapshot();
	});

	it('activates step on click', () => {
		const {container, getByText} = render(<ClayMultiStepNavWithState />);

		fireEvent.click(getByText('3'));

		expect(container).toMatchSnapshot();
	});
});

describe('ClayMultiStepNavWithBasicItems', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayMultiStepNavWithBasicItemsWithState
				steps={[
					{
						subTitle: 'SubOne',
						title: 'One',
					},
					{
						subTitle: 'SubTwo',
						title: 'Two',
					},
				]}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('activates step on click', () => {
		const {getByText} = render(
			<ClayMultiStepNavWithBasicItemsWithState
				steps={[
					{
						subTitle: 'SubOne',
						title: 'One',
					},
					{
						subTitle: 'SubTwo',
						title: 'Two',
					},
				]}
			/>
		);

		expect(getByText('2').parentNode!.parentNode!).not.toHaveClass(
			'active'
		);

		fireEvent.click(getByText('2'));

		expect(getByText('2').parentNode!.parentNode!).toHaveClass('active');
	});

	it('clicking on dropdown item activates that step', () => {
		const {getByText} = render(
			<ClayMultiStepNavWithBasicItemsWithState
				maxStepsShown={2}
				steps={[
					{
						title: 'One',
					},
					{
						title: 'Two',
					},
					{
						title: 'Three',
					},
					{
						title: 'Four',
					},
				]}
			/>
		);

		fireEvent.click(getByText('...'));

		expect(document.querySelector('.dropdown-menu')).toHaveClass('show');

		fireEvent.click(document.querySelector(
			'.dropdown-item'
		) as HTMLElement);

		expect(document.querySelector('.dropdown-item')).toHaveClass('active');
	});
});
