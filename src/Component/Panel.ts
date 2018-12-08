import { ANComponent } from "./Component";

export abstract class ANPanel extends ANComponent {
    public data: { x: number, y: number,  };

    public Render(properties: object) {
    }

    // private x: number;
    // @AN.ANPropDouble("x")
    // public X(x: number): void {
    //     this.x = x;
    //     console.log("prop x assigned");
    // }

    // private y: number;
    // @AN.ANPropDouble("y")
    // public Y(y: number): void {
    //     this.y = y;
    //     console.log("prop y assigned");
    // }

    // private width: number;
    // @AN.ANPropDouble("width")
    // public Width(width: number): void {
    //     this.width = width;
    //     console.log("prop width assigned");
    // }

    // private height: number;
    // @AN.ANPropDouble("height")
    // public Height(height: number): void {
    //     this.height = height;
    //     console.log("prop height assigned");
    // }

    // @AN.ANEvent("OnPropertyChange")
    // public OnPropertyChange(e: any): void { }
}