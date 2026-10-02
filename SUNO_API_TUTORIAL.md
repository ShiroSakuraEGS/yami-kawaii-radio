# 🎵 Suno AI API (`gcui-art/suno-api`) 本地部署與電台工房完整串接教學手冊

> **專案環境**：`c:\Users\Anubis.Chan\Downloads\鐵人賽\實驗場所\suno-api\`  
> **後端目錄**：`suno-api-server/` (已克隆自 [gcui-art/suno-api](https://github.com/gcui-art/suno-api))  
> **前端工房**：JIRAI-KEI EMO BEATS STUDIO & RADIO SHOWCASE  

---

## 📖 前言：為什麼要串接 Suno API？

Suno 官方目前主要透過網頁端（[suno.com](https://suno.com)）提供服務，尚未釋放直接的公開商業開發者 API。  
本專案整合了開源熱門的 **`gcui-art/suno-api`** 轉接伺服器，將 Suno 的音樂生成功能封裝成標準的 RESTful HTTP 接口。

透過本教學，您可以：
1. **取得您自己的 Suno 帳號 Cookie**。
2. **在本地端（Node.js / Docker）或 Vercel 免費雲端啟動轉接伺服器**。
3. **在我們的地雷系電台／音樂工房中一鍵連線、即時查詢剩餘點數（Credits），並直接將真實生成的純音樂加入電台雙軌淡入淡出播放！**

---

## 🔑 第一步：從瀏覽器獲取 Suno 帳號 Cookie

`gcui-art/suno-api` 是透過模擬瀏覽器 Session 呼叫 Suno 後端，因此需要您的帳號 Cookie 來代表您生成音樂（消耗您帳號的每日免費 50 Credits 或訂閱額度）。

### 詳細獲取步驟：
1. 打開 **Chrome** 或 **Edge** 瀏覽器，前往 [https://suno.com](https://suno.com) 並**登入您的帳號**。
2. 點擊左側導航欄的 **「Create」** 進入創作頁面（確認右上角有顯示點數頭像）。
3. 按下鍵盤 **`F12`**（或右鍵點擊網頁任一處 ➔ 選擇 **「檢查 (Inspect)」**）開啟開發者工具。
4. 切換至頂部的 **「應用程式 (Application)」** 頁籤（若找不到可點擊 `>>` 展開）：
   - 在左側選單依序展開：**儲存空間 (Storage)** ➔ **Cookie** ➔ 點擊 **`https://suno.com`**。
5. 找到名稱為 **`__client`** 的項目（或者過濾搜尋 `session`）：
   - 對其 **Value（值）** 雙擊並反白複製。
   - > [!TIP]
     > 若希望 Session 維持最長效期，亦可在開發者工具切換到 **「網路 (Network)」** 頁籤，隨便點擊網頁任一按鈕，在任一發往 `suno.com` 的請求標頭（Request Headers）中，直接複製整串 **`cookie:`** 的完整內容。

---

## 💻 第二步：啟動 `suno-api-server` 後端

本專案已自動將 `gcui-art/suno-api` 下載至本專案的 `suno-api-server/` 子目錄中。  
您可以選擇以下任一種方式啟動後端：

### 方式 A：本機 Node.js 啟動（最直接）

1. 開啟終端機（PowerShell 或 CMD），進入子目錄：
   ```bash
   cd c:\Users\Anubis.Chan\Downloads\鐵人賽\實驗場所\suno-api\suno-api-server
   ```
2. 安裝後端專案依賴套件：
   ```bash
   npm install
   ```
3. 建立並編輯環境變數檔案 `.env`：
   複製範本建立 `.env`：
   ```bash
   copy .env.example .env
   ```
   使用記事本或文字編輯器開啟 `.env`，將第一步取得的 Cookie 填入：
   ```env
   SUNO_COOKIE=貼上您的_Suno_Cookie字串
   BROWSER=chromium
   BROWSER_HEADLESS=true
   ```
4. 啟動開發伺服器：
   ```bash
   npm run dev
   ```
   終端機將顯示：
   ```text
   ▲ Next.js 14.x.x
   - Local:        http://localhost:3000
   ✓ Ready in 1.8s
   ```
   **此時後端 API 即在 `http://localhost:3000` 運行完畢！**

---

### 方式 B：Docker 容器一鍵啟動

若您的電腦有安裝 Docker Desktop：
```bash
cd c:\Users\Anubis.Chan\Downloads\鐵人賽\實驗場所\suno-api\suno-api-server

# 設定 Cookie 環境變數後啟動
docker run -d -p 3000:3000 -e SUNO_COOKIE="您的Cookie" --name suno-api gcuiart/suno-api:latest
```

---

### 方式 C：Vercel 免費雲端部署（免開本機電腦）

若希望隨時隨地從任何裝置（包含手機）調用：
1. 前往 GitHub 將 [https://github.com/gcui-art/suno-api](https://github.com/gcui-art/suno-api) 點擊 **Fork** 到自己的帳號。
2. 前往 [Vercel](https://vercel.com/)，點擊 **Add New Project** 導入剛 Fork 的儲存庫。
3. 在 **Environment Variables** 新增：
   - Name: `SUNO_COOKIE`
   - Value: `您的 Cookie`
4. 點擊 **Deploy**，約 1 分鐘後即可取得如 `https://your-suno-api.vercel.app` 的全球生產網址！

---

## 🔌 第三步：在工房與電台前端一鍵串接

後端啟動後，回到我們的 **JIRAI-KEI EMO BEATS STUDIO** 前端頁面：

1. 開啟工房首頁（瀏覽器開啟 [`index.html`](file:///c:/Users/Anubis.Chan/Downloads/%E9%90%B5%E4%BA%BA%E8%B3%BD/%E5%AF%A6%E9%A9%97%E5%A0%B4%E6%89%80/suno-api/index.html) 或執行 `python server.py`）。
2. 點擊右上角青藍色亮眼按鈕：**「🔌 串接真實 Suno API」**。
3. 在彈出的設定視窗中：
   - **API 伺服器端點 (Base URL)**：填入 `http://localhost:3000`（若部署在 Vercel 則填寫 Vercel 網址）。
   - **啟用開關**：切換為 **「啟用真實 Suno AI 音樂生成模式」**。
4. 點擊 **「⚡ 測試連線並查詢剩餘點數」**：
   - 系統會向伺服器發送 `/api/get_limit` 握手。
   - 若連線成功，視窗將亮起綠色勾勾，並顯示您的帳號剩餘 Credits（例如 `50 / 50`）！
   - 頂部導航列的狀態燈號會同步由白點變為 **綠燈 (🟢)**。
5. 點擊 **「💾 儲存並套用設定」**。

---

## 🎹 第四步：實戰生成與電台聯動

1. **組裝 Prompt**：
   - 在右欄「經典病態可愛預設」選單中挑選（例如 *🌸 純動漫 OST 型* 或 *🌙 地雷系深夜型*），或點擊「🎲 一鍵抽卡」。
2. **點擊「⚡ 直送 Suno 生成 (存入暫存)」**：
   - 系統即時向後端發送 `POST /api/custom_generate`。
   - 前端會自動進入**非同步輪詢機制**（每 4 秒查詢一次生成進度）。
3. **自動匯入與無縫播放**：
   - Suno 雲端生成完畢（約 20~40 秒）後，新歌曲將自動加入「暫存池」與「排程清單」。
   - 點擊「📻 一鍵切換電台展示」，您就可以在**全螢幕地雷系動漫舞台、番茄鐘專注倒計時與虛擬角色真昼／夜宵的沉浸式對話**中，聆聽剛創作出來的原創 AI 音樂！

---

## 🛠️ 常見問題排解 (FAQ)

### Q1：點擊測試連線顯示 `連線失敗` 或 `Failed to fetch`？
* **檢查 1**：請確認 `suno-api-server` 是否在終端機中正常執行（需看到 `Ready on http://localhost:3000`）。
* **檢查 2**：若前端透過 `file:///` 直接打開，部分瀏覽器可能會因跨來源安全性原則（CORS）阻擋本機 fetch。建議執行專案目錄下的 `python server.py`，並透過 `http://localhost:8080` 開啟前端。

### Q2：提示 `Unauthorized` 或點數無法獲取？
* 代表填寫在 `.env` 的 `SUNO_COOKIE` 已失效或格式不完整。請重新開啟 Suno.com 重新整理後複製最新 Cookie。

### Q3：生成時遇到驗證碼（hCaptcha）？
* 免費用戶在短時間頻繁生成時可能觸發 Suno 的 hCaptcha。可在 `suno-api-server/.env` 中設定 `TWOCAPTCHA_KEY`，後端會自動調用打碼平台解鎖。
