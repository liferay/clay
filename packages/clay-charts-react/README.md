# clay-charts

React.js implementation of Clay built on [react-billboardjs](https://github.com/planttheidea/react-billboardjs)

## Setup

1. Install local dependencies:

```
yarn
```

2. Build the code:

```
yarn compile
```

## Running Demos

1. Install local dependencies:

```
yarn
```

2. Start development server

```
yarn start
```

3. Navigate to `localhost:8080`

## Basic Usage

See [billboard.js](https://naver.github.io/billboard.js/release/latest/doc/) and [react-billboardjs](https://github.com/planttheidea/react-billboardjs) for a more in depth API

```jsx
import ClayCharts from 'clay-charts-react';

<ClayCharts
	data={{
		columns: [['data1', 100, 20, 30], ['data2', 20, 70, 100]],
		type: 'bar'
	}}
/>;

// or

import {BarChart} from 'clay-charts-react';

<BarChart
	data={{
		columns: [['data1', 100, 20, 30], ['data2', 20, 70, 100]]
	}}
/>;
```
