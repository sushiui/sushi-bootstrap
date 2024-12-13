type Falsy = false | undefined | null | 0;

function removeDuplicates(arr: (string | Falsy)[]): (string | false | 0 | null | undefined)[] {
    return Array.from(new Set(arr));
}

function classNames(...classes: (string | Falsy)[]): string {
    const uniqueClasses = removeDuplicates(classes.filter(Boolean) as string[]);
    return uniqueClasses.join(' ');
}

function variationName(name: string, value: string): string {
    return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export default {
    classNames,
    variationName
}
