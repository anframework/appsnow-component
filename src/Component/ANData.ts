import { ANFI } from '../Interface/ANFI'

export abstract class ANData {
    protected anfi: ANFI

    abstract InitializeData(): void;

    public Initialize(anfi: ANFI): void {
        this.anfi = anfi;
        this.InitializeData();
    }
}