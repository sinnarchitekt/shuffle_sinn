import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800,900|Nunito:400,500,600,700,800,900&amp;subset=latin" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap" />
            </Head>
            <body className="antialiased bg-body text-body font-body">
                <Main />
                <NextScript />
                            </body>
        </Html>
    )
}
