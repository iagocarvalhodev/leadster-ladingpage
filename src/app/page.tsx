import { BannerLeads } from './components/BannerLeads/BannerLeads'
import { ListVideos } from './components/ListVideos/ListVideos'
import { SubHeader } from './components/SubHeader/SubHeader'

export default function Home() {
  return (
    <main>
      <SubHeader />
      <ListVideos />
      <BannerLeads />
    </main>
  )
}
