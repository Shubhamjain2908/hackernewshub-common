import { Subjects } from './subjects';

export interface StoryCreatedEvent {
    subject: Subjects.StoryCreated;
    data: {
        id: string,
        title: string,
        url: string,
        createdAt: string | Date,
        user: string,
        comments: Array<number>
    };
}
