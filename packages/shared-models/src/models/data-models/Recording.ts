import { v4 as uuidv4 } from 'uuid';

export type Recording = {
  _recordId: typeof uuidv4;
  metadata: string;
  video: VideoData;
};

export type VideoData = {
  name: string;
  tags: string[];
  timestamp: Date;
  annotation: Annotation;
};

export type Annotation = {
  _id: typeof uuidv4;
  text: string;
};
