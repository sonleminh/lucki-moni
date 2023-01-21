import './App.css';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Fireworks } from '@fireworks-js/react';
function App() {
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);

  const handleOpenBtn = () => {
    setIsShow(true);
  };

  const handleCloseBtn = () => {
    setIsShow(false);
  };

  const handleShow1 = () => {
    setIsShow1(!isShow1);
  };
  const handleShow2 = () => {
    setIsShow2(!isShow2);
  };
  const handleShow3 = () => {
    setIsShow3(!isShow3);
  };
  const handleShow4 = () => {
    setIsShow4(!isShow4);
  };
  return (
    <div className='App'>
      <Box
        className='header'
        position={'relative'}
        textAlign='center'
        alignItems={'center'}>
        {/* <Image src='https://media.licdn.com/dms/image/D5612AQGPu_Bp3Z3psg/article-inline_image-shrink_1000_1488/0/1671546666158?e=1678320000&v=beta&t=F2cE1LriNwe3YXNcGvBXLbuqTs9iNmu8EWDdn8Grq1I'></Image> */}
        <Button
          w={'180px'}
          p='8px'
          position={'absolute'}
          top='250px'
          right={'120px'}
          borderRadius='15px'
          bg='#96030b'
          color={'white'}
          fontWeight='700'
          border={'1px solid #ffbd67'}
          onClick={handleOpenBtn}>
          Nhận lời chúc từ Son Le
        </Button>
        {isShow ? (
          <Box position={'fixed'} w='100%' mt='50px'>
            <Fireworks
              options={{
                rocketsPoint: {
                  min: 0,
                  max: 100,
                },
              }}
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
              }}
            />
            <Image src='loichuc.png'></Image>
            <Button
              position={'absolute'}
              right='10px'
              top={'0'}
              p='10px 20px'
              borderRadius={'8px'}
              bg='#ee1925'
              color={'#ffffb8'}
              border='1px solid #fcbb57'
              onClick={handleCloseBtn}>
              X
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Box className='body'>
        <Container w={'280px'} m='0 auto'>
          <Box
            pt={'10px'}
            textAlign={'center'}
            fontSize={'20px'}
            fontWeight='bold'
            color={'#ffbd67'}>
            Pick lì xì đi ku
          </Box>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem
              w='100%'
              textAlign={'center'}
              mt='20px'
              onClick={handleShow1}>
              <Image
                src='bao1.png'
                boxSize={'100px'}
                h='180px'
                objectFit='cover'
              />
              {isShow1 ? (
                <Box>
                  <Box
                    position={'fixed'}
                    top='30%'
                    left='20px'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'350px'}
                      src='lixi1.png'
                      objectFit={'cover'}
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bg='#ee1925'
                      color={'#ffffb8'}
                      onClick={handleCloseBtn}>
                      X
                    </Button>
                    <div className='pyro'>
                      <div className='before'></div>
                      <div className='after'></div>
                    </div>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </GridItem>
            <GridItem
              w='100%'
              textAlign={'center'}
              mt='20px'
              onClick={handleShow2}>
              <Image
                src='bao2.png'
                boxSize={'100px'}
                h='180px'
                objectFit='cover'
              />
              {isShow2 ? (
                <Box>
                  <Box
                    position={'fixed'}
                    top='30%'
                    left='20px'
                    h='100vh'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'350px'}
                      src='lixi2.png'
                      objectFit={'cover'}
                      zIndex='2'
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bg='#ee1925'
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={handleCloseBtn}>
                      X
                    </Button>
                    <Fireworks
                      options={{
                        rocketsPoint: {
                          min: 0,
                          max: 100,
                        },
                      }}
                      style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                      }}
                    />
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </GridItem>
            <GridItem
              w='100%'
              textAlign={'center'}
              mt='20px'
              onClick={handleShow3}>
              <Image
                src='bao3.png'
                boxSize={'100px'}
                h='180px'
                objectFit='cover'
              />
              {isShow3 ? (
                <Box>
                  <Box
                    position={'fixed'}
                    top='30%'
                    left='20px'
                    h='100vh'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'350px'}
                      src='lixi3.png'
                      objectFit={'cover'}
                      zIndex='2'
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bg='#ee1925'
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={handleCloseBtn}>
                      X
                    </Button>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </GridItem>
            <GridItem
              w='100%'
              textAlign={'center'}
              mt='20px'
              onClick={handleShow4}>
              <Image
                src='bao4.png'
                boxSize={'100px'}
                h='180px'
                objectFit='cover'
              />
              {isShow4 ? (
                <Box>
                  <Box
                    position={'fixed'}
                    top='30%'
                    left='20px'
                    h='100vh'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'350px'}
                      src='lixi4.png'
                      objectFit={'cover'}
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bg='#ee1925'
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={handleCloseBtn}>
                      X
                    </Button>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
