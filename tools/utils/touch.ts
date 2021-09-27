import { close, open, utimes } from 'fs';

export const touch = (path: string) =>
  new Promise<void | number>((resolve, reject) => {
    const time = new Date();

    utimes(path, time, time, err => {
      if (err) {
        return open(path, 'w', (err, fd) => {
          if (err) {
            return reject(err);
          }

          close(fd, err => (err ? reject(err) : resolve(fd)));
        })
      }

      resolve();
    })
  });
