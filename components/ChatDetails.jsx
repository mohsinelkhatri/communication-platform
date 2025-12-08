import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import MessageBox from "./MessageBox";
import { pusherClient } from "@lib/pusher";

const ChatDetails = ({ chatId }) => {
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState({});
  const [otherMembers, setOtherMembers] = useState([]);
  const [text, setText] = useState("");
  const [encryptionKey] = useState(3);
  const [decryptionEnabled, setDecryptionEnabled] = useState(false);
  const [setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: session } = useSession();
  const currentUser = session?.user;

  const toggleDecryption = () => {
    setDecryptionEnabled(!decryptionEnabled);
  };

  const encrypt = (message, key) => {
    let encryptedText = "";
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encryptedText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedText += String.fromCharCode(((charCo66de - 97 + key) % 26) + 97);
      } else {
        encryptedText += message[i];
      }
    }
    return encryptedText;
  };

  const decrypt = (encryptedMessage, key) => {
    let decryptedText = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        decryptedText += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        decryptedText += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
      } else {
        decryptedText += encryptedMessage[i];
      }
    }
    return decryptedText;
  };

  const getChatDetails = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setChat(data);
      setOtherMembers(
        data?.members?.filter((member) => member._id !== currentUser._id)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) getChatDetails();
  }, [currentUser, chatId]);

  const sendText = async () => {
    try {
      let messageToSend = text;
      if (decryptionEnabled) {
        messageToSend = encrypt(text, encryptionKey);
      }
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId,
          currentUserId: currentUser._id,
          text: messageToSend,
        }),
      });

      if (res.ok) {
        setText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendPhoto = async (result) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId,
          currentUserId: currentUser._id,
          photo: result?.info?.secure_url,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    pusherClient.subscribe(chatId);

    const handleMessage = async (newMessage) => {
      setChat((prevChat) => {
        return {
          ...prevChat,
          messages: [...prevChat.messages, newMessage],
        };
      });
    };

    pusherClient.bind("new-message", handleMessage);

    return () => {
      pusherClient.unsubscribe(chatId);
      pusherClient.unbind("new-message", handleMessage);
    };
  }, [chatId]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat?.messages]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const decryptReceivedMessages = () => {
    if (!isAuthenticated) {
      const enteredPassword = prompt("Enter your password to decrypt messages:");
      if (enteredPassword === "@Mohssin@123") { 
        setIsAuthenticated(true);
      } else {
        alert("Incorrect password!");
        return;
      }
    }

    const updatedMessages = chat.messages.map((message) => {
      if (message.sender._id !== currentUser._id) {
        return {
          ...message,
          text: decrypt(message.text, encryptionKey),
        };
      }
      return message;
    });
    setChat({ ...chat, messages: updatedMessages });
    setTimeout(() => {
      setDecryptionEnabled(true);
    }, 2000);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="pb-20">
      <div className="chat-details">
        <div className="chat-header">
          {chat?.isGroup ? (
            <>
              <Link href={`/chats/${chatId}/group-info`}>
                <img
                  src={chat?.groupPhoto || "/assets/group.png"}
                  alt="group-photo"
                  className="profilePhoto"
                />
              </Link>

              <div className="text">
                <p>
                  {chat?.name} &#160; &#183; &#160; {chat?.members?.length}{" "}
                  members
                </p>
              </div>
            </>
          ) : (
            <>
              <img
                src={otherMembers[0].profileImage || "/assets/person.jpg"}
                alt="profile photo"
                className="profilePhoto"
              />
              <div className="text">
                <p>{otherMembers[0].username}</p>
              </div>
            </>
          )}
        </div>

        <div className="chat-body">
          {chat?.messages?.map((message, index) => (
            <MessageBox
              key={index}
              message={message}
              currentUser={currentUser}
              decryptionEnabled={decryptionEnabled}
            />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="send-message">
          <div className="prepare-message">
           

            <input
              type="text"
              placeholder="Write a message..."
              className="input-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <div onClick={sendText}>
            <img src="/assets/send.png" alt="send" className="send-icon" />
          </div>
        </div>

        
        <button onClick={toggleDecryption}>
          {decryptionEnabled ? "Disable Cryption" : "Enable Cryption"}
        </button>

        <button onClick={decryptReceivedMessages}>Decrypt Received Messages</button>
      </div>
    </div>
  );
};

export default ChatDetails;
