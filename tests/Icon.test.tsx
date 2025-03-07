import { render } from '@testing-library/react'
import { Icon } from '../src/Icon'

test('renders icon with default props', () => {
  const { container } = render(<Icon name="zoom" />)
  expect(container.firstChild).toMatchSnapshot()
})
