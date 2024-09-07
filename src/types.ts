

// types.ts
export interface User {
  id : number;
  name: string;
  slug: string;
}

export interface Comment {
  id: number;
  content: string;
  created_at: string;
  created_at_readable: string;
  user: {
    id: number;
    name: string;
  };
}

export interface props {
  isPostOwner: {
    type: Boolean,
    required: true
  },
  commentId: {
    type: Number,
    required: true
  },
  commentSlug: {
    type: String,
    required: true
  }
}


export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  created_at: string;
  created_at_readable: string;
  updated_at: string;
  updated_at_readable: string;
  image?: string;
  image_thumb: string;
  user: {
    id: number;
    name: string;
  };
  comments: Comment[];
  last_comment:null ;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  pages?: number[];
}
export interface PostsResponse {
  posts: Post[];
  pagination: Pagination;
}

export interface UploadResponse {
  message: string;
}
  
export interface FileInputEvent extends Event {
  target: HTMLInputElement;
}
export interface FormDataPost {
  title: string;
  content: string;
  file?: File;
}
export interface ApiResponse<T> {
  data: T;
  // Add other fields if needed
}