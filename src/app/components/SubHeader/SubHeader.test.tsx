import { render } from '@testing-library/react'
import { SubHeader } from './SubHeader'
import '@testing-library/jest-dom/extend-expect'

test('waits for subheader texts to be rendered', () => {
  const { getByText, getByAltText } = render(<SubHeader />)

  const webinars = getByText('Webinars Exclusivos')
  const text1 = getByText('Menos Conversinha,')
  const text2 = getByText('Mais Conversão')
  const subtext = getByText(/Conheça as estratégias/i)
  const icon = getByAltText('icon-leadster')

  expect(webinars).toBeInTheDocument()
  expect(text1).toBeInTheDocument()
  expect(text2).toBeInTheDocument()
  expect(subtext).toBeInTheDocument()
  expect(icon).toBeInTheDocument()
})
