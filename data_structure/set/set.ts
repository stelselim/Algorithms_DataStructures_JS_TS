const helloSet = new Set<string>();
const element = "New Element";

helloSet.add("Hello World");
helloSet.add(element);
helloSet.add(element);
helloSet.add("New Data Structure");

for (let v of helloSet) {
    console.log(`val: ${v}`)
}