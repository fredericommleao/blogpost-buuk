import Script from 'next/script'

function Analytics() {
  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XYGHB0M64H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XYGHB0M64H');
        `}
      </Script>
    </div>
  )
}

export default Analytics