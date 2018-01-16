# clay-charts

Metal.js wrapper for D3 and billboard.js

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
can find it [here](https://nodejs.org).

2. Install local dependencies:

  ```
  npm install
  ```

3. Build the code:

  ```
  npm run build
  ```

## How to

### Chart types:

clay-charts supports the following (billboard.js) charts:

+ LineChart
+ SplineChart
+ StepChart
+ AreaChart
+ AreaLineChart
+ AreaStepChart
+ BarChart
+ ScatterChart
+ PieChart
+ DonutChart
+ GaugeChart

### Creating a chart

To create a chart, you will need to instantiate the type of
chart you want to use, passing in the required options:

For example, to create a `LineChart` you could use the following code:

```javascript
const lineChart = new metal.LineChart({
  columns: [
    {
      data: [30, 200, 100, 400, 150, 250],
      id: 'sample_data_1',
      name: 'Data 1',
    },
    {
      data: [50, 20, 10, 40, 15, 25],
      id: 'data2'
    },
    {
      data: [150, 90, 30, 400, 15, 205],
      id: 'data3'
    },
    {
      data: [10, 30, 130, 200, 50, 20],
      id: 'data4'
    }
  ]
});
```

As shown above, the only required option is to pass a `columns`
array, which contains your datasets.

Each item in the `columns` array is an object which contains these fields:

```javascript
{
  data: [10, 20, 30, 40, 50], // {!Array} The item's dataset
  id:   'data1',              // {!String} The item's ID (displayed in the chart's legend and tooltip)
  name: ''                    // {String} [optional] The item's name (If specified,
                              // will be displayed instead of the item's ID in the chart's legend and tooltip)
}
```

These options work with all supported chart types.

Please note that for `DonutChart`, `GaugeChart` and `PieChart` the column's items contain only one value in their `data` property:

```javascript
const pieChart = new metal.PieChart({
  columns: [
    {
      data: [30],
      id: 'data1'
    },
    {
      data: [50],
      id: 'data2'
    },
    {
      data: [20],
      id: 'data3'
    }
  ]
});
```
### More options

Additional options can be passed to the different chart constructors; these options will be passed to `billboard.js`.

For all available chart options, you might want to check `billboard.js`'s available [Options](https://github.com/naver/billboard.js/blob/master/src/config/Options.js)

These are the options available in clay-charts, some have slightly different names than the ones in `billboard.js`

```javascript
+ area                      // Only for area type charts
+ axisRotated
+ axisX
+ axisY2
+ axisY
+ bar
+ color
+ colors
+ colorFormatter            // Set's billboard.js' data.color config
+ columns
+ donut                     // Only for DonutChart
+ emptyLabelText
+ gauge                     // Only for GaugeChart
+ grid
+ groups                    // Set's billboard.js' data.group config
+ hide                      // A boolean indicating if the chart should be hidden
+ intersection
+ json                      // Set's billboard.js' data.json config
+ keys                      // Set's billboard.js' data.keys config
+ labels                    // Set's billboard.js' data.labels config
+ legend                    // Set's billboard.js' data.labels config
+ line                      // Only for Line type charts
+ mimeType                  // Set's billboard.js' data.mimeType config
+ order                     // Set's billboard.js' data.order config
+ padding
+ pie                       // Only for PieChart
+ point
+ regions
+ resizeAuto
+ rows                       // Set's billboard.js' data.rows config
+ selection                  // Set's billboard.js' data.selection config
+ size                       // Set's the chart's size
+ splineInterpolationType    // For Spline type charts
+ subchart
+ svgClassName               // Set's the `svg` element's css class name
+ title
+ tooltip
+ transitionDuration
+ url
+ x                          // Set's billboard.js' data.x config
+ xFormat                    // Set's billboard.js' data.xFormat config
+ xLocaltime                 // Set's billboard.js' data.xLocaltime config
+ xSort                      // Set's billboard.js' data.xLocaltime config
+ zoom
```

All these options are commented and visible in [ChartBase.js](src/ChartBase.js).

## Contribute

We'd love to get contributions from you! Please, check our [Contributing Guidelines](CONTRIBUTING.md) to see how you can help us improve.
