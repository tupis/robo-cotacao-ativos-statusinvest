// import fs from "fs";
// import ExcelJS from "exceljs";
const ExcelJS = require("exceljs");
// import qualiraLog from "./colors.js";
// import { getTickerProvents, getTickers } from "./services/api.js";

// utils

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",

  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  FgPink: "\x1b[38;5;199m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
  BgPink: "\x1b[48;5;199m",
};
const qualiraLog = {
  green: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgGreen, log, colors.Reset);
    }
  },
  red: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgRed, log, colors.Reset);
    }
  },
  yellow: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgYellow, log, colors.Reset);
    }
  },
  blue: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgBlue, log, colors.Reset);
    }
  },
  magenta: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgMagenta, log, colors.Reset);
    }
  },
  cyan: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgCyan, log, colors.Reset);
    }
  },
  white: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgWhite, log, colors.Reset);
    }
  },
  pink: (...logs) => {
    for (const log of logs) {
      return console.log(colors.FgPink, log, colors.Reset);
    }
  },

  bgGreen: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgGreen, log, colors.Reset);
    }
  },
  bgRed: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgRed, log, colors.Reset);
    }
  },
  bgYellow: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgYellow, log, colors.Reset);
    }
  },
  bgBlue: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgBlue, log, colors.Reset);
    }
  },
  bgMagenta: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgMagenta, log, colors.Reset);
    }
  },
  bgCyan: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgCyan, log, colors.Reset);
    }
  },
  bgWhite: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgWhite, log, colors.Reset);
    }
  },
  bgPink: (...logs) => {
    for (const log of logs) {
      return console.log(colors.BgPink, log, colors.Reset);
    }
  },

  blink: (...logs) => {
    for (const log of logs) {
      return console.log(colors.Dim, log, colors.Reset);
    }
  },
};
//

// services
async function getTickerProvents(ticker) {
  const url = `https://statusinvest.com.br/acao/companytickerprovents?ticker=${ticker}&chartProventsType=2`;

  console.log("Buscando informacoes do ativo: " + ticker);

  const fecthProvents = await fetch(url, {
    redirect: "follow",
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36",
    },
  });

  const response = await fecthProvents.json();

  return response.assetEarningsYearlyModels;
}

async function getTickers() {
  const url =
    "https://statusinvest.com.br/category/advancedsearchresultpaginated?search=%7B%22Sector%22%3A%22%22%2C%22SubSector%22%3A%22%22%2C%22Segment%22%3A%22%22%2C%22my_range%22%3A%22-20%3B100%22%2C%22forecast%22%3A%7B%22upsidedownside%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22estimatesnumber%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22revisedup%22%3Atrue%2C%22reviseddown%22%3Atrue%2C%22consensus%22%3A%5B%5D%7D%2C%22dy%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_l%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22peg_ratio%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_vp%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margembruta%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margemebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margemliquida%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22ev_ebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22dividaliquidaebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22dividaliquidapatrimonioliquido%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_sr%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_capitalgiro%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ativocirculante%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roe%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roic%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22liquidezcorrente%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22pl_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22passivo_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22giroativos%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22receitas_cagr5%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22lucros_cagr5%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22liquidezmediadiaria%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22vpa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22lpa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22valormercado%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%7D&orderColumn=&isAsc=&page=0&take=999&CategoryType=1";

  await sleep(700);

  const fecthTickers = await fetch(url, {
    redirect: "follow",
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36",
    },
  });

  const response = await fecthTickers.json();

  const tickers = response.list.map((item) => item.ticker);

  return tickers;
}
//

async function main() {
  // const read = fs.readFileSync("cotacoes.csv", "utf8");

  // const tickers = read.split(";");

  const tickers = await getTickers();

  qualiraLog.blue("Quantidade de ativos: " + tickers.length);

  const workbook = new ExcelJS.Workbook();

  const erros = [];

  const worksheet = workbook.addWorksheet("Cotações", {
    pageSetup: { paperSize: 9, orientation: "landscape" },
  });

  worksheet.columns = [
    { header: "Ativo", key: "ativo", width: 20 },
    { header: "2018", key: "2018", width: 15 },
    { header: "2019", key: "2019", width: 15 },
    { header: "2020", key: "2020", width: 15 },
    { header: "2021", key: "2021", width: 15 },
    { header: "2022", key: "2022", width: 15 },
    { header: "2023", key: "2023", width: 15 },
    { header: "2024", key: "2024", width: 15 },
    { header: "2025", key: "2025", width: 15 },
    { header: "2026", key: "2026", width: 15 },
    { header: "2027", key: "2027", width: 15 },
    { header: "2028", key: "2028", width: 15 },
    { header: "2029", key: "2029", width: 15 },
    { header: "2030", key: "2030", width: 15 },
  ];

  console.time("Tempo de busca dos ativos");

  for await (const ticker of tickers) {
    try {
      await sleep(500);

      const data = await getTickerProvents(ticker);

      const response = {
        ativo: ticker,
      };

      const after2018 = data.filter((ticker) => ticker.rank >= 2018);

      after2018.forEach((item) => {
        response[item.rank] = item.value;
      });

      worksheet.addRow(response);

      qualiraLog.green("Sucesso ao buscar o ativo: " + ticker);
    } catch (error) {
      qualiraLog.red("Erro ao buscar o ativo: " + ticker);
      erros.push(ticker);
    }
  }

  console.timeEnd("Tempo de busca dos ativos");

  qualiraLog.red("Ativos falharam a leitura: " + erros);

  const data = new Date();

  function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}_${mes}_${ano}`;
  }

  const nomeArquivo = "cotacacoes_ativos_" + formatarData(data) + ".xlsx";

  workbook.xlsx
    .writeFile(nomeArquivo)
    .then(() => {
      console.log("Tabela exportada com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao exportar a tabela:", err);
    });

  sleep(1000 * 60 * 60 * 24);
}

main();
