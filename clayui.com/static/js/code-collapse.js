function closestAncestor(node, s) {
	const el = node;
	let ancestor = node;

	if (!document.documentElement.contains(el)) {
		return null;
	}

	do {
		if (ancestor.matches(s)) {
			return ancestor;
		}

		ancestor = ancestor.parentElement;
	} while (ancestor !== null);

	return null;
}

if (document.body) {
	document.body.addEventListener('click', event => {
		const target = event.target;
		const targetClassList = target.classList;

		if (
			targetClassList.contains('btn-collapse') ||
			targetClassList.contains('icon-collapse') ||
			(target.tagName === 'use' &&
				target.parentNode.classList.contains('icon-collapse'))
		) {
			const codeContainer = closestAncestor(target, '.code-container');

			if (codeContainer) {
				const gatsbyCode = codeContainer.querySelector(
					'code[class^="gatsby-code-"]'
				);

				if (gatsbyCode) {
					const btnCollapse = codeContainer.querySelector(
						'.btn-collapse--collapse'
					);
					const btnExpand = codeContainer.querySelector(
						'.btn-collapse--expand'
					);

					if (gatsbyCode.style.display === 'none') {
						btnCollapse.classList.remove('hide');
						btnExpand.classList.add('hide');

						gatsbyCode.style.display = 'block';
					} else {
						btnCollapse.classList.add('hide');
						btnExpand.classList.remove('hide');

						gatsbyCode.style.display = 'none';
					}
				}
			}
		}
	});
}
