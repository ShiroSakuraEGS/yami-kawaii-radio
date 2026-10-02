# 🌐 Vercel 雲端一鍵部署完整教學指南 (Jirai-kei Emo Beats Studio)

本指南專為 **JIRAI-KEI EMO BEATS STUDIO（地雷系・病態可愛音樂影片合成工房 & 電台展示系統）** 量身打造，教您如何以最簡單、零成本的方式，將本專案一鍵發佈至全球高速雲端平台 **Vercel**！

---

## 🎯 為什麼選擇 Vercel？

1. **完全免費 (Hobby Plan)**：個人專案無需付費，具備無限流量邊緣節點。
2. **極速 CDN 快取**：我們已預先設定好 [`vercel.json`](file:///c:/Users/Anubis.Chan/Downloads/鐵人賽/實驗場所/suno-api/vercel.json)，7.4MB 的預設地雷系 MP4 影片與 Web Audio 資源會被全球快取，秒速加載。
3. **自帶免費 HTTPS 與自訂網域**：自動核發 SSL 憑證，並提供 `xxx.vercel.app` 永久網址。
4. **極簡部署流程**：無論是**終端機指令（CLI）** 或是 **GitHub 連動**，都只要 1 分鐘內即可搞定！

---

## 🚀 方式一：Vercel CLI 一鍵終端機部署（最快速・推薦）

如果您不想手動建立 GitHub 倉庫，這是**最推薦、最直覺**的部署方式！

### 步驟 1：開啟 PowerShell 或 CMD 終端機
在目前專案目錄 `C:\Users\Anubis.Chan\Downloads\鐵人賽\實驗場所\suno-api` 開啟終端機。

### 步驟 2：執行 Vercel 部署指令
無需預先全域安裝任何套件，直接使用 Node.js 的 `npx` 即可：

```bash
npx vercel
```

### 步驟 3：終端機互動設定（一路按 Enter 即可）
初次執行時，終端機會出現幾個簡單問題，請依照以下說明回答：

1. **Log in to Vercel**：
   - 終端機會顯示登入選項（GitHub / GitLab / Email），選擇您最方便的方式。
   - 瀏覽器會自動彈出驗證視窗，點擊「Confirm」或登入即完成授權。
2. **Set up and deploy “suno-api”?**
   - 輸入 `y`（並按 Enter）。
3. **Which scope do you want to deploy to?**
   - 直接按 `Enter`（選擇您的個人帳號）。
4. **Link to existing project?**
   - 輸入 `n`（因為這是新專案，按 Enter）。
5. **What’s your project’s name?**
   - 直接按 `Enter`（預設會使用 `jirai-kei-emo-beats-studio` 或自訂名稱）。
6. **In which directory is your code located?**
   - 直接按 `Enter`（預設 `./` 即目前目錄）。
7. **Want to modify these settings?**
   - 輸入 `n`（我們已經寫好 `vercel.json`，無需修改任何建置設定）。

### 步驟 4：大功告成！🎉
終端機會顯示：
```text
🔍  Inspect: https://vercel.com/your-name/jirai-kei-emo-beats-studio/...
✅  Production: https://jirai-kei-emo-beats-studio.vercel.app
```
點擊終端機產出的 **Production 網址**，您的工房與電台就正式向全世界發布上線了！

> [!TIP]
> 以後若有任何檔案修改，只要在該目錄再次執行 `npx vercel --prod`，即可在 10 秒內同步更新至線上正式環境！

---

## 🐙 方式二：GitHub 連動 Vercel 自動部署（最適合持續更新）

如果您習慣使用 GitHub 進行程式碼管理，每次 `git push` 時 Vercel 都會自動替您重新構建發布：

### 步驟 1：建立 GitHub 倉庫並推送程式碼
在目前目錄初始化 Git 並推送到您的 GitHub：

```bash
# 1. 初始化倉庫
git init

# 2. 加入所有檔案（包含預設影片 7.4MB、HTML/CSS/JS/JSON 等）
git add .

# 3. 提交變更
git commit -m "feat: Jirai-kei Emo Beats Studio & Radio Mode release"

# 4. 關聯至您的 GitHub 遠端倉庫（請替換為您的倉庫網址）
git branch -M main
git remote add origin https://github.com/您的GitHub帳號/jirai-kei-emo-beats-studio.git
git push -u origin main
```

> [!NOTE]
> 預設地雷系影片 `social_mr.sakura_moriendi_emo_...mp4` 大小約 7.4MB，遠低於 GitHub 的單檔 100MB 限制，可以直接正常提交與推送，**無需安裝 Git LFS**。

### 步驟 2：登入 Vercel 官網進行匯入
1. 前往 [Vercel 官網 (vercel.com)](https://vercel.com) 並登入您的帳號。
2. 點擊儀表板右上角的 **「Add New...」 ➔ 「Project」**。
3. 在專案列表選中剛才推上去的 `jirai-kei-emo-beats-studio` 倉庫，點擊 **「Import」**。
4. **Framework Preset**：選擇 **Other**（因為是極致效能的 Vanilla 原生架構）。
5. **Root Directory**：預設 `./`。
6. 點擊 **「Deploy」** 按鈕！
7. 約 20 秒後，出現滿天彩帶動畫，表示部署成功！

---

## ⚙️ 專案已配置的 [`vercel.json`](file:///c:/Users/Anubis.Chan/Downloads/鐵人賽/實驗場所/suno-api/vercel.json) 解析

為了讓您的音樂影片合成與電台在雲端順暢播放，我們已自動為您配置好最專業的規則：

```json
{
  "version": 2,
  "name": "jirai-kei-emo-beats-studio",
  "routes": [
    {
      "src": "^/social_mr_.*\\.mp4$",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable",
        "accept-ranges": "bytes",
        "access-control-allow-origin": "*"
      }
    },
    {
      "src": "^/(.*)\\.(mp4|webm|mp3|ogg|wav)$",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable",
        "accept-ranges": "bytes",
        "access-control-allow-origin": "*"
      }
    },
    {
      "src": "^/(.*)\\.(css|js|json|svg|png|jpg|gif)$",
      "headers": {
        "cache-control": "public, max-age=86400, stale-while-revalidate=604800",
        "access-control-allow-origin": "*"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

- **`accept-ranges: bytes`**：支援瀏覽器對影片與音訊進行 Range Request（邊下載邊循環播放），大幅節省載入時間與頻寬。
- **`access-control-allow-origin: *`**：完全開放 CORS 跨域權限，確保 Web Audio API 的雙軌 GainNode、AnalyserNode 與 MediaRecorder 不會被瀏覽器安全策略阻擋。
- **`cache-control`**：靜態素材 1 年長期 CDN 快取，第二次開啟近乎零秒加載。

---

## 🌐 關於 Suno API 後端部署至 Vercel

如果您希望將 `gcui-art/suno-api` 後端也同時掛在 Vercel 雲端上：
1. Fork `https://github.com/gcui-art/suno-api` 到您的 GitHub。
2. 在 Vercel 匯入該 Fork 倉庫。
3. 在 Vercel 的專案設定 **Settings ➔ Environment Variables** 中加入：
   - `SUNO_COOKIE`：您的 Suno.com 會員 Session Cookie。
4. 部署完成後，您會獲得一個專屬的後端網址（例如 `https://my-suno-api.vercel.app`）。
5. 直接將該網址填入本工房介面的 **「Suno API 服務對接」** 輸入框，即可從全球任何設備遠端進行純音樂生成與暫存！

---

祝您部署順利！如有任何步驟疑問，歡迎隨時提問！🎀
