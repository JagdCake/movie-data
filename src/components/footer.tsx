import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Footer: FunctionComponent = (): ReactElement => {
    return (
        <footer className="mx-auto text-center mb-5">
            <h1 className="font-bold">Contact</h1>
            <ul>
                <li>
                    <a
                        className="inline-block my-1 bg-purple text-gray p-2 rounded-sm"
                        href="mailto:jc@jagdcake.com"
                    >
                        jc@jagdcake.com
                    </a>
                </li>
                <li>
                    <a
                        className="inline-block my-1 bg-purple text-gray p-2 rounded-sm"
                        href="https://github.com/JagdCake/movie-data"
                    >
                        GitHub repository
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
