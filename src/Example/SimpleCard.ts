import { ANStaticPanel } from "../Component/ANStaticPanel"
import { ANStaticCell } from "../Component/ANStaticCell"
import { ANCell } from "../Component/ANCell"
import * as AN from '../Attribute/Attribute'

export class SimpleCard extends ANStaticPanel {
    @AN.ANProp('BackgroundColor', 'ComboBox', [ "1", "2", "3" ])
    public color: string = 'white';

    InitializePanel(): { RootElement: HTMLElement; ContainerList: Array<{ ContainerElement: HTMLElement, CellConstructor: new () => ANCell }> } {
        var rootElement = document.createElement('div');
        rootElement.style.backgroundColor = this.color;
        rootElement.style.minWidth = '200px';
        rootElement.style.flexDirection = 'column';

        var div1 = document.createElement('div');
        div1.style.display = 'flex';
        div1.style.border = '1px solid #212121';
        div1.style.minHeight = '120px';
        rootElement.appendChild(div1);

        var div2 = document.createElement('div');
        div2.style.border = '1px solid #212121';
        div2.style.backgroundColor = 'black';
        div2.style.borderTop = '';
        div2.style.minHeight = '10px';
        rootElement.appendChild(div2);

        var div3 = document.createElement('div');
        div3.style.border = '1px solid #212121';
        div3.style.borderTop = '';
        div3.style.minHeight = '30px';
        rootElement.appendChild(div3);

        var leftTopElement = document.createElement('div');
        leftTopElement.style.width = '50%';
        leftTopElement.style.height = '100%';
        div1.appendChild(leftTopElement);
        
        var rightTopElement = document.createElement('div');
        rightTopElement.style.width = 'calc(50% - 1px)';
        rightTopElement.style.height = '100%';
        rightTopElement.style.borderLeft = '1px solid #212121';
        div1.appendChild(rightTopElement);

        var bottomTopElement = document.createElement('div');
        bottomTopElement.style.width = '100%';
        bottomTopElement.style.height = '100%';
        div3.appendChild(bottomTopElement);

        return { RootElement: rootElement, ContainerList: [
            { ContainerElement: leftTopElement, CellConstructor: ANStaticCell },
            { ContainerElement: rightTopElement, CellConstructor: ANStaticCell },
            { ContainerElement: bottomTopElement, CellConstructor: ANStaticCell } ] };
    }

    Render(properties: Array<string>): void {
        for(var i = 0, len = properties.length; i < len; i++) {
            switch(properties[i]) {
                case 'BackgroundColor':
                    this.RootElement.style.borderColor = this.color;
                    break;
            }
        }
    }
}