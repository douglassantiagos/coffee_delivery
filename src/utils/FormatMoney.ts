export function FormatMoney(price: number) {
  return price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })
}