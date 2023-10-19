* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

header {
  padding: 20px;
  background-color: #333;
  color: #fff;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

#videoContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

video {
  width: 40%;
  height: auto;
  background-color: #f0f0f0;
}

#chatContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#messages {
  width: 300px;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

input[type="text"],
button {
  padding: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
