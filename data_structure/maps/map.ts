const helloMap = new Map<string, string>()
helloMap.set("name", "Selim")
helloMap.set("age", "23")
helloMap.set("class", "Control")


helloMap.forEach((v, k) => {
    console.log("k", k)
    console.log("v", v)
})


for (let [key, value] of helloMap) {
    console.log(`${key}: ${value}`);
}