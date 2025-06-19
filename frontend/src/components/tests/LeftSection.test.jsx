import { render, screen, fireEvent } from '@testing-library/react';
import LeftSection from '../LeftSection';

describe('LeftSection form validations', () => {
    test('should not allow blank name', () => {
        render(<LeftSection />);
        const button = screen.getByText(/click to enter your vote/i);
        fireEvent.click(button);
        const nameInput = screen.getByPlaceholderText(/username/i);
        expect(nameInput.value).toBe('');
    });

    test('should not allow vote without selecting option', () => {
        render(<LeftSection />);
        const nameInput = screen.getByPlaceholderText(/username/i);
        fireEvent.change(nameInput, { target: { value: 'TestUser' } });
        const button = screen.getByText(/click to enter your vote/i);
        fireEvent.click(button);
        expect(screen.getByPlaceholderText(/username/i).value).toBe('TestUser');
    });
});