export interface ProjectImage {
  url: string;
  displaySeparately?: boolean;
  title?: string;
  category?: string;
}

export interface Project {
  id: number | string;
  title: string;
  category: string;
  pinned?: boolean;
  showTitle?: boolean;
  layout?: {
    grid?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
    banner?: boolean;
    masonry?: boolean;
  };
  images: {
    url: string;
    displaySeparately?: boolean;
    title?: string;
  }[];
}
