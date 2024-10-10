import { atom } from 'recoil'

export interface ITrack {
  id: string
  artist: string
  title: string
  uri: string
  albumUrl: string
  popularity: number
}

export const playState = atom({
  key: 'playState',
  default: false,
})

export const playingTrackState = atom<ITrack>({
  key: 'playingTrackState',
  default: null,
})
