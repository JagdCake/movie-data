import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="my-6">
        <h1 className="text-3xl text-center">
            <Link to="/" className="text-purple">
                {siteTitle}
            </Link>
        </h1>
    </header>
);

export default Header;
