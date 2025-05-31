import express from 'express';
import bodyParser from 'body-parser';

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

  res.send('✅ 已收到門市資料，您可以關閉此頁');
});

app.listen(port, () => {
  console.log(`🚀 伺服器已啟動：http://localhost:${port}`);
});
