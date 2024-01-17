'use client'

import {NextUIProvider} from "@nextui-org/react";

function NextUIProviderWrapper({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default NextUIProviderWrapper