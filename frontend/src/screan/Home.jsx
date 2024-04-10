import Dashboard from '.Home-pages/Dashboard'
import Sidebar from './Home-pages/Sidebar'
const Home = () => {
    return (
        <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle}/>
        <Dashboard 
        sidebarToggle ={sidebarToggle}
        setSidebarToggle ={setSidebarToggle}
        />
     </div>
      );
}
 
export default Home;