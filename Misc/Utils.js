module.exports = {
  now: function () {
    var now = new Date();
    var formattedDate = now.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "America/Sao_Paulo" });

    return formattedDate;
  }
  
}