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

interface Props extends IDataProvider {
	children?: (data: IChildrenProps) => React.ReactNode;

	/**
	 * Set to true means that network status information will be passed
	 * via `renders props` and will also cause new renderings as
	 * networkStatus changes, when false rendering does not
	 * happen again.
	 */
	notifyOnNetworkStatusChange?: boolean;
}

interface State {
	error: boolean;
	loading: boolean;
	networkStatus?: NetworkStatus;
}

const ClayDataProvider: React.FunctionComponent<Props> = ({
	children,
	notifyOnNetworkStatusChange = false,
	...otherProps
}) => {
	/**
	 * networkStatus is only updated when notifyOnNetworkStatusChange
	 * is enabled, this will inform of the fetch status and cause
	 * a new rendering.
	 */
	const [state, setState] = useState<State>(() => ({
		loading: false,
		error: false,
	}));

	const handleNetworkStatus = (status: NetworkStatus) => {
		const payload: State = {
			loading: status < 4,
			error: status === 5,
		};

		if (notifyOnNetworkStatusChange) {
			payload.networkStatus = status;
		}

		setState(payload);
	};

	const {resource, refetch} = useResource({
		...otherProps,
		onNetworkStatusChange: handleNetworkStatus,
	});

	const payload: IChildrenProps = {
		...state,
		data: resource,
		refetch,
	};

	return <>{children && children(payload)}</>;
};

export default ClayDataProvider;
