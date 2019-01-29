import { ANControl } from '../Component/ANControl'
import * as AN from '../Attribute/Attribute'
import { MDCRipple } from '@material/ripple'
import '@material/button/mdc-button.scss'

export class Button extends ANControl {
    @AN.ANProp('Caption')
    public caption: string = 'Button';

    @AN.ANProp('BackgroundColor')
    public color: string = 'gray';

    @AN.ANEvent('OnClick')
    public OnClick: (body: object) => void;

    @AN.ANEvent('OnRed')
    public OnRed: (body: object) => void;

    private rootElement: HTMLElement;

    public InitializeControl(): HTMLElement {
        this.rootElement = document.createElement('button');
        this.rootElement.className = 'mdc-button';
        this.rootElement.onclick = (ev) => { this.OnClick(ev); };
        new MDCRipple(this.rootElement);
        return this.rootElement;
    }

    public Render(properties: Array<string>): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'Caption':
                    this.rootElement.textContent = this.caption;
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