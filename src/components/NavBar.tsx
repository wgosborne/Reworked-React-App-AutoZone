import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/AutoZone-Logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} width={'130px'} height={'60px'} objectFit={'cover'} />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
