import express from 'express';
import bodyParser from 'body-parser';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/711-callback', (req, res) => {
  const { storeid, storename, storeaddress } = req.body;

  console.log('🔁 接收到 7-11 門市資料：');
  console.log('📦 門市代號:', storeid);
  console.log('🏪 門市名稱:', storename);
  console.log('📍 門市地址:', storeaddress);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>7-11 門市資料</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 20px auto; }
          .store-info { background: #f5f5f5; padding: 20px; border-radius: 8px; }
          .store-id { font-weight: bold; color: #007bff; }
          .store-name { font-size: 24px; margin: 10px 0; }
          .store-address { color: #666; }
        </style>
      </head>
      <body>
        <div class="store-info">
          <h2>7-11 門市資料</h2>
          <p>門市代號: <span class="store-id">${storeid}</span></p>
          <p class="store-name">${storename}</p>
          <p class="store-address">地址: ${storeaddress}</p>
          <p style="margin-top: 20px;">✅ 已成功接收門市資料</p>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`🚀 伺服器已啟動：http://localhost:${port}`);
});
