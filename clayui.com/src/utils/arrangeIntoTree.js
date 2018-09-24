function findWhere(array, key, value) {
	let t = 0;
	while (t < array.length && array[t][key] !== value) { t++; };

	if (t < array.length) {
		return array[t]
	} else {
		return false;
	}
}

function arrangeIntoTree(paths) {
	let tree = [];

	for (let i = 0; i < paths.length; i++) {
		const node = paths[i];

		if (node.id === 'index' && node.layout === 'redirect') {
			continue;
		}

		const path = node.link.split('/').filter(elem => elem);
		let currentLevel = tree;
		for (let j = 0; j < path.length; j++) {
			let part = path[j];
			let existingPath = findWhere(currentLevel, 'id', part);

			if (existingPath) {
				currentLevel = existingPath.items;
			} else if (node.id === part || node.id === 'index') {
				currentLevel.push(node);
			} else {
				let nodePart = paths.find(elem => elem.link.endsWith(`${part}/index`));
				let newPart = {
					id: part,
					items: [],
					title: nodePart.title,
					weight: nodePart.weight,
				}

				currentLevel.push(newPart);
				currentLevel = newPart.items;
			}
		}
	}

	sortBy(tree[0]);

	return tree;
}

const regexSpace = /\s+/g;

function sortBy(tree) {
	if (tree.items) {
		tree.items = tree.items.sort((a, b) => {
			let titleA = a.title.toUpperCase().replace(regexSpace, '');
			let titleB = b.title.toUpperCase().replace(regexSpace, '');

			if (a.weight < b.weight) return 1;
			if (a.weight > b.weight) return -1;

			if (titleA > titleB) return 1;
			if (titleA < titleB) return -1;
		});

		tree.items.map((item) => sortBy(item));
	}

	return tree;
}

module.exports = arrangeIntoTree;