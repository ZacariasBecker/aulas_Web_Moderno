
const f1 = async function () {
    return new Promise((resolve, reject) => {
        try {
            resolve(conta())
        } catch{
            reject('erro')
        }
    })
}

const conta = async () => {
    const a = await 1 + 1
    const b = await 2 * 2 * 2 * 2 * 2
    const c = await 9 * 9 * 9 * 9 * 9 * 9 * 9 * 9 * 9 * 9 * 9
    return [].concat(a,b,c)
}

f1().then(console.log())