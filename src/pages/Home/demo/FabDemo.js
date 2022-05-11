import React from 'react';
import {Center, Box, Fab, Icon} from 'native-base';

const FabDemo = () => {
  return (
    <Center>
      <Box
        height="200"
        w="400"
        shadow="3"
        rounded="lg"
        _dark={{
          bg: 'coolGray.200:alpha.20',
        }}
        _light={{
          bg: 'coolGray.200:alpha.20',
        }}>
        <Fab renderInPortal={false} shadow={2} size="lg" />
      </Box>
    </Center>
  );
};

export default FabDemo;
