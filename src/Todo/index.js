import StoreProvider from "./store/Provider"
import Content from './App'

function App() {

    return (
        <StoreProvider>
            <Content />
        </StoreProvider>
    )
}

export default App