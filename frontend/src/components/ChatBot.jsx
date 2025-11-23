import React, { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to RISING මල්. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [loginStep, setLoginStep] = useState(null); // null, 'username', 'password'
  const [tempUsername, setTempUsername] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = { text: inputValue, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = inputValue;
    setInputValue("");

    // Handle login flow
    if (loginStep === 'username') {
      setTempUsername(currentInput);
      setLoginStep('password');
      setTimeout(() => {
        setMessages((prev) => [...prev, { 
          text: `Great! Now please enter your password:`, 
          isBot: true 
        }]);
      }, 500);
      return;
    } else if (loginStep === 'password') {
      // Simulate login (in real app, validate against backend)
      setIsLoggedIn(true);
      setUserName(tempUsername);
      setLoginStep(null);
      setTimeout(() => {
        setMessages((prev) => [...prev, { 
          text: `Welcome back, ${tempUsername}! 🎉 You're now logged in. How can I assist you today?`, 
          isBot: true 
        }]);
      }, 500);
      return;
    }

    // Normal bot response
    setTimeout(() => {
      const botResponse = getBotResponse(currentInput);
      if (typeof botResponse === 'object') {
        setMessages((prev) => [...prev, botResponse.message]);
        if (botResponse.action === 'startLogin') {
          setLoginStep('username');
        }
      } else {
        setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      }
    }, 500);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Login/Account commands
    if (input.includes("login") || input.includes("sign in") || input.includes("log in")) {
      if (isLoggedIn) {
        return `You're already logged in as ${userName}! Would you like to logout?`;
      }
      return {
        message: { text: "I'll help you login! Please enter your username or email:", isBot: true },
        action: 'startLogin'
      };
    } else if (input.includes("logout") || input.includes("sign out") || input.includes("log out")) {
      if (isLoggedIn) {
        setIsLoggedIn(false);
        setUserName("");
        return "You've been successfully logged out. See you soon! 👋";
      }
      return "You're not currently logged in.";
    } else if (input.includes("register") || input.includes("sign up") || input.includes("create account")) {
      return "To create a new account, please click the 'Sign Up' button in the navigation menu, or I can help you login if you already have an account. Just say 'login'!";
    } else if (input.includes("account") || input.includes("profile")) {
      if (isLoggedIn) {
        return `You're logged in as ${userName}. You can view your orders, update preferences, and manage your account settings.`;
      }
      return "Please login first to access your account. Say 'login' to get started!";
    }

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I assist you with your flower needs today?";
    } else if (input.includes("how to create") || input.includes("how to make") || input.includes("create bouquet") || input.includes("make bouquet")) {
      return "🌸 To create a beautiful bouquet:\n\n1. Choose your flowers (roses, lilies, tulips)\n2. Select 5-7 stems for a small bouquet\n3. Remove leaves from lower stems\n4. Arrange flowers in a spiral pattern\n5. Secure with floral tape\n6. Trim stems at an angle\n7. Add decorative wrapping and ribbon\n\nWould you like tips for a specific bouquet type?";
    } else if (input.includes("romantic") || input.includes("love bouquet") || input.includes("anniversary bouquet")) {
      return "💕 Romantic Bouquet Guide:\n\nFlowers: 12 red roses, baby's breath, greenery\nColors: Deep red, pink, white\nStyle: Classic round shape\nWrapping: Elegant satin ribbon\n\nPerfect for anniversaries, proposals, and Valentine's Day!";
    } else if (input.includes("birthday bouquet") || input.includes("cheerful")) {
      return "🎉 Birthday Bouquet Guide:\n\nFlowers: Gerbera daisies, sunflowers, carnations\nColors: Bright yellow, orange, pink, purple\nStyle: Wild, fun arrangement\nExtras: Add colorful ribbons and a birthday card\n\nCreate joy with vibrant, cheerful colors!";
    } else if (input.includes("wedding bouquet") || input.includes("bridal")) {
      return "👰 Wedding Bouquet Guide:\n\nFlowers: White roses, peonies, orchids, lilies\nColors: White, cream, blush pink\nStyle: Cascading or round\nExtras: Pearl pins, lace wrap, satin ribbons\n\nElegant and timeless for your special day!";
    } else if (input.includes("care") || input.includes("maintain") || input.includes("keep fresh")) {
      return "🌺 Bouquet Care Tips:\n\n• Change water every 2 days\n• Trim stems at 45° angle\n• Remove wilted flowers\n• Keep away from direct sunlight\n• Add flower food to water\n• Maintain cool temperature\n\nYour flowers can last 7-10 days with proper care!";
    } else if (input.includes("color") || input.includes("meaning")) {
      return "🎨 Flower Color Meanings:\n\n🔴 Red - Love & passion\n💗 Pink - Admiration & joy\n💛 Yellow - Friendship & happiness\n🤍 White - Purity & innocence\n💜 Purple - Royalty & elegance\n🧡 Orange - Energy & enthusiasm\n\nChoose colors that express your feelings!";
    } else if (input.includes("price") || input.includes("cost")) {
      return "Our bouquets range from $25 to $150 depending on the size and type. Would you like to know more about a specific bouquet?";
    } else if (input.includes("delivery")) {
      return "We offer same-day delivery within the city! Orders must be placed before 2 PM.";
    } else if (input.includes("wedding")) {
      return "Our Wedding Elegance collection features luxury designs perfect for your special day. Would you like to schedule a consultation?";
    } else if (input.includes("birthday")) {
      return "Our Birthday Bloom bouquets are bright and joyful! They make perfect gifts for any birthday celebration.";
    } else if (input.includes("rose")) {
      return "Our Red Rose Love bouquet is perfect for anniversaries and proposals. It's one of our most popular choices!";
    } else if (input.includes("order") || input.includes("buy")) {
      if (isLoggedIn) {
        return `Great! You can place an order by clicking the 'Buy Now' button on any bouquet. Since you're logged in as ${userName}, your order will be saved to your account!`;
      }
      return "You can place an order by clicking the 'Buy Now' button on any bouquet. Would you like to login first to save your order history?";
    } else if (input.includes("contact") || input.includes("phone") || input.includes("email")) {
      return "You can reach us at contact@risingmal.com or call us at (555) 123-4567. We're here to help!";
    } else {
      const suggestions = isLoggedIn 
        ? "Try asking:\n• 'How to create a bouquet?'\n• 'Romantic bouquet ideas'\n• 'My account'\n• 'Logout'"
        : "Try asking:\n• 'Login'\n• 'How to create a bouquet?'\n• 'Romantic bouquet ideas'\n• 'Flower care tips'";
      return `Thank you for your question! ${suggestions}\n\nOr contact us for personalized help!`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-600 text-white rounded-full p-4 shadow-2xl hover:bg-pink-700 transition-all hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-pink-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">RISING මල් Chat</h3>
              {isLoggedIn && (
                <span className="text-xs bg-pink-700 px-2 py-1 rounded-full">
                  {userName}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-pink-700 rounded-full p-1 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-lg ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow"
                      : "bg-pink-600 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type={loginStep === 'password' ? 'password' : 'text'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  loginStep === 'username' ? 'Enter username...' :
                  loginStep === 'password' ? 'Enter password...' :
                  'Type your message...'
                }
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={handleSend}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
