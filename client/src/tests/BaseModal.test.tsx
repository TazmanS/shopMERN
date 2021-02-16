import { screen, render } from '@testing-library/react'
import BaseModal from '../components/BaseModal'

describe('Base Modal', () => {
  test('Render with title', () => {
    const title = 'TITLE'
    let show = true
    const setShowModal = jest.fn()
    render(<BaseModal title={title} show={show} setShowModal={setShowModal} />)

    expect(screen.getByText("TITLE")).toBeInTheDocument()
    expect(screen.getByText('TITLE').nextSibling).toHaveStyle('transform: rotate(180deg)')
  })
})