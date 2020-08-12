import { Subjects } from './subjects';

export interface StoryCreatedEvent {
    subject: Subjects.StoryCreated;
    data: {
        storyId: Number,
        title: string,
        url: string,
        createdAt: Number,
        user: string,
        comments: Array<number>
    };
}
