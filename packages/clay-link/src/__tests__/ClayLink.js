import ClayLink from '../ClayLink';

let link;

describe('ClayLink', function() {
  afterEach(() => {
    if (link) {
      link.dispose();
    }
  });

  it('should generate the default markup', () => {
    link = new ClayLink();

    expect(link).toMatchSnapshot();
  });

  it('should render a link with a label', () => {
    link = new ClayLink({
      label: 'My Link',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with aria label', () => {
    link = new ClayLink({
      ariaLabel: 'My Link',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with href', () => {
    link = new ClayLink({
      href: 'http://www.liferay.com',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with id', () => {
    link = new ClayLink({
      id: 'myLink',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with custom classes', () => {
    link = new ClayLink({
      elementClasses: 'my-custom-class',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with target', () => {
    link = new ClayLink({
      target: '_blank',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a downloadable link', () => {
    link = new ClayLink({
      download: 'downloadLink',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with icon', () => {
    link = new ClayLink({
      icon: {
        spritemap: 'icons.svg',
        symbol: 'plus',
      },
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with icon and label', () => {
    link = new ClayLink({
      icon: {
        spritemap: 'icons.svg',
        symbol: 'plus',
      },
      label: 'My Link',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with label and icon', () => {
    link = new ClayLink({
      icon: {
        alignment: 'right',
        spritemap: 'icons.svg',
        symbol: 'plus',
      },
      label: 'My Link',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with secondary style', () => {
    link = new ClayLink({
      style: 'secondary',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with button primary style', () => {
    link = new ClayLink({
      buttonStyle: 'primary',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with button secondary style', () => {
    link = new ClayLink({
      buttonStyle: 'secondary',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with button borderless style', () => {
    link = new ClayLink({
      buttonStyle: 'borderless',
    });

    expect(link).toMatchSnapshot();
  });

  it('should render a link with button link style', () => {
    link = new ClayLink({
      buttonStyle: 'link',
    });

    expect(link).toMatchSnapshot();
  });
});
