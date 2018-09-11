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

function compareName(a, b) {
	let nameA = a.title.toUpperCase();
	let nameB = b.title.toUpperCase();

	if (nameA < nameB) {
		return -1;
	}

	if (nameA > nameB) {
		return 1;
	}

	return 0;
}

function compareWeight(a, b) {
	return b.weight - a.weight;
}

function sortBy(tree) {
	if (tree.items) {
		tree.items.sort(compareName);
		tree.items.sort(compareWeight);

		tree.items.map((item) => sortBy(item));
	}

	return tree;
}

module.exports = arrangeIntoTree;