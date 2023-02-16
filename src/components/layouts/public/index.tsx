import React from "react";
import Header from "./header";
import Footer from "./footer";

type MyComponentProps = React.PropsWithChildren<{}>;

function PublicLayout({ children }: MyComponentProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
