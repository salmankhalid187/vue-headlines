import actions from '@/store/actions.js'

let url = ''
let mockError = false

const mockApiResponse = {
  "status":"ok",
  "totalResults":38,
  "articles":[
    {
      "source":{"id":null,"name":"CBS Sports"},
      "author":"",
      "title":"Rays vs. Dodgers: World Series Game 1 live stream, prediction, odds, TV channel, watch MLB playoffs online - CBS Sports",
      "description":"The Dodgers and Rays begin their best-of-seven matchup Tuesday night",
      "url":"https://www.cbssports.com/mlb/news/rays-vs-dodgers-world-series-game-1-live-stream-prediction-odds-tv-channel-watch-mlb-playoffs-online/",
      "urlToImage":"https://sportshub.cbsistatic.com/i/r/2020/10/02/44f89273-07fa-438d-93e2-bbf92d2e511f/thumbnail/1200x675/5ca08ba27828615a060199f047484a09/clayton-kershaw-2.png",
      "publishedAt":"2020-10-21T00:24:00Z","content":"The Los Angeles Dodgers and Tampa Bay Rays will play Game 1 of the 2020 World Series at Globe Life Field in Arlington on Tuesday. The Dodgers swept the Brewers and the Padres in the NL Wild Card and … [+2845 chars]"
    }
  ]
};

jest.mock("axios", () => ({
  get: (_url) => { 
    return new Promise((resolve) => {
      if (mockError) 
        throw Error("Mock error")

      url = _url
      resolve({
        data: mockApiResponse
      })
    })
  }
}))

describe("loadArticles", () => {
    it("fetches headlines", async () => {
      const commit = jest.fn()
      await actions.loadArticles({ commit })
  
      expect(url).toContain("https://newsapi.org/v2/top-headlines?country=us&apiKey=")
      expect(commit).toHaveBeenCalledWith('SET_Articles', mockApiResponse.articles)
    })
  })
