import * as React from "react";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Header />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
