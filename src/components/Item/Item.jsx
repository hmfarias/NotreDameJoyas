/** Product Item
 * * Item.jsx
 * Implements and returns a card corresponding to a specific product
 * Params:
 * 	item: It's a only element of the "products" object which contains the necessary data for the card of that product
 */

import {
	Box,
	Heading,
	Text,
	Img,
	Flex,
	Center,
	useColorModeValue,
	HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
	return (
		<Center py={6}>
			<Box
				w="xs"
				rounded={'sm'}
				my={5}
				mx={[0, 5]}
				overflow={'hidden'}
				bg="white"
				border={'1px'}
				borderColor="black"
				boxShadow={useColorModeValue('7px 7px 0 grey', '7px 7px 0 #887F76')}
			>
				<Box h={'200px'} borderBottom={'1px'} borderColor="black">
					<Img
						src={item.thumbnail}
						roundedTop={'sm'}
						objectFit="scale-down"
						h="full"
						w="full"
						alt={'Blog Image'}
					/>
				</Box>
				<Box p={4}>
					<Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
						{item.title}
					</Heading>
					<Text color={'gray.500'} noOfLines={2}>
						{item.description}
					</Text>
					<Box bg="gold" display={'inline-block'} px={2} py={1} color="grey" mb={2}>
						<Text fontSize={'xs'} fontWeight="medium">
							★ {item.rating}
						</Text>
					</Box>
					<Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
						<Text fontSize={'xs'} fontWeight="medium">
							${item.price}
						</Text>
					</Box>
				</Box>
				<HStack borderTop={'1px'} color="black">
					<Flex
						p={4}
						alignItems="center"
						justifyContent={'space-between'}
						roundedBottom={'sm'}
						cursor={'pointer'}
						w="full"
					>
						<Link to={`/NotreDameJoyas/item/${item.id}`}>
							<Text fontSize={'md'} fontWeight={'semibold'}>
								View more
							</Text>
						</Link>
						<BsArrowUpRight />
					</Flex>
				</HStack>
			</Box>
		</Center>
	);
};