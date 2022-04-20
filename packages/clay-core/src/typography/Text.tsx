/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import classNames from 'classnames';
 import React from 'react';

 export type TextLevel =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
    | 7
    | 8
	| 9
	| 10
	| 11;

export type WeightFont =
	| 'lighter'
	| 'light'
	| 'normal'
	| 'semi-bold'
	| 'bold'
	| 'bolder';

export type DisplayType =
	|  null
	| 'primary'
	| 'secondary'
	| 'muted'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'


interface IBaseProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
    /**
     * Determine the color text.
     */
     
    displayType?: DisplayType;

    /**
     * Set the text in italic style.
     */
    italic?: boolean;

    /**
     * Number to set the heading level.
     */
    level?: TextLevel;

    /**
     * Set the text in truncate style.
     */
    truncate?: boolean;

    /**
     * Determines the weight of the font.
     */
    weight?: WeightFont;
     
}

export const Text = React.forwardRef<HTMLSpanElement, IBaseProps>(
    ({children, className, displayType, italic, level, truncate, weight, ...otherProps}, ref) => {

        return (
            <span className={classNames(className, [`text-${level}`], {
                [`text-${displayType}`]: displayType,
                ['font-italic']: italic,
                ['text-truncate']: truncate,
                [`font-weight-${weight}`]: weight,
            
            })}
            ref={ref}
			{...otherProps}
            >
                {children}
            </span>
        );
    }
);

Text.displayName = 'Text';
