import ClayAutocomplete from '../ClayAutocomplete';

let component;

describe('ClayAutocomplete', function() {
  afterEach(() => {
    if (component) {
      component.dispose();
    }
  });

  it('should render the default markup', () => {
    component = new ClayAutocomplete();

    expect(component).toMatchSnapshot();
  });

  it('should render a ClayAutocomplete with classes', () => {
    component = new ClayAutocomplete({
      elementClasses: 'my-custom-class',
    });

    expect(component).toMatchSnapshot();
  });

  it('should render a ClayAutocomplete with id', () => {
    component = new ClayAutocomplete({
      id: 'myId',
    });

    expect(component).toMatchSnapshot();
  });

});
