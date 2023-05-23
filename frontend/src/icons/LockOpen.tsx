import { FunctionComponent } from 'react';
import tw from 'twin.macro';

const Svg = tw.svg`w-4 h-4 font-semibold inline-block`;

const LockOpenIcon: FunctionComponent = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
        </Svg>
    );
};

export default LockOpenIcon;
