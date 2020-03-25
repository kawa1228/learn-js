// hello
import { sayHi } from './modules/sayHi.js';
sayHi('John'); // Hello, John!

// class
import { Member } from './modules/member.js';
const m = new Member('太郎', '山田');
console.log(m.getName()); // 山田 太郎

// static
import { Area } from './modules/class_static.js';
console.log(Area.getTriangle(10, 5)); // 25

// extend
import { BusinessMember } from './modules/class_extends.js';
const bm = new BusinessMember('太郎', '山田');
console.log(bm.work()); // 山田太郎は働いてます

// super
import { BusinessMember2 } from './modules/class_super.js';
const bm2 = new BusinessMember2('太郎', '山田', '課長');
console.log(bm2.getName()); // 山田太郎/役職：課長

// all import
import * as util from './ constants/Name.js';
console.log(util.firstName); // 太郎
console.log(util.lastName); // 山田

import { firstName as namae, lastName as myoji } from './ constants/Name.js';
console.log(namae); // 太郎
console.log(myoji); // 山田
