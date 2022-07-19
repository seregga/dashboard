import { instance } from "./index"


export const getAllCitys = async () => {
    const r = await instance.get('citys/allcitys')
    return r
}



