import Sidebar from './Sidebar'
import SpotifyWebApi from 'spotify-web-api-node'
import Body from './Body'
import Right from './Right'
import { playingTrackState } from '../atoms/playerAtom'
import { useRecoilState } from 'recoil'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Player from './Player'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {
  const { data: session } = useSession()
  const { accessToken } = session

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)
  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(() => {
    setShowPlayer(true)
  }, [])

  const chooseTrack = (track) => {
    setPlayingTrack(track)
  }

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <main className="flex min-h-screen bg-black min-w-max lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right chooseTrack={chooseTrack} spotifyApi={spotifyApi} />

      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
      )}
    </main>
  )
}

export default Dashboard
