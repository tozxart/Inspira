export interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  pinned?: boolean;
  showTitle?: boolean;
  layout?: {
    horizontal?: boolean;
    vertical?: boolean;
    grid?: boolean;
    banner?: boolean;
  };
}
