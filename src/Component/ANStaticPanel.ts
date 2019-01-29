import { ANUIComponent } from "./ANUIComponent"
import { ANCell } from './ANCell'
import { ANFI } from "../Interface/ANFI"
import * as AN from '../Attribute/Attribute'

export abstract class ANStaticPanel extends ANUIComponent {
    protected anfi: ANFI;
    public RootElement: HTMLElement;
    public ContainerList: Array<{ ContainerElement: HTMLElement, CellConstructor: new () => ANCell }>;
    
    abstract InitializePanel(): { RootElement: HTMLElement, ContainerList: Array<{ ContainerElement: HTMLElement, CellConstructor: new () => ANCell }> };
    abstract Render(properties: Array<string>): void;

    public Initialize(anfi: ANFI): void {
        this.anfi = anfi;
        var ret = this.InitializePanel();
        this.RootElement = ret.RootElement;
        this.ContainerList = ret.ContainerList
    }
}