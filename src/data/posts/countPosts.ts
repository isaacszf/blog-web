import { fetchJson } from '../../utils/fetchJson';

export const countPosts = async (query = ''): Promise<string> => {
  const url = `https://personal-home-blog-api.herokuapp.com/posts/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);

  return numberOfPosts;
};
