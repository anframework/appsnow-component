import 'reflect-metadata'

export function ANProp(name: string) {
    return function (target, propertyKey: string) {
        Reflect.defineMetadata(propertyKey, { name: name }, target, 'ANPROP');
    }
}

export function ANMethod(name: string) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(propertyKey, { name: name }, target, 'ANMETHOD');
    }
}

export function ANEvent(name: string) {
    return function (target, propertyKey: string) {
        Reflect.defineMetadata(propertyKey, { name: name }, target, 'ANEVENT');
    }
}