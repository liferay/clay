import ClayRadio from '../ClayRadio';

let clayRadio;

describe('ClayRadio', function() {
  afterEach(() => {
    if (clayRadio) {
      clayRadio.dispose();
    }
  });

  it('should generate default markup', () => {
    clayRadio = new ClayRadio({
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a checked radio', () => {
    clayRadio = new ClayRadio({
      checked: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a disabled radio', () => {
    clayRadio = new ClayRadio({
      disabled: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a radio with hidden label', () => {
    clayRadio = new ClayRadio({
      hideLabel: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate an inline radio', () => {
    clayRadio = new ClayRadio({
      inline: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a radio with custom classes', () => {
    clayRadio = new ClayRadio({
      elementClasses: 'my-custom-class',
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate an inline radio with classes', () => {
    clayRadio = new ClayRadio({
      elementClasses: 'my-custom-class',
      inline: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a radio with custom id', () => {
    clayRadio = new ClayRadio({
      id: 'myRadio',
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate an inline radio with custom id', () => {
    clayRadio = new ClayRadio({
      id: 'myRadio',
      inline: true,
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a radio with name', () => {
    clayRadio = new ClayRadio({
      name: 'myradio',
      label: 'My Radio',
    });

    expect(clayRadio).toMatchSnapshot();
  });

  it('should generate a radio with value', () => {
    clayRadio = new ClayRadio({
      label: 'My Radio',
      value: 'myradio',
    });

    expect(clayRadio).toMatchSnapshot();
  });
});
