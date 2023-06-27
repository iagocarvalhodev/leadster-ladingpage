'use client'
import { useEffect, useState } from 'react'
import api from '../config/api'

interface Webinars {
  id: string
  type: string
  title: string
  description: string
  author: string
  thumbnail: string
  media: string
  createdAt: string
  updatedAt: string
}

export const useGetWebinars = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [webinars, setWebinars] = useState<Webinars[]>([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    api.get('webinars.json').then((res) => {
      const jsonData = res.data.videos
      const totalWebinars = jsonData.length
      setTotalPages(Math.ceil(totalWebinars / itemsPerPage))

      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const webinarsData = jsonData.slice(startIndex, endIndex)
      setWebinars(webinarsData)
    })
  }, [currentPage, itemsPerPage])

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return {
    webinars,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  }
}
