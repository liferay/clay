/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Button, FocusTrap} from '@clayui/core';
import React, {useRef, useState} from 'react';

const exampleImports = `import {Button, FocusTrap} from '@clayui/core';
import React, {useState, useRef} from 'react';`;

const exampleCode = `const FocusTrapTrigger = () => {
    const [active, setActive] = useState(false);
	const activateButtonRef = useRef(null);

	const onDeactivateFocusTrap = () => {
		setActive(false);

		if (activateButtonRef.current) {
			activateButtonRef.current.focus();
		}
	};

	return (
		<>
			<Button onClick={() => setActive(true)} ref={activateButtonRef}>
				Activate trap
			</Button>
			{active && (
				<FocusTrap active={active}>
                <div className="sheet c-mt-2 c-p-4">
                    <Button displayType="link">Button 1</Button>
                    <Button displayType="link">Button 2</Button>
                    <div className="c-mt-4">
                        <Button onClick={onDeactivateFocusTrap}>
                            Leave trap
                        </Button>
                    </div>
            </div>
				</FocusTrap>
			)}
		</>
	);
};

render(<FocusTrapTrigger/>)`;

const FocusTrapExample = () => {
	const scope = {Button, FocusTrap, useRef, useState};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

export {FocusTrapExample};
