export const api_key = 'YOUR-API-KEY';
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
