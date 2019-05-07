/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const type = ast => VISITOR[ast.type.type](ast.type);

const defaultValue = ast => {
	return {
		[ast.title]: ast.description,
	};
};

const NullableType = ast => {
	const {expression} = ast;

	return {
		required: false,
		type: VISITOR[expression.type](expression),
	};
};

const NonNullableType = ast => {
	const {expression} = ast;

	return {
		required: true,
		type: VISITOR[expression.type](expression),
	};
};

const NameExpression = type => type.name;

const UnionType = type => {
	return type.elements
		.map(element => {
			return VISITOR[element.type](element);
		})
		.join('|');
};

const UndefinedLiteral = () => 'undefined';

const TypeApplication = type => {
	const applications = type.applications
		.map(element => {
			return VISITOR[element.type](element);
		})
		.join('|');

	return `${VISITOR[type.expression.type](
		type.expression
	)}&lt${applications}&gt`;
};

const VISITOR = {
	default: defaultValue,
	NameExpression,
	NonNullableType,
	NullableType,
	type,
	TypeApplication,
	UndefinedLiteral,
	UnionType,
};

module.exports = VISITOR;
