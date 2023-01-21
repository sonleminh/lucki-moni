import './App.css';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
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
    setIsShow1(true);
  };
  const handleShow2 = () => {
    setIsShow2(true);
  };
  const handleShow3 = () => {
    setIsShow3(true);
  };
  const handleShow4 = () => {
    setIsShow4(true);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
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
            <Box position='relative'>
              <Image src='loichuc.png'></Image>
              <Button
                position={'absolute'}
                right='0'
                top={'0'}
                p='10px 20px'
                borderRadius={'8px'}
                bgImage='mememthi.png'
                bgSize={'cover'}
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
                    w='100%'
                    position={'fixed'}
                    top='30%'
                    left='0'
                    border='1px solid #ecc062'>
                    <Image
                      position={'relative'}
                      boxSize={'100%'}
                      src='lixi1.png'
                      objectFit={'cover'}
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bgImage='mememthi.png'
                      bgSize={'cover'}
                      color={'#ffffb8'}
                      onClick={onOpen}
                      zIndex='100'>
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
                    w='100%'
                    position={'fixed'}
                    top='30%'
                    left='0'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'100%'}
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
                      bgImage='mememthi.png'
                      bgSize={'cover'}
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={onOpen}
                      zIndex='100'>
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
                    w='100%'
                    position={'fixed'}
                    top='30%'
                    left='0'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'100%'}
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
                      bgImage='mememthi.png'
                      bgSize={'cover'}
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={onOpen}
                      zIndex='100'>
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
                    w='100%'
                    position={'fixed'}
                    top='30%'
                    left='0'
                    border='1px solid #ecc062'>
                    <Image
                      boxSize={'100%'}
                      src='lixi4.png'
                      objectFit={'cover'}
                    />
                    <Button
                      position={'absolute'}
                      right='0'
                      top={'0'}
                      p='10px 20px'
                      borderRadius={'8px'}
                      bgImage='mememthi.png'
                      bgSize={'cover'}
                      color={'#ffffb8'}
                      border='1px solid #fcbb57'
                      onClick={onOpen}
                      zIndex='100'>
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
          </Grid>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogBody
                  w='100%'
                  h='300px'
                  position='fixed'
                  top='100px'>
                  <Button
                    ref={cancelRef}
                    onClick={onClose}
                    p='10px 20px'
                    position='absolute'
                    right='0'
                    // bg='#ee1925'
                    bgImage='mememthi.png'
                    bgSize={'cover'}
                    color={'#ffffb8'}
                    border='1px solid #fcbb57'
                    fontSize={'30px'}>
                    X
                  </Button>
                  <Image src='mememe.png' />
                  <Text
                    m='0 20px'
                    position='absolute'
                    top='350px'
                    color='white'
                    textShadow={
                      ' -1px 0 black, 0 1px black,      1px 0 black, 0 -1px black'
                    }
                    fontSize={'24px'}>
                    Ai cho mở tiếp. Chụp màn hình lại gửi qua để được nhận tiền
                    lì lì ♥
                  </Text>
                </AlertDialogBody>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Container>
      </Box>
    </div>
  );
}

export default App;
