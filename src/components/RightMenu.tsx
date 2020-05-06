import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


function getItems() {
  var json =  {
    "html": "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2//EN\">\n<HTML>\n<HEAD>\n<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=utf-8\">\n<META NAME=\"Generator\" CONTENT=\"Kopano HTML builder 1.0\">\n<TITLE></TITLE>\n</HEAD>\n<BODY>\n<!-- Converted from text/plain format -->\n\n<P><FONT STYLE=\"font-family: courier\" SIZE=2><b>Epic patch</b></FONT>\n</P>\n\n</BODY></HTML>",
    "id": "000000006F37D67062A2497E9E482C644A8834BB010000000500000084EFD58B93DE43BB9801C6EC695348FE00000000",
    "importance": "none",
    "received": "2016-05-25 11:55:12",
    "recipients": [
        {
            "email": "Ken Thompson",
            "name": "k.thompson@unix.org"
        }
    ],
    "sender": {
        "email": "d.ritchie@unix.org",
        "name": "Dennis Ritchie"
    },
    "sent": "Wed, 25 May 2016 11:55:12 GMT",
    "size": 2319,
    "subject": "[AWK] Increase memory efficiency",
    "text": "Epic patch\r\n"
}
return json;
}
class MiddleContainer extends React.Component<{}, {}> { 
     
    render() {
        const items = getItems(); 
 return (
<div>

 <List key={items.id} >
   <ListItem
          button
          
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={items.text} />
          <ListItemText primary={items.subject} />
          

        </ListItem>
</List>
</div>)
    }
}
export default MiddleContainer;
