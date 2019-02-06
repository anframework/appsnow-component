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
    @AN.ANProp('BackgroundColor', 'Color', null)
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.display = 'flex';
        rootElement.style.flexDirection = 'column';
        rootElement.style.width = '100%';
        rootElement.style.height = '100%';
        rootElement.style.backgroundColor = this.color;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: ANDynamicCell };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}