import { render } from '@testing-library/react'
import { Header } from './Header'
import { test, expect } from '@jest/globals'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('it is expected that the header has been rendered', () => {
  const { getByAltText } = render(<Header />)

  const imgElement = getByAltText('Leadster')
  expect(imgElement).toBeInTheDocument()
})
