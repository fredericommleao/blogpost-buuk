import React from "react";

export default function Analytics(){
    <>
         {/* Adicione a tag do Google Tag Manager aqui */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-4DGP50P4KT"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4DGP50P4KT');
              `,
            }}
          />
    </>
}