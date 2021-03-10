import { v4 as uuid } from 'uuid';

export const generateUUID = () => {
  const uuidGenerate: String = uuid();
  return uuidGenerate;
}