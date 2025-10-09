/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ClayTooltip, {ClayTooltipProvider} from '../src';

const positions = [
	'top',
	'top-left',
	'top-right',
	'bottom',
	'bottom-left',
	'bottom-right',
	'left',
	'left-top',
	'left-bottom',
	'right',
	'right-top',
	'right-bottom',
] as const;

export default {
	argTypes: {
		alignPosition: {
			control: {type: 'select'},
			options: positions,
		},
	},
	component: ClayTooltip,
	title: 'Design System/Components/Tooltip',
};

export const Default = (args: any) => (
	<ClayTooltip alignPosition={args.alignPosition} show>
		Tooltip
	</ClayTooltip>
);

Default.args = {
	alignPosition: 'bottom',
};

export const Newline = () => (
	<ClayTooltip show>{'Tooltip\nwith\nnew\n\nlines'}</ClayTooltip>
);

export const TooltipProvider = () => (
	<div style={{padding: 50}}>
		<button title="Default">No Tooltip</button>

		<ClayTooltipProvider>
			<div>
				<button title="Default">Default</button>

				{/* Note that the newline has to be a string within braces. */}
				<button title={'Line1\nLine2'}>With a line Break</button>

				<button data-tooltip-align="left" title="Left">
					Left
				</button>

				<button data-tooltip-align="right" title="Right">
					Right
				</button>

				<button data-tooltip-align="top" title="Top">
					Top
				</button>

				<button
					data-tooltip-align="bottom"
					data-tooltip-delay="0"
					title="Bottom"
				>
					Custom Delay
				</button>

				<button data-title="Using data-title" data-tooltip-delay="0">
					data-title
				</button>

				<div
					data-tooltip-align="bottom"
					style={{
						backgroundColor: '#F6F8FA',
						border: '1px solid #D1D5DA',
						padding: 8,
					}}
					title="I'm on the parent element"
				>
					<button>nested</button>
				</div>
			</div>
		</ClayTooltipProvider>
	</div>
);

export const GlobalScope = () => (
	<div>
		<ClayTooltipProvider scope=".my-custom-tooltip-scope,.some-other-scope" />

		<div>
			<button title="browser">Browser Default</button>

			<div className="my-custom-tooltip-scope">
				<button title="Clay Style">Clay Style</button>

				<button
					data-title-set-as-html
					title={ReactDOMServer.renderToString(
						<span style={{color: 'red'}}>Custom Styles</span>
					)}
				>
					Custom Styles
				</button>
			</div>

			<div className="some-other-scope">
				<button title="test">test</button>
			</div>
		</div>
	</div>
);

export const CustomJSX = () => {
	const ItalicsComponent = (props: any) => <i>{props.title}</i>;

	return (
		<div style={{padding: 50}}>
			<ClayTooltipProvider
				contentRenderer={(props) => props.title.split('').join('-')}
			>
				<div>
					<button title="Hello World">Formatted</button>
				</div>
			</ClayTooltipProvider>

			<ClayTooltipProvider contentRenderer={ItalicsComponent}>
				<div>
					<button title="Hello World">Italics</button>
				</div>
			</ClayTooltipProvider>

			<ClayTooltipProvider
				contentRenderer={(props) => {
					let capitalize;

					if (props.targetNode) {
						capitalize = props.targetNode.getAttribute(
							'data-tooltip-capitalize'
						);
					}

					return (
						<span
							style={{
								textTransform: capitalize
									? 'uppercase'
									: 'none',
							}}
						>
							{props.title}
						</span>
					);
				}}
			>
				<div>
					<button data-tooltip-capitalize title="Hello World">
						Custom data attrs
					</button>
				</div>
			</ClayTooltipProvider>
		</div>
	);
};

export const Floating = () => {
	return (
		<ClayTooltipProvider>
			<div>
				<div
					style={{
						backgroundColor: '#e6e6e6',
						borderRadius: '10px',
						display: 'inline-block',
						fontWeight: 500,
						padding: '60px 100px',
					}}
				>
					<span data-tooltip-floating="true" title="Edit Text">
						Placeholder
					</span>
				</div>

				<div
					style={{
						backgroundColor: '#e6e6e6',
						borderRadius: '10px',
						display: 'inline-block',
						fontWeight: 500,
						marginTop: '30PX',
						padding: '60px 100px',
					}}
				>
					<span data-tooltip-floating="true" title="Edit Text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Fames ac turpis egestas integer eget
						aliquet nibh praesent tristique. Nibh sed pulvinar proin
						gravida hendrerit lectus a. Id interdum velit laoreet id
						donec ultrices tincidunt arcu. Viverra mauris in aliquam
						sem fringilla ut morbi. Convallis posuere morbi leo urna
						molestie at elementum eu. Mi bibendum neque egestas
						congue. Tempus quam pellentesque nec nam aliquam sem et
						tortor. Faucibus nisl tincidunt eget nullam non nisi
						est.{' '}
					</span>
				</div>
			</div>
		</ClayTooltipProvider>
	);
};
