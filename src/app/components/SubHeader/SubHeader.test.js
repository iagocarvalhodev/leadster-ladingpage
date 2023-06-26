import { render } from '@testing-library/react'
import { SubHeader } from './SubHeader'
import { test, expect } from '@jest/globals'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('waits for subheader texts to be rendered', () => {
  const { getByText } = render(<SubHeader />)

  const webinars = getByText('Webinars Exclusivos')
  const text1 = getByText('Menos Conversinha,')
  const text2 = getByText('Mais Conversão')
  const subtext = getByText(/Conheça as estratégias/i)
  expect(webinars).toBeInTheDocument()
  expect(text1).toBeInTheDocument()
  expect(text2).toBeInTheDocument()
  expect(subtext).toBeInTheDocument()
})
