import { Subjects } from './subjects';

export interface StoryCreatedEvent {
    subject: Subjects.StoryCreated;
    data: {
        story: Array<StoryEventModel>
    };
}

export interface StoryEventModel {
    storyId: number,
    title: string,
    url: string,
    score: number,
    createdAt: number,
    user: string,
    comments: Array<number>
}