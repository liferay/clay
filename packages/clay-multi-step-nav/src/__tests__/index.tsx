/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiStepNav from '..';
import React from 'react';
import {cleanup, fireEvent, render} from 'react-testing-library';

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
