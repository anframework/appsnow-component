import { ANCell } from "./ANCell"
import * as AN from '../Attribute/Attribute'

export class ANDynamicCell extends ANCell {
    @AN.ANProp('Margin', 'number', null)
    public margin: string = '0 0 0 0';

    @AN.ANProp('Padding', 'string', null)
    public padding: string = '0 0 0 0';
    
    @AN.ANProp('Border', 'string', null)
    public border: string = 'gray';

    @AN.ANProp('Width', 'string', null)
    public w: string = null;

    @AN.ANProp('Height', 'string', null)
    public h: string = null;

    @AN.ANProp('Minimum Width', 'String', null)
    public minWidth: string = null;

    @AN.ANProp('Minimum Height', 'String', null)
    public minHeight: string = null;

    public RootElement: HTMLElement;

    public Initialize(): HTMLElement {
        this.RootElement = document.createElement('div');
        this.RootElement.style.position = 'relative';
        this.RootElement.style.margin = this.margin;
        this.RootElement.style.border = this.border;
        this.RootElement.style.padding = this.padding;
        this.RootElement.style.width = this.w;
        this.RootElement.style.height = this.h;
        this.RootElement.style.minWidth = this.minWidth;
        this.RootElement.style.minHeight = this.minHeight;
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        if("Margin" in properties) this.RootElement.style.margin = this.margin;
        if("Border" in properties) this.RootElement.style.border = this.border;
        if("Padding" in properties) this.RootElement.style.padding = this.padding;
        if('Width' in properties) this.RootElement.style.width = this.w;
        if('Height' in properties) this.RootElement.style.height = this.h;
    }

    public GetRootElement() {
        return this.RootElement;
    }

    public SetDragEnterAction(action: (cell: ANCell) => void) {
        this.RootElement.ondragenter = (ev) => { ev.cancelBubble = true; action(this); };
    }
}