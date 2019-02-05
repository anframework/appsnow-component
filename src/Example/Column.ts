import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class ColumnCell extends ANDynamicCell {
    @AN.ANProp('Width', 'string', null)
    public w: string = '300px';

    @AN.ANProp('Height', 'string', null)
    public h: string = '100%';

    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.display = 'inline-block';
        this.RootElement.style.verticalAlign = 'top';
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

export class Column extends ANDynamicPanel {
    @AN.ANProp('BackgroundColor', 'string', null)
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } {
        var rootElement = document.createElement('div');
        rootElement.style.backgroundColor = this.color;
        return { RootElement: rootElement, ContainerElement: rootElement, CellConstructor: ColumnCell };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}