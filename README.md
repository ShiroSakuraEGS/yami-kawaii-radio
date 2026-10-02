# 🎀💀 Jirai-kei Emo Beats Studio (地雷系音畫工房 v2.0)

> **專案定位**：地端專屬之「病態可愛 (Yami-kawaii)・地雷系 (Jirai-kei)・Emo 純音樂長時長音樂影片製作工房」  
> **核心升級**：支援 **最多 20 首生成曲目暫存庫**、**自訂播放排序排程**、以及 **Web Audio 雙軌無縫交錯重疊混音引擎 (Crossfade)**！  
> **存放目錄**：`c:\Users\Anubis.Chan\Downloads\鐵人賽\實驗場所\suno-api\`

---

## 🌟 核心特色功能

### 1. 📦 生成音樂暫存池 (最多 20 首，支援持久化儲存)
- **自動暫存**：無論是透過 Suno API 生成、手動貼上 Suno 網址、或載入電腦本機 MP3，皆會自動存入暫存庫。
- **20 首上限管理**：達到 20 首上限時，自動採先進先出 (FIFO) 滾動替換最舊曲目，防止記憶體溢出。
- **LocalStorage 持久化**：關閉或重新整理瀏覽器後，20 首暫存曲目依然妥善保存。
- **便捷管理**：每首曲目支援獨立「▶ 試聽」、「➕ 加入排程」、「✕ 刪除」，並支援「➕ 全選加入排程」與「清空暫存池」。

---

### 2. 🔀 自訂播放順序排程 (Order & Shuffle)
- **正式循環播放清單 (Playlist)**：從暫存庫挑選出喜愛的曲目加入清單，用於 45~60 分鐘沉浸播放。
- **順序任意調配**：
  - 點擊「▲」向上移動播放順序。
  - 點擊「▼」向下移動播放順序。
  - 雙擊任一曲目可直接跳播該首。
- **🎲 一鍵隨機打亂 (Shuffle)**：快速產生不可預測的電台隨機感。

---

### 3. 🎚️ 雙軌無縫交錯重疊混音引擎 (Crossfade & Overlap)
- **雙唱盤架構 (Deck A & Deck B)**：打破傳統單一 Audio 元素無法重疊的限制，採用 Web Audio API 雙軌架構。
- **無縫漸變重疊**：
  - 當前曲目播至倒數 `overlapSeconds`（預設 5 秒，支援 2s~10s 滑桿自訂）時，系統自動提前啟動下一首曲目！
  - 下一首曲目執行 **線性淡入 (Fade-in 0% → 100%)**。
  - 當前曲目執行 **線性淡出 (Fade-out 100% → 0%)**。
  - 兩首歌在重疊期間自然疊合交融，帶來如專業 Lofi YouTube 電台般流暢的聽覺享受！
- **視覺指示燈**：介面即時顯示軌道 A / 軌道 B 狀態與交錯切換提示。

---

### 4. 🎀 正統「日本動漫 × 病態可愛 × 地雷系 × Emo 純音樂」Suno Style Prompt 詞庫體系
- **核心哲學**：
  > **地雷系美學 ➔ 可愛音色 ➔ 憂鬱和聲 ➔ 微量不協和 (Subtle Dissonance) ➔ 重複旋律 (Obsessive Motif) ➔ 孤獨空間感 ➔ 嚴格無人聲**  
  不是單純堆疊 `dark + cute + sad`，而是營造「**外表看起來很可愛，但音樂裡的精神狀態正在慢慢裂開**」的獨特美感！
- **5 大核心維度結構（各 20 詞，共 100 詞）**：
  - **美學風格 (Aesthetics)**：`jirai-kei aesthetic`、`yami-kawaii`、`menhera aesthetic`、`dark kawaii`、`fragile cuteness`、`cute but unsettling`、`broken doll aesthetic`、`Japanese anime soundtrack` 等。
  - **病態情緒 (Emotions)**：`melancholic`、`bittersweet`、`emotionally unstable`、`obsessive`、`fragile`、`vulnerable`、`anxious`、`dissociative atmosphere`、`existential loneliness` 等。
  - **音色樂器 (Instruments)**：`delicate piano`、`slightly dissonant piano`、`broken music box`、`eerie music box`、`shimmering guitar`、`dreamy shoegaze guitar`、`delicate strings`、`dreamy synth pads` 等。
  - **和聲旋律 (Harmony & Dissonance)**：`sweet melody with subtle dissonance`、`minor key`、`bittersweet chord progression`、`unresolved harmony`、`repetitive melodic motif`、`haunting chord progression` 等。
  - **聲場節奏 (Soundscape & Ambience)**：`intimate nocturnal atmosphere`、`bedroom atmosphere`、`dreamy ambience`、`slow tempo`、`minimal percussion`、`subtle glitch`、`cassette texture` 等。
- **⚡ 內建 6 大經典病態可愛風格預設 (Presets 一鍵套用)**：
  - 🍬 **甜美病態型 (Sweet & Unsettling)**：可愛外表下暗藏執念與微量不協和音。
  - 🌙 **地雷系深夜型 (Nocturnal Jirai)**：深夜臥室、稀疏鋼琴、磁帶微暖與極度孤獨。
  - 🧸 **玩偶病態型 (Broken Doll)**：破掉的音樂盒、純真旋律與陶瓷娃娃的破碎哀傷。
  - 🔪 **沉浸執念型 (Obsessive Melancholy)**：重複鋼琴動機、神經質小故障音效與窒息式依戀。
  - 🌸 **純動漫 OST 型 (Melancholic Anime OST)**：如動畫最終話 ED 般的唯美哀傷弦樂。
  - ✨ **終極地雷系 Emo 裂開感 (Ultimate Jirai Emo)**：全維度交織出的頂級精神狀態漸變純音樂！

---

### 5. 🎬 預設地雷系動畫背景影片循環 (Sakura Moriendi Emo)
- **預設動畫影片**：系統預設直接載入工作目錄下的專屬 MP4 影片：
  `social_mr.sakura_moriendi_emo_--ar_9151_--video_1_--end_loop_260895a7-aeb2-42f3-a3f8-d85bd813bc04_2.mp4`
  開啟頁面即可自動進行高品質無縫循環播放！
- **自訂視訊支援**：亦可隨時上傳本地 MP4/GIF 或切換 4 種內建動態 Canvas 畫布（雨夜霓虹、心電圖脈衝、粉黑夢核、復古雪花）。
- **沉浸式控制**：CRT 復古電視掃描線、粉紫霓虹 Web Audio 頻譜波形儀、【45 分鐘】、【1 小時】與【無限 Loop】倒數計時器。

---

### 6. 📹 匯出與合成音樂影片
- **瀏覽器即時錄製**：點擊「🔴 錄製視訊」，透過 `MediaRecorder` 直接將畫布畫面與音訊即時壓製並下載 WebM 視訊。
- **FFmpeg 一鍵極速壓製指令**：
  ```bash
  ffmpeg -stream_loop -1 -i bg.mp4 -stream_loop -1 -i song.mp3 -t 00:45:00 -c:v copy -c:a aac -b:a 320k -shortest output_jirai_45min.mp4
  ```

---

## 📻 一鍵電台展示模式 (Radio Broadcast Mode) 與虛擬角色互動引擎

點擊頂部「**📻 一鍵切換電台展示**」即可切換至全螢幕沉浸式廣播電台介面，專為長時沉浸聆聽與社群直播設計：

### 1. 🕒 左上角電子時鐘 (看時間 ⇄ 倒計時切換)
- **看時間模式 (`REAL-TIME CLOCK`)**：高精度即時顯示目前本機 24 小時制時間（`HH:MM:SS`），霓虹粉紅發光。
- **倒計時模式 (`COUNTDOWN TIMER`)**：根據設定的目標影片長度（45 分鐘、60 分鐘或循環）進行倒數計時（`00:44:59`），霓虹青藍發光。
- **慌張連動機制**：點擊切換為「倒計時」時，角色會立刻產生**【慌張焦慮 (Panic)】**反應，角色立繪劇烈抖動、呼吸急促，並輸出害怕被丟下的恐懼台詞！

### 2. 🎀💀 病態可愛・地雷系虛擬角色伴讀伴聽
- **性別切換**：
  - **地雷系少女・真昼 (Mahiru)**：黑粉雙馬尾、黑粉緞帶蝴蝶結、深粉愛心萌瞳、眼下腮紅、右臉創可貼、十字架頸圈與蕾絲罩衫。
  - **地雷系厭世少年・夜宵 (Yayoi)**：黑短碎髮配暗紫挑染、厭世垂眼黑眼圈、右眼下淚痣、左耳骨鏈條十字架耳環、O-Ring 頸圈與暗黑連帽衫。
- **四大人格心情狀態**：
  - 🎀 **溫柔陪伴 (Companion)**：極致執著、渴望被佔有、形影不離。
  - 💀 **厭世自毀 (Emo Doom)**：冷感空虛、討厭嘈雜世界、沉溺於雨夜與低重音。
  - 🔪 **傲嬌敏感 (Tsundere)**：別扭防衛、嘴硬心軟、渴望關注。
  - 💧 **脆弱透明 (Fragile Glass)**：玻璃易碎心靈、害怕隨時被丟棄。

### 3. 💬 五大情境台詞互動系統 (視覺小說打字機)
| 互動情境 | 觸發方式 | 角色情緒反應 | 台詞氛圍 |
| :--- | :--- | :--- | :--- |
| **換成倒計時** | 點擊切換為倒計時 | ⚡ 慌張焦慮 (`panic`) | 慌張抖動：「等、等等！為什麼要開始倒計時？！…時間到了你就要走掉了對不對？！把時鐘砸碎…求求你留下來！」 |
| **點擊角色** | 點擊角色立繪舞台 | ♡ 害羞心動 (`blushing`) | 縮放彈跳：「呀…！剛、剛才是戳我了嗎？手指涼涼的…再多碰碰我，確認我還活著好不好…♡」 |
| **切換音樂** | 點擊切歌按鈕 | 🎶 聽感沉浸 (`vibe`) | 雙軌 Crossfade 重疊交錯，反饋對新曲目 BPM 與 Lo-fi 質地的感受台詞。 |
| **切換人格** | 點擊切換人格按鈕 | 💔 害怕恐懼 (`fear`) | 害怕下沉顫抖：「不要隨便改寫我的設定！我是真昼啊…如果我變成別人了，你還會像現在這樣看著我嗎…？（害怕顫抖）」 |
| **摸摸安慰** | 點擊摸摸安慰按鈕 | 🌸 安心被愛 (`comforted`) | 輸出固定安撫溫柔言語：<br>女：*『乖，別怕…我哪裡都不去，會一直在這裡陪著你聽音樂的。』*<br>男：*『辛苦了，放輕鬆…今晚我在你身邊，你不用再強撐了。』*<br>角色心頭刺痛消失，露出治癒安心表情。 |

---

## 🚀 啟動與發布方式

1. **方式 A（本機雙擊即開）**：直接以瀏覽器開啟 [`index.html`](file:///c:/Users/Anubis.Chan/Downloads/%E9%90%B5%E4%BA%BA%E8%B3%BD/%E5%AF%A6%E9%A9%97%E5%A0%B4%E6%89%80/suno-api/index.html)。
2. **方式 B（本機伺服器）**：執行 `python server.py`（在 `http://localhost:8080` 開啟）。
3. **方式 C（🌐 Vercel 雲端發布）**：
   - 專案已配置完成生產專用 [`vercel.json`](file:///c:/Users/Anubis.Chan/Downloads/%E9%90%B5%E4%BA%BA%E8%B3%BD/%E5%AF%A6%E9%A9%97%E5%A0%B4%E6%89%80/suno-api/vercel.json)。
   - 在本目錄執行 `npx vercel` 即可於 30 秒內發布上線！
   - 詳細圖文指引請參見：[`VERCEL_DEPLOY_GUIDE.md`](file:///c:/Users/Anubis.Chan/Downloads/%E9%90%B5%E4%BA%BA%E8%B3%BD/%E5%AF%A6%E9%A9%97%E5%A0%B4%E6%89%80/suno-api/VERCEL_DEPLOY_GUIDE.md)。


