import Card from './Card'

export default function Cards({ characters }) {
  const onClose = () => window.alert('Emulamos que se cierra la card')
  return (
    <div>
      {characters.map(({ name, gender, species, image, index }) => {
        return (
          <Card
            key={index}
            name={name}
            gender={gender}
            species={species}
            image={image}
            onClose={onClose}
          />
        )
      })}
    </div>
  )
}
