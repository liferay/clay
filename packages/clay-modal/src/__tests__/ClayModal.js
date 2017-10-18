import dom from 'metal-dom';
import ClayModal from '../ClayModal';

let clayModal;
let body = '<h4>Hello world!</h4>';
let iframe = '<iframe title="Clay" src=""></iframe>';
let spritemap = 'icons.svg';

describe('ClayModal', function() {
  afterEach(() => {
    if (clayModal) {
      clayModal.dispose();
    }
  });

  it('should generate the default markup', () => {
    clayModal = new ClayModal();

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal complete', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with header and body', () => {
    clayModal = new ClayModal({
      body: body,
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with body and footer', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with status `info`', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      status: 'info',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with status `danger`', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      status: 'danger',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with status `success`', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      status: 'success',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with status `warning`', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      status: 'warning',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a small modal', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      size: 'sm',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a large modal', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      size: 'lg',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a full-screen modal', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      size: 'full-screen',
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal with iframe', () => {
    clayModal = new ClayModal({
      body: iframe,
      iframe: true,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  // eslint-disable-next-line
  it('should render a modal with buttons in position right and left in footer', () => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
        {
          label: 'All',
        },
        {
          label: 'All',
          style: 'secondary',
        },
      ],
      spritemap: spritemap,
      title: 'My title',
    });

    expect(clayModal).toMatchSnapshot();
  });

  it('should render a modal open', done => {
    clayModal = new ClayModal({
      body: body,
      footer: [
        {
          label: 'Cancel',
          type: 'close',
        },
        {
          label: 'Save',
          type: 'save',
        },
      ],
      spritemap: spritemap,
      title: 'My title',
    });

    clayModal.show();

    setTimeout(() => {
      expect(dom.hasClass(document.body, 'modal-open')).toBeTruthy();
      expect(clayModal._isTransitioning).toBeTruthy();
      expect(clayModal.visible).toBeTruthy();
      setTimeout(() => {
        expect(clayModal).toMatchSnapshot();
        done();
      }, 100);
    }, 10);
  });

  it('should close modal when press the escape key', done => {
    clayModal = new ClayModal({});

    clayModal.show();
    dom.triggerEvent(document, 'keyup');

    setTimeout(() => {
      expect(clayModal.visible).toBeTruthy();
      expect(clayModal._isTransitioning).toBeTruthy();

      dom.triggerEvent(document, 'keyup', {
        keyCode: 27,
      });

      setTimeout(() => {
        expect(clayModal.visible).toBeFalsy();
        expect(clayModal._isTransitioning).toBeFalsy();
        done();
      }, 100);
    }, 10);
  });

  it('should close on clicking close icon', done => {
    clayModal = new ClayModal({
      spritemap: spritemap,
      title: 'My title',
    });

    clayModal.show();

    setTimeout(() => {
      expect(clayModal.visible).toBeTruthy();
      expect(clayModal._isTransitioning).toBeTruthy();

      dom.triggerEvent(clayModal.element.querySelector('.close'), 'click');

      setTimeout(() => {
        expect(clayModal.visible).toBeFalsy();
        expect(clayModal._isTransitioning).toBeFalsy();
        done();
      }, 100);
    }, 10);
  });
});
