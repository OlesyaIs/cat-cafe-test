import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import starList from "/src/mocks/starList";
import gallery from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buyOptions";
import { GlobalStyle } from "./style";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../routs";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY}
              element={<BuyPage images={gallery} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
