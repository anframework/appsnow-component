import { ANStaticPanel } from "../Component/ANStaticPanel"
import { ANDynamicCell } from "../Component/ANDynamicCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

export class SimpleCard extends ANStaticPanel {
    
    @AN.ANProp('BackgroundColor')
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement; ContainerList: Array<{ ContainerElement: HTMLElement, CellConstructor: new () => ANCell }> } {
        var rootElement = document.createElement('div');
        rootElement.style.backgroundColor = this.color;
        rootElement.style.position = 'relative';
        rootElement.style.width = 'calc(100% - 2px)';
        rootElement.style.flexDirection = 'column';

        var div1 = document.createElement('div');
        div1.style.display = 'flex';
        div1.style.width = '100%';
        div1.style.height = '60%';
        div1.style.border = '1px solid #212121';
        rootElement.appendChild(div1);

        var div2 = document.createElement('div');
        div2.style.width = '100%';
        div2.style.height = '5%';
        div2.style.border = '1px solid #212121';
        div2.style.backgroundColor = 'black';
        div2.style.borderTop = '';
        rootElement.appendChild(div2);

        var div3 = document.createElement('div');
        div3.style.width = '100%';
        div3.style.height = 'calc(35% - 4px)';
        div3.style.border = '1px solid #212121';
        div3.style.borderTop = '';
        rootElement.appendChild(div3);

        var leftTopElement = document.createElement('div');
        leftTopElement.style.display = 'inline-block';
        leftTopElement.style.width = '50%';
        leftTopElement.style.height = '100%';
        div1.appendChild(leftTopElement);
        
        var rightTopElement = document.createElement('div');
        rightTopElement.style.display = 'inline-block';
        rightTopElement.style.width = 'calc(50% - 1px)';
        rightTopElement.style.height = '100%';
        rightTopElement.style.borderLeft = '1px solid #212121';
        div1.appendChild(rightTopElement);

        var bottomTopElement = document.createElement('div');
        bottomTopElement.style.width = '100%';
        bottomTopElement.style.height = '100%';
        div3.appendChild(bottomTopElement);

        return { RootElement: rootElement, ContainerList: [
            { ContainerElement: leftTopElement, CellConstructor: ANDynamicCell },
            { ContainerElement: rightTopElement, CellConstructor: ANDynamicCell },
            { ContainerElement: bottomTopElement, CellConstructor: ANDynamicCell } ] };
    }

    Render(properties: Array<string>): void {
        if('BackgroundColor' in properties)
            this.RootElement.style.borderColor = this.color;
    }
}