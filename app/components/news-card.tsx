"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'
import { useState } from 'react'

interface NewsCardProps {
  title: string
  description: string
  category: string
  imageUrl: string
  content: string
}

export function NewsCard({ title, description, category, imageUrl, content }: NewsCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-primary">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Read More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] transition-opacity duration-300">
            <DialogHeader>
              <DialogTitle className="text-primary">{title}</DialogTitle>
              <DialogDescription>{category}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 relative h-48 mb-4">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 425px) 100vw, 425px"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-80" />
            </div>
            <div className="relative z-10">
              <p>{content}</p>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

