import { ANCell } from "./ANCell"
import * as AN from '../Attribute/Attribute'

export class ANStaticCell extends ANCell {
    public RootElement: HTMLElement;

    public Initialize(): HTMLElement {
        this.RootElement = document.createElement('div');
        this.RootElement.style.position = 'relative';
        this.RootElement.style.width = '100%';
        this.RootElement.style.height = '100%';
        return this.RootElement;
    }

    Render(properties: string[]): void { }
}