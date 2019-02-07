import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

export class Column extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'string', null)
    public color: string = null;

    @AN.ANProp('VerticalAlign', 'string', ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])
    public verticalAlign: string = 'center';

    @AN.ANProp('HorizontalAlign', 'string', ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'])
    public horizontalAlign: string = 'center';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.display = 'flex';
        rootElement.style.flexWrap = 'wrap';
        rootElement.style.minHeight = '20px';
        rootElement.style.backgroundColor = this.color;
        rootElement.style.webkitAlignContent = this.verticalAlign;
        rootElement.style.webkitJustifyContent = this.horizontalAlign;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: ANDynamicCell };
    }

    Render(properties: Array<string>): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'BackgroundColor':
                    this.RootElement.style.borderColor = this.verticalAlign;
                    break;
                case 'VerticalAlign':
                    this.RootElement.style.webkitAlignItems = this.verticalAlign;
                    break;
                case 'HorizontalAlign':
                    this.RootElement.style.webkitJustifyContent = this.horizontalAlign;
                    break;
            }
        }
    }
}