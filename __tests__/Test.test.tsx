import { render, screen } from '@testing-library/react'
import Test from '../src/pages/Test'
import "@testing-library/jest-dom/extend-expect"
it('Should render hello text', () => {
    render(<Test />)
    expect(screen.getByText('Hello Nextjs')).toBeInTheDocument()
})