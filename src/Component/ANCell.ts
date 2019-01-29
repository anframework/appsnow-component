import { ANUIComponent } from "./ANUIComponent"
import * as AN from '../Attribute/Attribute'

export class ANCell extends ANUIComponent {
    @AN.ANProp('Margin')
    public margin: string = '0px 0px 0px 0px';

    @AN.ANProp('BorderWidth')
    public borderWidth: number = 0;

    @AN.ANProp('BorderColor')
    public borderColor: string = 'gray';

    public RootElement: HTMLElement;

    public Initialize(): HTMLElement {
        this.RootElement = document.createElement('div');
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        if("Margin" in properties) {
            this.RootElement.style.margin = this.margin;
        }

        if("BorderWidth" in properties) {
            if(this.borderWidth <= 0) {
                this.RootElement.style.border = 'solid';
                this.RootElement.style.borderWidth = this.borderWidth + 'px';
            }
            else {
                this.RootElement.style.border = 'none';
                this.RootElement.style.borderWidth = '0px';
            }
        }

        if("BorderColor" in properties) {
            this.RootElement.style.borderColor = this.borderColor;
        }
    }

    public GetRootElement() {
        return this.RootElement;
    }

    public SetDragEnterAction(action: (cell: ANCell) => void) {
        this.RootElement.ondragenter = (ev) => { ev.cancelBubble = true; action(this); };
    }
}