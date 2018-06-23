const newFunction = (Component, mountNode, compiled, [...components]) => {
    const stringNames = components.map(element => {
        return element.name;
    });

    new Function(
        'Component', 
        'mountNode',
        ...stringNames,
        compiled,
    )(
        Component,
        mountNode,
        ...components,
    );
};

export default newFunction;