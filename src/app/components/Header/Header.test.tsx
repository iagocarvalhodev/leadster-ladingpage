import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import '@testing-library/jest-dom/extend-expect'

test('it is expected that the header has been rendered', () => {
  render(<Header />)

  const imgElement = screen.getByAltText('Leadster')
  expect(imgElement).toBeInTheDocument()
})
