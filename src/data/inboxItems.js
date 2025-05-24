export const inboxItems = [
  {
    id: 1,
    sender: "Luis - Github",
    subject: "Hey! I have a question...",
    time: "45m",
    unread: false,
    avatar: "L",
    avatarColor: "bg-blue-500",
    chatHistory: [
      {
        sender: "Luis Easton",
        time: "1min",
        message:
          "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. It was looking you'd be able to return me, as it is unopened.",
        isUser: true,
      },
      {
        sender: "You",
        time: "Seen - 1min",
        message: "Let me just look into this for you, Luis.",
        isUser: false,
      },
      {
        sender: "Luis Easton",
        time: "2min",
        message:
          "Thanks! The order number is #GH-78945. It was purchased on November 15th.",
        isUser: true,
      },
      {
        sender: "You",
        time: "3min",
        message:
          "I've located your order. Since it's unopened and within our 60-day return window, we can process a full refund. Would you like store credit or original payment method?",
        isUser: false,
      },
      {
        sender: "Luis Easton",
        time: "5min",
        message:
          "Original payment method would be great. Also, do I need to ship it back or can I return to a local store?",
        isUser: true,
      },
    ],
  },
  {
    id: 2,
    sender: "Ivan - Nike",
    subject: "Hi there, I have a quiz...",
    time: "34m",
    unread: true,
    avatar: "I",
    avatarColor: "bg-red-500",
    chatHistory: [
      {
        sender: "Ivan Petrov",
        time: "34 mins",
        message:
          "Hi there! I have a question about the return policy for custom Nike shoes. I ordered a pair 14 days ago but they don't fit quite right.",
        isUser: true,
      },
      {
        sender: "You",
        time: "30 mins",
        message:
          "Hello Ivan! Custom items typically have a different return policy. May I have your order number?",
        isUser: false,
      },
      {
        sender: "Ivan Petrov",
        time: "28 mins",
        message:
          "Sure, it's #NK-45621. They're Air Force 1 customs with my logo on the tongue.",
        isUser: true,
      },
      {
        sender: "You",
        time: "25 mins",
        message:
          "Thanks! I see your order. For custom items, we can offer store credit or exchange within 30 days. Would you like to exchange for a different size?",
        isUser: false,
      },
      {
        sender: "Ivan Petrov",
        time: "20 mins",
        message:
          "Exchange would be perfect. I think I need a half size up. How does the exchange process work?",
        isUser: true,
      },
    ],
  },
  {
    id: 3,
    sender: "Lead from New York",
    subject: "Good morning, let me...",
    time: "40m",
    unread: true,
    avatar: "L",
    avatarColor: "bg-green-500",
    chatHistory: [
      {
        sender: "Michael Johnson",
        time: "40 mins",
        message:
          "Good morning! Let me introduce myself - I'm the purchasing manager for a retail chain in New York. We're interested in carrying your products in our stores.",
        isUser: true,
      },
      {
        sender: "You",
        time: "38 mins",
        message:
          "Good morning Michael! That's exciting news. We'd love to explore this opportunity. Could you share more about your stores and the products you're interested in?",
        isUser: false,
      },
      {
        sender: "Michael Johnson",
        time: "35 mins",
        message:
          "We operate 12 boutique stores in the NYC area focusing on sustainable products. Particularly interested in your eco-friendly home goods line.",
        isUser: true,
      },
      {
        sender: "You",
        time: "30 mins",
        message:
          "That aligns perfectly with our brand! I can connect you with our wholesale team. Would you be available for a call this week?",
        isUser: false,
      },
      {
        sender: "Michael Johnson",
        time: "25 mins",
        message:
          "Absolutely. How about Thursday at 2pm EST? I can share our requirements and discuss MOQs.",
        isUser: true,
      },
    ],
  },
  {
    id: 4,
    sender: "Booking API problems",
    subject: "Bug report",
    description: "Luis - Snail Crafts",
    time: "45m",
    unread: false,
    avatar: "B",
    avatarColor: "bg-gray-600",
    chatHistory: [
      {
        sender: "Luis (Snail Crafts)",
        time: "45 mins",
        message:
          "Hi team, we're experiencing issues with the booking API. Getting 500 errors when trying to create new reservations through our app.",
        isUser: true,
      },
      {
        sender: "You",
        time: "42 mins",
        message:
          "Thanks for reporting this Luis. Can you share the request payload and any error details you're seeing?",
        isUser: false,
      },
      {
        sender: "Luis (Snail Crafts)",
        time: "40 mins",
        message:
          'Here\'s the error: {"status":500,"message":"Internal server error"}. The payload is standard - same we\'ve been using for months.',
        isUser: true,
      },
      {
        sender: "You",
        time: "35 mins",
        message:
          "Our engineering team has identified the issue - a recent deployment caused this. We're rolling back the changes now. Should be resolved within 15 minutes.",
        isUser: false,
      },
      {
        sender: "Luis (Snail Crafts)",
        time: "30 mins",
        message:
          "Great! Please let me know when it's fixed so I can test on our end.",
        isUser: true,
      },
    ],
  },
  {
    id: 5,
    sender: "Marcio - Exemplary Buck",
    subject: "My name, I'm here to...",
    time: "40m",
    unread: false,
    avatar: "M",
    avatarColor: "bg-purple-500",
    chatHistory: [
      {
        sender: "Marcio Silva",
        time: "40 mins",
        message:
          "My name is Marcio, I'm here to inquire about bulk pricing for your premium leather wallets. We're a luxury retailer in Brazil.",
        isUser: true,
      },
      {
        sender: "You",
        time: "38 mins",
        message:
          "Hello Marcio! We offer tiered pricing for bulk orders. What quantities are you considering?",
        isUser: false,
      },
      {
        sender: "Marcio Silva",
        time: "35 mins",
        message:
          "Initial order would be 200 units across 4 styles, with potential for monthly replenishment of 50-100 units per style.",
        isUser: true,
      },
      {
        sender: "You",
        time: "32 mins",
        message:
          "That sounds great! For 200+ units we offer 25% off MSRP. Would you like me to send our wholesale catalog with all style options?",
        isUser: false,
      },
      {
        sender: "Marcio Silva",
        time: "30 mins",
        message:
          "Yes please, and could you include shipping costs to São Paulo? Also, what's the production lead time?",
        isUser: true,
      },
    ],
  },
];
