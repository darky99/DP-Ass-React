import "./styles.css";
import CommentComp from "./comment";
import data from "../data/data";

const { comments, currentUser } = data;
export default function App() {
  return (
    <div className="App">
      {comments.map((e) => {
        return <CommentComp comment={e} />;
      })}
    </div>
  );
}
