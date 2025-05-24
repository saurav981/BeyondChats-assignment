import {
  MoreHorizontal,
  Smile,
  ChevronDown,
  MessageSquareText,
  Zap,
  BookmarkPlus,
  MoonStar,
  Archive,
  ArrowLeft,
  PanelLeft,
} from "lucide-react";
import girlPic from "../assets/girlPic.jpeg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Chat = ({ selectedMessage, inboxItems, onToggleMobileCopilot }) => {
  const currentChat = inboxItems[selectedMessage];
  const textareaRef = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  const handleInput = () => {
    const el = textareaRef.current;
    el.style.height = "auto"; // Reset height
    el.style.height = el.scrollHeight + "px"; // Set to scroll height
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Message Header */}
      <div className="border-b border-gray-200 py-2 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/message" className="iconHoverTransition md:hidden">
              <ArrowLeft size={15} />
            </Link>

            <h2 className="text-lg font-bold text-black/75">
              {currentChat.sender.split(" - ")[0]}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop view - show all icons */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="iconHoverTransition">
                <MoreHorizontal size={15} />
              </button>

              <button className="iconHoverTransition">
                <MoonStar size={15} fill="black" />
              </button>

              <button className="p-1.5 px-3 flex items-center gap-1 bg-black/85 text-white rounded-lg hover:bg-black transition duration-200">
                <Archive size={15} className="text-white/75" strokeWidth={3} />
                <span className="font-bold text-white/75 text-sm">Close</span>
              </button>
            </div>

            {/* Mobile view - show 3 dots and panel button */}
            <div className="lg:hidden flex items-center gap-2 relative">
              <button className="iconHoverTransition" onClick={togglePopover}>
                <MoreHorizontal size={15} />
              </button>

              <button
                className="iconHoverTransition"
                onClick={onToggleMobileCopilot}
              >
                <PanelLeft size={15} />
              </button>

              {/* Popover */}
              {showPopover && (
                <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 min-w-32">
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-50 rounded text-sm">
                    <MoonStar size={15} fill="black" />
                    <span>Moon</span>
                  </button>

                  <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-50 rounded text-sm">
                    <Archive size={15} strokeWidth={3} />
                    <span>Close</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex overflow-auto">
        <div className="flex-1 p-6">
          <div className="flex-1 space-y-4">
            {currentChat.chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.isUser ? "mr-12" : "ml-12"
                  }`}
                >
                  {/* Message Bubble */}
                  <div
                    className={`${
                      message.isUser ? "bg-gray-50" : "bg-blue-50"
                    } rounded-lg p-4`}
                  >
                    <p className="text-sm text-gray-900">{message.message}</p>
                  </div>

                  {/* Avatar and Time */}
                  <div
                    className={`flex items-center mt-1 ${
                      message.isUser ? "" : "flex-row-reverse"
                    }`}
                  >
                    {message.isUser ? (
                      <>
                        <div
                          className={`w-6 h-6 rounded-full ${currentChat.avatarColor} flex items-center justify-center text-white text-xs font-medium`}
                        >
                          {currentChat.sender[0]}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          {message.time}
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          src={girlPic}
                          alt="Customer care agent"
                          className="w-6 h-6 rounded-full object-cover mt-0.5"
                        />
                        <span className="text-xs text-gray-500 mx-1.5">
                          {message.time}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reply Box */}
      <div className="border border-gray-200 p-4 m-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.04)]">
        <div className="flex gap-1.5 items-center">
          <MessageSquareText
            size={15}
            fill="black"
            color="white"
            className="relative top-[2px]"
          />
          <p className="text-sm font-semibold text-gray-800">Chat</p>
          <ChevronDown
            size={15}
            absoluteStrokeWidth={1}
            className="relative top-[1.5px]"
          />
        </div>

        <textarea
          ref={textareaRef}
          onInput={handleInput}
          className="w-full text-sm py-2 pr-2 outline-none resize-none bg-transparent overflow-auto max-h-80"
          placeholder="Use #K for shortcuts"
          rows={2}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="iconHover">
              <Zap size={14} fill="black" />
            </div>
            <p className="text-gray-500 relative bottom-0.5">|</p>
            <div className="iconHover">
              <BookmarkPlus size={19} fill="black" color="white" />
            </div>
            <div className="iconHover">
              <Smile size={17} fill="black" color="white" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-400 font-bold iconHover">Send</p>
            <p className="text-sm text-gray-200">|</p>
            <div className="iconHover">
              <ChevronDown
                size={15}
                absoluteStrokeWidth={1}
                className="text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close popover when clicking outside */}
      {showPopover && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowPopover(false)}
        />
      )}
    </div>
  );
};

export default Chat;
