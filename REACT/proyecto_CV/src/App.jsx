import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import About from './components/About/About';
import { CV } from './CV/Cv'

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
        <Hero hero={hero}/>
        <About hero={hero} />
        <div className='buttons'>
        <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
        </div>
            <div>
        {showEducation ? (<Education education={education} />) : (<Experience experience={experience} />)}
      </div>
	      <More
        languages={languages}
        habilities={habilities}
	      />
    </div>
  )
}

export default App
