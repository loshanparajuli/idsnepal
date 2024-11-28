export async function fetchNews() {
  try {
    // Replace this URL with your actual GitHub JSON file URL
    const response = await fetch('https://raw.githubusercontent.com/yourusername/yourrepo/main/news-data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch news data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
}

