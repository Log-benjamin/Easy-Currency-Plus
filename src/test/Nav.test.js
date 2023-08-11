import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Should render as expected', () => {
  it('should be similar with the snapshot', () => {
    const output = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
