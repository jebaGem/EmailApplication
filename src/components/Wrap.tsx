import React from 'react';
import Box from '@material-ui/core/Box';
import LeftMenu from './LeftMenu';
import MiddleContainer from './MiddleContainer'
import RightMenu from './RightMenu'
export default function FlexWrap() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: '100%' }}
      >
        <Box p={1} css={{ maxWidth: '30%' }} bgcolor="grey.300">
         <LeftMenu />
        </Box>
        <Box p={1} bgcolor="grey.300">
          <MiddleContainer/>
        </Box>
        <Box p={1} bgcolor="grey.300">
         <RightMenu />
        </Box>
      </Box>
      
      
    </div>
  );
}
