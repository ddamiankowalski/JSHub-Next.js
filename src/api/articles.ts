const getArticles = async (): Promise<any> => {
  return fetch('http://localhost:4200/api/article/all', {
    cache: 'no-cache',
  }).then((res) => res.json());
};

const getArticle = async (id: string): Promise<any> => {
  return fetch('http://localhost:4200/api/article/' + id, {
    cache: 'no-cache',
  }).then((res) => res.json());
};

export { getArticles, getArticle };
