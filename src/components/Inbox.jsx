import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Inbox = ({ selectedMessage, onSelectMessage, inboxItems }) => {
  return (
    <div
      className={`w-72 border-r border-gray-200 ${
        selectedMessage !== null ? "hidden md:flex" : "flex-1 md:flex"
      } flex-col bg-white`}
    >
      {/* Header */}
      <div className="py-2 px-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <Link to="/message">
            <h1 className="text-lg font-bold text-black/75">Your inbox</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3 text-sm">
        <button className="flex items-center gap-1 px-2 py-1 text-sm rounded-md font-bold text-black/75">
          {inboxItems.length} Open
          <ChevronDown
            className="size-3.5 relative top-[1px] text-black/75"
            strokeWidth={4}
          />
        </button>
        <button className="flex items-center gap-1 px-2 py-1 text-sm rounded-md font-bold text-black/75">
          Waiting longest
          <ChevronDown
            className="size-3.5 relative top-[1px] text-black/75"
            strokeWidth={4}
          />
        </button>
      </div>

      {/* Inbox List */}
      <div className="flex-1 overflow-y-auto">
        {inboxItems.map((item, index) => (
          <div
            key={item.id}
            className={`px-4 py-3 mx-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 rounded-xl transition duration-200 ${
              selectedMessage === index ? "bg-blue-50" : ""
            }`}
            onClick={() => onSelectMessage(index)}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-full ${item.avatarColor} flex items-center justify-center text-white text-sm font-medium`}
              >
                {item.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm ${
                      item.unread ? "font-semibold" : "font-medium"
                    } text-gray-900 truncate`}
                  >
                    {item.sender}
                  </span>
                  {item.urgent && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                  {item.unread && !item.urgent && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {item.subject}
                </p>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
