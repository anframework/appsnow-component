import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class RowCell extends ANDynamicCell {
    @AN.ANProp('Width', 'string', null)
    public w: string = '100%';

    @AN.ANProp('Height', 'string', null)
    public h: string = '300px';

    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.width = this.w;
        this.RootElement.style.height = this.h;
        return this.RootElement;
    }

    public Render(properties: string[]): void {
        super.Render(properties);
        if('Width' in properties) this.RootElement.style.width = this.w;
        if('Height' in properties) this.RootElement.style.height = this.h;
    }
}

export class Row extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'Color', null)
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.backgroundColor = this.color;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: RowCell };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}