import ClayBadge from '../ClayBadge';

let badge;

describe('ClayBadge', function() {
  afterEach(() => {
    if (badge) {
      badge.dispose();
    }
  });

  it('should generate the default markup', () => {
    badge = new ClayBadge({
      label: 'Foo',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a badge with label', () => {
    badge = new ClayBadge({
      label: 'Bar',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a badge with id', () => {
    badge = new ClayBadge({
      label: 'Foo',
      id: 'myBadge',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `default color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `primary color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'primary',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `secondary color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'secondary',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `success color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'success',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `info color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'info',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `warning color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'warning',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `danger color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'danger',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `light color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'light',
    });

    expect(badge).toMatchSnapshot();
  });

  it('should render a `dark color` badge', () => {
    badge = new ClayBadge({
      label: 'Foo',
      style: 'dark',
    });

    expect(badge).toMatchSnapshot();
  });
});
