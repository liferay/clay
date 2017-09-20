import ClayAlert from '../ClayAlert';

let alert;

describe('ClayAlert', function() {
  afterEach(() => {
    if (alert) {
      alert.dispose();
    }
  });

  it('should render a alert style "info"', function() {
    alert = new ClayAlert({
      message: 'message',
      title: 'info',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a alert style "danger"', function() {
    alert = new ClayAlert({
      message: 'message',
      style: 'danger',
      title: 'danger',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a alert style "warning"', function() {
    alert = new ClayAlert({
      message: 'message',
      style: 'warning',
      title: 'warning',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should render a alert style "success"', function() {
    alert = new ClayAlert({
      message: 'message',
      style: 'success',
      title: 'success',
    });

    expect(alert).toMatchSnapshot();
  });

  it('should fail when no title is passed', function() {
    expect(() => {
      alert = new ClayAlert({
        message: 'message',
      });
    }).toThrow();
  });

  it('should fail when no message is passed', function() {
    expect(() => {
      alert = new ClayAlert({
        title: 'title',
      });
    }).toThrow();
  });
});
