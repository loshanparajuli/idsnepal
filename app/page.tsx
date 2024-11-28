import { Header } from './components/header'
import { NewsCard } from './components/news-card'
import { TrendingSidebar } from './components/trending-sidebar'
import { Footer } from './components/footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const API_URL =
  'https://raw.githubusercontent.com/bibhuticoder/nepali-news-api/main/__daily_news/2024_11_27.json'

export default function Home() {
  const [newsArticles, setNewsArticles] = useState([])

  // Fetch data from the API
useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      // Limit to the first 10 articles and clean the data
      const articles = data.slice(0, 10).map((item: any, index: number) => ({
        id: index + 1,
        title: item.title.replace(/ -.*$/, ''), // Remove text after dashes
        description: item.summary || 'No Description',
        category: item.category || 'General',
       imageUrl: item.imageLink && item.imageLink.trim() !== '' ? item.imageLink : '/placeholder.svg',
        content:
          item.content && item.content.length > 200
            ? item.content.substring(0, 200) + '...' // Limit content length to 200 characters
            : item.content || 'No Content',
        size: index % 3 === 0 ? 'large' : index % 2 === 0 ? 'medium' : 'small', // Dynamic sizes
      }))
      setNewsArticles(articles)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }
  fetchNews()
}, [])
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="relative h-[400px] mb-8 gradient-bg">
        <Image
          src="/placeholder.svg"
          alt="Featured news"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.3 }}
       
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Welcome to IDS Media</h1>
          <p className="text-xl text-foreground">Your source for the latest news and trending topics</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-8 text-primary">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <div key={article.id} className={`
                  ${article.size === 'large' ? 'md:col-span-2 lg:col-span-3' : ''}
                  ${article.size === 'medium' ? 'lg:col-span-2' : ''}
                `}>
                  <NewsCard
                    title={article.title}
                    description={article.description}
                    category={article.category}
                    imageUrl={article.imageUrl}
                    content={article.content}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4">
            <TrendingSidebar />
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Featured Content</h3>
              <div className="bg-secondary p-4 rounded-lg">
                <p>This section can be used for featured content, advertisements, or any other relevant information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

