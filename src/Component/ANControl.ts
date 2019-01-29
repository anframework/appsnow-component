import { ANFI } from '../Interface/ANFI'
import { ANUIComponent } from './ANUIComponent'

export abstract class ANControl extends ANUIComponent {
    protected anfi: ANFI
    public RootElement: HTMLElement

    abstract InitializeControl(): HTMLElement;
    abstract Render(properties: Array<string>): void;

    public Initialize(anfi: ANFI): void {
        this.anfi = anfi;
        this.RootElement = this.InitializeControl();
    }
}