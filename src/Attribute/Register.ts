import 'reflect-metadata'

export function ANProp(name: string, type: string, typeParam: object) {
    return function (target, propertyKey: string) {
        Reflect.defineMetadata(propertyKey, { name: name, type: type, typeParam: typeParam }, target, 'ANPROP');
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