import { useState, useEffect } from "react";
import {
  PanelRightClose,
  PanelRightOpen,
  ArrowUp,
  Flower2,
  Users,
  ChevronDown,
  Target,
  Plus,
  Ticket,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";
import girlPic from "../assets/girlPic.jpeg";
import { MobileCopilot } from "./other/MobileCopilot";

const Copilot = ({ isMobileModal = false, onClose }) => {
  const [collapsed, setCollapsed] = useState(() => {
    // Only use localStorage for desktop version
    if (isMobileModal) return false;
    return localStorage.getItem("copilotCollapsed") === "true";
  });
  const [activeTab, setActiveTab] = useState("copilot");

  useEffect(() => {
    // Only save to localStorage for desktop version
    if (!isMobileModal) {
      localStorage.setItem("copilotCollapsed", collapsed);
    }
  }, [collapsed, isMobileModal]);

  // Mobile modal version
  if (isMobileModal) {
    return (
      <MobileCopilot
        onClose={onClose}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    );
  }

  // Desktop version - collapsed state
  if (collapsed) {
    return (
      <div className="min-w-14 h-full border-l border-gray-200 hidden lg:flex flex-col items-center justify-between py-2 bg-white">
        <button
          onClick={() => setCollapsed(false)}
          className="iconHoverTransition"
        >
          <PanelRightOpen className="w-4 h-4" />
        </button>
        <div className="size-10 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🤖</span>
        </div>
      </div>
    );
  }

  // Desktop version - expanded state
  return (
    <div className="min-w-80 border-l border-gray-200 hidden lg:flex flex-col bg-gradient-to-b from-purple-50 via-blue-50 to-purple-100">
      {/* Tabs */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="flex space-x-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("copilot")}
            className={`py-1 relative font-semibold ${
              activeTab === "copilot"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-400"
                : "text-gray-500"
            }`}
          >
            <div className="flex gap-1 items-center">
              <div
                className={`size-3.5 flex items-center justify-center rounded ${
                  activeTab === "copilot" ? "bg-blue-600" : "bg-black/70 "
                }`}
              >
                <Flower2 className="size-2.5 text-white" />
              </div>
              <span>AI Copilot</span>
            </div>
            {activeTab === "copilot" && (
              <div className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`py-1 relative font-semibold ${
              activeTab === "details"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-400"
                : "text-gray-500"
            }`}
          >
            Details
            {activeTab === "details" && (
              <div className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-400"></div>
            )}
          </button>
        </div>
        <button
          onClick={() => setCollapsed(true)}
          className="iconHoverTransition"
        >
          <PanelRightClose className="w-4 h-4" />
        </button>
      </div>

      {/* Tab content */}
      <div className="flex-1 p-4">
        {activeTab === "copilot" ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="size-8 bg-black/90 rounded-md flex items-center justify-center mb-2">
              <span className="text-white">🤖</span>
            </div>
            <span className="font-semibold text-black/90 text-lg">
              {`Hi, I'm Fin AI Copilot`}
            </span>
            <p className="text-sm text-gray-600 text-center">
              Ask me anything about this conversation.
            </p>
          </div>
        ) : (
          <div className="h-full bg-white rounded-lg p-4 overflow-y-auto">
            <div className="space-y-6">
              {/* Assignee */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Assignee
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src={girlPic}
                    alt="Brian Byrne pic"
                    className="size-5 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    Brian Byrne
                  </span>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Team</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Unassigned
                  </span>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    LINKS
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Tracker ticket
                      </span>
                    </div>
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Back-office tickets
                      </span>
                    </div>
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Side conversations
                      </span>
                    </div>
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* USER DATA */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    USER DATA
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* CONVERSATION ATTRIBUTES */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    CONVERSATION ATTRIBUTES
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* COMPANY DETAILS */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    COMPANY DETAILS
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* SALESFORCE */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    SALESFORCE
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* STRIPE */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    STRIPE
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* JIRA FOR TICKETS */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 tracking-wide">
                    JIRA FOR TICKETS
                  </span>
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      {activeTab === "copilot" && (
        <div className="p-4">
          <div className="mb-3 bg-white hover:bg-blue-50 transition duration-200 w-fit px-3 py-1 rounded-lg border border-gray-300">
            <button className="text-[.85rem] text-black/80">
              <span className="font-semibold">Suggested</span> 💸 How do I get a
              refund?
            </button>
          </div>
          <div className="flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] px-3 py-2 rounded-lg bg-white">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full outline-none bg-transparent text-[.85rem] font-semibold placeholder:text-black/55"
            />
            <button className="text-gray-400 hover:text-gray-600 transition">
              <ArrowUp size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Copilot;
