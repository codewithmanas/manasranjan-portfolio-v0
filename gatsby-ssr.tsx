import * as React from "react"
import type { GatsbySSR } from "gatsby"

const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  // Skip if no ID configured (e.g. local dev without the env var)
  if (!CLARITY_PROJECT_ID) return

  setHeadComponents([
    <script
      key="ms-clarity"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `,
      }}
    />,
  ])
}
