import { Subjects } from './subjects';

export interface StoryCreatedEvent {
    subject: Subjects.StoryCreated;
    data: {
        storyId: number,
        title: string,
        url: string,
        createdAt: number,
        user: string,
        comments: Array<number>
    };
}
