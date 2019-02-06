import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class ColumnCell extends ANDynamicCell {
    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.display = 'inline-block';
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        super.Render(properties);
        
    }
}

export class Column extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'string', null)
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.minHeight = '20px';
        rootElement.style.backgroundColor = this.color;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: ColumnCell };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}