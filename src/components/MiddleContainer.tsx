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
    "values": [
        {
            "id": "000000006F37D67062A2497E9E482C644A47FBB34BDFDF1ACE000000000",
            "read": true,
            "received": "2016-05-26 16:24:01",
            "sender": {
                "email": "Linus Torvalds",
                "name": "torvalds@kernel.org"
            },
            "size": 2319,
            "subject": "[RFC] Remove big kernel lock"
        },
        {
            "id": "000000006F37D67062A2497E9E482C644A8834BB010949AD900000000",
            "read": false,
            "received": "2016-05-25 11:59:35",
            "sender": {
                "email": "Guido van Rossum",
                "name": "guid@python.org"
            },
            "size": 2319,
            "subject": "[RFC] Make dict's ordered by default"
        }
    ]
}
return json;
}
class MiddleContainer extends React.Component<{}, {}> { 
     
    render() {
        const items = getItems(); 
 return (
<div>
 {items.values.map((list) => {
 return (
 <List key={list.id} >
   <ListItem
          button        
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={list.sender.email} />
          <ListItemText primary={list.subject} />
        </ListItem>
</List>
)
})}</div>)
    }
}
export default MiddleContainer;
