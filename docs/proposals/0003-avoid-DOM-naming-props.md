# Avoid DOM naming props in Clay components

-   Start Date: 2022-04-19
-   Authors: [Sergio Jiménez del Coso](https://github.com/sergiojimcos)
-   RFC PR: (leave this empty)
-   Clay Issue: [#4783](https://github.com/liferay/clay/issues/4783)
-   Status: **Awaiting implementation**

## Introduction

In Clay we have some components like `<ClayEmptyState />`, `<ClayMultiStepNavWithState />`, `<ClayColorPicker />`... which have props named like DOM attributes (eg. `title`, `value`...)

This document describes the implementation proposal to avoid naming some props like DOM attributes. 

## Motivation

The main problem to face in this issue is to avoid naming Clay components' props the same way as the DOM attributes. This problem can get worse the consistency and the naming of these components, as well as users can not use properly DOM node attributes in low-level HTML tags properly. For that reason, we have to face one main goal:

-   Find a mechanism to avoid the use of DOM attribute naming in Clay component props.

To be more specific, this mechanism should be a tool that checks if the prop names are correct and not identical to the DOM attribute names in order to maintain consistency and not overlap Clay components prop names with their corresponding DOM nodes.

## Proposed solution

The decision going forward is to set a new `eslint` rules called [`react/forbid-component-props`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md). This rule will be applied to Clay components and not DOM nodes. The main goal of this rule is to prevent prop names that has a lot of complexity. Beside it will check all JSX elements and will verify that no forbidden props are used on Clay components. This solution will be the best one because there is not any particular `eslint` rule that can avoid props naming all the DOM attributes without specified them by default. 

The structure of this rules is the following one:

```
...
"react/forbid-component-props": [<enabled>, { "forbid": [<string>|<object>] }]
...

```

This rule has two arguments:

-   The `enabled` parameter determines the type of message that must be displayed once the rule is applied. Normally, it is set as `"error"` message.
-   The `forbid` parameter is an string or object array where you have to specify the prop names that you want to avoid. Besides, you can also customize the array specifying the property name, an optional custom message, and a component whitelist:

```
{
  "propName": "someProp",
  "allowedFor": [SomeComponent, AnotherComponent],
  "message": "Avoid using someProp"
}

```

## Detailed design

In order to set this `eslint` rule in the `.eslintrc.js` file, we have to follow two steps in order to determain which DOM attributes must be set up in the rule:

1. In the first step, we have to determine which DOM attribute names must be set in the `eslint` rule because as I said before there is not any rule that check it automatically without specifying the DOM attribute names. In Clay components, there are some props like `title`, `value`, `length` that must be indicated in the rule. Moreover, you can also take a view of the [DOM attributes list](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

2. Once we have determine the DOM attribute name list, the next step is building the rule. There are different ways of creating a rule: simple way and the complete one.

### 1. Simple Way

In the simple way, you can determine only the chosen DOM attribute names in a string array like the following example:

```
'react/forbid-component-props': [
	'error', {
		forbid: ['length', 'title', 'value'],
	},
],
```
Once you insert this example in `.eslintrc.js` file and save it, then go to the console and execute the following command:

```
yarn lint
```

It will show you all the files where Clay components have got prop names like DOM ones indicated in the string array.

### 2. Complete Way

In the complete way, you can determine only the chosen DOM attributes in an objects array like the following example:

```
'react/forbid-component-props': [
	'error', {
		forbid: [{
        message: "In this file includes title prop",
        propName: "title",
    },
    {
        message: "In this file includes value prop",
        propName: "value",
        }],
	},
],
```
Once you insert this example in `.eslintrc.js` file and save it, then go to the console and execute the following command:

```
yarn lint
```

It will show you all the files where Clay components have got prop names like DOM ones with their specific message.

## Effect on API resilience

This proposal will not change the behavior of the existing APIs because it is an improvent to mantain the consistency between Clay components DOM nodes.

## Alternatives considered

This solution is the most completed one, but it is not the perfect one. At the moment, there is a huge list of `eslint` rules that are used in this project to mantain the consistency and establish good practices.

## Consequences

### Advantages

-   Give users to use the desired DOM attributes.
-   Give more consistency in all Clay components.
-   Avoid duplicated naming between Clay components and their DOM nodes.

### Drawbacks

-   Set new prop names for those Clay components different from DOM attributes.
