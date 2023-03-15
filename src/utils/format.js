
export function formatPrice(number) {
  return new Intl.NumberFormat(
    'en-US', 
    { style: 'currency', currency: 'usd' }
  ).format(accDiv(number, 100))
}

// 除
export function accDiv(arg1, arg2) {
  let t1 = 0
  let t2 = 0
  // debugger
  try {
    t1 = arg1.toString().split('.')[1]
      ? arg1.toString().split('.')[1].length
      : 0
  } catch (e) {
    return 0
  }
  try {
    t2 = arg2.toString().split('.')[1]
      ? arg2.toString().split('.')[1].length
      : 0
  } catch (e) {
    return 0
  }
  // with (Math) {
  // debugger
  const r1 = Number(arg1.toString().replace('.', ''))
  const r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
  // }
}