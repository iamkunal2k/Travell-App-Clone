import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {  params: {
            bl_latitude: bl_lat ? bl_lat :'11.847676',
            tr_latitude: tr_lat ? tr_lat :'12.838442',
            bl_longitude: bl_lng ? bl_lng :'109.095887',
            tr_longitude: tr_lng ? tr_lng :'109.149359',
            limit: '30',
            currency: 'USD',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'd8f76a5041mshd6cf5c9fb9a3750p1b34cfjsne3b7d84266e9',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          },
        }
        );

        return data;
    } catch (error) {
        return null
    }
}