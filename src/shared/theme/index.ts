/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export

const varAmbiente = process.env.NEXT_PUBLIC_SERVER;

export default {
  colors: {
    colorPrimary:
      varAmbiente === "homologacao"
        ? "#2c0352"
        : varAmbiente === "treinamento"
        ? "#065203"
        : "#030852",

    PrimaryGradiente:
      varAmbiente === "homologacao"
        ? "linear-gradient(90deg, #220241 0%, #2c0352 51.03%, #6a0bc2 100%)"
        : varAmbiente === "treinamento"
        ? "linear-gradient(90deg, #043d03 0%, #065203 51.03%, #0dac08 100%)"
        : "linear-gradient(90deg, #00012B 0%, #030852 51.03%, #10239E 100%)",

    colorSecondary:
      varAmbiente === "homologacao"
        ? "#390569"
        : varAmbiente === "treinamento"
        ? "#086605"
        : "#10239E",

    SecondaryGradiente:
      varAmbiente === "homologacao"
        ? "linear-gradient(90deg, #30035e 0%, #390569 51.03%, #710ccf 100%)"
        : varAmbiente === "treinamento"
        ? "linear-gradient(90deg, #055204 0%, #086605 51.03%, #0fc409 100%)"
        : "linear-gradient(90deg, #091355 0%, #10239E 48.62%, #1C38EA 100%)",

    colorTerciary:
      varAmbiente === "homologacao"
        ? "#510994"
        : varAmbiente === "treinamento"
        ? "#0a7c06"
        : "#1C38EA",
    TerciaryGradiente:
      varAmbiente === "homologacao"
        ? "linear-gradient(90deg, #39046e 0%, #510994 51.03%, #7f0fe7 100%)"
        : varAmbiente === "treinamento"
        ? "linear-gradient(90deg, #076906 0%, #0a7c06 51.03%, #12e70a 100%)"
        : "linear-gradient(90deg, #10239E 0%, #1C38EA 48.62%, #314aea 100%)",

        //botao Pre Egresso

        colorPreEgresso: "#b8b814",
        

    // cor do status AUSENTE na BUSCA DE DETENTOS Amarelo queiroga que pediu
    colorAusente: "#d48806",

    success: "#008200",
    successGradiente:
      "linear-gradient(90deg, #008C0E 0%, #008200 52.6%, #14FF00 100%)",

    colorDanger: "#ff4f51",
    dangerGradiente:
      "linear-gradient(90deg, #480000 0%, #820000 52.6%, #CA0000 100%)",

    // Tabelas =================================
    TableGradiente: "linear-gradient(180deg, #cccccc86 0%, #f5f5f5 100%)",
    TableBackground: "linear-gradient(180deg, #f0f0f02a 0%,  #ffffff 100%)",
    // ================================

    background: "#EDEDED",
    backgroundSecondary: "#fff",

    textColorPrimary: "#29292E",
    textColorSecondary: "#737380",
    textColorTerciary: "#EDEDED",

    // CORES PIS =================================

    backgroundBotoesPIS:
      "linear-gradient(90deg, #00038C 0%, #006BC6 51.03%, #00D1FF 100%)",
    // ================================
  },
  fonts: {
    sizes: {
      small: 12,
      regular: 14,
      medium: 16,
      large: 18,
      extraLarge: 22,
    },
    family: {
      principal: "Lexend",
      secundaria: "Inter",
    },
  },
};
