# clay-charts-react

React.js implementation of Clay built on [react-billboardjs](https://github.com/planttheidea/react-billboardjs)

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
   can find it [here](https://nodejs.org).

2. Install local dependencies:

```
npm install
```

3. Build the code:

```
npm run compile
```

## Running Demos

1. Install local dependencies:

```
npm install
```

2. Start development server

```
npm run start
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
```
