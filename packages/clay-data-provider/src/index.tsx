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
	children: (data: IChildrenProps) => React.ReactElement;

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
}) => {
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

	return children({
		...state,
		data: resource,
		refetch,
	});
};

export default ClayDataProvider;
