import React from "react";
import { AppProps } from 'next/app';
import { AuthUserProvider } from "../context/AuthUserContext";
import { Sidebar } from "@frappe/common/design-system";
import './styles.scss';

const CinicaApp = ({ Component, pageProps }: AppProps) => (
  <AuthUserProvider>
    <Sidebar />
    <Component {...pageProps} className="flex flex-row" />
  </AuthUserProvider>
);

export default CinicaApp;
