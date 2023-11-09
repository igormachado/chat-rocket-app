
const dateTime = new Date();
export const formatterDate = dateTime.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
console.log(formatterDate)