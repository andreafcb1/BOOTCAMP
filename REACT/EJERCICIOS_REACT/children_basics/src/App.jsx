import './App.css'
import {Title, SubTitle, Paragraph, Image, Header, Main, Footer} from "./components/index.js"

const App = () => {
  
  const title = "Título del Header"
  const subtitle = "Frase del Footer"
  const paragraph = "Pie de foto" 
  const src = "https://res.cloudinary.com/dpkqzc5zh/image/upload/v1685388494/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail_dusf9e.png"
  const alt = "LogoReact"

  return (
    <>
     <Header children={<Title data={title}/>}/>
     <Main children={<Image src={src} alt={alt}/>} children1={ <Paragraph data={paragraph}/>}/>
     <Footer children={<SubTitle data={subtitle}/>}/>
    </>
  )
}

export default App
