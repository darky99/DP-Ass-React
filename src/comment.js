import RelpyIcon from "./components/svgs";

export default function CommentComp(comment) {
  let tempComment = comment.comment;
  console.log("comment", tempComment);
  return (
    <div className="commentBox">
      <div className="comentHeader">
        <img className="avatar" src={tempComment.user.image.webp} alt="avtar" />
        <div className="headContent">
          <div className="userName">{tempComment.user.username}</div>
          <div className="timeStamp">{tempComment.createdAt}</div>

          <button className="replyButton">
            {" "}
            <RelpyIcon />
            Reply
          </button>
        </div>
      </div>
      <div>{tempComment.content}</div>
    </div>
  );
}
