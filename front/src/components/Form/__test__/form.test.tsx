import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import Form from '../index';
import { Destination } from '../../../types';
import { ThemeProvider } from '@mui/material';
import { THEME } from '../../../config/theme.config';


describe('<Form />', () => {
  it('should always be on screen', () => {
    const mockDestinationForm = jest.fn()
    // handleFormOpeningClosing,
    // saveDestinationForm,
    // destinations,
    // saveDestinations

    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={{} as Destination}
          handleFormOpeningClosing={mockDestinationForm}
          saveDestinationForm={mockDestinationForm}
          destinations={[]}
          saveDestinations={mockDestinationForm}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Ajouter une nouvelle destination')).toBeInTheDocument();
    expect(screen.getByText('Nom de la destination')).toBeInTheDocument();
    expect(screen.getByText('Adresse')).toBeInTheDocument();
    expect(screen.getByText('Lien de l\'image')).toBeInTheDocument();
  })
});