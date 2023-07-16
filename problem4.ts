function lottery(num: number): Promise<{ result: string, winNumber: number }> {
    console.log("Undian lotre dimulai.")
    console.log("Sedang mengundi nomor Anda...")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberRandom: number = Math.floor(Math.random() * 1000) + 1

            if (num === numberRandom) {
                resolve({ result: "Selamat! Anda mendapatkan hadiah utama berupa mobil.", winNumber: numberRandom })
            } else {
                reject({ result: "Maaf, Anda kurang beruntung.", winNumber: numberRandom })
            }
        }, 10000)
    })
}

console.log("Tunggu hasil pengundian...")
async function playSlot() {
    await lottery(5)
        .then((res) => console.log(`${res.result} Nomor undian: ${res.winNumber}`))
        .catch((err) => console.log(`${err.result} Nomor undian: ${err.winNumber}`))
        .finally(() => console.log("Undian lotre telah berakhir."))
}
playSlot()