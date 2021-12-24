import type { IncomingMessage, ServerResponse } from 'http';

interface Question {
  id: number;
  title: string;
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  return await $fetch<Question[]>('http://localhost:3000/questions');
};
