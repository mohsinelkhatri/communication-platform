<h1 align="center">📡 Secure Communication Platform – Final Year Project 2022</h1>
<div align="center">

<!-- Languages & Technologies Badges -->
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React"/>
<img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB"/>
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>
<img src="https://img.shields.io/badge/Pusher-300D4F?logo=pusher&logoColor=white" alt="Pusher"/>
<img src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000?logo=jsonwebtokens&logoColor=white" alt="JWT"/>
<img src="https://img.shields.io/badge/bcrypt-0033A0?logo=lock&logoColor=white" alt="bcrypt"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5"/>

</div>

<h3>Encrypted Messaging, Group Communication & Advanced User Authentication</h3>

<p>
This project is a <strong>secure communication platform</strong> designed for professional environments 
that require <strong>confidential communication</strong>, <strong>strong identity verification</strong>, 
and <strong>data integrity</strong>.  
It was developed as part of the <strong>Final Year Project (PFE) – 2022</strong> in 
<strong>Technicien Spécialisé en Réseaux Informatiques</strong>.
</p>

<p>
The platform enables users to exchange <strong>end-to-end encrypted messages</strong>, participate in 
<strong>real-time chats</strong>, manage <strong>group conversations</strong>, and authenticate 
securely using <strong>Face ID</strong>, passwords, and encrypted session handling.
</p>

<hr>

<h2 align="center">🚀 Features</h2>

<h3>🔐 1. End-to-End Encrypted Messaging</h3>
<ul>
  <li>Messages encrypted on the client before sending</li>
  <li>Only sender and receiver can decrypt</li>
  <li>Industry-standard cryptography</li>
  <li>Secure database storage</li>
</ul>

<h3>👤 2. Multi-Factor Authentication</h3>
<ul>
  <li>Secure password hashing (bcrypt)</li>
  <li>Face ID biometric authentication</li>
  <li>Encrypted JWT sessions</li>
</ul>

<h3>💬 3. Real-Time Chat System</h3>
<ul>
  <li>Instant one-to-one messaging</li>
  <li>Real-time communication using Pusher</li>
  <li>Read receipts and message delivery status</li>
</ul>

<h3>👥 4. Group Management</h3>
<ul>
  <li>Create and manage secure groups</li>
  <li>Admins can add/remove members</li>
  <li>Encrypted group messages</li>
</ul>

<h3>📞 5. Voice & Video Group Calls</h3>
<ul>
  <li>Secure VoIP communication</li>
  <li>Encrypted audio/video streams</li>
</ul>

<h3>🖼️ 6. User Profile & Contacts System</h3>
<ul>
  <li>User avatars and basic profile editing</li>
  <li>Contact list with search</li>
  <li>Encrypted personal data</li>
</ul>

<hr>

<h2 align="center">🏗️ Project Architecture</h2>

<pre>
PROJECTFIN/
│── app/
│   ├── (auth)/register/page.jsx
│   ├── (root)/chats/page.jsx
│   ├── (root)/chats/[chatId]/page.jsx
│   ├── (root)/chats/[chatId]/group-info/page.jsx
│   ├── (root)/contacts/page.jsx
│   ├── (root)/profile/page.jsx
│   ├── api/...
│   ├── layout.js
│   └── globals.css
│
│── components/
│   ├── ChatBox.jsx
│   ├── ChatList.jsx
│   ├── ChatDetails.jsx
│   ├── Contacts.jsx
│   ├── MessageBox.jsx
│   ├── Provider.jsx
│   ├── BottomBar.jsx
│   ├── TopBar.jsx
│   └── ToasterContext.jsx
│
│── lib/pusher.js
│── models/
│   ├── User.js
│   ├── Chat.js
│   └── Message.js
│
│── public/assets/
│   ├── group.png
│   ├── logo.png
│   ├── person.jpg
│   └── send.png
│
│── .env
│── package.json
│── next.config.js
│── tailwind.config.js
</pre>

<hr>

<h2 align="center">🛠️ Technologies Used</h2>

<h3>🧩 Frontend</h3>
<ul>
  <li>Next.js 13 (App Router)</li>
  <li>React.js</li>
  <li>TailwindCSS</li>
  <li>Client-side encryption</li>
</ul>

<h3>🔐 Backend</h3>
<ul>
  <li>Next.js API Routes</li>
  <li>MongoDB + Mongoose</li>
  <li>Pusher for real-time messaging</li>
  <li>Bcrypt password hashing</li>
  <li>JWT authentication</li>
</ul>

<h3>🛡️ Security</h3>
<ul>
  <li>End-to-end message encryption</li>
  <li>Encrypted JWT sessions</li>
  <li>Biometric Face ID verification</li>
</ul>

<hr>

<h2 align="center">⚙️ Installation & Setup</h2>

<h3>1️⃣ Clone the project</h3>
<pre><code>git clone https://github.com/your-repo/communication-platform.git
cd projectfin
</code></pre>

<h3>2️⃣ Install dependencies</h3>
<pre><code>npm install
</code></pre>

<h3>3️⃣ Add environment variables</h3>
<pre><code>MONGODB_URI=your_mongodb_uri
PUSHER_APP_ID=xxxx
PUSHER_KEY=xxxx
PUSHER_SECRET=xxxx
PUSHER_CLUSTER=your-cluster
JWT_SECRET=your-secret
</code></pre>

<h3>4️⃣ Run development server</h3>
<pre><code>npm run dev
</code></pre>

<h3>5️⃣ Build for production</h3>
<pre><code>npm run build
npm start
</code></pre>

<hr>

<h2 align="center">🔒 Encryption Workflow</h2>

<h3>🔑 Message Encryption</h3>
<ul>
  <li>Client encrypts messages using AES/RSA</li>
  <li>Only sender and receiver can decrypt</li>
  <li>Database stores encrypted content</li>
</ul>

<h3>🛡️ Authentication</h3>
<ul>
  <li>Bcrypt password hashing</li>
  <li>JWT-secured sessions</li>
  <li>Face ID biometric matching</li>
</ul>

<hr>

<h2 align="center">🎯 Project Objectives</h2>

<ul>
  <li>Build a secure communication platform for enterprises</li>
  <li>Guarantee confidentiality through E2E encryption</li>
  <li>Integrate biometric authentication (Face ID)</li>
  <li>Support secure group chats & conference calls</li>
  <li>Apply networking, cybersecurity, and full-stack development skills</li>
</ul>

<hr>

<h2 align="center">👤 Author</h2>

<p>
<strong>Mohsine El K.</strong><br>
Technicien Spécialisé en Réseaux Informatiques – Promotion 2022
</p>

<hr>

<h2 align="center">📄 License</h2>
<p>Project created for academic and research purposes.</p>
