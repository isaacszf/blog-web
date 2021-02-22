import { PostData } from '../../types/post';
import { fetchJson } from '../../utils/fetchJson';

export const getPosts = async (query = ''): Promise<PostData[]> => {
  const url = `https://personal-home-blog-api.herokuapp.com/posts?&${query}`;
  const posts = await fetchJson<PostData[]>(url);

  return posts;
};
