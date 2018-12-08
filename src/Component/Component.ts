import * as AN from '../../dist/ANInterface';

export abstract class ANComponent {
    abstract Initialize(): HTMLElement;
    abstract Finalize(): void;
}