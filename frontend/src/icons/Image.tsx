import type { IconType } from 'react-icons';
import { BiImageAlt } from 'react-icons/bi';
import tw from 'twin.macro';

const Image: IconType = tw(
    BiImageAlt
)`w-4 h-4 font-semibold inline-block align-middle stroke-current`;
export default Image;
