import './App.css'
import Formulario from '../src/contexts/form/form'
import Counter from '../src/contexts/contador/contador'
import { ThemeProvider } from '../src/contexts/temas/ThemeContext';
import ThemeToggleButton from './contexts/temas/ThemeToggle';
import ThemedComponent from './contexts/temas/ThemedComponent';
function App() {

  return (
    <>
      <Formulario />
      <Counter />
      <ThemeProvider>
        <div style={{ textAlign: 'center' }}>
          <ThemeToggleButton />
          <ThemedComponent />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
