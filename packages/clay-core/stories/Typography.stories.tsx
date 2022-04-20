/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import  {Heading, HeadingLevel, WeightFont} from '../src/typography';

storiesOf('Components|Typography', module)

    .add('Heading', () => (
        <Heading 
            level={
                select(
                    'Level Heading',
                    {
                        1: 1,
                        2: 2,
                        3: 3,
                        4: 4,
                        5: 5,
                        6:  6,
                    },
                    1
                ) as HeadingLevel
            }
            weight={
                select(
                    'Weight Font',
                    {
                        bold: 'bold',
                        bolder: 'bolder',
                        light: 'light',
                        lighter: 'lighter',
                        normal: 'normal',
                        semibold: 'semi-bold',
                    },
                    'normal'
                ) as WeightFont
            
            }
            >
                This is a Heading
        </Heading>
    ))

