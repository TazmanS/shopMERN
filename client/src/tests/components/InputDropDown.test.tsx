import { getByText, render, screen } from '@testing-library/react'
import InputDropDown from '../../components/InputDropDown'
import userEvent from '@testing-library/user-event'

describe('Input Drop Down', () => {
  test('With drop down list', () => {
    const cities = [
      {
        title: 'Николаев',
        value: 'niko',
        _id: 'id1'
      }
    ]
    let search = 'ник'
    const changeSearch = jest.fn()
    const choseCity = jest.fn()
    render(
      <InputDropDown 
        cities={cities} 
        search={search} 
        change={changeSearch} 
        choseCity={choseCity} 
      />
    )
    expect(screen.getByText('Николаев')).toBeInTheDocument()
    userEvent.click(screen.getByText('Николаев'))
    expect(choseCity).toHaveBeenCalled()
  })

  test('Empty drop down list', () => {
    const cities = [
      {
        title: 'Николаев',
        value: 'niko',
        _id: 'id1'
      }
    ]
    let search = ''
    const changeSearch = jest.fn()
    const choseCity = jest.fn()
    const { container } = render(
      <InputDropDown 
        cities={cities} 
        search={search} 
        change={changeSearch} 
        choseCity={choseCity} 
      />
    )
    expect(container.getElementsByClassName('ListItem')).toHaveLength(0)
  })
})