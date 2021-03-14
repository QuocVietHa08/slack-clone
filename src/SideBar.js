import React, { useEffect, useState } from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { ExpandLess } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';
function SideBar() {
  const [channels, setChannels] = useState([]);

  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      );
    });
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h3>Ha quoc viet company</h3>
          <h5>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h5>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={CreateIcon} title='Edward Company' />
      <SidebarOption Icon={InboxIcon} title='Inbox' />
      <SidebarOption Icon={DraftsIcon} title='Drafts' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Bookmark' />
      <SidebarOption Icon={PeopleAltIcon} title='People' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File Copy' />
      <SidebarOption Icon={ExpandLess} title='Expend less' />
      <SidebarOption Icon={ExpandMoreIcon} title='Channel' />
      <SidebarOption Icon={AddIcon} title='Add channel' addChannelOption />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default SideBar;
