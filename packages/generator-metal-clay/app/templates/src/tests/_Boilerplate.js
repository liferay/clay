import <%= componentName %> from '../<%= componentName %>';

let component;

describe('<%= componentName %>', function() {
  afterEach(() => {
    if (component) {
      component.dispose();
    }
  });

  it('should render the default markup', () => {
    component = new <%= componentName %>();

    expect(component).toMatchSnapshot();
  });

  it('should render a <%= componentName %> with classes', () => {
    component = new <%= componentName %>({
      elementClasses: 'my-custom-class',
    });

    expect(component).toMatchSnapshot();
  });

  it('should render a <%= componentName %> with id', () => {
    component = new <%= componentName %>({
      id: 'myId',
    });

    expect(component).toMatchSnapshot();
  });

});
