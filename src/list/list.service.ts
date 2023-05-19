import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  get() {
    return [
      { name: 'tao', age: 18 },
      { name: 'zs', age: 19 },
      { name: 'ls', age: 20 },
    ];
  }
}
