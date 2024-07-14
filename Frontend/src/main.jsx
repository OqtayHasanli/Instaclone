import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.900", "whiteAlpha.900")(props)
    }
  })
}

import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config, styles })

export default theme

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>

)
