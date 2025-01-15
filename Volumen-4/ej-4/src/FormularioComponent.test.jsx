import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormularioComponent from './FormularioComponent';

test('Validación del formulario', () => {
  render(<FormularioComponent />);
  
  const nombreInput = screen.getByLabelText(/Nombre:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Contraseña:/i);
  const submitButton = screen.getByText(/Enviar/i);
  
  fireEvent.change(nombreInput, { target: { value: 'Jo' } });
  fireEvent.blur(nombreInput);
  expect(screen.getByText(/El nombre debe tener al menos 3 caracteres/i)).toBeInTheDocument();
  
  fireEvent.change(emailInput, { target: { value: 'test@' } });
  fireEvent.blur(emailInput);
  expect(screen.getByText(/El email no es válido/i)).toBeInTheDocument();
  
  fireEvent.change(passwordInput, { target: { value: '123' } });
  fireEvent.blur(passwordInput);
  expect(screen.getByText(/La contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
  
  fireEvent.change(nombreInput, { target: { value: 'Juan' } });
  fireEvent.change(emailInput, { target: { value: 'juan@test.com' } });
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  
  fireEvent.click(submitButton);
  expect(screen.queryByText(/El nombre es obligatorio/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/El email no es válido/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/La contraseña debe tener al menos 6 caracteres/i)).not.toBeInTheDocument();
});
