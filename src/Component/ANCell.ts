import { ANUIComponent } from "./ANUIComponent"
import * as AN from '../Attribute/Attribute'

export abstract class ANCell extends ANUIComponent {
    abstract Initialize(): HTMLElement;
    abstract Render(properties: string[]): void;
}