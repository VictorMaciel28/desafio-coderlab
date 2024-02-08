export interface Category {
    id: string;
    parent: Category | null;
    chield: Category[];
    name: string;
  }