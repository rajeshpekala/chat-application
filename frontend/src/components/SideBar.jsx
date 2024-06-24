
import Conversations from './sidebar/Conversations'
import LogoutButton from './sidebar/LogoutButton'
import SearchInput from './sidebar/SearchInput'

const SideBar = () => {
  return (
    <div className='border border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'>

        </div>
    <Conversations />
    <LogoutButton/>
    </div>
  )
}

export default SideBar