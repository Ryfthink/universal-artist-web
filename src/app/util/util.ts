export class Util {
  static getMailtoUrl(to, subject, body) {
    const args = [];
    if (typeof subject !== 'undefined') {
      args.push('subject=' + encodeURIComponent(subject));
    }
    if (typeof body !== 'undefined') {
      args.push('body=' + encodeURIComponent(body));
    }

    let url = 'mailto:' + encodeURIComponent(to);
    if (args.length > 0) {
      url += '?' + args.join('&');
    }
    return url;
  }

  static async WebpIsSupported() {
    // If the browser doesn't has the method createImageBitmap, you can't display webp format
    if (!self.createImageBitmap) { return false; }

    // Base64 representation of a white point image
    const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    // Retrieve the Image in Blob Format
    const blob = await fetch(webpData).then(r => r.blob());

    // If the createImageBitmap method succeeds, return true, otherwise false
    return createImageBitmap(blob).then(() => true, () => false);
  }
}
