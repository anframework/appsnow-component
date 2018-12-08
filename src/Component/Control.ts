import { ANComponent } from "./Component";

export abstract class ANControl extends ANComponent {
    abstract Render(properties: Array<string>): void;
}