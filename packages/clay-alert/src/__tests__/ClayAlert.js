import ClayAlert from '../ClayAlert';

let alert;

const spritemap = '../node_modules/lexicon-ux/build/images/icons/icons.svg';

describe('ClayAlert', function() {
  afterEach(() => {
    if (alert) {
      alert.dispose();
    }
  });

  it('should render default markup', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      title: 'info',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a notification alert', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      title: 'info',
      type: 'notification',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a fluid alert', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      title: 'info',
      type: 'fluid',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render an alert style "info"', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      title: 'info',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render an alert style "danger"', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      style: 'danger',
      title: 'danger',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render an alert style "warning"', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      style: 'warning',
      title: 'warning',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render an alert style "success"', function() {
    alert = new ClayAlert({
      message: 'message',
      spritemap: spritemap,
      style: 'success',
      title: 'success',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a closeable alert', function() {
    alert = new ClayAlert({
      closeable: true,
      message: 'message',
      spritemap: spritemap,
      title: 'success',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should close an alert', function() {
    alert = new ClayAlert({
      closeable: true,
      message: 'message',
      spritemap: spritemap,
      title: 'success',
    });

    alert.element.querySelector('button').click();

    expect(alert._visible).toBeFalsy();
  });

  it('should close and destroy alert', function() {
    alert = new ClayAlert({
      closeable: true,
      destroyOnHide: true,
      message: 'message',
      spritemap: spritemap,
      title: 'success',
    });

    alert.element.querySelector('button').click();

    expect(alert.disposed_).toBeTruthy();
  });

  it('should fail when no title is passed', function() {
    expect(() => {
      alert = new ClayAlert({
        message: 'message',
        spritemap: spritemap,
      });
    }).toThrow();
  });

  it('should fail when no message is passed', function() {
    expect(() => {
      alert = new ClayAlert({
        spritemap: spritemap,
        title: 'title',
      });
    }).toThrow();
  });

  it('should fail when no spritemap is passed', function() {
    expect(() => {
      alert = new ClayAlert({
        message: 'message',
        title: 'title',
      });
    }).toThrow();
  });
});
