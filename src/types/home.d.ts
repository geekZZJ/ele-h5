export interface Recommend {
  value: number
  label: string
}

export interface TheTopIProps {
  recommends: Recommend[]
}

export interface ISearchResult {
  type: number
  label: string
  resultCount: number
}

export interface IHomeInfo {
  banner: IBanner
  searchRecommends: ISearchRecommend[]
  transformer: ITransformer[]
  countdown: ICountdown
  activities: string[]
}

interface IBanner {
  imgUrl: string
}

interface ITransformer {
  imgUrl: string
  label: string
}

interface ICountdown {
  time: number
  goods: IGood
}
