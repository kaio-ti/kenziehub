import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
   --blue: #00b0ff;
   --white: #FDFDFF;
   --silver: #C6C5B9;
   --purple: #45425A;
   --ebony: #575C55
}
body {
    background: #c6c5b937;
    color: #0c0d0d;
}
body, input, button {
    font-family: "PT Serif", serif;
    font-size: 1rem;
}
h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
`;
