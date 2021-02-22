import { PostData } from '../../types/post';
import { fetchJson } from '../../utils/fetchJson';

import { markdownToHtml } from '../../utils/markdownToHtml';

type SlugType = string | string[] | undefined;

export const getPost = async (slug: SlugType): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `https://personal-home-blog-api.herokuapp.com/posts/?slug=${slugString}`;
  const posts = await fetchJson<PostData[]>(url);

  const content = await markdownToHtml(posts[0].content);
  const htmlContent = { ...posts[0], content }

  return [htmlContent];
};
