import {
  Container,
  ListContainer,
  LocationCardContainer,
  Image,
  HeadingDescriptionContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const LocationList = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <Container>
      <ListContainer>
        <LocationCardContainer>
          <Image src={imageUrl} alt={name} />
          <HeadingDescriptionContainer>
            <Heading>{name}</Heading>
            <Paragraph>{description}</Paragraph>
          </HeadingDescriptionContainer>
        </LocationCardContainer>
      </ListContainer>
    </Container>
  )
}

export default LocationList
