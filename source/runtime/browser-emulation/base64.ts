const atob = (value: string): string => new Buffer(value, 'base64').toString('binary');

const btoa = (value: string | Buffer): string =>
  value instanceof Buffer
    ? value.toString('base64')
    : new Buffer(value.toString(), 'binary').toString('base64');

export const bindBase64 = (target: () => Window) => [false, {atob, btoa}];