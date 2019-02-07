import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class RootCell extends ANDynamicCell {
    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.minWidth = this.minWidth = '100%';
        this.RootElement.style.minHeight = this.minHeight = '20px';
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        super.Render(properties);
    }
}

export class Root extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'string', null)
    public color: string = 'white';

    @AN.ANProp('VerticalAlign', 'string', ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])
    public verticalAlign: string = 'flex-start';

    @AN.ANProp('HorizontalAlign', 'string', ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'])
    public horizontalAlign: string = 'left';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.display = 'flex';
        rootElement.style.flexDirection = 'column';
        rootElement.style.width = '100%';
        rootElement.style.height = '100%';
        rootElement.style.backgroundColor = this.color;
        rootElement.style.webkitAlignContent = this.verticalAlign;
        rootElement.style.webkitJustifyContent = this.horizontalAlign;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: RootCell };
    }

    Render(properties: Array<string>): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'BackgroundColor':
                    this.RootElement.style.backgroundColor = this.color;
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