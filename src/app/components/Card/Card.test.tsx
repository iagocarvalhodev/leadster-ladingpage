import { render } from '@testing-library/react'
import { Card } from './Card'
import '@testing-library/jest-dom/extend-expect'

test('renders card with author and title', () => {
  const author = 'Lorem Ipsum'
  const title = 'Test Title'

  const { getByText } = render(<Card author={author} title={title} />)

  // Verifique se o autor e o título estão presentes no componente renderizado
  expect(getByText(`${title} ${author}`)).toBeInTheDocument()
})
