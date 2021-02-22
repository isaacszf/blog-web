import remark from 'remark';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (markdown: string) => {
  const data = await remark().use(remarkHtml).process(markdown);

  return String(data.contents);
};
