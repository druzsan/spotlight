import { FunctionComponent } from 'react';
import tw, { styled } from 'twin.macro';

const StyledSvg = styled.svg`
    ${tw`w-7 h-7 inline-block`}
`;

const Logo: FunctionComponent = () => {
    return (
        <StyledSvg viewBox="0 0 34.047 33.919" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-13.97 -159.84)">
                <g fillRule="evenodd">
                    <path d="M13.97 189.62v-29.772l34.047 29.772z" fill="#59f" />
                    <path d="M13.97 189.62l34.047-27.997v27.997" fill="#37c8ab" />
                    <path
                        d="M14.593 188.73l16.925-13.54 15.987 13.635z"
                        fill="#0055d4"
                    />
                </g>
                <ellipse
                    cx="30.994"
                    cy="189.79"
                    rx="17.023"
                    ry="3.971"
                    fill="#003380"
                    paintOrder="markers fill stroke"
                />
            </g>
        </StyledSvg>
    );
};

export default Logo;
