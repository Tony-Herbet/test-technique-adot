import { Destinations } from "../types"

const mockDestinations: Destinations = {
  destinations: [
    {
      _id: '1',
      name: 'Copenhagen',
      address: 'Rådhuspladsen 1, 1550 København, Denmark',
      residents: '3.4 M',
      hotels: '5000',
      avg_income: '70000 €',
      square_kilometer: '88.55',
      img: 'https://picsum.photos/200/100',
      disable: true
    },
    {
      _id: '2',
      name: 'Tehran',
      address: 'Tehran, Azadi Square, Iran',
      residents: '8.6 M',
      hotels: '400',
      avg_income: '30000 €',
      square_kilometer: '730',
      img: 'https://picsum.photos/200/100',
      disable: false
    },
    {
      _id: '3',
      name: 'Paris',
      address: 'Pl. de l\'Hôtel de Ville, 75004 Paris',
      residents: '2.1 M',
      hotels: '7500',
      avg_income: '50000 €',
      square_kilometer: '105.4',
      img: 'https://picsum.photos/200/100',
      disable: false
    },
    {
      _id: '4',
      name: 'London',
      address: 'London SW1A 0AA, United Kingdom',
      residents: '8.98 M',
      hotels: '10000',
      avg_income: '90000 €',
      square_kilometer: '1572',
      img: 'https://picsum.photos/200/100',
      disable: false
    },
    {
      _id: '5',
      name: 'Tokyo',
      address: '4 Shibakoen, Minato City, Tokyo 105-0011, Japan',
      residents: '13.9 M',
      hotels: '7000',
      avg_income: '70000 €',
      square_kilometer: '627.6',
      img: 'https://picsum.photos/200/100',
      disable: true
    },
    {
      _id: '6',
      name: 'New York',
      address: 'New York, NY 10004, United States',
      residents: '8.4 M',
      hotels: '12000',
      avg_income: '100000 €',
      square_kilometer: '783.8',
      img: 'https://picsum.photos/200/100',
      disable: false
    },
  ]
}

export default mockDestinations