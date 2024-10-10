import { useRecoilState } from 'recoil'
import { playingTrackState, playState } from '../atoms/playerAtom'

function RecentlyPlayed({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState)
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)

  const handlePlay = () => {
    chooseTrack(track)

    if (track.uri === playingTrack.uri) {
      setPlay(!play)
    }
  }

  return (
    <div className="flex items-center space-x-3" onClick={handlePlay}>
      <img
        src={track.albumUrl}
        alt=""
        className="h-[52px] w-[52px] rounded-full"
      />
      <div>
        <h4 className="mb-0.5 max-w-[150px] cursor-pointer truncate text-[13px] font-semibold text-white hover:underline">
          {track.title}
        </h4>
        <p className="cursor-pointer text-xs font-semibold text-[#686868] hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  )
}

export default RecentlyPlayed
