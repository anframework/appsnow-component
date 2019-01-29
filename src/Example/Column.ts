import { ANDynamicPanel } from "../Component/ANDynamicPanel"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

class ColumnCell extends ANCell {
    @AN.ANProp('Width')
    public w: string = '';

    @AN.ANProp('Height')
    public h: string = '';

    public Initialize(): HTMLElement {
        super.Initialize();
        this.RootElement.style.display = 'inline-block';
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
    @AN.ANProp('BackgroundColor')
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