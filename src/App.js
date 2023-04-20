import { useDispatch } from "react-redux";
import { getText } from "./redux/textsSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getText({ count, showHTML }));
  }, []);

  console.log(count);
  return (
    <div >
      
    </div>
  );
}

export default App;
