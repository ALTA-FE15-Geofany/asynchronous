function jajanBoba(uang: number, callback: (result: string) => void) {
  setTimeout(() => {
    const hargaBoba = 5000
    if (uang >= hargaBoba) {
      const sisaUang = uang - hargaBoba
      callback(`kamu jajan boba dengan harga Rp. ${hargaBoba}\nsisa uang kamu Rp. ${sisaUang}`)
    } else {
      callback(`uang kamu belum cukup untuk membeli boba\nsisa uang kamu sebesar ${uang}`)
    }
  }, 5000)
}

function jajanSeblak(uang: number, callback: (result: string) => void) {
  setTimeout(() => {
    const hargaSeblak = 8000
    if (uang >= hargaSeblak) {
      const sisaUang = uang - hargaSeblak
      callback(`kamu jajan seblak dengan harga Rp. ${hargaSeblak}\nsisa uang kamu Rp. ${sisaUang}`)
    } else {
      callback(`uang kamu belum cukup untuk membeli seblak\nsisa uang kamu sebesar ${uang}`)
    }
  }, 10000)
}

jajanBoba(20000, (result: string) => {
  console.log(result)
})

jajanSeblak(1000, (result: string) => {
  console.log(result)
})
