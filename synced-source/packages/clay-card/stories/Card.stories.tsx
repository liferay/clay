/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayForm, {ClayCheckbox, ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React, {useState} from 'react';

import ClayCard, {
	ClayCardWithHorizontal,
	ClayCardWithInfo,
	ClayCardWithNavigation,
	ClayCardWithUser,
} from '../src';
const portletImage = require('./static/portlet.svg');

export default {
	title: 'Design System/Components/Card',
};

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	const checked = props.value || value;
	const onChange = props.onChange || setValue;

	return (
		<ClayCheckbox
			checked={checked}
			disabled={false}
			label={props.label}
			onChange={() => onChange((val: boolean) => !val)}
		>
			{props.children}
		</ClayCheckbox>
	);
};

export const CardWithInfo = (args: any) => {
	const [value, setValue] = useState<boolean>(false);
	const [radioValue, setRadioValue] = useState<string>('');

	return (
		<>
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithInfo
						description="A cool description"
						href="#"
						labels={[
							{
								displayType: 'success',
								value: 'Awesome',
							},
						]}
						stickerProps={{
							title: 'File',
						}}
						title="Very Large File"
					/>
				</div>

				<div className="col-md-4">
					<ClayCardWithInfo
						actions={[
							{
								label: 'clickable',
								onClick: () => {
									alert('you clicked!');
								},
							},
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						description="A cool description"
						disabled={args.disabled}
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
						onSelectChange={(newVal) => setValue(newVal)}
						selected={value}
						stickerProps={{
							content: 'DOC',
							displayType: 'danger',
							title: 'Document',
						}}
						title="Selectable File"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<ClayCard.Group label="Radio Card Group">
						<ClayCardWithInfo
							description="A cool description"
							labels={[
								{
									displayType: 'danger',
									value: 'Crazy',
								},
							]}
							onSelectChange={(value) => setRadioValue(value)}
							radioProps={{name: 'cards', value: 'radio1'}}
							selectableType="radio"
							selected={radioValue === 'radio1'}
							stickerProps={null}
							title="Radio Card 1"
							truncate={false}
						/>
						<ClayCardWithInfo
							description="A cool description"
							labels={[
								{
									displayType: 'success',
									value: 'Awesome',
								},
							]}
							onSelectChange={(value) => setRadioValue(value)}
							radioProps={{name: 'cards', value: 'radio2'}}
							selectableType="radio"
							selected={radioValue === 'radio2'}
							stickerProps={null}
							title="Radio Card 2"
							truncate={false}
						/>
					</ClayCard.Group>
				</div>
			</div>
		</>
	);
};

CardWithInfo.args = {
	disabled: false,
};

export const CardWithInfoImage = (args: any) => {
	const [value, setValue] = useState(false);

	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithInfo
					description="Author Action"
					disabled={args.disabled}
					flushHorizontal={args.flushHorizontal}
					flushVertical={args.flushVertical}
					href="#"
					imgProps={{
						alt: 'Placeholder Image',
						src: 'https://via.placeholder.com/150x250',
					}}
					labels={[
						{
							displayType: 'success',
							value: 'Approved',
						},
					]}
					onSelectChange={setValue}
					selected={value}
					stickerProps={{
						title: 'Photo File',
					}}
					title="thumbnail_coffee.jpg"
				/>
			</div>

			<div className="col-md-4">
				<ClayCardWithInfo
					description="Author Action"
					flushHorizontal={args.flushHorizontal}
					flushVertical={args.flushVertical}
					href="#"
					imgProps={{
						alt: 'Placeholder Image',
						src: 'https://via.placeholder.com/350x150',
					}}
					labels={[
						{
							displayType: 'success',
							value: 'Approved',
						},
					]}
					stickerProps={{
						title: 'Photo File',
					}}
					title="thumbnail_coffee.jpg"
				/>
			</div>
		</div>
	);
};

CardWithInfoImage.args = {
	disabled: false,
	flushHorizontal: false,
	flushVertical: false,
};

export const CardWithHorizontal = (args: any) => {
	const [value, setValue] = useState<boolean>(false);
	const [radioValue, setRadioValue] = useState<string>('');

	return (
		<>
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithHorizontal
						href="#"
						title="Very Large Folder"
					/>
				</div>

				<div className="col-md-4">
					<ClayCardWithHorizontal
						actions={[
							{
								label: 'clickable',
								onClick: () => {
									alert('you clicked!');
								},
							},
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						disabled={args.disabled}
						href="#"
						onSelectChange={setValue}
						selected={value}
						title="Selectable Folder"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<ClayCard.Group label="Radio Card Group">
						<ClayCardWithHorizontal
							actions={[
								{
									label: 'clickable',
									onClick: () => {
										alert('you clicked!');
									},
								},
								{type: 'divider'},
								{
									href: '#',
									label: 'linkable',
								},
							]}
							disabled={args.disabled}
							href="#"
							onSelectChange={setRadioValue}
							radioProps={{name: 'cards', value: 'radio1'}}
							selectableType="radio"
							selected={radioValue === 'radio1'}
							title="Radio Selectable Folder 1"
						/>
						<ClayCardWithHorizontal
							actions={[
								{
									label: 'clickable',
									onClick: () => {
										alert('you clicked!');
									},
								},
								{type: 'divider'},
								{
									href: '#',
									label: 'linkable',
								},
							]}
							disabled={args.disabled}
							href="#"
							onSelectChange={setRadioValue}
							radioProps={{name: 'cards', value: 'radio2'}}
							selectableType="radio"
							selected={radioValue === 'radio2'}
							title="Radio Selectable Folder 2"
						/>
					</ClayCard.Group>
				</div>
			</div>
		</>
	);
};

CardWithHorizontal.args = {
	disabled: false,
};

export const CardWithNavigation = () => (
	<div className="row">
		<div className="col-md-4">
			<ClayCardWithNavigation
				description="Pick and choose your layout..."
				onClick={() => alert('clicked')}
				title="onClick Card with icon"
			>
				<ClayIcon symbol="page-template" />
			</ClayCardWithNavigation>
		</div>
		<div className="col-md-4">
			<ClayCardWithNavigation href="#">
				<img alt="portlet image" src={portletImage} />
			</ClayCardWithNavigation>
		</div>
		<div className="col-md-4">
			<ClayCardWithNavigation
				description="Pick and choose your layout..."
				horizontal
				horizontalSymbol="page"
				href="#"
				stickerTitle="Page"
				title="Layout Page"
			/>
		</div>
	</div>
);

export const CardWithUser = (args: any) => {
	const [value, setValue] = useState<boolean>(false);
	const [radioValue, setRadioValue] = useState<string>('');

	return (
		<>
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
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						description="Assistant to the regional manager"
						disabled={args.disabled}
						href="#"
						name="Abraham Kuyper"
						onSelectChange={setValue}
						selected={value}
						stickerTitle="User Icon"
					/>
				</div>
				<div className="col-md-4">
					<ClayCardWithUser
						description="Assistant to the regional manager"
						disabled={args.disabled}
						name="Abraham Kuyper"
						stickerTitle="User Icon"
						userImageSrc="https://via.placeholder.com/256"
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<ClayCard.Group label="Radio Card Group">
						<ClayCardWithUser
							description="Assistant to the regional manager"
							disabled={args.disabled}
							name="Abraham Kuyper I"
							onSelectChange={setRadioValue}
							radioProps={{name: 'cards', value: 'radio1'}}
							selectableType="radio"
							selected={radioValue === 'radio1'}
							stickerTitle="User Icon"
							userImageSrc="https://via.placeholder.com/256"
						/>
						<ClayCardWithUser
							description="Assistant to the regional manager"
							disabled={args.disabled}
							name="Abraham Kuyper II"
							onSelectChange={setRadioValue}
							radioProps={{name: 'cards', value: 'radio2'}}
							selectableType="radio"
							selected={radioValue === 'radio2'}
							stickerTitle="User Icon"
							userImageSrc="https://via.placeholder.com/256"
						/>
					</ClayCard.Group>
				</div>
			</div>
		</>
	);
};

CardWithUser.args = {
	disabled: false,
};

export const LowLevelWithGroups = () => {
	const [selected, setSelected] = useState(false);

	return (
		<>
			<ClayCard.Group label="files">
				<ClayCard displayType="file">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClayIcon symbol="documents-and-media" />
						</div>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
						>
							DOC
						</ClaySticker>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Row>
							<div className="autofit-col autofit-col-expand">
								<section className="autofit-section">
									<ClayCard.Description displayType="title">
										deliverable.doc
									</ClayCard.Description>
									<ClayCard.Description displayType="subtitle">
										Stevie Ray Vaughn
									</ClayCard.Description>
									<ClayCard.Caption>
										<ClayLabel displayType="success">
											Approved
										</ClayLabel>
									</ClayCard.Caption>
								</section>
							</div>
						</ClayCard.Row>
					</ClayCard.Body>
				</ClayCard>
				<ClayCard active={selected} displayType="file" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState
							onChange={setSelected}
							value={selected}
						>
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClayIcon symbol="documents-and-media" />
							</div>
							<ClaySticker
								displayType="danger"
								position="bottom-left"
							>
								DOC
							</ClaySticker>
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Row>
							<div className="autofit-col autofit-col-expand">
								<section className="autofit-section">
									<ClayCard.Description displayType="title">
										deliverable.doc
									</ClayCard.Description>
									<ClayCard.Description displayType="subtitle">
										Stevie Ray Vaughn
									</ClayCard.Description>
									<ClayCard.Caption>
										<ClayLabel displayType="success">
											Approved
										</ClayLabel>
									</ClayCard.Caption>
								</section>
							</div>
						</ClayCard.Row>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
			<ClayCard.Group label="images">
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
						>
							<ClayIcon symbol="document-image" />
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<ClayCard.Row>
							<div className="autofit-col autofit-col-expand">
								<ClayCard.Description displayType="title">
									thumbnail_coffee.jpg
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									Author Action
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										Approved
									</ClayLabel>
								</ClayCard.Caption>
							</div>
						</ClayCard.Row>
					</ClayCard.Body>
				</ClayCard>
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
						>
							<ClayIcon symbol="document-image" />
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<ClayCard.Row>
							<div className="autofit-col autofit-col-expand">
								<ClayCard.Description displayType="title">
									thumbnail_coffee.jpg
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									Author Action
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										Approved
									</ClayLabel>
								</ClayCard.Caption>
							</div>
						</ClayCard.Row>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
		</>
	);
};

export const ProductCard = () => {
	const [dropdownActive, setDropdownActive] = useState(false);

	return (
		<div className="row">
			<div className="col-md-4">
				<ClayCard className="product-card" displayType="file">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClayIcon symbol="documents-and-media" />
						</div>

						<div className="aspect-ratio-item-bottom-left">
							<ClayLabel displayType="success">
								Available
							</ClayLabel>
						</div>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="c-mb-3">
							<ClayCard.Description
								displayType="subtitle"
								title="AR385672"
								truncate
							>
								AR385672
							</ClayCard.Description>

							<ClayCard.Description
								displayType="title"
								title="thumbnail_coffee.jpg"
								truncate
							>
								ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
							</ClayCard.Description>

							<ClayCard.Description displayType="text">
								<s>$99.00</s>
								<span>$70.00</span>
							</ClayCard.Description>
						</div>

						<ClayForm.Group>
							<ClayInput.Group>
								<ClayInput.GroupItem prepend shrink>
									<ClayButton
										disabled
										displayType="secondary"
									>
										-
									</ClayButton>
								</ClayInput.GroupItem>

								<ClayInput.GroupItem prepend>
									<ClayInput
										aria-label="Search for"
										className="form-control"
										value="1"
									/>
								</ClayInput.GroupItem>

								<ClayInput.GroupItem append shrink>
									<ClayButton displayType="secondary">
										+
									</ClayButton>
								</ClayInput.GroupItem>
							</ClayInput.Group>
						</ClayForm.Group>

						<ClayButton
							block
							className="c-mb-2"
							displayType="primary"
						>
							Add to Order
							<span className="inline-item inline-item-after">
								<ClayIcon symbol="shopping-cart" />
							</span>
						</ClayButton>

						<div className="autofit-float autofit-row autofit-row-center">
							<div className="autofit-col autofit-col-expand">
								<div className="autofit-section">
									<div className="custom-checkbox custom-control custom-control-primary">
										<ClayCheckboxWithState label="Compare" />
									</div>
								</div>
							</div>
							<div className="autofit-col">
								<div className="autofit-section">
									<ClayDropDown
										active={dropdownActive}
										alignmentPosition={5}
										onActiveChange={(newVal) =>
											setDropdownActive(newVal)
										}
										trigger={
											<ClayButton
												borderless
												displayType="secondary"
												small
											>
												Order by: newest
												<ClayIcon symbol="caret-bottom" />
											</ClayButton>
										}
									>
										<ClayDropDown.ItemList>
											{[
												{
													href: '#1',
													label: 'Download',
												},
												{href: '#1', label: 'Edit'},
												{href: '#1', label: 'Edit'},
												{href: '#1', label: 'Move'},
												{
													href: '#1',
													label: 'Checkout',
												},
												{
													href: '#1',
													label: 'Permissions',
												},
												{
													href: '#1',
													label: 'Move to Recycle Bin',
												},
											].map(
												(
													{
														href,
														label,
														...otherProps
													},
													i
												) => (
													<ClayDropDown.Item
														href={href}
														key={i}
														{...otherProps}
													>
														{label}
													</ClayDropDown.Item>
												)
											)}
										</ClayDropDown.ItemList>
									</ClayDropDown>
								</div>
							</div>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	);
};
