import { Member } from './member.js';

export class BusinessMember2 extends Member {
    // 引数にclazzを追加
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }

    // 役職込みの名前を返すように
    getName() {
        return super.getName() + '/役職：' + this.clazz;
    }
}
