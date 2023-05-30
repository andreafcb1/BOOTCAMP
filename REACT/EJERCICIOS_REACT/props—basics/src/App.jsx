
import './App.css'
import {Image, Paragraph, SubTitle, Title} from "./components/index.js"

const App = () => {
  
  const title = "Welcome to Components ReactJS"
  const subtitle = "This is a example components with ReactJS"
  const paragraph = "Aprendiendo props en ReactJS" 
  const src = "https://res.cloudinary.com/dpkqzc5zh/image/upload/v1685388494/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail_dusf9e.png"
  const alt = "LogoReact"


  return (
    <>
     <Title data={title}/>
     <SubTitle data={subtitle}/>
     <Paragraph data={paragraph}/>
     <Image src={src} alt={alt}/>
    </>
  )
}

export default App
