import QuestionList from "./components/QuestionList"
import FormHeader from "./components/FormHeader.js"
import { FormContextProvider } from "./contexts/FormContext.js"
function App() {

  return (
    <>
      <FormHeader />
      <FormContextProvider>
        <QuestionList />
      </FormContextProvider>
    </>
  )
}

export default App;
