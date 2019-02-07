import { ANCell } from "./ANCell"
import * as AN from '../Attribute/Attribute'

export class ANDynamicCell extends ANCell {
    @AN.ANProp('Margin', 'number', null)
    public margin: string = '0 0 0 0';

    @AN.ANProp('Border', 'string', null)
    public border: string = 'gray';

    @AN.ANProp('Padding', 'string', null)
    public padding: string = '0 0 0 0';
    
    @AN.ANProp('Width', 'string', null)
    public w: string = null;

    @AN.ANProp('Height', 'string', null)
    public h: string = null;

    @AN.ANProp('Minimum Width', 'String', null)
    public minWidth: string = null;

    @AN.ANProp('Minimum Height', 'String', null)
    public minHeight: string = null;

    @AN.ANProp('Maximum Width', 'String', null)
    public maxWidth: string = null;

    @AN.ANProp('Maximum Height', 'String', null)
    public maxHeight: string = null;

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
        this.RootElement.style.maxWidth = this.maxWidth;
        this.RootElement.style.maxHeight = this.maxHeight;
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'Margin':
                    this.RootElement.style.margin = this.margin;
                    break;
                case 'Border':
                    this.RootElement.style.border = this.border;
                    break;
                case 'Padding':
                    this.RootElement.style.padding = this.padding;
                    break;
                case 'Width':
                    this.RootElement.style.width = this.w;
                    break;
                case 'Height':
                    this.RootElement.style.height = this.h;
                    break;
                case 'Minimum Width':
                    this.RootElement.style.minWidth = this.minWidth;
                    break;
                case 'Minimum Height':
                    this.RootElement.style.minHeight = this.minHeight;
                    break;
                case 'Maximum Width':
                    this.RootElement.style.maxWidth = this.maxWidth;
                    break;
                case 'Maximum Height':
                    this.RootElement.style.maxHeight = this.maxHeight;
                    break;
            }
        }
    }
}