import { window, document } from 'browser-monads';
import ClayTooltip from 'clay-tooltip';
import Clipboard from 'metal-clipboard';

class CodeClipboard {
    constructor() {
        const selector = '.code-container .btn-copy';

        if (!window.clayClipboardTooltip) {
            window.clayClipboardTooltip = ClayTooltip.init();
        }

        if (!window.clayClipboard) {
            window.clayClipboard = new Clipboard({
                selector: selector,
                text: delegateTarget => {
                    delegateTarget.setAttribute('title', 'Copied');

                    setTimeout(() => {
                        delegateTarget.setAttribute('title', 'Copy');
                    }, 2000);

                    return delegateTarget.parentNode.querySelector('pre code').innerText;
                }
            })
        }
    }
}

export default CodeClipboard;