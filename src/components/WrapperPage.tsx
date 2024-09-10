import React from "react";
import DefaultAppBar from "./DefaultAppBar";

interface WrapperPageProps {
  pageTitle: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

function WrapperPage({ pageTitle, content, footer }: WrapperPageProps) {
  return (
    <>
      <DefaultAppBar currentPage={pageTitle} />
      {content}
      {footer}
    </>
  );
}

export default WrapperPage;
