import { render, screen } from '@testing-library/react';
import App from '../App';
import Store from '../store/index'

describe('Render App', () => {
  test('Start', () => {
    render(
      <Store> 
        <App /> 
      </Store>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
