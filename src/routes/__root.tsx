import * as React from "react";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { title: `🐜 Les Fourmilières · Festival antifasciste et solidaire` },
      {
        name: "description",
        content: `Les Fourmilières est un festival solidaire et antifasciste. Nous sommes des collectifs, associations, librairies, brasseries, syndicats, lieux culturels, troupes de théâtre, tiers lieux, cinémas. Nous sommes actuellement plus d'une centaine de collectifs répartis dans le midi : de la vallée de l'Aveyron jusqu'aux monts d'Ardèche, des montagnes jusqu'au littoral.`,
      },
      {
        property: "og:title",
        content: `🐜 Les Fourmilières · Festival antifasciste et solidaire`,
      },
      {
        property: "og:description",
        content: `Les Fourmilières est un festival solidaire et antifasciste. Nous sommes des collectifs, associations, librairies, brasseries, syndicats, lieux culturels, troupes de théâtre, tiers lieux, cinémas. Nous sommes actuellement plus d'une centaine de collectifs répartis dans le midi : de la vallée de l'Aveyron jusqu'aux monts d'Ardèche, des montagnes jusqu'au littoral.`,
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://les-fourmilieres.org/les-fourmilieres-preview.webp",
      },
      {
        property: "og:locale",
        content: "fr_FR",
      },
    ],
  }),
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
