const MessageForm = () => {
  return (
    <div className="messageFormMain">
      <div className="inputText">
        <div>
          <span>
            <img src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
            <input type="text" placeholder="Write your message" />
          </span>
        </div>
      </div>
      <div className="messageFormButton">
        <span>
          <img src="https://img.icons8.com/fluent-systems-filled/48/000000/edit-message.png" />
          <button className="addReplay">Add Replay</button>
          <button className="uploadMedia">Upload Media</button>
          <img src="https://img.icons8.com/metro/26/000000/upload.png" />
        </span>
      </div>
    </div>
  );
};

export default MessageForm;
