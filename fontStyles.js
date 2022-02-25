import { createGlobalStyle } from "styled-components";
import SegoeReg from "./assets/fonts/SegoeUI-regular.woff";
import SegoeSemiBold from "./assets/fonts/SegoeUI-SemiBold.woff";
import SegoeBold from "./assets/fonts/SegoeUI-Bold.woff";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Segoe UI';
        font-weight: 400;
        src: url(${SegoeReg}) format ('woff');
    }

    @font-face {
        font-family: 'Segoe UI';
        font-weight: 600;
        src: url(${SegoeSemiBold}) format ('woff');
    }

    @font-face {
        font-family: 'Segoe UI';
        font-weight: 700;
        src: url(${SegoeBold}) format ('woff');
    }
`

export default FontStyles