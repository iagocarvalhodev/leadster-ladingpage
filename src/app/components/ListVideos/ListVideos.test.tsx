import { render, screen } from '@testing-library/react'
import { ListVideos } from './ListVideos'
import '@testing-library/jest-dom/extend-expect'

// Simula o hook personalizado useGetWebinars
jest.mock('@/hooks/useGetWebinars', () => ({
  useGetWebinars: () => ({
    webinars: [{ id: 1, author: 'author', title: 'title' }],
    currentPage: 1,
    totalPages: 2,
    goToPage: jest.fn(),
  }),
}))

describe('ListVideos', () => {
  test('renders component and webinar items correctly', () => {
    render(<ListVideos />)
    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })
})
