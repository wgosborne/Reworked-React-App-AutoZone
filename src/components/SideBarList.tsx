import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
  } from "@chakra-ui/react";
  import useGenres, { Genre } from "../hooks/useGenres";
  import getCroppedImageURL from "../services/image-url";
  
 const sideOptions = [
  'Home',
  'Release Results',
  'Store Load Apply',
  'Manifest',
  'Release Schedule',
  'Release Contents',
  'Utilities'
 ]
  
  const SideBarList = () => {
    const isLoading = false;
    const error = false;
  
    if (error) return null;
  
    if (isLoading) return <Spinner />;
  
    return (
      <>
        <Heading fontSize={'2xl'} marginBottom={3}>Release Net</Heading>
        <List>
          {sideOptions.map((option) => (
            <ListItem key={option} paddingY={"5px"}>
            <HStack>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={"normal"}
                onClick={() => {
                
                }}
                fontSize={"lg"}
                variant={"link"}
              >
                {option}
              </Button>
            </HStack>
          </ListItem>
          ))}
            
        </List>
      </>
    );
  };
  
  export default SideBarList;
  