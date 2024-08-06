
import 'react-pro-sidebar/dist/css/styles.css';
import {
   ProSidebar,
   Menu,
   MenuItem,
   SubMenu,
   SidebarHeader,
   SidebarFooter,
   SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { DiReact } from "react-icons/di";
import { MdDashboard } from 'react-icons/md'

const Sidebar = (props) => {
   const { image, collapsed, toggled, handleToggleSidebar } = props;
   return (
      <>
         <ProSidebar
            image={sidebarBg}

            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
         >
            <SidebarHeader>
               <div
                  style={{
                     padding: '24px',
                     textTransform: 'uppercase',
                     fontWeight: 'bold',
                     fontSize: 14,
                     letterSpacing: '1px',
                     overflow: 'hidden',
                     textOverflow: 'ellipsis',
                     whiteSpace: 'nowrap',
                  }}
               >
                  <DiReact size={'3em'} />
                  <span>Ask IT</span>
               </div>
            </SidebarHeader>

            <SidebarContent>
               <Menu iconShape="circle">
                  <MenuItem
                     icon={<FaTachometerAlt />}

                  >
                     Dashboard
                  </MenuItem>

               </Menu>
               <Menu iconShape="circle">
                  <SubMenu
                     // suffix={<span className="badge yellow">3</span>}
                     // icon={<FaRegLaughWink />}
                     icon={<FaGem />}
                     title='Features'
                  >
                     <MenuItem>Users</MenuItem>
                     <MenuItem>Quizz</MenuItem>
                     <MenuItem>Question</MenuItem>
                  </SubMenu>
               </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
               <div
                  className="sidebar-btn-wrapper"
                  style={{
                     padding: '20px 24px',
                  }}
               >
                  <a
                     href="https://github.com/azouaoui-med/react-pro-sidebar"
                     target="_blank"
                     className="sidebar-btn"
                     rel="noopener noreferrer"
                  >
                     <FaGithub />
                     <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        Duy Anh
                     </span>
                  </a>
               </div>
            </SidebarFooter>
         </ProSidebar>
      </>
   )
}

export default Sidebar;