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
