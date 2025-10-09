/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDatePicker from '@clayui/date-picker';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayLayout from '@clayui/layout';
import ClayMultiSelect from '@clayui/multi-select';
import {ClayVerticalNav} from '@clayui/nav';
import ClayPanel from '@clayui/panel';
import React, {useState} from 'react';

const ClayDatePickerWithState = (props: {[key: string]: any}) => {
	const [value, setValue] = useState<string | Date>('');

	return (
		<ClayDatePicker
			{...props}
			onValueChange={setValue}
			value={value as string}
		/>
	);
};

export default function DemoFormPage() {
	const [formValues, setFormValues] = useState<any>({});
	const [activePage, setActivePage] = useState(0);
	const [value, setValue] = useState('');
	const [selectedItems, setSelectedItems] = useState<any>([]);

	return (
		<ClayLayout.ContainerFluid>
			<div className="row">
				<div className="col col-3 col-sm-2">
					<ClayVerticalNav
						items={[
							{
								active: activePage === 0,
								label: 'Form Page',
								onClick: () => setActivePage(0),
							},
							{
								active: activePage === 1,
								label: 'Other Page',
								onClick: () => setActivePage(1),
							},
						]}
					/>
				</div>

				<div className="col col-8">
					{activePage === 0 && (
						<ClayForm
							className="sheet"
							onSubmit={() => alert(JSON.stringify(formValues))}
						>
							<div className="sheet-header">
								<h2 className="sheet-title">Form Input</h2>
							</div>

							<ClayPanel.Group>
								<ClayPanel
									displayTitle="Organization Information"
									displayType="unstyled"
								>
									<ClayPanel.Body>
										<ClayForm.Group>
											<label>Name</label>
											<ClayInput
												onChange={(event) =>
													setFormValues({
														...formValues,
														name: event.target
															.value,
													})
												}
												placeholder="Name"
											/>
										</ClayForm.Group>
										<ClayForm.Group>
											<label>Country</label>
											<ClayInput
												onChange={(event) =>
													setFormValues({
														...formValues,
														country:
															event.target.value,
													})
												}
												placeholder="Country"
											/>
										</ClayForm.Group>

										<ClayForm.Group>
											<label>Date</label>
											<ClayDatePickerWithState />
										</ClayForm.Group>

										<ClayForm.Group>
											<label>State</label>
											<select
												className="form-control"
												onChange={(event) =>
													setFormValues({
														...formValues,
														state: event.target
															.value,
													})
												}
											>
												<option disabled selected>
													-- select an option --
												</option>
												<option>Happy</option>
												<option>Mad</option>
												<option>Sad</option>
											</select>
										</ClayForm.Group>
									</ClayPanel.Body>
								</ClayPanel>

								<ClayPanel
									collapsable
									defaultExpanded
									displayTitle="More Information"
									displayType="unstyled"
									showCollapseIcon
								>
									<ClayPanel.Body>
										<ClayForm.Group>
											<ClayForm.Text>
												You can use this space to
												provide more information in this
												form.
											</ClayForm.Text>
										</ClayForm.Group>

										<ClayForm.Group>
											<label>Tags</label>

											<ClayInput.Group>
												<ClayInput.GroupItem>
													<ClayMultiSelect
														inputValue={value}
														items={selectedItems}
														onChange={setValue}
														onItemsChange={(
															items
														) => {
															setFormValues({
																...formValues,
																tags: items,
															});

															setSelectedItems(
																items
															);
														}}
														placeholder="Tags..."
													/>

													<ClayForm.FeedbackGroup>
														<ClayForm.Text>
															Use comma to enter
															tags
														</ClayForm.Text>
													</ClayForm.FeedbackGroup>
												</ClayInput.GroupItem>
											</ClayInput.Group>
										</ClayForm.Group>
									</ClayPanel.Body>
								</ClayPanel>
							</ClayPanel.Group>

							<div className="sheet-footer">
								<ClayButton.Group>
									<div className="btn-group-item">
										<ClayButton type="submit">
											Submit
										</ClayButton>
									</div>
									<div className="btn-group-item">
										<ClayButton displayType="secondary">
											Cancel
										</ClayButton>
									</div>
								</ClayButton.Group>
							</div>
						</ClayForm>
					)}

					{activePage === 1 && <div>Some other page...</div>}
				</div>
			</div>
		</ClayLayout.ContainerFluid>
	);
}
