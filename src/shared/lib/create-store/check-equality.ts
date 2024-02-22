export const checkEquality = <GItem>(a: GItem, b: GItem): boolean => JSON.stringify(a) === JSON.stringify(b);
