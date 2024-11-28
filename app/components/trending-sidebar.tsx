import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

interface TrendingTopic {
  id: number
  title: string
  category: string
}

const trendingTopics: TrendingTopic[] = [
  { id: 1, title: "Global Climate Change Impact", category: "Environment" },
  { id: 2, title: "How Nation Fails", category: "Philosophy" },
  { id: 3, title: "Economic Implications of Trade Wars", category: "Economics" },
  { id: 4, title: "Breakthrough in Cancer Research", category: "Health" },
  { id: 5, title: "Starlink in Nepal: Why Elon wants to Invest in Nepal", category: "Science" },
]

export function TrendingSidebar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {trendingTopics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/topic/${topic.id}`} className="text-sm hover:underline">
                {topic.title}
                <span className="block text-xs text-muted-foreground">{topic.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

