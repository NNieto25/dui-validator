import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import App from './App';

describe('App', () => {
  // it.todo('should render');
  it('App rendering', () => {
    render(<App/>)
    const AppElement = screen.getByTestId('index');
    expect(AppElement).toBeInTheDocument();
  });

  //it.todo('should have title "Mi DUI es valido?"');
  it('Correct Title', () => {
    render(<App/>)
    expect(screen.getByText(`Mi DUI es valido?`)).toBeInTheDocument();
  });

  //it.todo('should have an input text');
  it('Input is rendering', () => {
    render(<App/>)
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
  });

  //it.todo('should have a button with text "Validar"');
  it('"validar" button is rendering', () => {
    render(<App/>)
    const buttonElement = screen.getByRole('button', {name: 'Validar'});
    expect(buttonElement).toBeInTheDocument();
  });
});
