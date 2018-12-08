import { ANControl } from '../Component/Control';
import * as AN from '../Attribute/Attribute';
import { MDCRipple } from '@material/ripple';
import '@material/button/mdc-button.scss';

export class TestButton2 extends ANControl {
    @AN.ANProp('Caption')
    public caption: string = 'Button';

    @AN.ANProp('BackgroundColor')
    public color: string = 'gray';

    @AN.ANEvent('OnClick')
    public OnClick: (body: object) => void;

    @AN.ANEvent('OnRed')
    public OnRed: (body: object) => void;

    private rootElement: HTMLElement;
    private captionElement: HTMLElement;

    public Initialize(): HTMLElement {
        this.rootElement = document.createElement('button');
        this.rootElement.className = 'mdc-button';
        this.rootElement.style.backgroundColor = this.color;
        this.rootElement.style.display = 'table';
        this.rootElement.onclick = (ev) => { this.OnClick(ev); };
        new MDCRipple(this.rootElement);

        this.captionElement = document.createElement('div');
        this.captionElement.textContent = this.caption;
        this.captionElement.style.verticalAlign = 'middle';
        this.rootElement.appendChild(this.captionElement);

        return this.rootElement;
    }

    public Finalize(): void {
    }

    public Render(properties: Array<string>): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'Caption':
                    this.captionElement.textContent = this.caption;
                    break;
                case 'BackgroundColor':
                    this.rootElement.style.backgroundColor = this.color;
                    if(this.color == 'red')
                        this.OnRed(null);
                    break;
            }
        }
    }
}