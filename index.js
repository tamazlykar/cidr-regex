const ipRegex = require("ip-regex");

const v4 = ipRegex.v4().source + "\\/(3[0-2]|[12]?[0-9])";
const v6 = ipRegex.v6().source + "\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])";

const ip = module.exports = opts => opts && opts.exact ?
  new RegExp(`(?:^${v4}$)|(?:^${v6}$)`) :
  new RegExp(`(?:${v4})|(?:${v6})`, "g");

ip.v4 = opts => opts && opts.exact ? new RegExp(`^${v4}$`) : new RegExp(v4, "g");
ip.v6 = opts => opts && opts.exact ? new RegExp(`^${v6}$`) : new RegExp(v6, "g");
