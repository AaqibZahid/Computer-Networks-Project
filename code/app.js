const http = require('http');
const os = require('os');

const PORT = 3000;
const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Facebook-Class Backend</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          text-align: center;
        }
        h1 { color: #667eea; margin: 0 0 20px 0; }
        .server-info { 
          font-size: 24px; 
          color: #764ba2; 
          font-weight: bold; 
        }
        .status { 
          color: #10b981; 
          margin-top: 20px; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Cloud Network Project</h1>
        <p class="server-info">Server: ${hostname}</p>
        <p class="status">✅ Backend Server Running Successfully!</p>
        <p style="color: #666; margin-top: 30px;">
          Powered by AWS Cloud Infrastructure
        </p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Hostname: ${hostname}`);
});