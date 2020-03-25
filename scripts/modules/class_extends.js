import { Member } from './member.js';

export class BusinessMember extends Member {
    work() {
        return this.getName() + 'は働いてます';
    }
}
