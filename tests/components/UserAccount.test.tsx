import { render, screen } from '@testing-library/react'
import { User } from '../../src/entities'
import UserAccount from '../../src/components/UserAccount'

describe('UserAccount', () => {
    it('should render user name', () => {
        const user: User = {
            id: 1,
            name: "Siddharth"
        };

        render(<UserAccount user={user} />);

        const userName = screen.getByText(user.name);
        expect(userName).toBeInTheDocument();
    })

    it('should render edit button if user is admin', () => {
        const user: User = {
            id: 1,
            name: "Siddharth",
            isAdmin: true
        };

        render(<UserAccount user={user} />);

        const editButton = screen.getByRole("button");
        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/edit/i);
    })

    it('should not render edit button if user is not admin', () => {
        const user: User = {
            id: 1,
            name: "Siddharth"
        };

        render(<UserAccount user={user} />);

        const editButton = screen.queryByRole("button");
        expect(editButton).not.toBeInTheDocument();
    })
})