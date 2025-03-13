const PRESSURE_UNITS = 0.750062

export const capitalizeFirstLetter = (str: string) => {
  if (str === null || str === undefined) return ''

  return str.charAt(0).toLocaleUpperCase() + str.slice(1)
}

export const getPressureMm = (hpa: number) => {
  return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (seconds: number) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {
    timeZone: 'Atlantic/Reykjavik',
  })
}
