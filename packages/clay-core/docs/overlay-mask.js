/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Button, OverlayMask} from '@clayui/core';
import React, {useState} from 'react';

const exampleImports = `import {Button, OverlayMask} from '@clayui/core';
import React, {useState} from 'react';`;

const exampleCode = `const OverlayTrigger = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Button.Group spaced>
      <Button displayType="secondary" borderless onClick={() => setVisible(!visible)}>
        Open overlay
      </Button>
      <OverlayMask onClick={() => setVisible(false)} visible={visible}>
        <Button>Button</Button>
      </OverlayMask>
    </Button.Group>
  );
};

render(<OverlayTrigger />)`;

const OverlayMaskExample = () => {
	const scope = {Button, OverlayMask, useState};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

export {OverlayMaskExample};
