import { useState } from "react";
import Copilot from "../components/Copilot";
import Inbox from "../components/Inbox";
import Chat from "../components/Chat";
import { useNavigate, useParams } from "react-router-dom";
import { inboxItems } from "../data/inboxItems";
import { NoChatSelected } from "../components/other/NoChatSelected";

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedMessage = id ? parseInt(id) : null;
  const [showMobileCopilot, setShowMobileCopilot] = useState(false);

  const handleSelectMessage = (index) => {
    navigate(`/message/${index}`);
  };

  const handleToggleMobileCopilot = () => {
    setShowMobileCopilot(!showMobileCopilot);
  };

  return (
    <div className="flex h-screen relative">
      <Inbox
        selectedMessage={selectedMessage}
        onSelectMessage={handleSelectMessage}
        inboxItems={inboxItems}
      />

      {selectedMessage !== null ? (
        <Chat
          selectedMessage={selectedMessage}
          inboxItems={inboxItems}
          onToggleMobileCopilot={handleToggleMobileCopilot}
        />
      ) : (
        <NoChatSelected />
      )}

      {/* Desktop Copilot */}
      <Copilot />

      {/* Mobile Copilot Modal */}
      {showMobileCopilot && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowMobileCopilot(false)}
          />
          <div className="fixed inset-4 z-50">
            <Copilot
              isMobileModal={true}
              onClose={() => setShowMobileCopilot(false)}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Dashboard;
