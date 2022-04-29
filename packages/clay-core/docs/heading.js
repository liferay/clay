/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Heading} from '@clayui/core';
import React from 'react';

const exampleImports = `import {Heading} from '@clayui/core';
import React from 'react';`;

const exampleLevelCode = `const Component = () => {

  return (
    <>
        <Heading level={1} weight="semi-bold">
            h1. Heading Level 1
        </Heading>
        <Heading level={2} weight="semi-bold">
            h2. Heading Level 2
        </Heading>
        <Heading level={3} weight="semi-bold">
            h3. Heading Level 3
        </Heading>
        <Heading level={4} weight="semi-bold">
            h4. Heading Level 4
        </Heading>
        <Heading level={5} weight="semi-bold">
            h5. Heading Level 5
        </Heading>
        <Heading level={6} weight="semi-bold">
            h6. Heading Level 6
        </Heading>
    </>
    );
};

render(<Component />)`;

export const HeadingLevel = () => {
	const scope = {Heading};

	return (
		<Editor
			code={exampleLevelCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};

const exampleWeightCode = `const Component = () => {

    return (
      <>
          <Heading level={3} weight="lighter">
              Heading with ligther weight
          </Heading>
          <Heading level={3} weight="light">
            Heading with light weight
          </Heading>
          <Heading level={3} weight="normal">
            Heading with normal weight
          </Heading>
          <Heading level={3} weight="semi-bold">
            Heading with semi-bold weight
          </Heading>
          <Heading level={3} weight="bold">
            Heading with bold weight
          </Heading>
          <Heading level={3} weight="bolder">
            Heading with bolder weight
          </Heading>
      </>
      );
  };
  
  render(<Component />)`;

export const HeadingWeight = () => {
	const scope = {Heading};

	return (
		<Editor
			code={exampleWeightCode}
			imports={exampleImports}
			scope={scope}
		/>
	);
};
