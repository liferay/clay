/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {FunctionComponent, HTMLAttributes} from 'react';
import warning from 'warning';

export interface FooterContainerProps extends HTMLAttributes<HTMLDivElement> {
	position?: number;
}

const ButtonWrap: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
	children,
}) => <div className="btn-group-item">{children}</div>;

const FooterContainer: FunctionComponent<FooterContainerProps> = ({
	children,
	position,
}) => (
	<div
		className={classNames({
			'modal-item-first': position === 0,
			'modal-item-last': position === 1,
		})}
	>
		<div className="btn-group">
			{React.Children.map(children, (child, i) =>
				React.cloneElement(<ButtonWrap>{child}</ButtonWrap>, {key: i})
			)}
		</div>
	</div>
);

interface FooterProps {
	children: React.ReactElement<FunctionComponent<FooterContainerProps>>;
}

/**
 * Handles the childrens of the footer to format the markup and add
 * the necessary classNames.
 */
const Footer: FunctionComponent<FooterProps> = ({children}) => {
	let childrens = children;
	if (children.type && (children.type as any) === React.Fragment) {
		childrens = children.props.children;
	}

	warning(
		(children.type as any) === React.Fragment ||
			typeof (children.type as any) === 'function',
		'ClayModal -> Wrap the `<FooterContainer />` elements inside a Fragment to work as expected.'
	);

	const count = React.Children.count(childrens);

	warning(
		count <= 2,
		`ClayModal -> props \`renderFooter\` has received more ${count} elements, only 2 is allowed, works fine use only 2 elements of <FooterContainer />`
	);

	return (
		<div className="modal-footer">
			{React.Children.map(childrens, (child: any, i) =>
				React.cloneElement(child, {position: i})
			)}
		</div>
	);
};

export {Footer, FooterContainer};
