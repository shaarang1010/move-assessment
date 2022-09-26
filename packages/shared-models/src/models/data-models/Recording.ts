import { v4 as uuidv4 } from 'uuid';

export type Recording = {
  _id: typeof uuidv4;
  metadata: string;
  timestamp: Date;
  url: string;
};

export type VideoData = {
  name: string;
  tags: string[];
};
