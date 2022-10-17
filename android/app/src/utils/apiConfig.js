export const api_key = '50f00c2a8f854652a005c100b3f82595';
export const fetchNews = async (country, category) => {
  try {
    let articles = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`,
      {
        headers: {
          'X-API-KEY': api_key,
        },
      },
    );

    let result = await articles.json();
    articles = null;

    return result.articles;
  } catch (error) {
    throw error;
  }
};
