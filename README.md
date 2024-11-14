# PM Themes

A simple theme object to reflect the Pennymac UI styles.

## Installation

```bash
# npm
npx jsr add @pennymac/theme

# deno
deno add jsr:@pennymac/theme
```

## Usage in Next.js

```tsx
import "@mantine/core/styles.css";

import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "@pennymac/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Component {...pageProps} />
        </MantineProvider>
    );
}

export default MyApp;
```
