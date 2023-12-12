import { En, Es } from "../data/translation";

export const translation = (key: string, lang: string) => {
  return _get(lang === "en" ? En : Es, key);
};

export const _get = (baseObject: any, key: string, fallback?: any) => {
  function fn() {
    try {
      // tslint:disable-next-line:no-eval
      const value = eval(`this.${key}`.replace(".[", "["));
      return typeof value !== "undefined" ? value : fallback;
    } catch (e) {
      return fallback;
    }
  }
  return fn.apply(baseObject, []);
};
