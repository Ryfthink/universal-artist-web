export class Util {
  static checkSupportWebp(): boolean {
    try {
      return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    } catch (err) {
      return false;
    }
  }

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
}
