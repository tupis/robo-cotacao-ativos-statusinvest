export const colors = {
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

export default qualiraLog;
