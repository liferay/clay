const fixHtmlAst = (htmlAst) => {
    const browseArray = (array) => {
        for (let i = 0; i < array.length; i++) {
            let elem = array[i];

            if (elem.properties && elem.properties['xlink:href']) {
                elem.properties.xlinkHref = elem.properties['xlink:href'];
                delete elem.properties['xlink:href'];
            }

            if (elem.children) {
                browseArray(elem.children);
            }
        }

        return array;
    }

    return htmlAst.children = browseArray(htmlAst.children);
};

export default fixHtmlAst;