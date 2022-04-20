/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
import React, {useState} from 'react';

import ClayPopover, {ALIGN_POSITIONS} from '../src';

export default {
	argTypes: {
		alignPosition: {
			control: {type: 'select'},
			options: ALIGN_POSITIONS,
		},
		displayType: {
			control: {type: 'select'},
			options: ['secondary', undefined],
		},
		size: {
			control: {type: 'select'},
			options: ['lg', undefined],
		},
	},
	component: ClayPopover,
	title: 'Design System/Components/Popover',
};

export const Default = (args: any) => (
	<ClayPopover
		alignPosition={args.alignPosition}
		disableScroll={args.disableScroll}
		displayType={args.displayType}
		header="Popover"
		size={args.size}
	>
		Viennese flavour cup eu, percolator froth ristretto mazagran caffeine.
	</ClayPopover>
);

Default.args = {
	alignPosition: 'bottom',
	disableScroll: false,
	displayType: undefined,
	size: undefined,
};

export const Trigger = (args: any) => (
	<div>
		<ClayPopover
			alignPosition="right"
			closeOnClickOutside={args.closeOnClickOutside}
			disableScroll={args.disableScroll}
			header="Popover"
			trigger={
				<ClayButtonWithIcon
					aria-label="Information button"
					symbol="info-circle-open"
				/>
			}
		>
			{`Viennese flavour cup eu, percolator froth ristretto mazagran
		caffeine. White roast seasonal, mocha trifecta, dripper caffeine
		spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
		caffeine. White roast seasonal, mocha trifecta, dripper caffeine
		spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
		caffeine. White roast seasonal, mocha trifecta, dripper caffeine
		spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
		caffeine. White roast seasonal, mocha trifecta, dripper caffeine
		spoon acerbic to go macchiato strong.`}
		</ClayPopover>
	</div>
);

Trigger.args = {
	closeOnClickOutside: true,
	disableScroll: false,
};

export const ManualShow = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<ClayButton
				onClick={() => setShow(!show)}
				style={{marginRight: 40}}
			>
				additional trigger
			</ClayButton>

			<ClayPopover
				closeOnClickOutside
				header="Popover"
				onShowChange={setShow}
				show={show}
				trigger={
					<ClayButtonWithIcon
						aria-label="Information button"
						symbol="info-circle-open"
					/>
				}
			>
				{`Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong.`}
			</ClayPopover>
		</>
	);
};

export const RecalculatePosition = () => {
	const {observer, onOpenChange, open} = useModal();

	return (
		<>
			{open && (
				<ClayModal observer={observer} size="lg" status="info">
					<ClayModal.Header>Title</ClayModal.Header>
					<ClayModal.Body scrollable>
						<ClayPopover
							header="Popover"
							trigger={
								<ClayButtonWithIcon
									aria-label="Information button"
									displayType="secondary"
									symbol="info-circle-open"
								/>
							}
						>
							{`Viennese flavour cup eu, percolator froth ristretto mazagran
						caffeine. White roast seasonal, mocha trifecta, dripper caffeine
						spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
						caffeine. White roast seasonal, mocha trifecta, dripper caffeine
						spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
						caffeine. White roast seasonal, mocha trifecta, dripper caffeine
						spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
						caffeine. White roast seasonal, mocha trifecta, dripper caffeine
						spoon acerbic to go macchiato strong.`}
						</ClayPopover>
						<br />
						<img
							alt="cat"
							src="https://cataas.com/cat/says/it will have"
						/>
						<img
							alt="cat"
							src="https://cataas.com/cat/says/a scroll"
						/>
					</ClayModal.Body>
					<ClayModal.Footer
						first={
							<ClayButton.Group spaced>
								<ClayButton displayType="secondary">
									Secondary
								</ClayButton>
								<ClayButton displayType="secondary">
									Secondary
								</ClayButton>
							</ClayButton.Group>
						}
						last={
							<ClayButton onClick={() => onOpenChange(false)}>
								Primary
							</ClayButton>
						}
					/>
				</ClayModal>
			)}

			<ClayButton
				displayType="primary"
				onClick={() => onOpenChange(true)}
			>
				Open modal
			</ClayButton>
		</>
	);
};
