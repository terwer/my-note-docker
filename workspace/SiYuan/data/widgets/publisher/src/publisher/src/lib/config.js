export function getConf(key) {
    const value = localStorage.getItem(key)
    if (!value) {
        return null;
    }
    const valueObj = JSON.parse(value);
    console.log("从localStorage获取数据=>", valueObj)
    return valueObj;
}

export async function setConf(key, value) {
    console.log("保存数据到localStorage=>", value)
    const valueString = JSON.stringify(value)
    localStorage.setItem(key, valueString)
}