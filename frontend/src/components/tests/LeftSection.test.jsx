import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
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
        const yesRadio = screen.getByDisplayValue('true');
        const noRadio = screen.getByDisplayValue('false');
        expect(yesRadio.checked).toBe(false);
        expect(noRadio.checked).toBe(false);
        const button = screen.getByText(/click to enter your vote/i);
        fireEvent.click(button);

        expect(yesRadio.checked).toBe(false);
        expect(noRadio.checked).toBe(false);
    });
});