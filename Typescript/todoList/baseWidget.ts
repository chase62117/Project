// export class ContorlManager {
//     tag: 
// }

export class BaseWidget {
    tag: keyof HTMLElementTagNameMap;
    option?: Partial<HTMLElement>;

    constructor(tag: keyof HTMLElementTagNameMap, option?: Partial<HTMLElement>){
        this.tag = tag;
        this.option = option;
    }

    createEl(tag: keyof HTMLElementTagNameMap, option?: Partial<HTMLElementTagNameMap>: HTMLElementTagNameMap[] {
        const element = document.createElement(tag);

        return element;
    }
}

export function createEl<T = keyof HTMLElementTagNameMap>(
        tag: T,
        option?: Partial<HTMLElementTagNameMap[T]>
    ): HTMLElementTagNameMap[] 
    {
        const element = document.createElement(tag);

        return element;
}

const a: HTMLElementTagNameMap['button']