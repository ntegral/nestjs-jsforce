import { Inject } from '@nestjs/common';
import { JSFORCE_TOKEN } from './jsforce.contants';

export function InjectJsForce() {
    return Inject(JSFORCE_TOKEN);
}