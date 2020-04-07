/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPopover from '@clayui/popover';
import React from 'react';

import Editor from '../Editor';

const popoverImportsCode = `import ClayPopover from '@clayui/popover';
import React from 'react';`;

const popoverCode = `const Component = () => (
	<div style={{height: 250}}>
		<ClayPopover
			alignPosition="bottom"
			disableScroll={false}
			header="Popover Header!"
		>
			{\`Single shot, café au lait aromatic body robusta body cream mocha viennese steamed aged. Irish roast, aromatic seasonal, caramelization grinder french press coffee cortado lungo skinny.

			Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.\`}
		</ClayPopover>
	</div>
);

render(<Component />)`;

const Popover = () => {
	const scope = {ClayPopover};

	return (
		<Editor code={popoverCode} imports={popoverImportsCode} scope={scope} />
	);
};

export {Popover};
