/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayCard, {
	ClayCardWithHorizontal,
	ClayCardWithInfo,
	ClayCardWithNavigation,
	ClayCardWithUser,
} from '@clayui/card';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';

const cardCodeImports = `import ClayCard from '@clayui/card';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
`;

const cardCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
		<div className="col-md-4">
			<ClayCard displayType="file">
				<ClayCard.AspectRatio className="card-item-first">
					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<ClayIcon spritemap={spritemap} symbol="documents-and-media" />
					</div>
					<ClaySticker displayType="danger" position="bottom-left">
						{'DOC'}
					</ClaySticker>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Row>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">{'deliverable.doc'}</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">{'Stevie Ray Vaughn'}</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">{'Approved'}</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Row>
				</ClayCard.Body>
			</ClayCard>
		</div>
	);
}

render(<Component />)`;

const Card = () => {
	const scope = {
		ClayCard,
		ClayIcon,
		ClayLabel,
		ClaySticker,
	};

	return <Editor code={cardCode} imports={cardCodeImports} scope={scope} />;
};

const cardBasicImports = `import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
`;

const cardWithBasicCode = `const Component = () => {
	return (
		<div className="col-md-5">
			<ClayCard>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">{'Card Title'}</ClayCard.Description>
					<ClayCard.Description truncate={false} displayType="text">{'Some quick example text to build on the card title and make up the bulk of the card content.'}</ClayCard.Description>
					<ClayButton>{'Go somewhere'}</ClayButton>
				</ClayCard.Body>
			</ClayCard>
		</div>
	);
}

render(<Component />)`;

const CardBasic = () => {
	const scope = {
		ClayButton,
		ClayCard,
	};

	return (
		<Editor
			code={cardWithBasicCode}
			imports={cardBasicImports}
			scope={scope}
		/>
	);
};

const cardHorizontalImportsCode = `import ClayCard from '@clayui/card';
`;

const cardHorizontalCode = `const Component = () => {
	return (
		<ClayCard horizontal>
			<ClayCard.Row>
				<div className="autofit-col">
					<img alt="thumbnail" className="card-item-first" src="/images/thumbnail_placeholder.gif" style={{width: '150px'}} />
				</div>
				<div className="autofit-col autofit-col-expand autofit-col-gutters">
					<section className="autofit-section">
						<ClayCard.Description displayType="title">{'So ristretto cappuccino'}</ClayCard.Description>
						<ClayCard.Description truncate={false} displayType="text">{'Wings eu, pumpkin spice robusta.'}</ClayCard.Description>
					</section>
				</div>
			</ClayCard.Row>
		</ClayCard>
	);
}

render(<Component />)`;

const CardBasicHorizontal = () => {
	const scope = {
		ClayCard,
	};

	return (
		<Editor
			code={cardHorizontalCode}
			imports={cardHorizontalImportsCode}
			scope={scope}
		/>
	);
};

const cardWithInfoImportsCode = `import {ClayCardWithInfo} from '@clayui/card';
`;

const cardWithInfoCode = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithInfo
					actions={[
					{
						label: 'clickable',
						onClick: () => {
						alert('you clicked!');
						},
					},
					{ type: 'divider' },
					{
						href: '#',
						label: 'linkable',
					},
					]}
					description="A cool description"
					href="#"
					labels={[
					{
						displayType: 'success',
						value: 'Awesome',
					},
					{
						displayType: 'danger',
						value: 'Crazy',
					},
					]}
					onSelectChange={newVal => setValue(newVal)}
					selected={value}
					spritemap={spritemap}
					stickerProps={{
					content: 'DOC',
					displayType: 'danger',
					}}
					title="Selectable File"
				/>
			</div>
		</div>
	);
}

render(<Component />)`;

const CardWithInfo = () => {
	const scope = {
		ClayCardWithInfo,
	};

	return (
		<Editor
			code={cardWithInfoCode}
			imports={cardWithInfoImportsCode}
			scope={scope}
		/>
	);
};

const cardWithNavigationImportsCode = `import {ClayCardWithNavigation} from '@clayui/card';
import ClayIcon from '@clayui/icon';
`;

const cardWithNavigationCode = `const Component = () => {
	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithNavigation
					description="Pick and choose your layout..."
					onClick={() => alert('clicked')}
					spritemap={spritemap}
					title="onClick Card with icon"
				>
					<ClayIcon spritemap={spritemap} symbol="page-template" />
				</ClayCardWithNavigation>
			</div>
		</div>
	);
}

render(<Component />)`;

const CardWithNavigation = () => {
	const scope = {
		ClayCardWithNavigation,
		ClayIcon,
	};

	return (
		<Editor
			code={cardWithNavigationCode}
			imports={cardWithNavigationImportsCode}
			scope={scope}
		/>
	);
};

const cardWithUserImportsCode = `import {ClayCardWithInfo} from '@clayui/card';
`;

const cardWithUserCode = `const Component = () => {
	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithUser
					actions={[
					{
						label: 'clickable',
						onClick: () => {
						alert('you clicked!');
						},
					},
					{ type: 'divider' },
					{
						href: '#',
						label: 'linkable',
					},
					]}
					description="Assistant to the regional manager"
					href="#"
					labels={[
					{
						displayType: 'success',
						value: 'Awesome',
					},
					{
						displayType: 'danger',
						value: 'Crazy',
					},
					]}
					name="Abraham Kuyper"
					onSelectChange={() => {}}
					selected={true}
					spritemap={spritemap}
				/>
			</div>
		</div>
	);
}

render(<Component />)`;

const CardWithUser = () => {
	const scope = {
		ClayCardWithUser,
	};

	return (
		<Editor
			code={cardWithUserCode}
			imports={cardWithUserImportsCode}
			scope={scope}
		/>
	);
};

const cardWithHorizontalImportsCode = `import {ClayCardWithInfo} from '@clayui/card';
`;

const cardWithHorizontalCode = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithHorizontal
					actions={[
					{
						label: 'clickable',
						onClick: () => {
						alert('you clicked!');
						},
					},
					{ type: 'divider' },
					{
						href: '#',
						label: 'linkable',
					},
					]}
					href="#"
					onSelectChange={setValue}
					selected={value}
					spritemap={spritemap}
					title="Selectable Folder"
				/>
			</div>
		</div>
	);
}

render(<Component />)`;

const CardWithHorizontal = () => {
	const scope = {
		ClayCardWithHorizontal,
	};

	return (
		<Editor
			code={cardWithHorizontalCode}
			imports={cardWithHorizontalImportsCode}
			scope={scope}
		/>
	);
};

export {
	CardBasic,
	CardBasicHorizontal,
	CardWithInfo,
	CardWithNavigation,
	CardWithUser,
	CardWithHorizontal,
	Card,
};
