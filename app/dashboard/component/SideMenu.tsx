"use client"
"use client"
import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const SideMenu = () => {

  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

// mobile size code start
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <Accordion className="LargeDrawer" onClick={(e) => e.stopPropagation()}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="sideMenuIcons">
            <img src="image/help.png" alt="" />
            <span>Deshboard</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="LargeDrawer" onClick={(e) => e.stopPropagation()}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="sideMenuIcons">
            <img src="image/help.png" alt="" />
            <span>Deshboard</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
  // mobile size code end

  return (
    <div>
      {/* laptop size code start */}
      <ul className="d-none d-lg-block deshboard_Menu shadow">
        <li className="ListSideMEnu">
          <Link href="common/ProjectManagerUpcomings">
            <img src="image/Vector.png" alt="" />
          </Link>
          <ul className="subMainSideMenu">
            <li className="subSideMenu">
              <Link href="">
                Dashboard
              </Link>
            </li>

            <li className="subSideMenu">
              <Link href="">
                Project Manager
              </Link>
            </li>

            <li className="subSideMenu">
              <Link href="">
                Today Interviews
              </Link>
            </li>
          </ul>
        </li>
        <li className="ListSideMEnu">
          <img src="image/user1.png" alt="" />
          <ul className="subMainSideMenu">
            <li className="subSideMenu">
              <Link href="">
                Dashboard
              </Link>
            </li>

            <li className="subSideMenu">
              <Link href="">
                Project Manager
              </Link>
            </li>

            <li className="subSideMenu">
              <Link href="">
                Today Interviews
              </Link>
            </li>
          </ul>
        </li>

        <li className="ListSideMEnu">
          <img src="image/shoping.png" alt="" />
          <ul className="subMainSideMenu">
            <li className="subSideMenu">
              <Link href="">
                Dashboard
              </Link>
            </li>

            <li className="subSideMenu">
              <Link href="">
                Project Manager
              </Link>
            </li>

            <li className="subSideMenu">
              <Link className="" href="">
                Today Interviewdds
              </Link>
            </li>
          </ul>
        </li>


        <li className="ListSideMEnu">
          <img src="image/filter.png" alt="" />
        </li>

        <li className="ListSideMEnu">
          <img src="image/noteIcon.png" alt="" />
        </li>

        <li className="ListSideMEnu">
          <img src="image/Frame.png" alt="" />
        </li>

        <li className="ListSideMEnu">
          <img src="image/help.png" alt="" />
        </li>

        <li className="ListSideMEnu">
          <img src="image/menuSElect.png" alt="" />
        </li>


        <li className="ListSideMEnu">
          <img src="image/menuData.png" alt="" />
        </li>

        <li className="ListSideMEnu">
          <img src="image/help.png" alt="" />
        </li>
      </ul>


      {/* mobile size code start */}
      <div className="d-lg-none">
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
};

export default SideMenu
