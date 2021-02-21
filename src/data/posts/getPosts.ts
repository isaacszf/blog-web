import { PostData } from '../../types/post';
import { fetchJson } from '../../utils/fetchJson';

export const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>('https://personal-home-blog-api.herokuapp.com/posts');

  return posts;
};
