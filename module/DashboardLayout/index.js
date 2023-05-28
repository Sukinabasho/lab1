import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from '/components/Header/header';
import Main from '/components/Main/main';
import Footer from '/components/Footer/footer';

ReactDOM.createRoot(document.querySelector("#header")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#main")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Main />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("#footer")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Footer />
    </StyledEngineProvider>
  </React.StrictMode>
);
