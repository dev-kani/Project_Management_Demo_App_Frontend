import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModal from '../components/modals/AddClientModal'
import AddProjectModal from '../components/modals/AddProjectModal'

export default function Home() {
  return (
    <div className='container'>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </div>
  )
}