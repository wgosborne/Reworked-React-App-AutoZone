import { Heading } from '@chakra-ui/react';
//Not using this right now but it is for a dynamic header, pass the filters in through props

interface Props {
	//gameQuery: GameQuery;
}

const GameHeading = () => {
	//{ gameQuery }: Props
	// const heading = `${gameQuery.platform?.name || ""} ${
	//   gameQuery.genre?.name || ""
	// } Games`;

	const heading = 'AutoZone';

	return (
		<Heading as="h1" marginY={5} fontSize={'5xl'}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
