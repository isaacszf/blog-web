export const fetchJson = async<T> (url: string): Promise<T> => {
  const responseData = await fetch(url);
  const jsonResponse = await responseData.json();

  return jsonResponse;
};
