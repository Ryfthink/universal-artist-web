export class Util {
  static checkSupportWebp(): boolean {
    try {
      return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    } catch (err) {
      return false;
    }
  }
}
