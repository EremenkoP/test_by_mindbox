import { OneList } from "../components";
import style from "./App.module.scss";

function App() {
  return (
    <section className={style.app}>
      <h1 className={style.title}>todos</h1>
      <OneList />
    </section>
  );
}

export default App;

