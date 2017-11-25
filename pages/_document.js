import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="StephenFJohnson" />
          <link rel="icon" href="../static/favicon/favicon.ico" />
          <meta name="theme-color" content="#000" />
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
