import { ANUIComponent } from "./ANUIComponent"
import { ANCell } from './ANCell'
import { ANFI } from "../Interface/ANFI"
import * as AN from '../Attribute/Attribute'

export abstract class ANDynamicPanel extends ANUIComponent {
    protected anfi: ANFI;
    public RootElement: HTMLElement;
    public ContainerElement: HTMLElement;
    public CellConstructor: new () => ANCell;

    abstract InitializePanel(): { RootElement: HTMLElement, ContainerElement: HTMLElement, CellConstructor: new () => ANCell } ;
    abstract Render(properties: Array<string>): void;

    public Initialize(anfi: ANFI): void{
        this.anfi = anfi;
        var ret = this.InitializePanel();
        this.RootElement = ret.RootElement;
        this.ContainerElement = ret.ContainerElement;
        this.CellConstructor = ret.CellConstructor;
    }
}