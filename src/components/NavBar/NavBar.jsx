import {
	Box,
	Flex,
	Avatar,
	Button,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartWidget } from '../CartWidget';
import { useCategory } from '../../hooks';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';

export const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { categories } = useCategory();

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Link to={`/NotreDameJoyas/`}>
						<Image src={logo} objectFit="cover" h="70px" w="auto" alt={'Logo Image'} />
					</Link>
					<Menu>
						<MenuButton as={Button} cursor="pointer" style={{ marginLeft: 30 }}>
							Categorias
						</MenuButton>
						<MenuList height={'300px'} overflowY={'scroll'}>
							{/* add the home option in the menu */}
							<MenuItem key={'home'}>
								<Link to={`/NotreDameJoyas/`}>{'HOME'}</Link>
							</MenuItem>
							{/* add the rest of categories */}
							{categories.map((category) => (
								<MenuItem key={category.slug}>
									<Link to={`/NotreDameJoyas/category/${category.slug}`}>
										{category.name}
									</Link>
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Flex alignItems={'center'}>
						<CartWidget />
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={'https://avatars.dicebear.com/api/male/username.svg'}
									/>
								</MenuButton>
								<MenuList alignItems={'center'}>
									<br />
									<Center>
										<Avatar
											size={'2xl'}
											src={'https://avatars.dicebear.com/api/male/username.svg'}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Servers</MenuItem>
									<MenuItem>Account Settings</MenuItem>
									<MenuItem>Logout</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
