export function imagePath(image: string): string {
  return `${useRuntimeConfig().app.baseURL}/images/${image}`;
}