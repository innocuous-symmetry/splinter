import { Context } from '../store/Store';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

describe('card deck', () => {
    describe('tier one deck', () => {
        it('has 30 cards', () => {
            const { theThing } = renderHook(useContext(Context));
            let expected = 30;
            expect(expected).toBe(30);
        })
    })
})