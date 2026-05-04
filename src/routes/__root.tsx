import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}
