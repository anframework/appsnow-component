import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class RowCell extends ANDynamicCell {
    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.minWidth = '100%';
        this.RootElement.style.minHeight = '20px';
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        super.Render(properties);
    }
}

export class Row extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'Color', null)
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.display = 'flex';
        rootElement.style.flexDirection = 'column';
        rootElement.style.minHeight = '20px';
        rootElement.style.backgroundColor = this.color;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: RowCell };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}