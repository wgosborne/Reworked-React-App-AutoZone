import { Button, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import eveningStorePic from '../assets/AZEveningStore.jpg';
import getCroppedImageURL from "../services/image-url";

interface Props {
  item: string;
  onSelectMenuItem: (item: string) => void;
}

const ItemCard = ({ item, onSelectMenuItem }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={eveningStorePic}/>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          {/* <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
              <CriticScore score={game.metacritic} /> */}
        </HStack>
        <Button
          fontSize={"2xl"}
          variant={"ghost"}
          onClick={() => onSelectMenuItem(item)}
        >
          {item}
        </Button>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
