import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '../index';
import { Destination } from '../../../types';
import { ThemeProvider } from '@mui/material';
import { THEME } from '../../../config/theme.config';
import mockDestinations from '../../../mocks/destinations'

describe('<Form />', () => {
  const mockFunction = jest.fn()

  it('should always be on screen', () => {
    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={{} as Destination}
          handleFormOpeningClosing={mockFunction}
          saveDestinationForm={mockFunction}
          destinations={[]}
          saveDestinations={mockFunction}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Ajouter une nouvelle destination')).toBeInTheDocument();
    expect(screen.getByText('Nom de la destination')).toBeInTheDocument();
    expect(screen.getByText('Adresse')).toBeInTheDocument();
    expect(screen.getByText('Lien de l\'image')).toBeInTheDocument();
    expect(screen.getByText('Nombre d\'habitants')).toBeInTheDocument();
    expect(screen.getByText('Nombre d\'hôtels')).toBeInTheDocument();
    expect(screen.getByText('Revenu Moy (€)')).toBeInTheDocument();
    expect(screen.getByText('Superficie (km²)')).toBeInTheDocument();
    expect(screen.getByText('annuler')).toBeInTheDocument();
    expect(screen.getByText('ajouter')).toBeInTheDocument();
  });

  it('should fill the inputs with destinationForm data', () => {
    const name ='Copenhagen';
    const address = 'Rådhuspladsen 1, 1550 København, Denmark';
    const residents = '3.4 M';
    const hotels = '5000';
    const avg_income = '70000 €';
    const square_kilometer = '88.55';
    const img = 'https://picsum.photos/200/100';

    const destinationFormMock: Destination = {
      _id: '1',
      name,
      address,
      residents,
      hotels,
      avg_income,
      square_kilometer,
      img,
      disable: true,
    };

    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={destinationFormMock}
          handleFormOpeningClosing={mockFunction}
          saveDestinationForm={mockFunction}
          destinations={[]}
          saveDestinations={mockFunction}
        />
      </ThemeProvider>
    );

    expect(screen.getByDisplayValue(name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(address)).toBeInTheDocument();
    expect(screen.getByDisplayValue(residents)).toBeInTheDocument();
    expect(screen.getByDisplayValue(hotels)).toBeInTheDocument();
    expect(screen.getByDisplayValue(avg_income)).toBeInTheDocument();
    expect(screen.getByDisplayValue(square_kilometer)).toBeInTheDocument();
    expect(screen.getByDisplayValue(img)).toBeInTheDocument();
  });

  it('should call saveDestinationForm with an empty form and handleFormOpeningClosing when cancel button is clicked', () => {
    const mockHandleFormOpeningClosing = jest.fn();
    const mockSaveDestinationForm = jest.fn();
    
    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={{} as Destination}
          handleFormOpeningClosing={mockHandleFormOpeningClosing}
          saveDestinationForm={mockSaveDestinationForm}
          destinations={[]}
          saveDestinations={mockFunction}
        />
      </ThemeProvider>
    );

    const buttons = screen.getAllByRole('button');
    const cancelButton = buttons[0]
    
    fireEvent.click(cancelButton);
    
    expect(mockSaveDestinationForm).toHaveBeenNthCalledWith(1, {});
    expect(mockHandleFormOpeningClosing).toHaveBeenCalledTimes(1);
  })

  it('should call saveDestinations with destinationForm and handleFormOpeningClosing when submit button is clicked', () => {
    const mockHandleFormOpeningClosing = jest.fn();
    const mockSaveDestinations = jest.fn();

    const destinationFormMock: Destination = {
      _id: '1',
      name: 'name',
      address: 'address',
      residents: 'residents',
      hotels: 'hotels',
      avg_income: 'income',
      square_kilometer: 'surface',
      img: 'url',
      disable: true,
    };
    
    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={destinationFormMock}
          handleFormOpeningClosing={mockHandleFormOpeningClosing}
          saveDestinationForm={mockFunction}
          destinations={mockDestinations.destinations}
          saveDestinations={mockSaveDestinations}
        />
      </ThemeProvider>
    );

    const buttons = screen.getAllByRole('button');
    const submitButton = buttons[1]
    
    fireEvent.click(submitButton);

    const mockDestinationsWithoutTheEditedDestination = mockDestinations.destinations.filter(destination => destination._id !== destinationFormMock._id)
    const mockDestinationsToSave = [...mockDestinationsWithoutTheEditedDestination, destinationFormMock]

    expect(mockSaveDestinations).toHaveBeenNthCalledWith(1, {destinations: [...mockDestinationsToSave]});
    expect(mockHandleFormOpeningClosing).toHaveBeenCalledTimes(1);
  });

  it('should call saveDestinations with destinationForm when an input is changed', () => {
    const mockSaveDestinationForm = jest.fn();

    const mockNameValue = 'name value';
    const mockNewNameValue = 'new name value';

    const destinationFormMock: Destination = {
      _id: '1',
      name: mockNameValue,
      address: 'address',
      residents: 'residents',
      hotels: 'hotels',
      avg_income: 'income',
      square_kilometer: 'surface',
      img: 'url',
      disable: true,
    };
    
    render(
      <ThemeProvider theme={THEME}>
        <Form 
          destinationForm={destinationFormMock}
          handleFormOpeningClosing={mockFunction}
          saveDestinationForm={mockSaveDestinationForm}
          destinations={[]}
          saveDestinations={mockFunction}
        />
      </ThemeProvider>
    );

    const inputForName = screen.getByDisplayValue(mockNameValue);

    fireEvent.change(inputForName, {target: {value: mockNewNameValue}});

    const mockNewDestinationForm = {
      ...destinationFormMock,
      name: mockNewNameValue,
    }

    expect(mockSaveDestinationForm).toHaveBeenNthCalledWith(1, mockNewDestinationForm);
  })
});