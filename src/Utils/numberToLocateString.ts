const numberToLocateString = (string: string) => {
  let locateString = ''
  for (let i=0; i<string.length; i++) {
    if (!isNaN(parseInt(string[i]))) locateString += string[i]
  }
  return (Number(locateString)).toLocaleString()
}

export default numberToLocateString