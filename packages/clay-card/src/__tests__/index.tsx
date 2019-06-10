/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from '../index';
import ClayCheckbox from '@clayui/checkbox';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {cleanup, render} from 'react-testing-library';

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayCheckbox>
	);
};

describe('ClayCard', () => {
	afterEach(cleanup);

	it('renders a ClayCard as a directory', () => {
		const {container} = render(
			<ClayCard horizontal>
				<ClayCard.Body>
					<div className="flex-col">
						<ClaySticker displayType="secondary" inline>
							<ClayIcon
								spritemap="/path/to/some/resource.svg"
								symbol="folder"
							/>
						</ClaySticker>
					</div>
					<div className="autofit-col autofit-col-expand autofit-col-gutters">
						<div className="autofit-section">
							<ClayCard.Description displayType="title">
								{'Very Large Folder'}
							</ClayCard.Description>
						</div>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as a selectable folder', () => {
		const {container} = render(
			<ClayCard horizontal selectable>
				<ClayCheckboxWithState>
					<ClayCard.Body>
						<div className="autofit-col">
							<ClaySticker displayType="secondary" inline>
								<ClayIcon
									spritemap="/path/to/some/resource.svg"
									symbol="folder"
								/>
							</ClaySticker>
						</div>
						<div className="autofit-col autofit-col-expand autofit-col-gutters">
							<ClayCard.Description displayType="title">
								{'Very Large Folder'}
							</ClayCard.Description>
						</div>
					</ClayCard.Body>
				</ClayCheckboxWithState>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as image card', () => {
		const {container} = render(
			<ClayCard displayType="image">
				<ClayCard.AspectRatio className="card-item-first">
					<img
						alt="thumbnail"
						className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
						src="https://via.placeholder.com/256"
					/>
					<ClaySticker
						displayType="danger"
						position="bottom-left"
						shape="rounded"
					>
						<ClayIcon
							spritemap="/path/to/some/resource.svg"
							symbol="document-image"
						/>
					</ClaySticker>
				</ClayCard.AspectRatio>

				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description displayType="title">
							{'thumbnail_coffee.jpg'}
						</ClayCard.Description>
						<ClayCard.Description displayType="subtitle">
							{'Author Action'}
						</ClayCard.Description>
						<ClayCard.Caption>
							<ClayLabel displayType="success">
								{'Approved'}
							</ClayLabel>
						</ClayCard.Caption>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as a selectable image card', () => {
		const {container} = render(
			<ClayCard displayType="image" selectable>
				<ClayCard.AspectRatio className="card-item-first">
					<ClayCheckboxWithState>
						<ClayCard.AspectRatio>
							<img
								alt="thumbnail"
								className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
								src="https://via.placeholder.com/256"
							/>
						</ClayCard.AspectRatio>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
							shape="rounded"
						>
							<ClayIcon
								spritemap="/path/to/some/resource.svg"
								symbol="document-image"
							/>
						</ClaySticker>
					</ClayCheckboxWithState>
				</ClayCard.AspectRatio>

				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description displayType="title">
							{'thumbnail_coffee.jpg'}
						</ClayCard.Description>
						<ClayCard.Description displayType="subtitle">
							{'Author Action'}
						</ClayCard.Description>
						<ClayCard.Caption>
							<ClayLabel displayType="success">
								{'Approved'}
							</ClayLabel>
						</ClayCard.Caption>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as a file card', () => {
		const {container} = render(
			<ClayCard displayType="file">
				<ClayCard.AspectRatio className="card-item-first">
					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<ClayIcon
							spritemap="/path/to/some/resource.svg"
							symbol="documents-and-media"
						/>
					</div>
					<ClaySticker displayType="danger" position="bottom-left">
						{'DOC'}
					</ClaySticker>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<section className="autofit-section">
							<ClayCard.Description displayType="title">
								{'deliverable.doc'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Stevie Ray Vaughn'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</section>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as a selectable file card', () => {
		const {container} = render(
			<ClayCard displayType="file" selectable>
				<ClayCard.AspectRatio className="card-item-first">
					<ClayCheckboxWithState>
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClayIcon
								spritemap="/path/to/some/resource.svg"
								symbol="documents-and-media"
							/>
						</div>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
						>
							{'DOC'}
						</ClaySticker>
					</ClayCheckboxWithState>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<section className="autofit-section">
							<ClayCard.Description displayType="title">
								{'deliverable.doc'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Stevie Ray Vaughn'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</section>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as template navigation card', () => {
		const {container} = render(
			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<img
							alt="portlet image"
							src="/path/to/some/resource.gif"
						/>
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Widget Page'}
					</ClayCard.Description>
					<ClayCard.Description displayType="text">
						{'Build a page by adding widgets and content.'}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as a template navigation card truncating text on description', () => {
		const {container} = render(
			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<img
							alt="content image"
							src="/path/to/some/resource.gif"
						/>
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Content Page'}
					</ClayCard.Description>
					<ClayCard.Description displayType="text" truncate={false}>
						{
							'This is an example of card-type-template using an anchor tag.'
						}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as template navigation card with icon instead of image', () => {
		const {container} = render(
			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<ClayIcon
							spritemap="/path/to/some/resource.svg"
							symbol="page-template"
						/>
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Blog'}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as template navigation card as horizontal card', () => {
		const {container} = render(
			<ClayCard horizontal interactive>
				<ClayCard.Body>
					<span className="autofit-col">
						<ClaySticker displayType="light" inline>
							<ClayIcon
								spritemap="/path/to/some/resource.svg"
								symbol="page"
							/>
						</ClaySticker>
					</span>
					<span className="autofit-col autofit-col-expand">
						<span className="autofit-section">
							<ClayCard.Description displayType="title" truncate>
								{'Full Page Application'}
							</ClayCard.Description>
						</span>
					</span>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as user card', () => {
		const {container} = render(
			<ClayCard displayType="user">
				<ClayCard.AspectRatio className="card-item-first">
					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<ClaySticker
							className="sticker-user-icon"
							displayType="secondary"
							shape="circle"
						>
							<ClayIcon
								spritemap="/path/to/some/resource.svg"
								symbol="user"
							/>
						</ClaySticker>
					</div>
				</ClayCard.AspectRatio>

				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description displayType="title">
							{'Adélaide'}
						</ClayCard.Description>
						<ClayCard.Description displayType="subtitle">
							{'Author Action'}
						</ClayCard.Description>
						<ClayCard.Caption>
							<ClayLabel displayType="success">
								{'Approved'}
							</ClayLabel>
						</ClayCard.Caption>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a ClayCard as user selectable card', () => {
		const {container} = render(
			<ClayCard displayType="user" selectable>
				<ClayCard.AspectRatio className="card-item-first">
					<ClayCheckboxWithState>
						<ClayCard.AspectRatio>
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClaySticker
									className="sticker-user-icon"
									displayType="secondary"
									shape="circle"
								>
									<ClayIcon
										spritemap="/path/to/some/resource.svg"
										symbol="user"
									/>
								</ClaySticker>
							</div>
						</ClayCard.AspectRatio>
					</ClayCheckboxWithState>
				</ClayCard.AspectRatio>

				<ClayCard.Body>
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description displayType="title">
							{'Adélaide'}
						</ClayCard.Description>
						<ClayCard.Description displayType="subtitle">
							{'Author Action'}
						</ClayCard.Description>
						<ClayCard.Caption>
							<ClayLabel displayType="warning">
								{'Rejected'}
							</ClayLabel>
						</ClayCard.Caption>
					</div>
				</ClayCard.Body>
			</ClayCard>
		);

		expect(container).toMatchSnapshot();
	});
	it('renders a group of ClayCards', () => {
		const {container} = render(
			<>
				<ClayCard.Group label="Test Files">
					<ClayCard displayType="file">
						<ClayCard.AspectRatio className="card-item-first">
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClayIcon
									spritemap="/path/to/some/resource.svg"
									symbol="documents-and-media"
								/>
							</div>
							<ClaySticker
								displayType="danger"
								position="bottom-left"
							>
								{'DOC'}
							</ClaySticker>
						</ClayCard.AspectRatio>
						<ClayCard.Body>
							<div className="autofit-col autofit-col-expand">
								<section className="autofit-section">
									<ClayCard.Description displayType="title">
										{'deliverable.doc'}
									</ClayCard.Description>
									<ClayCard.Description displayType="subtitle">
										{'Stevie Ray Vaughn'}
									</ClayCard.Description>
									<ClayCard.Caption>
										<ClayLabel displayType="success">
											{'Approved'}
										</ClayLabel>
									</ClayCard.Caption>
								</section>
							</div>
						</ClayCard.Body>
					</ClayCard>
					<ClayCard displayType="file">
						<ClayCard.AspectRatio className="card-item-first">
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClayIcon
									spritemap="/path/to/some/resource.svg"
									symbol="documents-and-media"
								/>
							</div>
							<ClaySticker
								displayType="danger"
								position="bottom-left"
							>
								{'DOC'}
							</ClaySticker>
						</ClayCard.AspectRatio>
						<ClayCard.Body>
							<div className="autofit-col autofit-col-expand">
								<section className="autofit-section">
									<ClayCard.Description displayType="title">
										{'deliverable.doc'}
									</ClayCard.Description>
									<ClayCard.Description displayType="subtitle">
										{'Stevie Ray Vaughn'}
									</ClayCard.Description>
									<ClayCard.Caption>
										<ClayLabel displayType="success">
											{'Approved'}
										</ClayLabel>
									</ClayCard.Caption>
								</section>
							</div>
						</ClayCard.Body>
					</ClayCard>
				</ClayCard.Group>
				<ClayCard.Group label="Test Users">
					<ClayCard displayType="user">
						<ClayCard.AspectRatio className="card-item-first">
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClaySticker
									className="sticker-user-icon"
									displayType="secondary"
									shape="circle"
								>
									<ClayIcon
										spritemap="/path/to/some/resource.svg"
										symbol="user"
									/>
								</ClaySticker>
							</div>
						</ClayCard.AspectRatio>

						<ClayCard.Body>
							<div className="autofit-col autofit-col-expand">
								<ClayCard.Description displayType="title">
									{'Adélaide'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Author Action'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</div>
						</ClayCard.Body>
					</ClayCard>
					<ClayCard displayType="user">
						<ClayCard.AspectRatio className="card-item-first">
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClaySticker
									className="sticker-user-icon"
									displayType="secondary"
									shape="circle"
								>
									<ClayIcon
										spritemap="/path/to/some/resource.svg"
										symbol="user"
									/>
								</ClaySticker>
							</div>
						</ClayCard.AspectRatio>

						<ClayCard.Body>
							<div className="autofit-col autofit-col-expand">
								<ClayCard.Description displayType="title">
									{'Adélaide'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Author Action'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</div>
						</ClayCard.Body>
					</ClayCard>
				</ClayCard.Group>
			</>
		);

		expect(container).toMatchSnapshot();
	});
});
