// import "@/shared/styles/globals.scss";
import theme from "@/shared/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import pt_Br from "antd/lib/locale/pt_BR";
import { Provider } from "react-redux";
import store from "@/core/redux/store";

// import { ProvedorDeAutenticacao } from "@/shared/hooks/provedorDeAutenticacao";
// import { AddyHookProvider } from "./modules/assistencias/social/context/useUnidadePrisional";
// import { AddyDadosPessoaisVisita } from "./modules/visitas/hooks/dadosPessoaisVisita";

// import dayjs from 'dayjs';
// import advancedFormat from 'dayjs/plugin/advancedFormat';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import localeData from 'dayjs/plugin/localeData';
// import weekday from 'dayjs/plugin/weekday';
// import weekOfYear from 'dayjs/plugin/weekOfYear';
// import weekYear from 'dayjs/plugin/weekYear';

// dayjs.extend(customParseFormat)
// dayjs.extend(advancedFormat)
// dayjs.extend(weekday)
// dayjs.extend(localeData)
// dayjs.extend(weekOfYear)
// dayjs.extend(weekYear)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        locale={pt_Br}
        theme={{
          token: {
            colorIcon: `${theme.colors.colorPrimary}`,
            colorPrimary: `${theme.colors.colorPrimary}`,
          },
          components: {
            DatePicker: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Select: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Input: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            InputNumber: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Button: {
              borderRadius: 15,
              fontFamily: "Lexend, sans-serif",
              fontSize: theme.fonts.sizes.small,
            },
            Table: {
              borderRadius: 15,
            },
          },
        }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ConfigProvider>
    </ThemeProvider>
  );
}
