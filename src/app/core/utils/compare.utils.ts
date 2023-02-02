export function compareWith(firstObject: any, secondObject: any): boolean {
  return firstObject && secondObject && firstObject.id === secondObject.id;
}
