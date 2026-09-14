"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    return <>{styles}</>;
  });

  if (typeof document !== "undefined") {
    // Client side: render without the server sheet
    return children;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet}>
      {children}
    </StyleSheetManager>
  );
}
