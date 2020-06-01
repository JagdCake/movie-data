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
        <h1 className="text-3xl text-center font-bold">
            <Link to="/" className="bg-purple text-gray p-2 rounded-sm">
                {siteTitle}
            </Link>
        </h1>
    </header>
);

export default Header;
