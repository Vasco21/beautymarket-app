const API_KEY = 'https://uzuriapi.el.r.appspot.com/looks'
const API_BASE = 'https://uzuriapi.el.r.appspot.com/looks'

const basicFetch = async endpoint => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
  }

  // eslint-disable-next-line
  export default {
    getHomeList: async () => {
        return [
            {
                slug: "Connect",
                title: "@Vasco",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}