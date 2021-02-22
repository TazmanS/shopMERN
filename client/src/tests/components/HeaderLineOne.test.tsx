import { render, screen } from '@testing-library/react'
import HeaderLineOne from '../../components/HeaderLineOne'
import Store from '../../store/index'
import userEvent from '@testing-library/user-event'

describe('Header Line One', () => {
  test('Render', () => {
    render(<Store><HeaderLineOne /></Store>)
    expect(screen.getByText('Блог')).toBeInTheDocument()
    expect(screen.getByText('Fishka')).toBeInTheDocument()
    expect(screen.getByText('Вакансии')).toBeInTheDocument()
    expect(screen.getByText('Магазины')).toBeInTheDocument()
    expect(screen.getByText('Доставка и оплата')).toBeInTheDocument()
    expect(screen.getByText('Кредит')).toBeInTheDocument()
    expect(screen.getByText('Контакты')).toBeInTheDocument()
  })

  test('Render with one city', () => {
    const {container} = render(<Store><HeaderLineOne /></Store>)
    const children = container.querySelector('.Modal__city')?.children
    expect(children).toHaveLength(1)
  })

  test('Click by city', () => {
    render(<Store><HeaderLineOne /></Store>)
    expect(screen.getByText('Николаев')).toBeInTheDocument()

    userEvent.click(screen.getByText('Николаев'))
    userEvent.click(screen.getByText('Одесса'))

    expect(screen.queryByText(/Николаев/i)).not.toBeInTheDocument()
  })

  test('Click by title', () => {
    const setShowModal = jest.fn()

    render(<Store><HeaderLineOne /></Store>)

    userEvent.click(screen.getByText('Николаев'))

    expect(setShowModal).toHaveBeenCalledTimes(1)
  })
})