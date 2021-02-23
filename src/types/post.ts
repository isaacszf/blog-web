export type PhotoProps = {
  id: number;
  formats: {
    small: {
      url: string;
      hash: string;
    }
    thumbnail: {
      url: string;
      hash: string;
    }
  }
}

export type PostAuthorProps = {
  id: number;
  name: string;
  photo: PhotoProps;
  description: string;
  created_at: string;
  updated_at: string;
};

export type PostCategoryProps = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type PostCoverProps = {
  id: number;
  formats: {
    large: {
      url: string;
    }
    small: {
      url: string;
    }
    thumbnail: {
      url: string;
    }
  }
};

export type PostData = {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: PostAuthorProps;
  category: PostCategoryProps;
  cover: PostCoverProps;
  updated_at: string;
  created_at: string;
};
