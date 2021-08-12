/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import Layout from '@clayui/layout';
import React, {useContext} from 'react';

type TreeViewItemProps = {
	children: React.ReactNode;
};

const SpacingContext = React.createContext(0);

export function TreeViewItem({children}: TreeViewItemProps) {
	const spacing = useContext(SpacingContext);

	const [left, right] = React.Children.toArray(children);

	const group =
		// @ts-ignore
		right?.type?.displayName === 'ClayTreeViewGroup' ? right : null;

	return (
		<SpacingContext.Provider value={spacing + 24}>
			<li className="treeview-item" role="none">
				<div
					aria-expanded="true"
					className="treeview-link"
					data-toggle="collapse"
					role="treeitem"
					style={{paddingLeft: `${spacing}px`}}
					tabIndex={0}
				>
					<span
						className="c-inner"
						style={{marginLeft: `-${spacing}px`}}
						tabIndex={-2}
					>
						{typeof left === 'string' ? (
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<div className="component-text">{left}</div>
								</Layout.ContentCol>
							</Layout.ContentRow>
						) : group ? (
							left
						) : (
							<TreeViewItemStack expandable={false}>
								{children}
							</TreeViewItemStack>
						)}
					</span>
				</div>
				{group}
			</li>
		</SpacingContext.Provider>
	);
}

type TreeViewItemStackProps = {
	children: React.ReactNode;
	expandable?: boolean;
};

export function TreeViewItemStack({
	children,
	expandable = true,
}: TreeViewItemStackProps) {
	const childrenArray = React.Children.toArray(children);

	return (
		<Layout.ContentRow>
			{expandable && (
				<Layout.ContentCol>
					<Button
						aria-expanded="true"
						className="component-expander"
						data-toggle="collapse"
						displayType={null}
						monospaced
					>
						<span className="c-inner" tabIndex={-2}>
							<Icon symbol="angle-down" />
							<Icon
								className="component-expanded-d-none"
								symbol="angle-right"
							/>
						</span>
					</Button>
				</Layout.ContentCol>
			)}

			{React.Children.map(children, (child, index) => {
				let content = child;

				if (typeof child === 'string') {
					content = <div className="component-text">{child}</div>;

					// @ts-ignore
				} else if (child?.type.displayName === 'ClayIcon') {
					content = <div className="component-icon">{child}</div>;
				}

				return (
					<Layout.ContentCol
						expand={index === childrenArray.length - 1}
					>
						{content}
					</Layout.ContentCol>
				);
			})}
		</Layout.ContentRow>
	);
}
