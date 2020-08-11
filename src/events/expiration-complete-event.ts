import { Subjects } from './subjects';

export interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete;
    data: {
        stories: Array<number>,
    }
}