/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import {IDataProvider, NetworkStatus} from './types';
import {useResource} from './useResource';

interface IChildrenProps {
	data: any;
	error: string | boolean;
	loading: boolean;
	networkStatus?: NetworkStatus;
	refetch: Function;
}

interface IProps extends IDataProvider {
	/**
	 * It uses a render props pattern made popular by libraries
	 * like React Motion and React Router.
	 *
	 * Children as a function is required for the DataProvider
	 * to pass the props with data information, network status,
	 * refetch method and others. If this is an impediment try
	 * using the `useResource` hook.
	 */
	children: (props: IChildrenProps) => React.ReactElement;

	/**
	 * Set to true means that network status information will be passed
	 * via `renders props` and will also cause new renderings as
	 * networkStatus changes, when false rendering does not
	 * happen again.
	 */
	notifyOnNetworkStatusChange?: boolean;
}

interface IState {
	error: boolean;
	loading: boolean;
	networkStatus?: NetworkStatus;
}

const ClayDataProvider: React.FunctionComponent<IProps> = ({
	children,
	notifyOnNetworkStatusChange = false,
	...otherProps
}: IProps) => {
	/**
	 * networkStatus is only updated when notifyOnNetworkStatusChange
	 * is enabled, this will inform of the fetch status and cause
	 * a new rendering.
	 */
	const [state, setState] = useState<IState>(() => ({
		error: false,
		loading: false,
	}));

	const handleNetworkStatus = (status: NetworkStatus) => {
		const payload: IState = {
			error: status === 5,
			loading: status < 4,
		};

		if (notifyOnNetworkStatusChange) {
			payload.networkStatus = status;
		}

		setState(payload);
	};

	const {refetch, resource} = useResource({
		...otherProps,
		onNetworkStatusChange: handleNetworkStatus,
	});

	// Adding a fragment is a hack to dribble the
	// react-docgen to identify that it is a component.
	return (
		<>
			{children({
				...state,
				data: resource,
				refetch,
			})}
		</>
	);
};

export {useResource};
export default ClayDataProvider;
