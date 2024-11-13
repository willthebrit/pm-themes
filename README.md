# PM Themes

A simple theme object to reflect the PM UI appearence.

## Installation

```bash
# npm
npx jsr add @willthebrit/pm-themes

# deno
deno add jsr:@willthebrit/pm-themes
```

## Usage in Next.js

```tsx
import "@mantine/core/styles.css";
import "@willthebrit/PmThemeStyles.css";

import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { PmTheme } from "@willthebrit/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={PmTheme}>
            <Component {...pageProps} />
        </MantineProvider>
    );
}

export default MyApp;
```
