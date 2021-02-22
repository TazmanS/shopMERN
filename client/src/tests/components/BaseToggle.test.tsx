import { render, screen } from '@testing-library/react'
import BaseToggle from '../../components/BaseToggle'
import userEvent from '@testing-library/user-event'

describe('Render', () => {
  test('Empty options', () => {
    render(<BaseToggle />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
  test('With options', () => {
    const options = [
      {
        title: 'Светлая',
        value: 'light'
      },
      {
        title: 'Тёмная',
        value: 'dark'
      }
    ]
    render(<BaseToggle options={options} />)
    expect(screen.getByText(/Светлая/i)).toBeInTheDocument()
    expect(screen.getByText(/Тёмная/i)).toBeInTheDocument()
  })
  test('Checked checkbox', () => {
    const {getByRole} = render(<BaseToggle />)
    userEvent.click(getByRole('checkbox'))
    expect(getByRole('checkbox')).toBeChecked()
  })
})