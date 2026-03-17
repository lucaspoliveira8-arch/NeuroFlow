// Type definitions for NeuroFlow

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};

type Session = {
    id: string;
    userId: string;
    startTime: string;
    endTime: string;
    activities: Activity[];
};

type Activity = {
    id: string;
    type: string;
    timestamp: string;
    duration: number;
};

type NeuroFlowData = {
    user: User;
    sessions: Session[];
};

export type { User, Session, Activity, NeuroFlowData };