import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

describe('Login component', () => {
  test('renders login form and allows role selection', () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    const select = screen.getByLabelText(/select role/i);
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'teacher' } });
    expect(select.value).toBe('teacher');

    const button = screen.getByRole('button', { name: /login/i });
    fireEvent.click(button);

    expect(mockOnLogin).toHaveBeenCalledWith('teacher');
  });

  test('does not call onLogin if no role selected', () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    const button = screen.getByRole('button', { name: /login/i });
    fireEvent.click(button);

    expect(mockOnLogin).not.toHaveBeenCalled();
  });
});
