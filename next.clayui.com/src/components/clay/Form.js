/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm, {ClayInput} from '@clayui/form';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const formCodeImport = `import ClayCard from '@clayui/card';
import React, {useState} from 'react';`;

const formCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
        <div className="sheet">
            <h4 className="sheet-subtitle">Form Example</h4>
            <ClayForm>
                <ClayForm.Group className="form-group-sm">
                    <label htmlFor="basicInput">Name</label>
                    <ClayInput placeholder="Name" type="text"></ClayInput>
                </ClayForm.Group>
                <ClayForm.Group className="form-group-sm">
                    <label htmlFor="basicInput">Description</label>
                    <textarea className="form-control" placeholder="Description"></textarea>
                </ClayForm.Group>
            </ClayForm>
        </div>
	);
}

render(<Component />)`;

const Form = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
		useState,
	};
	return <Editor code={formCode} imports={formCodeImport} scope={scope} />;
};

const formValidationCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
        <div className="sheet">
            <h4 className="sheet-subtitle">Form Validation Example</h4>
            <ClayForm>
                <ClayForm.Group className="has-success">
                    <label htmlFor="basicInput">Name</label>
                    <ClayInput placeholder="Name" type="text"></ClayInput>
                    <ClayForm.FeedbackGroup>
                        <ClayForm.FeedbackItem>
                            {'This is a form-feedback-item.'}
                        </ClayForm.FeedbackItem>
                        <ClayForm.FeedbackItem>
                            <ClayForm.FeedbackIndicator spritemap={spritemap} symbol="check-circle-full"/>
                            {'This is a form-feedback-item with a check feedback indicator.'}
                        </ClayForm.FeedbackItem>
                    </ClayForm.FeedbackGroup>
                </ClayForm.Group>
                <ClayForm.Group className="has-warning">
                    <label htmlFor="basicInput">Description</label>
                    <textarea className="form-control" placeholder="Description"></textarea>
                    <ClayForm.FeedbackGroup>
                        <ClayForm.FeedbackItem>
                            {'This is a form-feedback-item.'}
                        </ClayForm.FeedbackItem>
                        <ClayForm.FeedbackItem>
                            <ClayForm.FeedbackIndicator spritemap={spritemap} symbol="warning-full"/>
                            {'This is a form-feedback-item with a warning feedback indicator.'}
                        </ClayForm.FeedbackItem>
                    </ClayForm.FeedbackGroup>
                </ClayForm.Group>
                <ClayForm.Group className="has-error">
                    <label htmlFor="basicInput">Password</label>
                    <ClayInput placeholder="Name" type="password"></ClayInput>
                    <ClayForm.FeedbackGroup>
                        <ClayForm.FeedbackItem>
                            {'This is a form-feedback-item.'}
                        </ClayForm.FeedbackItem>
                        <ClayForm.FeedbackItem>
                            <ClayForm.FeedbackIndicator spritemap={spritemap} symbol="exclamation-full"/>
                            {'This is a form-feedback-item with a error feedback indicator.'}
                        </ClayForm.FeedbackItem>
                    </ClayForm.FeedbackGroup>
                </ClayForm.Group>
            </ClayForm>
        </div>
	);
}

render(<Component />)`;

const FormValidation = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
		useState,
	};
	return (
		<Editor
			code={formValidationCode}
			imports={formCodeImport}
			scope={scope}
		/>
	);
};

const formTextCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
        <div className="sheet">
            <h4 className="sheet-subtitle">Form Validation Example</h4>
            <ClayForm>
                <ClayForm.Group className="has-success">
                    <label htmlFor="basicInput">Name</label>
                    <ClayInput placeholder="Name" type="text"></ClayInput>
                    <ClayForm.FeedbackGroup>
                        <ClayForm.FeedbackItem>
                            {'This is a form-feedback-item.'}
                        </ClayForm.FeedbackItem>
                        <ClayForm.Text>
                            {''}
                        </ClayForm.Text>
                    </ClayForm.FeedbackGroup>
                </ClayForm.Group>
            </ClayForm>
        </div>
	);
}

render(<Component />)`;

const FormText = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
		useState,
	};
	return (
		<Editor code={formTextCode} imports={formCodeImport} scope={scope} />
	);
};

export {Form, FormValidation, FormText};
