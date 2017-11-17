import <%= componentName %> from '../<%= componentName %>';

let component;

describe('<%= componentName %>', function() {
  afterEach(() => {
    if (component) {
      component.dispose();
    }
  });

  it('should generate the default markup', () => {
    component = new <%= componentName %>();

    expect(component).toMatchSnapshot();
  });

});
