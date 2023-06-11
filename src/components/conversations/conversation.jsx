import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <span className="conversationName">vijay shinde</span>
    </div>
  );
}