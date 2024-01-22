import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { BrowserRouter, Route } from 'react-router-dom';

import MenuItemCard from './MenuItemCard';
import { useState } from 'react';
import ReleaseResults from './ReleaseResults';

const menuItems = [
	'Release Results Menu',
	'Store Load Reports Menu',
	'Manifest Menu',
	'Release Schedules Menu',
	'Release Contents Menu',
	'Utilities Menu'
];

const MainMenu = () => {
	const [currPage, setCurrPage] = useState('');

	const isLoading = false;
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (currPage === '') {
		return (
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
				{/* {isLoading &&
          skeletons.map((skeleton) => (
            <MenuItemContainer >
              <GameCardSkeleton />
            </MenuItemContainer>
          ))} */}

				{menuItems.map(item => (
					<MenuItemCard key={item} item={item} onSelectMenuItem={item => setCurrPage(item)} />
				))}
			</SimpleGrid>
		);
	} else if (currPage === 'Release Results Menu') {
		return <ReleaseResults />;
	}
};

export default MainMenu;
