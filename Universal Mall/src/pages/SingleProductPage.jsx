import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlineStars } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';

export const SingleProductPage = () => {
    const { id } = useParams();
    const Product = useSelector((store) => {
        return store.AppReducer.products;
    });
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const newData = Product.find((el) => el.id === +id);
        setProductData(newData);
    }, [])

    return (
        <div>
            <Box bg='#f4f4f4'>

                <Box fontSize='xl'>SingleProductPage</Box>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} w='100%' mt='30px'>
                    <Box p='20px' display='flex' h='450px' bg='white'>
                        <Image border='1px solid gray' src={productData.img} alt="image" w='80px' h='80px' />
                        <Image className="hoverToIncreaseWidth" mt='70px' ml={{ base: '10px', sm: '20px', md: '70px', lg: '80px' }} src={productData.img} alt="image" w='200px' h='300px' />
                    </Box>
                    <Box align='left' bg='white' p='10px'>
                        <Text fontSize='2xl' as='b'>{productData.description}</Text>
                        <br />
                        <Text fontSize='lg' as='b'>Brand: {productData.brand}</Text>
                        <br />
                        <Text fontSize='sm' as='mark' >{productData.category}</Text>
                        <Text fontSize='xl'>Gender: {productData.gender}</Text>
                        <Box display='flex'>
                            <Text as='b' fontSize='xl'>Original-Price: </Text>
                            <Text display='flex' justifyContent='center' alignItems='center' ml='20px' bg='red' borderRadius='2px' color='white' fontSize='xl' width='120px' as='b' > ₹{productData.originalPrice}</Text></Box>
                        <Box mt='10px' display='flex'><Text as='b' fontSize='xl'>Discounted-Price: </Text>
                            <Text fontSize='xl' display='flex' justifyContent='center' alignItems='center' ml='20px' bg='green' borderRadius='2px' color='white' width='120px' as='b'> ₹{productData.discountPrice}</Text>

                        </Box><Text fontSize='xs' color='gray'>inclusive of all Taxes</Text>
                        <Box mt='60px'>
                            <Button className='addtocart' color='white' m='10px' background='#ef4e28' variant='solid' w='70%' >  Add To Cart  </Button>
                        </Box>
                    </Box>
                    <Box bg='#f4f4f4' m='40px' p='20px' borderRadius='8px' border='1px solid gray' align='left' w={{ base: '260px', sm: '250px', md: '200px', lg: 'max-content' }} h={{ base: '250px', sm: '300px', md: 'max-content', lg: 'max-content' }}>
                        <Text p='10px'>Top Selling Products on Tales & Stories</Text><hr />
                        <Text p='10px'>More Products</Text><hr />
                        <Text p='10px'>Best sellers & Top Offers on Tales & Stories</Text>
                    </Box>
                </SimpleGrid>

                {/* =====================================lower section========================================= */}
                <SimpleGrid
                    mt={{ base: '-30px', sm: '-20px', md: '50px', lg: '50px' }}

                    className="spp_foot"
                    columns={{ base: 1, md: 4, lg: 4 }}
                    w='100%'
                    gap='10'
                    p='5px'

                >
                    <GridItem w="100%" >

                        <Box align='center'><AiOutlineHeart size='20px' /></Box>

                        <Text fontSize='md' color='gray' as='b'>24*7 Help</Text>
                        <Text fontSize='xs' color='gray'>
                            Need Help? Click Here. You can also talk to us on 0120 4606060 to
                            resolve your query.
                        </Text>
                    </GridItem>
                    <GridItem w="100%" >

                        <Box align='center'><VscWorkspaceTrusted size='20px' /></Box>
                        <Text fontSize='md' color='gray' as='b'>Paytm Trust</Text>
                        <Text fontSize='xs' color='gray'>
                            Your money is yours! All refunds come with no question asked
                            guarantee.
                        </Text>
                    </GridItem>
                    <GridItem w="100%" >

                        <Box align='center'><MdOutlineStars size='20px' /></Box>
                        <Text fontSize='md' color='gray' as='b'>100% Assurance</Text>
                        <Text fontSize='xs' color='gray'>
                            At Paytm, we provide 100% assurance. If you have any issue, your
                            money is immediately refunded. Sit back and enjoy your shopping.
                        </Text>
                    </GridItem>
                    <GridItem w="100%" mt={{ base: '20px', lg: '0px' }}>

                        <Box align='center'><BsFillCartCheckFill size='20px' /></Box>
                        <Text fontSize='md' color='gray' as='b'> Paytm Mall Promise</Text>
                        <Text fontSize='xs' color='gray'>
                            Products with this tag are quality checked, and shipped the same
                            day from certified warehouses. So you get the right product,
                            faster.
                        </Text>
                    </GridItem>
                </SimpleGrid>


            </Box>
        </div>
    )
};