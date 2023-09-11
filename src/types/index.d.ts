// tps allow typescript to accept 'config' property on stardard object 'windows'
export {};

declare global {
  interface Window {
    config: any;
  }
}
