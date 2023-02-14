/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Text, TextHighlight} from '@clayui/core';
import React from 'react';

const exampleImports = `import {Text} from '@clayui/core';
import React from 'react';`;

const exampleSizeCode = `const Component = () => {
    

return (
    <>  
        <div>
            <Text size={11}>
                Text Size Level 11
            </Text>
        </div>
        <div>
            <Text size={10}>
                Text Size Level 10
            </Text>
        </div>
        <div>
            <Text size={9}>
                Text Size Level 9
            </Text>
        </div>
        <div>
            <Text size={8}>
                Text Size Level 8
            </Text>
        </div>
        <div>
            <Text size={7}>
                Text Size Level 7
            </Text>
        </div>
        <div>
            <Text size={6}>
                Text Size Level 6
            </Text>
        </div>
        <div>
            <Text size={5}>
                Text Size Level 5
            </Text>
        </div>
        <div>
            <Text size={4}>
                Text Size Level 4
            </Text>
        </div>
        <div>
            <Text size={3}>
                Text Size Level 3
            </Text>
        </div>
        <div>
            <Text size={2}>
                Text Size Level 2
            </Text>
        </div>
        <div>
            <Text size={1}>
                Text Size Level 1
            </Text>
        </div>
    </>
    );
};

render(<Component />)`;

export const TextSize = () => {
	const scope = {Text};

	return (
		<Editor code={exampleSizeCode} imports={exampleImports} scope={scope} />
	);
};

const exampleItalicCode = `const Component = () => {

    return (
        <>  
            <Text italic>
                Single origin, extra id beans, eu to go, skinny americano ut
                aftertas te sugar. At americano, viennese variety iced grounds,
                grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
                grounds café au lait, skinny, blue mountain, in variety sugar
                shop roast. Wings, blue mountain affogato organic cappuccino
                java plunger pot. Single shot variety pumpkin spice seasonal
                skinny barista carajillo robust cream.
            </Text>
        </>
        );
    };
    
    render(<Component />)`;

export const TextItalicFont = () => {
	const scope = {Text};

	return (
		<Editor
			code={exampleItalicCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleTruncateCode = `const Component = () => {

    return (
        <>  
            <Text truncate>
                Single origin, extra id beans, eu to go, skinny americano ut
                aftertas te sugar. At americano, viennese variety iced grounds,
                grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
                grounds café au lait, skinny, blue mountain, in variety sugar
                shop roast. Wings, blue mountain affogato organic cappuccino
                java plunger pot. Single shot variety pumpkin spice seasonal
                skinny barista carajillo robust cream.
            </Text>
        </>
        );
    };
    
    render(<Component />)`;

export const TextTruncateFont = () => {
	const scope = {Text};

	return (
		<Editor
			code={exampleTruncateCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleColorCode = `const Component = () => {

    return (
        <>  
            <Text as="p" color="primary">
                primary
            </Text>
            <Text as="p" color="secondary">
                secondary
            </Text>
            <Text as="p" color="muted">
                muted
            </Text>
            <Text as="p" color="success">
                success
            </Text>
            <Text as="p" color="warning">
                warning
            </Text>
            <Text as="p" color="danger">
                danger
            </Text>
            <Text as="p" color="info">
                info
            </Text>
        </>
        );
    };
    
    render(<Component />)`;

export const TextColorFont = () => {
	const scope = {Text};

	return (
		<Editor
			code={exampleColorCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleMonospaceCode = `const Component = () => {

    return (
        <>  
            <Text monospace>
                Single origin, extra id beans, eu to go, skinny americano ut
                aftertas te sugar. At americano, viennese variety iced grounds,
                grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
                grounds café au lait, skinny, blue mountain, in variety sugar
                shop roast. Wings, blue mountain affogato organic cappuccino
                java plunger pot. Single shot variety pumpkin spice seasonal
                skinny barista carajillo robust cream.
            </Text>
        </>
        );
    };
    
    render(<Component />)`;

export const TextMonospaceFont = () => {
	const scope = {Text};

	return (
		<Editor
			code={exampleMonospaceCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleWeightCode = `const Component = () => {

    return (
      <>
          <Text as="p" weight="lighter">
              Text with ligther weight
          </Text>
          <Text as="p" weight="light">
            Text with light weight
          </Text>
          <Text as="p" weight="normal">
            Text with normal weight
          </Text>
          <Text as="p" weight="semi-bold">
            Text with semi-bold weight
          </Text>
          <Text as="p" weight="bold">
            Text with bold weight
          </Text>
          <Text as="p" weight="bolder">
            Text with bolder weight
          </Text>
      </>
      );
  };
  
  render(<Component />)`;

export const TextWeight = () => {
	const scope = {Text};

	return (
		<Editor
			code={exampleWeightCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleTextHighlightImports = `import {TextHighlight} from '@clayui/core';
import React from 'react';`;

const exampleTextHighlightCode = `const Component = () => {
    return (
        <TextHighlight match="Ri s">Rick Sanchez</TextHighlight>
      );
  };
  
  render(<Component />)`;

export const ExampleTextHighlight = () => {
	const scope = {TextHighlight};

	return (
		<Editor
			code={exampleTextHighlightCode}
			imports={exampleTextHighlightImports}
			scope={scope}
		/>
	);
};
