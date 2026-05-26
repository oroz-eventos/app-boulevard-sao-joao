import { ScrollViewStyleReset } from 'expo-router/html'

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  const manifest = JSON.parse(process.env.APP_MANIFEST ?? '{}')
  const baseUrl = manifest.expo?.experiments?.baseUrl ?? ''
  const withBaseUrl = (path: string) => `${baseUrl}${path}`

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/*
          This viewport disables scaling which makes the mobile website act more like a native app.
          However this does reduce built-in accessibility. If you want to enable scaling, use this instead:
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover"
        />
        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native. 
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        <meta name="application-name" content="Boulevard São João" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Boulevard" />
        <meta name="theme-color" content="#5500CC" />
        <link rel="manifest" href={withBaseUrl('/manifest.json')} />
        <link rel="apple-touch-icon" href={withBaseUrl('/icon-192.png')} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('${withBaseUrl('/sw.js')}', { scope: '${withBaseUrl('/')}' }).catch(function () {});
                });
              }
            `,
          }}
        />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  )
}

const responsiveBackground = `
body {
  background-color: #F9F9FB;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0F0E12;
  }
}`
