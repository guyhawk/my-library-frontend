export interface Book {
  _id: string;
  serial: string;
  author: string;
  title: string;
  city?: string;
  year?: number;
  publisher?: string;
  category?: string;
  storage?: string; 
  type?: string;
};
