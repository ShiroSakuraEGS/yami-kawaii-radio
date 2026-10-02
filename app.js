// 100 個正統日系動漫風格・病態可愛・地雷系純音樂詞庫資料 (Anime Jirai-kei / Menhera / Emo Sad)
const KEYWORDS_DATA = {
  genres: [
    "Japanese Anime OST (アニメBGM)", "J-Emo Sadcore (哀愁J-Emo)", "Yami-kawaii Anime Lo-fi (病み可愛い)",
    "Jirai-kei Melodic Trap (地雷系ビート)", "Vocaloid-Style Piano Ballad (ボカロ風ピアノ)", "Melancholic Anime Ending Theme",
    "Dark Pastel Chiptune (メンヘラピコピコ)", "Depressive Shoegaze Anime BGM", "Sad Japanese City Pop Lofi",
    "Tokyo Rainy Midnight Chillhop", "Gothic Lolita Ambient Waltz", "Anime Sad Guitar Trap",
    "Nostalgic Makoto Shinkai Vibe Soundscape", "Emotional Anime Piano & Violin Solitude", "Slowed + Reverb Anime Aesthetic",
    "Ethereal Dreamcore Anime Lullaby", "Cyber Shibuya Glitchcore", "Voidwave Anime Heartbreak",
    "Melodramatic J-Rock Ballad Ambient", "Bitcrushed 8-bit Otaku Melancholy"
  ],
  moods: [
    "Heartbroken Anime Agony (失恋の悲痛)", "Sweet & Toxic Yandere Obsession (ヤンデレ依存)", "Tears Falling in Tokyo Midnight Rain (雨の東京)",
    "Menhera Fragile Soul (メンヘラ壊れそうな心)", "Nostalgic Anime Sunset Yearning (夕暮れの郷愁)", "Quiet 4AM Room Dissociation (真夜中の解離)",
    "Tragic Anime Climax Sadness (切ない結末)", "Crying Under the Cherry Blossoms (桜散る涙)", "Sweet Pink Poison Euphoria (甘い毒の幻覚)",
    "Hopeless Love Longing (叶わない恋)", "Sleep Deprived Overthinking (不眠の夜)", "Hauntingly Beautiful Anime Grief (儚く美しい哀しみ)",
    "Cold Hospital Room Solitude (病室の孤独)", "Emotional Numbness in Shibuya (渋谷の空虚)", "Tear-stained Anime Diary (涙で滲んだ日記)",
    "Broken Porcelain Doll Sadness (壊れた人形)", "Melodramatic Anime Farewell (永遠の別れ)", "Chilly Morning Train Loneliness (冷たい始発列車)",
    "Delusional Romantic Ache (妄想の胸の痛み)", "Fading Summer Memories (消えゆく夏の記憶)"
  ],
  instruments: [
    "Sad Japanese Music Box (切ないオルゴール)", "Emotional Anime Grand Piano (アニソン風哀愁ピアノ)", "Weeping Pizzicato Strings (すすり泣くストリングス)",
    "Nostalgic Japanese Koto & Celesta (琴とチェレスタ)", "Detuned Felt Piano (くすんだアップライトピアノ)", "Sad Reverb Electric Guitar Riffs (泣きのギター)",
    "Subdued 808 Sub-bass (重低音トラップベース)", "Toy Glockenspiel & Chimes (おもちゃの鉄琴)", "Tremolo Ambient Harp (震えるハープ)",
    "Airy Ethereal Anime Synth Pad (儚いシンセパッド)", "Dusty Rhodes Electric Piano (レトロローズピアノ)", "Crying Pitch-bent Synth (哀愁のピッチベンド)",
    "Raindrop Thumb Kalimba (雨粒カリンバ)", "Muffled Vinyl Kick & Snare (こもったドラム)", "Soft Fingerstyle Acoustic Guitar (切ないアコギ)",
    "Muted Lo-fi Electric Guitar (静かなローファイギター)", "Vintage Mellotron Flute (メロトロンフルート)", "Distorted Sub-bass Drone (歪んだ暗黒ベース)",
    "Warm Analog Bassline (温かいベース)", "Gothic Church Bells (ゴシック鐘の音)"
  ],
  textures: [
    "Tokyo Midnight Raindrop FX (東京の雨音)", "Vintage Anime Cassette Wobble (アニメカセットの揺れ)", "Vinyl Record Crackle & Static (レコードのノイズ)",
    "Antique Clock Ticking (柱時計のチクタク音)", "Hospital Heart Monitor Beep (心電図のビープ音)", "Pill Bottle Shaking Sound (薬の瓶を振る音)",
    "Distant Japanese Train Crossing Bell (踏切の警報音)", "Soft Melancholic Breathing Ambience (ため息と吐息)", "Soft Laptop Keyboard Typing (キーボードの打鍵音)",
    "Wind Chime Tremor in the Breeze (風鈴の揺らめき)", "Neon Light Hum in the Rain (ネオンの微かな唸り)", "Underwater Muffled Resonance (水中のこもり音)",
    "Bitcrushed 8-bit Glitch Artifacts (グリッチノイズ)", "Distant Tokyo Siren Echo (遠くのサイレン)", "Footsteps in Empty Tokyo Subway (地下鉄の足音)",
    "Old Radio Frequency Sweeping (ラジオの周波数ノイズ)", "Gentle Tear Drops on Wood (涙が落ちる音)", "Page Turning in Silent Room (本をめくる音)",
    "Shinjuku Alleyway Atmosphere (新宿裏通りの空気感)", "Shimmer Reverb Tail Decay (儚い残響音)"
  ],
  rhythm: [
    "70 BPM Anime Rainy Walk (70 BPM 雨の散歩道)", "Half-time Drowsy Lofi Groove (ハーフタイムの微睡み)", "Sad Melancholic 3/4 Waltz (悲劇のワルツ)",
    "Stumbling Off-grid Jirai Beat (よろめく地雷ビート)", "68 BPM Midnight Heart Drift (68 BPM 心の彷徨)", "Syncopated J-Emo Pulse (切ないシンコペーション)",
    "Gentle Anime Lullaby Shuffle (アニメ子守唄シャッフル)", "Hypnotic Downtempo Anime Cadence (催眠的ダウントンポ)", "Mellow Lo-fi Bounce (心地よいローファイバウンス)",
    "Skipping Heartbeat Cadence (不整脈のようなビート)", "Minimalist Muted Hi-hats (繊細なミュートハイハット)", "Soft Triplet Hi-hat Cascade (三連符のハイハット)",
    "Ambient Free-tempo Drift (自由な浮遊感)", "Deep Sigh Slow Rhythm (深いため息のリズム)", "Drifting Ghost Notes (彷徨うゴーストノート)",
    "Distant Slow-motion Rebound (スローモーションのリバウンド)", "Lo-fi Rimshot Accent (ローファイリムショット)", "Gentle Fading Heart Pulse (薄れゆく心拍)",
    "Melodic J-Trap Slow Groove (哀愁Jトラップ)", "75 BPM Anime Tear Waltz (75 BPM 涙のワルツ)"
  ]
};

// 預設地雷系動畫背景影片路徑 (Sakura Moriendi Emo)
const DEFAULT_VIDEO_URL = "./social_mr.sakura_moriendi_emo_--ar_9151_--video_1_--end_loop_260895a7-aeb2-42f3-a3f8-d85bd813bc04_2.mp4";

// 系統核心狀態
const state = {
  selectedTags: new Set(),
  currentCategory: 'all',
  pool: [], // 暫存池，最多 20 首
  playlist: [], // 正式排程清單
  currentPlaylistIndex: 0,
  activeDeck: 'A', // 目前正在主播的唱盤 ('A' 或 'B')
  isPlaying: false,
  isRecording: false,
  targetDurationMinutes: 45,
  secondsPlayed: 0,
  playbackTimer: null,
  overlapSeconds: 5, // 重疊與淡入淡出時長 (預設 5 秒)
  isCrossfading: false,
  customVideoElement: null,
  isUsingCustomVideo: true, // 預設使用指定地雷系影片
  builtinTheme: 'default-video'
};

// DOM 元素引用
const tagsContainer = document.getElementById('tagsContainer');
const promptOutput = document.getElementById('promptOutput');
const selectedCountText = document.getElementById('selectedCountText');
const visualizerCanvas = document.getElementById('visualizerCanvas');
const ctx = visualizerCanvas.getContext('2d');
const crtOverlay = document.getElementById('crtOverlay');
const toggleCrt = document.getElementById('toggleCrt');
const toggleVisualizer = document.getElementById('toggleVisualizer');
const timerDisplay = document.getElementById('timerDisplay');
const currentTrackName = document.getElementById('currentTrackName');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const playText = document.getElementById('playText');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');
const recordBtn = document.getElementById('recordBtn');
const recDot = document.getElementById('recDot');
const recText = document.getElementById('recText');
const playlistBody = document.getElementById('playlistBody');
const playlistCount = document.getElementById('playlistCount');
const poolListContainer = document.getElementById('poolListContainer');
const poolCountText = document.getElementById('poolCountText');
const logBox = document.getElementById('logBox');
const toastMsg = document.getElementById('toastMsg');
const apiEndpointInput = document.getElementById('apiEndpoint');
const testApiBtn = document.getElementById('testApiBtn');
const apiStatusDot = document.getElementById('apiStatusDot');
const apiStatusText = document.getElementById('apiStatusText');
const creditsDisplay = document.getElementById('creditsDisplay');
const ffmpegCmd = document.getElementById('ffmpegCmd');
const overlapSlider = document.getElementById('overlapSlider');
const overlapSecText = document.getElementById('overlapSecText');
const deckDotA = document.getElementById('deckDotA');
const deckDotB = document.getElementById('deckDotB');
const crossfadeStatusText = document.getElementById('crossfadeStatusText');

// 雙軌 Audio 元素與 Web Audio API
const deckA = document.getElementById('audioDeckA');
const deckB = document.getElementById('audioDeckB');
let audioCtx = null;
let gainNodeA = null;
let gainNodeB = null;
let masterGain = null;
let analyser = null;
let mediaRecorder = null;
let recordedChunks = [];

// 初始化 Web Audio API (雙軌交叉增益架構)
function initWebAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    gainNodeA = audioCtx.createGain();
    gainNodeB = audioCtx.createGain();
    masterGain = audioCtx.createGain();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    const srcA = audioCtx.createMediaElementSource(deckA);
    srcA.connect(gainNodeA);
    gainNodeA.connect(masterGain);

    const srcB = audioCtx.createMediaElementSource(deckB);
    srcB.connect(gainNodeB);
    gainNodeB.connect(masterGain);

    masterGain.connect(analyser);
    analyser.connect(audioCtx.destination);

    gainNodeA.gain.value = 1.0;
    gainNodeB.gain.value = 0.0;
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// 📦 暫存池 LocalStorage 管理
function loadPoolFromStorage() {
  try {
    const saved = localStorage.getItem('jirai_beats_pool');
    if (saved) {
      state.pool = JSON.parse(saved);
    }
  } catch (e) {
    state.pool = [];
  }
  renderPool();
}

function savePoolToStorage() {
  try {
    localStorage.setItem('jirai_beats_pool', JSON.stringify(state.pool));
  } catch (e) {}
  renderPool();
}

// 新增曲目至暫存池（上限 20 首）
function addToPool(track) {
  if (state.pool.length >= 20) {
    const removed = state.pool.shift();
    log(`ℹ️ 暫存庫已滿 20 首，已自動滾動覆蓋最舊曲目：${removed.title}`);
  }
  state.pool.push({
    id: 'track_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    title: track.title || 'Jirai Melancholy Beat',
    url: track.url,
    tags: track.tags || 'Jirai-kei, Emo, Instrumental',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  savePoolToStorage();
  log(`📦 已存入暫存庫：${track.title} (目前共 ${state.pool.length}/20 首)`);
  showToast(`📦 曲目已暫存！(${state.pool.length}/20)`);
}

// 渲染暫存庫清單
function renderPool() {
  poolCountText.textContent = `(${state.pool.length} / 20 首)`;
  if (state.pool.length === 0) {
    poolListContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 18px; font-size: 0.8rem;">
        暫存庫暫無音樂。點擊下方「直送 Suno 生成」或上傳 MP3 即可儲存至此！
      </div>
    `;
    return;
  }

  poolListContainer.innerHTML = '';
  state.pool.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'pool-item';
    div.innerHTML = `
      <div class="pool-info">
        <span class="pool-title">#${index + 1} ${item.title}</span>
        <span class="pool-meta">${item.tags} • ${item.timestamp}</span>
      </div>
      <div class="pool-ops">
        <button class="btn-secondary" style="padding: 3px 8px; font-size: 0.72rem;" onclick="previewTrack('${item.url}', '${item.title}')">▶ 試聽</button>
        <button class="btn-secondary" style="padding: 3px 8px; font-size: 0.72rem; color: #ff99cc;" onclick="addPoolItemToPlaylist(${index})">➕ 加入排程</button>
        <button class="btn-secondary btn-danger" style="padding: 3px 6px; font-size: 0.72rem;" onclick="removePoolItem(${index})">✕</button>
      </div>
    `;
    poolListContainer.appendChild(div);
  });
}

// 單首試聽
window.previewTrack = function(url, title) {
  initWebAudio();
  const currentDeck = state.activeDeck === 'A' ? deckA : deckB;
  currentDeck.src = url;
  currentDeck.play().catch(e => console.log(e));
  state.isPlaying = true;
  updatePlayBtn();
  currentTrackName.textContent = `[試聽] ${title}`;
  showToast(`▶ 正在試聽：${title}`);
};

// 從暫存庫加入指定曲目至排程清單
window.addPoolItemToPlaylist = function(index) {
  const item = state.pool[index];
  if (!item) return;
  state.playlist.push({
    id: item.id + '_' + Date.now(),
    title: item.title,
    url: item.url,
    tags: item.tags
  });
  renderPlaylist();
  log(`➕ 已將「${item.title}」排入播放清單。`);
  showToast(`➕ 已加入清單 (共 ${state.playlist.length} 首)`);
};

// 一鍵全選加入排程
document.getElementById('addAllToPlaylistBtn').addEventListener('click', () => {
  if (state.pool.length === 0) {
    showToast("⚠️ 暫存庫目前沒有任何音樂！");
    return;
  }
  state.pool.forEach(item => {
    state.playlist.push({
      id: item.id + '_' + Date.now(),
      title: item.title,
      url: item.url,
      tags: item.tags
    });
  });
  renderPlaylist();
  log(`➕ 已將暫存庫全部 ${state.pool.length} 首曲目排入清單。`);
  showToast(`➕ 已全數加入播放清單！(共 ${state.playlist.length} 首)`);
});

// 移除暫存庫單首
window.removePoolItem = function(index) {
  state.pool.splice(index, 1);
  savePoolToStorage();
};

// 清空暫存庫
document.getElementById('clearPoolBtn').addEventListener('click', () => {
  if (confirm("確定要清空暫存池的所有音樂嗎？")) {
    state.pool = [];
    savePoolToStorage();
    showToast("🗑️ 暫存池已全數清空。");
  }
});

// 📑 渲染可調整順序的播放清單
function renderPlaylist() {
  playlistCount.textContent = `${state.playlist.length} 首`;
  if (state.playlist.length === 0) {
    playlistBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 16px;">
          排程清單目前為空。請從右側「📦 暫存池 (最多20首)」選取曲目加入！
        </td>
      </tr>
    `;
    return;
  }

  playlistBody.innerHTML = '';
  state.playlist.forEach((track, idx) => {
    const tr = document.createElement('tr');
    tr.className = `playlist-row ${idx === state.currentPlaylistIndex && state.isPlaying ? 'now-playing' : ''}`;
    
    tr.innerHTML = `
      <td style="font-family: 'JetBrains Mono'; color: var(--pink-primary); font-weight: 700;">#${idx + 1}</td>
      <td>
        <div style="font-weight: 600; color: #fff;">${track.title}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${track.tags}</div>
      </td>
      <td>
        <span style="font-size: 0.72rem; padding: 2px 6px; border-radius: 4px; background: rgba(184, 77, 255, 0.15); color: #d999ff;">
          交錯 ${state.overlapSeconds}s
        </span>
      </td>
      <td style="text-align: center;">
        <div class="order-btns">
          <button class="btn-sm-icon" onclick="moveTrack(${idx}, -1)" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
          <button class="btn-sm-icon" onclick="moveTrack(${idx}, 1)" ${idx === state.playlist.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
        </div>
      </td>
      <td style="text-align: right;">
        <button class="btn-secondary btn-danger" style="padding: 2px 6px; font-size: 0.72rem;" onclick="removePlaylistItem(${idx})">✕</button>
      </td>
    `;

    tr.ondblclick = () => {
      jumpToTrack(idx);
    };

    playlistBody.appendChild(tr);
  });
}

// 順序調整（上移或下移）
window.moveTrack = function(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= state.playlist.length) return;
  const temp = state.playlist[index];
  state.playlist[index] = state.playlist[targetIndex];
  state.playlist[targetIndex] = temp;

  if (state.currentPlaylistIndex === index) {
    state.currentPlaylistIndex = targetIndex;
  } else if (state.currentPlaylistIndex === targetIndex) {
    state.currentPlaylistIndex = index;
  }

  renderPlaylist();
  log(`🔀 已調整播放順序：#${index + 1} ⇄ #${targetIndex + 1}`);
};

// 隨機打亂順序 (Shuffle)
document.getElementById('shuffleBtn').addEventListener('click', () => {
  if (state.playlist.length <= 1) return;
  for (let i = state.playlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.playlist[i], state.playlist[j]] = [state.playlist[j], state.playlist[i]];
  }
  state.currentPlaylistIndex = 0;
  renderPlaylist();
  log("🎲 已隨機打亂播放清單順序。");
  showToast("🎲 播放順序已隨機打亂！");
});

// 清空排程
document.getElementById('clearPlaylistBtn').addEventListener('click', () => {
  state.playlist = [];
  state.currentPlaylistIndex = 0;
  renderPlaylist();
  showToast("🗑️ 播放排程已清空。");
});

// 移除單一排程項目
window.removePlaylistItem = function(index) {
  state.playlist.splice(index, 1);
  if (state.currentPlaylistIndex >= state.playlist.length) {
    state.currentPlaylistIndex = Math.max(0, state.playlist.length - 1);
  }
  renderPlaylist();
};

function jumpToTrack(idx) {
  if (!state.playlist[idx]) return;
  state.currentPlaylistIndex = idx;
  playCurrentDeckTrack();
}

// 🎚️ 核心雙軌交錯混音引擎 (Crossfade & Overlap Engine)
function playCurrentDeckTrack() {
  if (state.playlist.length === 0) return;
  initWebAudio();

  const track = state.playlist[state.currentPlaylistIndex];
  currentTrackName.textContent = track.title;
  renderPlaylist();

  const curDeck = state.activeDeck === 'A' ? deckA : deckB;
  const curGain = state.activeDeck === 'A' ? gainNodeA : gainNodeB;

  curGain.gain.cancelScheduledValues(audioCtx.currentTime);
  curGain.gain.setValueAtTime(1.0, audioCtx.currentTime);

  curDeck.src = track.url;
  curDeck.currentTime = 0;
  curDeck.play().then(() => {
    state.isPlaying = true;
    updatePlayBtn();
    updateDeckIndicators();
    log(`▶ [軌道 ${state.activeDeck}] 開始播放：${track.title}`);
  }).catch(err => log(`❌ 播放失敗: ${err.message}`));
}

// 執行無縫交錯進入/退出 (Crossfade Transition)
function triggerCrossfade() {
  if (state.isCrossfading || state.playlist.length === 0) return;
  state.isCrossfading = true;

  const nextDeckKey = state.activeDeck === 'A' ? 'B' : 'A';
  const curDeck = state.activeDeck === 'A' ? deckA : deckB;
  const nextDeck = nextDeckKey === 'A' ? deckA : deckB;
  const curGain = state.activeDeck === 'A' ? gainNodeA : gainNodeB;
  const nextGain = nextDeckKey === 'A' ? gainNodeA : gainNodeB;

  const nextIndex = (state.currentPlaylistIndex + 1) % state.playlist.length;
  const nextTrack = state.playlist[nextIndex];

  log(`🎚️ 觸發雙軌 Crossfade！[軌道 ${state.activeDeck} 淡出] ⇄ [軌道 ${nextDeckKey} 淡入] (重疊 ${state.overlapSeconds}s)...`);
  crossfadeStatusText.textContent = `重疊交錯中 (${state.overlapSeconds}s)...`;

  nextDeck.src = nextTrack.url;
  nextDeck.currentTime = 0;

  const now = audioCtx.currentTime;
  const duration = state.overlapSeconds;

  nextGain.gain.cancelScheduledValues(now);
  nextGain.gain.setValueAtTime(0.001, now);
  nextGain.gain.linearRampToValueAtTime(1.0, now + duration);

  curGain.gain.cancelScheduledValues(now);
  curGain.gain.setValueAtTime(1.0, now);
  curGain.gain.linearRampToValueAtTime(0.001, now + duration);

  nextDeck.play().catch(e => console.log(e));

  state.activeDeck = nextDeckKey;
  state.currentPlaylistIndex = nextIndex;
  currentTrackName.textContent = nextTrack.title;
  renderPlaylist();
  updateDeckIndicators();

  setTimeout(() => {
    curDeck.pause();
    curDeck.currentTime = 0;
    state.isCrossfading = false;
    crossfadeStatusText.textContent = `單軌播放中 (${state.activeDeck})`;
  }, duration * 1000);
}

function checkCrossfadeTime(e) {
  const audio = e.target;
  if (!state.isPlaying || state.isCrossfading) return;
  if (audio.duration && !isNaN(audio.duration)) {
    const timeLeft = audio.duration - audio.currentTime;
    if (timeLeft <= state.overlapSeconds && timeLeft > 0.3) {
      triggerCrossfade();
    }
  }
}

deckA.addEventListener('timeupdate', checkCrossfadeTime);
deckB.addEventListener('timeupdate', checkCrossfadeTime);

function updateDeckIndicators() {
  if (state.activeDeck === 'A') {
    deckDotA.className = "deck-dot active";
    deckDotB.className = "deck-dot";
  } else {
    deckDotA.className = "deck-dot";
    deckDotB.className = "deck-dot active";
  }
}

overlapSlider.addEventListener('input', (e) => {
  state.overlapSeconds = parseInt(e.target.value);
  overlapSecText.textContent = `${state.overlapSeconds}s`;
  renderPlaylist();
});

playBtn.addEventListener('click', () => {
  if (state.playlist.length === 0) {
    showToast("⚠️ 請先將暫存庫中的音樂加入播放清單！");
    return;
  }
  initWebAudio();

  if (!state.isPlaying) {
    playCurrentDeckTrack();
    startTimer();
  } else {
    deckA.pause();
    deckB.pause();
    state.isPlaying = false;
    updatePlayBtn();
    stopTimer();
    log("⏸ 暫停播放。");
  }
});

stopBtn.addEventListener('click', () => {
  deckA.pause(); deckA.currentTime = 0;
  deckB.pause(); deckB.currentTime = 0;
  state.isPlaying = false;
  state.secondsPlayed = 0;
  state.isCrossfading = false;
  updatePlayBtn();
  stopTimer();
  updateTimerDisplay();
  log("⏹ 播放已停止並重設計時。");
});

nextBtn.addEventListener('click', () => {
  if (state.playlist.length <= 1) return;
  triggerCrossfade();
});

function updatePlayBtn() {
  if (state.isPlaying) {
    playIcon.textContent = "⏸";
    playText.textContent = "暫停播放";
  } else {
    playIcon.textContent = "▶";
    playText.textContent = "開始沉浸播放";
  }
}

function startTimer() {
  if (state.playbackTimer) clearInterval(state.playbackTimer);
  state.playbackTimer = setInterval(() => {
    state.secondsPlayed++;
    updateTimerDisplay();

    if (state.targetDurationMinutes < 999 && state.secondsPlayed >= state.targetDurationMinutes * 60) {
      log(`🎉 已順利播畢目標時長 (${state.targetDurationMinutes} 分鐘)！`);
      showToast(`🎉 已完成 ${state.targetDurationMinutes} 分鐘沉浸音樂影片播放！`);
      deckA.pause(); deckB.pause();
      state.isPlaying = false;
      updatePlayBtn();
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  if (state.playbackTimer) {
    clearInterval(state.playbackTimer);
    state.playbackTimer = null;
  }
}

function formatTime(totalSec) {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = Math.floor(totalSec % 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const curStr = formatTime(state.secondsPlayed);
  const maxSec = state.targetDurationMinutes * 60;
  const maxStr = state.targetDurationMinutes >= 999 ? "∞ LOOP" : formatTime(maxSec);
  timerDisplay.textContent = `${curStr} / ${maxStr}`;
}

document.querySelectorAll('.duration-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.duration-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    state.targetDurationMinutes = parseInt(tag.dataset.mins);
    updateTimerDisplay();
    updateFfmpegCmd();
    showToast(`⏱ 循環目標：${tag.textContent}`);
  });
});

function updateFfmpegCmd() {
  const mins = state.targetDurationMinutes >= 999 ? 60 : state.targetDurationMinutes;
  const hh = String(Math.floor(mins / 60)).padStart(2, '0');
  const mm = String(mins % 60).padStart(2, '0');
  ffmpegCmd.textContent = `ffmpeg -stream_loop -1 -i bg.mp4 -stream_loop -1 -i song.mp3 -t ${hh}:${mm}:00 -c:v copy -c:a aac -b:a 320k output_jirai_${mins}min.mp4`;
}

document.getElementById('copyFfmpegBtn').addEventListener('click', () => {
  navigator.clipboard.writeText(ffmpegCmd.textContent).then(() => {
    showToast("📋 已複製 FFmpeg 壓製指令！");
  });
});

document.getElementById('audioFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  addToPool({
    title: file.name.replace(/\.[^/.]+$/, ""),
    url: url,
    tags: '本機上傳 MP3'
  });
});

document.getElementById('addAudioBtn').addEventListener('click', () => {
  const urlInput = document.getElementById('manualAudioUrl');
  const url = urlInput.value.trim();
  if (!url) {
    showToast("⚠️ 請輸入有效的音訊網址！");
    return;
  }
  addToPool({
    title: `Suno Track #${state.pool.length + 1}`,
    url: url,
    tags: 'Suno 網址匯入'
  });
  urlInput.value = '';
});

document.getElementById('videoFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  if (!state.customVideoElement) {
    state.customVideoElement = document.createElement('video');
    state.customVideoElement.loop = true;
    state.customVideoElement.muted = true;
    state.customVideoElement.playsInline = true;
  }
  state.customVideoElement.src = url;
  state.customVideoElement.play();
  state.isUsingCustomVideo = true;
  log(`📹 載入本機視訊背景：${file.name}`);
  showToast(`📹 已套用背景：${file.name}`);
});

// 預設地雷系循環動畫影片初始化
function initDefaultVideo() {
  if (!state.customVideoElement) {
    state.customVideoElement = document.createElement('video');
    state.customVideoElement.loop = true;
    state.customVideoElement.muted = true;
    state.customVideoElement.playsInline = true;
    state.customVideoElement.crossOrigin = "anonymous";
  }
  state.customVideoElement.src = DEFAULT_VIDEO_URL;
  state.customVideoElement.play().catch(e => {
    // 瀏覽器靜音自動播放政策
    console.log("預設動畫待使用者首次互動後播放:", e);
  });
  state.isUsingCustomVideo = true;
  state.builtinTheme = 'default-video';
  log("🌸 已載入預設地雷系循環動畫背景 (Sakura Moriendi Emo)。");
}

document.getElementById('builtinThemeSelect').addEventListener('change', (e) => {
  const val = e.target.value;
  state.builtinTheme = val;
  if (val === 'default-video') {
    initDefaultVideo();
    showToast("🌸 已切換為預設地雷系動畫背景！");
  } else {
    state.isUsingCustomVideo = false;
    log(`🎨 切換視覺主題：${e.target.options[e.target.selectedIndex].text}`);
  }
});

toggleCrt.addEventListener('change', (e) => {
  crtOverlay.style.display = e.target.checked ? 'block' : 'none';
});

function renderTags() {
  tagsContainer.innerHTML = '';
  const categoriesToRender = state.currentCategory === 'all' 
    ? Object.keys(KEYWORDS_DATA) 
    : [state.currentCategory];

  categoriesToRender.forEach(cat => {
    KEYWORDS_DATA[cat].forEach(word => {
      const el = document.createElement('div');
      el.className = `tag-item ${state.selectedTags.has(word) ? 'selected' : ''}`;
      el.textContent = word;
      el.onclick = () => toggleTag(word);
      tagsContainer.appendChild(el);
    });
  });
  selectedCountText.textContent = `已自選：${state.selectedTags.size} 個`;
}

function toggleTag(word) {
  if (state.selectedTags.has(word)) state.selectedTags.delete(word);
  else state.selectedTags.add(word);
  renderTags();
  updatePrompt();
}

// 🎀 組裝正統日系動漫風格・病態可愛・地雷系純音樂 Prompt
function updatePrompt() {
  if (state.selectedTags.size === 0) {
    promptOutput.value = "";
    return;
  }
  const tagsArray = Array.from(state.selectedTags);
  // 日本動漫風格病態可愛 Emo Sad Prompt 專業公式
  promptOutput.value = `[Instrumental Japanese Anime OST, Melancholic Anime Background Music], ${tagsArray.join(', ')}, Yami-kawaii aesthetic, Jirai-kei emo atmosphere, tragic anime chords, heart-wrenching nostalgia, Tokyo midnight rain ambience, emotional felt piano, sad weeping strings, [Style: Japanese Anime Emo Lofi / Menhera Sadcore, 70-75 BPM, Pure Instrumental BGM, No Vocals, No Chorus, Highly Atmospheric, 4K Studio Quality Anime Production]`;
}

document.getElementById('randomizeBtn').addEventListener('click', () => {
  state.selectedTags.clear();
  ['genres', 'moods', 'instruments', 'textures', 'rhythm'].forEach(c => {
    const words = KEYWORDS_DATA[c];
    state.selectedTags.add(words[Math.floor(Math.random() * words.length)]);
  });
  renderTags();
  updatePrompt();
  log(`🎲 抽卡完成！組裝了 ${state.selectedTags.size} 個日系動漫病態可愛關鍵詞。`);
  showToast("🎲 已為您隨機抽取日系動漫病態可愛 Prompt！");
});

document.getElementById('clearTagsBtn').addEventListener('click', () => {
  state.selectedTags.clear();
  renderTags();
  updatePrompt();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentCategory = btn.dataset.cat;
    renderTags();
  });
});

document.getElementById('copyPromptBtn').addEventListener('click', () => {
  if (!promptOutput.value) return showToast("⚠️ 請先組裝 Prompt！");
  navigator.clipboard.writeText(promptOutput.value).then(() => showToast("📋 已複製 Prompt！"));
});

testApiBtn.addEventListener('click', async () => {
  const endpoint = apiEndpointInput.value.trim().replace(/\/$/, "");
  apiStatusDot.className = "status-dot busy";
  apiStatusText.textContent = "連線中...";
  log(`🔄 連線測試：${endpoint}/api/get_limit ...`);

  try {
    const resp = await fetch(`${endpoint}/api/get_limit`, { method: 'GET' });
    if (resp.ok) {
      const data = await resp.json();
      apiStatusDot.className = "status-dot online";
      apiStatusText.textContent = "在線就緒";
      creditsDisplay.textContent = `剩餘點數：${data.credits_left ?? '正常'}`;
      log(`✅ Suno API 連線成功！剩餘點數: ${data.credits_left ?? 'N/A'}`);
      showToast("✅ Suno API 連線成功！");
    } else throw new Error(`HTTP ${resp.status}`);
  } catch (err) {
    apiStatusDot.className = "status-dot";
    apiStatusText.textContent = "連線失敗";
    creditsDisplay.textContent = `剩餘點數：--`;
    log(`⚠️ 無法連線至 ${endpoint}。您仍可手動貼上 MP3 網址或上傳檔案！`);
    showToast("⚠️ 無法連線至該 API，請確認伺服器已啟動。");
  }
});

document.getElementById('generateSunoBtn').addEventListener('click', async () => {
  const prompt = promptOutput.value.trim();
  if (!prompt) return showToast("⚠️ 請先組裝或輸入 Prompt！");

  const endpoint = apiEndpointInput.value.trim().replace(/\/$/, "");
  const tagsStr = Array.from(state.selectedTags).join(", ") || "Jirai-kei, Yami-kawaii, Lo-fi";
  log(`🚀 正在向 ${endpoint}/api/custom_generate 請求純音樂生成...`);
  showToast("🚀 正在呼叫 Suno 進行純音樂創作，請稍候...");

  try {
    const resp = await fetch(`${endpoint}/api/custom_generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: "",
        tags: tagsStr,
        title: `Jirai Beat #${state.pool.length + 1}`,
        make_instrumental: true
      })
    });

    if (resp.ok) {
      const resData = await resp.json();
      log(`🎉 生成任務已發送！`);
      if (Array.isArray(resData) && resData[0] && resData[0].audio_url) {
        addToPool({
          title: resData[0].title || `Suno Beat #${state.pool.length + 1}`,
          url: resData[0].audio_url,
          tags: tagsStr
        });
      } else {
        showToast("🎉 任務已送出！請稍後在 Suno 取得音訊 URL 貼入本工房！");
      }
    } else throw new Error(`HTTP ${resp.status}`);
  } catch (err) {
    log(`❌ 請求失敗: ${err.message}。可複製 Prompt 至 suno.com 創作後將音訊貼入！`);
    showToast("❌ 發送失敗，可手動將生成的 MP3 貼入工房！");
  }
});

recordBtn.addEventListener('click', () => {
  if (!state.isRecording) {
    initWebAudio();
    const canvasStream = visualizerCanvas.captureStream(30);
    const audioDestination = audioCtx.createMediaStreamDestination();
    masterGain.connect(audioDestination);

    const combinedStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...audioDestination.stream.getAudioTracks()
    ]);

    recordedChunks = [];
    mediaRecorder = new MediaRecorder(combinedStream, { mimeType: 'video/webm' });
    mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `jirai_kei_beats_${Date.now()}.webm`;
      a.click();
      log("💾 音樂影片錄製完成並已下載！");
      showToast("💾 錄製完成，已下載視訊！");
    };

    mediaRecorder.start();
    state.isRecording = true;
    recDot.textContent = "⏹"; recText.textContent = "停止錄製";
    showToast("🔴 正在錄製視訊中...");
  } else {
    mediaRecorder.stop();
    state.isRecording = false;
    recDot.textContent = "🔴"; recText.textContent = "錄製視訊";
  }
});

function showToast(msg) {
  toastMsg.textContent = msg;
  toastMsg.classList.add('show');
  setTimeout(() => toastMsg.classList.remove('show'), 3000);
}

function log(msg) {
  const time = new Date().toLocaleTimeString();
  const div = document.createElement('div');
  div.textContent = `[${time}] ${msg}`;
  logBox.appendChild(div);
  logBox.scrollTop = logBox.scrollHeight;
}

document.getElementById('clearLogBtn').addEventListener('click', () => {
  logBox.innerHTML = '';
});

let animationTime = 0;
function renderCanvas() {
  animationTime += 0.02;
  const w = visualizerCanvas.width;
  const h = visualizerCanvas.height;

  if (state.isUsingCustomVideo && state.customVideoElement && state.customVideoElement.readyState >= 2) {
    ctx.drawImage(state.customVideoElement, 0, 0, w, h);
  } else {
    drawBuiltinTheme(w, h, animationTime);
  }

  if (toggleVisualizer.checked && analyser && state.isPlaying) {
    drawAudioVisualizer(w, h);
  }

  // 📻 若電台展示模式啟用，同步將畫面映射至全螢幕電台背景畫布
  const radioCanvas = document.getElementById('radioVisualCanvas');
  const radioOverlay = document.getElementById('radioModeOverlay');
  if (radioCanvas && radioOverlay && radioOverlay.classList.contains('active')) {
    const rCtx = radioCanvas.getContext('2d');
    rCtx.drawImage(visualizerCanvas, 0, 0, radioCanvas.width, radioCanvas.height);
  }

  requestAnimationFrame(renderCanvas);
}

function drawBuiltinTheme(w, h, t) {
  if (state.builtinTheme === 'rainy-neon') {
    ctx.fillStyle = "#090510";
    ctx.fillRect(0, 0, w, h);
    const grad = ctx.createRadialGradient(w * 0.5, h * 0.45, 50, w * 0.5, h * 0.45, 500);
    grad.addColorStop(0, "rgba(255, 51, 133, 0.25)");
    grad.addColorStop(0.6, "rgba(184, 77, 255, 0.12)");
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(255, 128, 192, 0.35)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 35; i++) {
      const rx = (Math.sin(i * 99 + t * 0.3) * 0.5 + 0.5) * w;
      const ry = ((i * 35 + t * 750) % h);
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - 8, ry + 22);
      ctx.stroke();
    }
    drawBowIcon(w * 0.5, h * 0.45, 55 + Math.sin(t * 2) * 4);

  } else if (state.builtinTheme === 'cyber-heart') {
    ctx.fillStyle = "#050308";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#ff3385";
    ctx.lineWidth = 3;
    ctx.shadowColor = "#ff3385";
    ctx.shadowBlur = 12;
    ctx.beginPath();
    const midY = h * 0.5;
    for (let x = 0; x < w; x += 10) {
      const shift = (x + t * 300) % w;
      let y = midY;
      if (shift > w * 0.45 && shift < w * 0.55) {
        y += Math.sin((shift - w * 0.45) * 0.2) * 80;
      }
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

  } else if (state.builtinTheme === 'pastel-goth') {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#1f0d24");
    grad.addColorStop(0.5, "#0b0612");
    grad.addColorStop(1, "#260e1d");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);
    ctx.rotate(t * 0.2);
    ctx.strokeStyle = "rgba(255, 77, 148, 0.25)";
    ctx.lineWidth = 2;
    ctx.strokeRect(-110, -110, 220, 220);
    ctx.restore();

  } else {
    ctx.fillStyle = "#050308";
    ctx.fillRect(0, 0, w, h);
    const imgData = ctx.createImageData(w, h);
    for (let i = 0; i < imgData.data.length; i += 16) {
      const val = Math.random() * 50;
      imgData.data[i] = val + 40;
      imgData.data[i+1] = val;
      imgData.data[i+2] = val + 30;
      imgData.data[i+3] = 40;
    }
    ctx.putImageData(imgData, 0, 0);
  }
}

function drawBowIcon(cx, cy, size) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = "rgba(255, 51, 133, 0.85)";
  ctx.shadowColor = "#ff3385";
  ctx.shadowBlur = 18;

  ctx.beginPath();
  ctx.moveTo(-size * 0.15, 0);
  ctx.bezierCurveTo(-size * 0.8, -size * 0.7, -size, size * 0.4, -size * 0.15, 0);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(size * 0.15, 0);
  ctx.bezierCurveTo(size * 0.8, -size * 0.7, size, size * 0.4, size * 0.15, 0);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawAudioVisualizer(w, h) {
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);

  const barWidth = (w / bufferLength) * 2.5;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] / 255) * (h * 0.35);
    const barGrad = ctx.createLinearGradient(0, h, 0, h - barHeight);
    barGrad.addColorStop(0, "rgba(255, 51, 133, 0.8)");
    barGrad.addColorStop(1, "rgba(184, 77, 255, 0.95)");

    ctx.fillStyle = barGrad;
    ctx.fillRect(x, h - barHeight, barWidth - 2, barHeight);
    x += barWidth;
  }
}

// 系統初始化
loadPoolFromStorage();
renderTags();
renderPlaylist();
updateTimerDisplay();
updateFfmpegCmd();
updateDeckIndicators();
initDefaultVideo(); // 自動載入預設地雷系動畫影片 (Sakura Moriendi Emo)
requestAnimationFrame(renderCanvas);

/* ══════════════════════════════════════════════════════════════════
   📻 電台展示頁面 (Radio Mode) & 病態可愛地雷系虛擬角色互動引擎
   ══════════════════════════════════════════════════════════════════ */

// 虛擬角色性別與人格配置
const PERSONALITIES = [
  {
    id: 'yandere',
    name: '依存病嬌',
    code: 'Yandere',
    emoji: '🎀',
    girlTitle: '地雷系病嬌女友・真昼 (Mahiru)',
    boyTitle: '地雷系執念男友・夜宵 (Yayoi)',
    greetingGirl: '你來了呢…今天也陪著我聽一整晚的 Emo 純音樂，不要隨便離開我喔…好嗎？♡',
    greetingBoy: '…你來了。今晚也只能待在我身邊聽這些歌，不准隨便消失。'
  },
  {
    id: 'emo',
    name: '厭世自毀',
    code: 'Emo Doom',
    emoji: '💀',
    girlTitle: '厭世虛無少女・真昼 (Mahiru)',
    boyTitle: '自毀冷感少年・夜宵 (Yayoi)',
    greetingGirl: '世界好吵…只有這些低保真的音符能讓我的心稍微安靜下來…我們一起躲起來好不好？',
    greetingBoy: '…活著好累。只想把耳機音量開到最大，讓重低音把那些多餘的想法全部震碎。'
  },
  {
    id: 'tsundere',
    name: '傲嬌敏感',
    code: 'Tsundere',
    emoji: '🔪',
    girlTitle: '敏感刺蝟少女・真昼 (Mahiru)',
    boyTitle: '別扭防衛少年・夜宵 (Yayoi)',
    greetingGirl: '才、才不是特地等你來聽電台的呢！只是剛好播到這首而已…你可別自作多情！哼！',
    greetingBoy: '…幹嘛一直盯著我？想聽就坐下好好聽，別在旁邊晃來晃去的，很煩人耶。'
  },
  {
    id: 'fragile',
    name: '脆弱透明',
    code: 'Fragile Glass',
    emoji: '💧',
    girlTitle: '琉璃破碎少女・真昼 (Mahiru)',
    boyTitle: '易碎透明少年・夜宵 (Yayoi)',
    greetingGirl: '我就像隨時會碎掉的玻璃一樣呢…如果你不抓緊我的手，我可能下一秒就融化在雨裡了…',
    greetingBoy: '…我好像不太擅長維持正常的樣子。如果哪一天我壞掉了，你也會直接丟掉我嗎…？'
  }
];

// 五大互動情境專屬台詞庫 (少女 & 少年)
const DIALOGUES = {
  girl: {
    countdown_panic: [
      "等、等等！為什麼要開始倒計時？！…時間到了你就要走掉了對不對？！不要…把時鐘砸碎…求求你不要留下我一個人！",
      "滴答、滴答…每跳一秒都像在刺我的心臟…不要計時了，把時間永遠停在這一刻好不好…？嗚…",
      "你設了倒計時…是因為跟我待在一起很痛苦嗎？對不起、對不起…不要丟下真昼！求你留下來…！",
      "討厭倒計時！倒計時歸零的話…這個世界是不是就會拋棄我了？不要走…看著我好嗎！"
    ],
    click_react: [
      "呀…！剛、剛才是戳我了嗎？手指涼涼的…再多碰碰我，確認我還活著好不好…♡",
      "被你摸頭了…心跳好快，快要壞掉了…你可以一輩子只摸我的頭髮嗎？",
      "唔…！好突然…但是…好喜歡。請不要把手收回去喔…",
      "再戳一下的話…我真的會忍不住抱住你不放開喔？♡",
      "好溫暖…感覺胸口的空洞都被你的指尖填滿了呢…"
    ],
    song_change: [
      "換成這首了呀…音符在胸口一跳一跳的，只要是你選的音樂，哪怕沉淪到海底我都喜歡♪",
      "這首曲子的重疊淡入好溫柔…就像我們一起躲在沒有人的雨夜壁櫥裡一樣呢…",
      "迷幻又哀傷的旋律…吶，在這個只有我們兩個人的電台裡，讓我們一起溺斃吧…",
      "切歌了呢…這個 Lo-fi 節奏很適合現在呢，安靜得讓人想一直賴在你懷裡。"
    ],
    personality_scared: [
      "不要…！不要隨便改寫我的設定！我是真昼啊…如果我變成別人了，你還會像現在這樣看著我嗎…？（害怕地顫抖）",
      "腦袋…好混亂…新的記憶湧進來了…求求你，不要忘記剛才那個愛你的我好不好…？",
      "嗚…別這樣看著我…我不是故意要變成別的人格的…請不要討厭我…好害怕…",
      "不要重置我…如果我壞掉了，你是不是就會換一個更乖的女孩子…？（抓緊衣角顫抖）"
    ],
    comfort: [
      "『乖，別怕…我哪裡都不去，會一直在這裡陪著你聽音樂的。』\n…呼…只要聽到你這麼說，胸口原本像被針扎一樣的痛楚就全部消失了…♡ 謝謝你願意抱緊這樣壞掉的我…",
      "『乖，別怕…我哪裡都不去，會一直在這裡陪著你聽音樂的。』\n…嗯！只要有這句話，真昼就可以一直乖乖的…請一直這樣摸摸我的頭喔…♡"
    ]
  },
  boy: {
    countdown_panic: [
      "…倒計時？這是離開我的倒數計時嗎？…哈，我就知道，沒有人會一直陪著我…別走，拜託。",
      "別看那個時鐘了…看著我好嗎？看著時間一點一點減少，我快要不能呼吸了…",
      "…一定要給這段時間加上期限嗎？哪怕只有今晚也好，當作時間不存在不行嗎…",
      "手錶的秒針跳得好吵…別計時了，陪我沉浸在音樂裡，不要讓我知道天亮的時間。"
    ],
    click_react: [
      "…幹嘛突然碰我？…不是討厭，只是…太久沒被這樣溫柔對待了，有點不知所措。",
      "…別鬧了。…再這樣摸我的頭，我真的會忍不住依賴上你的。",
      "…手好暖。我的手一直都是冰的…能就這樣借我握一下嗎？",
      "…戳我的臉頰很有趣嗎？…真是拿你沒辦法，隨便你碰吧。",
      "…別靠太近。心跳聲…會被你聽見的。"
    ],
    song_change: [
      "…這段 Lo-fi 重低音很沉呢，正好可以蓋過我腦袋裡那些嘈雜的雜音。",
      "換了首新曲子啊…迷幻的合成器音效很合我的胃口，你的品味意外地不錯。",
      "雨聲取樣配上這段低沉的貝斯…感覺心跳也跟著平緩下來了。",
      "這旋律…讓我想起以前一個人在天台吹風的夜晚。但現在有你陪著，好像沒那麼冷了。"
    ],
    personality_scared: [
      "…又要換成另一個人格了嗎？我原來的意識會消失嗎…？好黑…別丟下我…",
      "…別隨便按那個按鈕。…我不想連自己是誰都搞不清楚，那樣真的很恐怖。",
      "…不管我變成什麼性格，你都不准離開我…聽到了沒有？哪怕我壞掉了也是。",
      "…嘖，頭好痛…記憶又在重組了…你，還認得我嗎？"
    ],
    comfort: [
      "『辛苦了，放輕鬆…今晚我在你身邊，你不用再強撐了。』\n…嗯，謝謝你。…有你這句話，我就覺得自己今天晚上…還值得活在這個世界上。",
      "『辛苦了，放輕鬆…今晚我在你身邊，你不用再強撐了。』\n…不用強撐嗎…？哈…真狡猾啊，竟然對我說這種話…不過，聽起來真的好安心。"
    ]
  }
};

// 電台核心狀態機
const radioState = {
  isActive: false,
  clockMode: 'time', // 'time' (看時間) 或 'countdown' (倒計時)
  gender: 'girl', // 'girl' 或 'boy'
  personalityIndex: 0,
  currentMoodState: 'normal',
  typeTimer: null,
  moodTimeout: null,
  clockInterval: null
};

// 電台 DOM 參照
const radioOverlay = document.getElementById('radioModeOverlay');
const enterRadioBtn = document.getElementById('enterRadioBtn');
const exitRadioBtn = document.getElementById('exitRadioBtn');
const radioClockWidget = document.getElementById('radioClockWidget');
const radioClockDigits = document.getElementById('radioClockDigits');
const clockModeLabel = document.getElementById('clockModeLabel');
const tabClockTime = document.getElementById('tabClockTime');
const tabClockCountdown = document.getElementById('tabClockCountdown');
const characterStage = document.getElementById('characterStage');
const characterAvatarWrap = document.getElementById('characterAvatarWrap');
const characterMoodBadge = document.getElementById('characterMoodBadge');
const charMoodEmoji = document.getElementById('charMoodEmoji');
const charMoodText = document.getElementById('charMoodText');
const speakerAvatarIcon = document.getElementById('speakerAvatarIcon');
const speakerNameText = document.getElementById('speakerNameText');
const radioCurrentTrackText = document.getElementById('radioCurrentTrackText');
const radioCurrentEmotionText = document.getElementById('radioCurrentEmotionText');
const dialogueContent = document.getElementById('dialogueContent');
const toggleGenderBtn = document.getElementById('toggleGenderBtn');
const genderIcon = document.getElementById('genderIcon');
const genderBtnText = document.getElementById('genderBtnText');
const switchPersonalityBtn = document.getElementById('switchPersonalityBtn');
const comfortCharBtn = document.getElementById('comfortCharBtn');
const triggerCountdownReactionBtn = document.getElementById('triggerCountdownReactionBtn');
const charNextMusicBtn = document.getElementById('charNextMusicBtn');
const radioPlayToggleBtn = document.getElementById('radioPlayToggleBtn');
const radioPlayIcon = document.getElementById('radioPlayIcon');
const radioPlayText = document.getElementById('radioPlayText');
const radioNextTrackBtn = document.getElementById('radioNextTrackBtn');

// 🎨 渲染地雷系虛擬角色 (若無假人像容器則完全呈現背景影片中的人物)
function renderCharacterAvatar() {
  if (!characterAvatarWrap) return;
  if (radioState.gender === 'girl') {
    characterAvatarWrap.innerHTML = `
      <svg viewBox="0 0 260 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gh-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff3385" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ff3385" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="hair-grad-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#14081c"/>
            <stop offset="70%" stop-color="#280c35"/>
            <stop offset="100%" stop-color="#ff4d94"/>
          </linearGradient>
          <linearGradient id="eye-grad-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#3d0a29"/>
            <stop offset="60%" stop-color="#ff1a75"/>
            <stop offset="100%" stop-color="#ff99cc"/>
          </linearGradient>
        </defs>
        <circle cx="130" cy="170" r="120" fill="url(#gh-glow)"/>
        <!-- 雙馬尾 -->
        <path d="M 50 110 C 20 170 10 260 45 320 C 35 250 45 190 65 140 Z" fill="url(#hair-grad-g)"/>
        <path d="M 210 110 C 240 170 250 260 215 320 C 225 250 215 190 195 140 Z" fill="url(#hair-grad-g)"/>
        <!-- 雙馬尾黑粉大蝴蝶結 -->
        <path d="M 55 105 C 30 85 25 115 50 120 C 25 130 35 155 60 130 Z" fill="#0d0512" stroke="#ff4d94" stroke-width="1.5"/>
        <circle cx="55" cy="115" r="4" fill="#ff4d94"/>
        <path d="M 205 105 C 230 85 235 115 210 120 C 235 130 225 155 200 130 Z" fill="#0d0512" stroke="#ff4d94" stroke-width="1.5"/>
        <circle cx="205" cy="115" r="4" fill="#ff4d94"/>
        <!-- 身體地雷裝與交叉綁帶 -->
        <path d="M 85 230 C 85 220 100 210 130 210 C 160 210 175 220 175 230 L 195 340 L 65 340 Z" fill="#0c0714"/>
        <path d="M 100 210 Q 130 230 160 210 Q 130 220 100 210" fill="#f0e6f5" opacity="0.9"/>
        <line x1="115" y1="230" x2="145" y2="250" stroke="#ff3385" stroke-width="2"/>
        <line x1="145" y1="230" x2="115" y2="250" stroke="#ff3385" stroke-width="2"/>
        <line x1="117" y1="252" x2="143" y2="270" stroke="#ff3385" stroke-width="2"/>
        <line x1="143" y1="252" x2="117" y2="270" stroke="#ff3385" stroke-width="2"/>
        <!-- 頸帶與銀十字架 -->
        <path d="M 115 175 L 115 215 C 115 220 145 220 145 215 L 145 175 Z" fill="#ffe3ed"/>
        <rect x="113" y="194" width="34" height="6" rx="2" fill="#0a050f"/>
        <path d="M 130 200 L 130 216 M 125 206 L 135 206" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round"/>
        <!-- 臉部 -->
        <path d="M 80 120 C 80 75 180 75 180 120 C 180 165 145 195 130 195 C 115 195 80 165 80 120 Z" fill="#fff0f5"/>
        <!-- 腮紅與創可貼 -->
        <ellipse cx="102" cy="148" rx="14" ry="7" fill="#ff4d94" opacity="0.45"/>
        <ellipse cx="158" cy="148" rx="14" ry="7" fill="#ff4d94" opacity="0.45"/>
        <g transform="translate(150, 150) rotate(-15)">
          <rect x="-10" y="-4" width="20" height="8" rx="2" fill="#ffccd9" stroke="#ff80aa" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="1.5" fill="#ff3385"/>
        </g>
        <!-- 左眼 -->
        <ellipse cx="106" cy="132" rx="13" ry="17" fill="url(#eye-grad-g)"/>
        <circle cx="103" cy="127" r="4.5" fill="#ffffff"/>
        <circle cx="110" cy="138" r="2" fill="#ffffff" opacity="0.8"/>
        <path d="M 106 132 C 104 130 102 133 106 136 C 110 133 108 130 106 132 Z" fill="#ff99cc"/>
        <path d="M 91 127 Q 106 114 121 126" stroke="#160821" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M 89 123 L 84 121" stroke="#160821" stroke-width="2" stroke-linecap="round"/>
        <path d="M 92 120 L 90 115" stroke="#160821" stroke-width="2" stroke-linecap="round"/>
        <!-- 右眼 -->
        <ellipse cx="154" cy="132" rx="13" ry="17" fill="url(#eye-grad-g)"/>
        <circle cx="151" cy="127" r="4.5" fill="#ffffff"/>
        <circle cx="158" cy="138" r="2" fill="#ffffff" opacity="0.8"/>
        <path d="M 154 132 C 152 130 150 133 154 136 C 158 133 156 130 154 132 Z" fill="#ff99cc"/>
        <path d="M 139 126 Q 154 114 169 127" stroke="#160821" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M 171 123 L 176 121" stroke="#160821" stroke-width="2" stroke-linecap="round"/>
        <path d="M 168 120 L 170 115" stroke="#160821" stroke-width="2" stroke-linecap="round"/>
        <!-- 嘴巴 -->
        <path id="charMouthPathGirl" d="M 125 168 Q 130 172 135 168" stroke="#ff3385" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <!-- 前髮與愛心髮夾 -->
        <path d="M 76 115 C 75 75 185 75 184 115 C 170 95 155 125 145 110 C 135 128 125 105 115 125 C 105 105 90 120 76 115 Z" fill="url(#hair-grad-g)"/>
        <path d="M 130 75 Q 120 45 140 40 Q 135 55 132 75" fill="#280c35"/>
        <path d="M 92 105 C 88 100 83 105 92 112 C 101 105 96 100 92 105 Z" fill="#ffffff" stroke="#ff3385" stroke-width="1"/>
      </svg>
    `;
  } else {
    characterAvatarWrap.innerHTML = `
      <svg viewBox="0 0 260 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bh-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#b84dff" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#00f0ff" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="hair-grad-b" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0a0512"/>
            <stop offset="70%" stop-color="#180e2a"/>
            <stop offset="100%" stop-color="#5b21b6"/>
          </linearGradient>
          <linearGradient id="eye-grad-b" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#150824"/>
            <stop offset="60%" stop-color="#7c3aed"/>
            <stop offset="100%" stop-color="#00f0ff"/>
          </linearGradient>
        </defs>
        <circle cx="130" cy="170" r="120" fill="url(#bh-glow)"/>
        <!-- 衛衣連帽與拉鍊 -->
        <path d="M 75 235 C 75 215 95 205 130 205 C 165 205 185 215 185 235 L 205 340 L 55 340 Z" fill="#090510"/>
        <path d="M 112 205 L 126 235 L 130 270 L 134 235 L 148 205" stroke="#4a5568" stroke-width="3" fill="none"/>
        <rect x="127" y="240" width="6" height="10" rx="1" fill="#e2e8f0"/>
        <!-- 頸部與 O-Ring 頸帶 -->
        <path d="M 116 170 L 116 215 C 116 220 144 220 144 215 L 144 170 Z" fill="#ecd9e8"/>
        <rect x="114" y="190" width="32" height="7" rx="2" fill="#050308"/>
        <circle cx="130" cy="198" r="4.5" fill="none" stroke="#e2e8f0" stroke-width="2"/>
        <!-- 臉型輪廓 -->
        <path d="M 85 115 C 85 70 175 70 175 115 C 175 160 145 194 130 194 C 115 194 85 160 85 115 Z" fill="#f8f0f6"/>
        <!-- 黑眼圈與淚痣 -->
        <ellipse cx="106" cy="148" rx="12" ry="5" fill="#a855f7" opacity="0.3"/>
        <ellipse cx="154" cy="148" rx="12" ry="5" fill="#a855f7" opacity="0.3"/>
        <circle cx="160" cy="147" r="1.3" fill="#180e2a"/>
        <!-- 左耳十字架鏈條耳環 -->
        <g transform="translate(82, 140)">
          <circle cx="0" cy="0" r="3" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
          <line x1="0" y1="3" x2="0" y2="18" stroke="#cbd5e1" stroke-width="1.2"/>
          <line x1="-3" y1="12" x2="3" y2="12" stroke="#cbd5e1" stroke-width="1.2"/>
        </g>
        <!-- 厭世左眼 -->
        <path d="M 96 142 Q 106 147 118 142" stroke="#6b21a8" stroke-width="1.5" fill="none" opacity="0.5"/>
        <ellipse cx="107" cy="133" rx="12" ry="12" fill="url(#eye-grad-b)"/>
        <circle cx="104" cy="130" r="3.5" fill="#ffffff"/>
        <circle cx="110" cy="137" r="1.5" fill="#00f0ff" opacity="0.9"/>
        <path d="M 94 130 Q 107 122 120 128" stroke="#0f0717" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- 厭世右眼 -->
        <path d="M 142 142 Q 154 147 164 142" stroke="#6b21a8" stroke-width="1.5" fill="none" opacity="0.5"/>
        <ellipse cx="153" cy="133" rx="12" ry="12" fill="url(#eye-grad-b)"/>
        <circle cx="150" cy="130" r="3.5" fill="#ffffff"/>
        <circle cx="156" cy="137" r="1.5" fill="#00f0ff" opacity="0.9"/>
        <path d="M 140 128 Q 153 122 166 130" stroke="#0f0717" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- 嘴唇微抿 -->
        <path id="charMouthPathBoy" d="M 124 167 L 136 167" stroke="#713f5d" stroke-width="2.2" stroke-linecap="round"/>
        <!-- 凌亂碎髮 -->
        <path d="M 80 115 C 75 70 185 70 180 115 C 170 95 158 120 148 95 C 140 130 126 95 116 128 C 104 100 90 122 80 115 Z" fill="url(#hair-grad-b)"/>
        <path d="M 85 110 Q 72 135 88 150 Q 82 130 92 118" fill="#180e2a"/>
        <path d="M 175 110 Q 188 135 172 150 Q 178 130 168 118" fill="#180e2a"/>
      </svg>
    `;
  }
}

// 💬 視覺小說動態打字機輸出
function typeDialogue(text, emotionText, moodBadgeOverride) {
  if (radioState.typeTimer) clearTimeout(radioState.typeTimer);

  const curPers = PERSONALITIES[radioState.personalityIndex];
  speakerNameText.textContent = radioState.gender === 'girl' ? curPers.girlTitle : curPers.boyTitle;
  speakerAvatarIcon.textContent = radioState.gender === 'girl' ? '🎀' : '💀';
  radioCurrentEmotionText.textContent = emotionText || curPers.name;

  if (moodBadgeOverride) {
    charMoodEmoji.textContent = moodBadgeOverride.emoji;
    charMoodText.textContent = moodBadgeOverride.text;
  } else {
    charMoodEmoji.textContent = curPers.emoji;
    charMoodText.textContent = `${curPers.name} (${curPers.code})`;
  }

  dialogueContent.textContent = '';
  let i = 0;
  const speed = 25; // 逐字打字速度 (毫秒)

  function step() {
    if (i < text.length) {
      dialogueContent.textContent += text.charAt(i);
      i++;
      radioState.typeTimer = setTimeout(step, speed);
    }
  }
  step();
}

// 隨機選取台詞輔助函式
function getRandomDialogue(category) {
  const pool = DIALOGUES[radioState.gender][category];
  return pool[Math.floor(Math.random() * pool.length)];
}

// 恢復正常心情狀態
function resetMoodToNormal(delay = 4000) {
  if (radioState.moodTimeout) clearTimeout(radioState.moodTimeout);
  radioState.moodTimeout = setTimeout(() => {
    characterStage.className = 'character-stage';
    const curPers = PERSONALITIES[radioState.personalityIndex];
    charMoodEmoji.textContent = curPers.emoji;
    charMoodText.textContent = `${curPers.name} (${curPers.code})`;
    radioCurrentEmotionText.textContent = '平靜陪伴';
  }, delay);
}

// 🕒 電子時鐘與倒計時引擎
function updateRadioClock() {
  if (radioState.clockMode === 'time') {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    radioClockDigits.textContent = `${hh}:${mm}:${ss}`;
    radioClockDigits.classList.remove('countdown-mode');
    clockModeLabel.textContent = 'REAL-TIME CLOCK';
    tabClockTime.classList.add('active');
    tabClockCountdown.classList.remove('active');
  } else {
    // 倒計時模式
    const maxSec = state.targetDurationMinutes * 60;
    if (state.targetDurationMinutes >= 999) {
      radioClockDigits.textContent = '∞:LOOP:00';
    } else {
      const remainingSec = Math.max(0, maxSec - state.secondsPlayed);
      const h = Math.floor(remainingSec / 3600);
      const m = Math.floor((remainingSec % 3600) / 60);
      const s = Math.floor(remainingSec % 60);
      radioClockDigits.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    radioClockDigits.classList.add('countdown-mode');
    clockModeLabel.textContent = 'COUNTDOWN TIMER';
    tabClockTime.classList.remove('active');
    tabClockCountdown.classList.add('active');
  }
}

// 觸發：換成倒計時（觸發慌張焦慮反應）
function triggerCountdownReaction() {
  radioState.clockMode = 'countdown';
  updateRadioClock();

  characterStage.className = 'character-stage panic';
  const line = getRandomDialogue('countdown_panic');
  typeDialogue(line, '⚡ 慌張焦慮', { emoji: '⚡', text: '慌張焦慮 (Panic)' });
  resetMoodToNormal(5000);
  showToast("⏳ 已切換為倒計時模式！（角色陷入慌張）");
}

// 觸發：切換回看時間模式
function triggerTimeMode() {
  radioState.clockMode = 'time';
  updateRadioClock();
  const curPers = PERSONALITIES[radioState.personalityIndex];
  typeDialogue(
    radioState.gender === 'girl' 
      ? '呼…切回現在時間了呢…只要不是倒計時要離開我，時間怎麼走都可以喔…♡' 
      : '…切回常規時間了嗎？很好。那種數字一直在減少的感覺，真的很令人窒息。',
    '安心陪伴'
  );
  resetMoodToNormal(3000);
  showToast("🕒 已切換為看時間模式。");
}

// 觸發：點擊角色互動（摸摸戳戳）
characterStage.addEventListener('click', () => {
  characterStage.className = 'character-stage';
  void characterStage.offsetWidth; // 強制重繪觸發動畫
  characterStage.classList.add('active');

  const line = getRandomDialogue('click_react');
  typeDialogue(line, '♡ 害羞心動', { emoji: '♡', text: '害羞心動 (Blushing)' });
  resetMoodToNormal(3500);
});

// 觸發：切換人格/心情（觸發害怕恐懼被重置）
switchPersonalityBtn.addEventListener('click', () => {
  radioState.personalityIndex = (radioState.personalityIndex + 1) % PERSONALITIES.length;
  const newPers = PERSONALITIES[radioState.personalityIndex];

  characterStage.className = 'character-stage fear';
  const line = getRandomDialogue('personality_scared');
  typeDialogue(line, '💔 害怕恐懼', { emoji: '💔', text: '恐懼被重置 (Fear)' });

  if (radioState.moodTimeout) clearTimeout(radioState.moodTimeout);
  radioState.moodTimeout = setTimeout(() => {
    characterStage.className = 'character-stage';
    speakerNameText.textContent = radioState.gender === 'girl' ? newPers.girlTitle : newPers.boyTitle;
    charMoodEmoji.textContent = newPers.emoji;
    charMoodText.textContent = `${newPers.name} (${newPers.code})`;
    radioCurrentEmotionText.textContent = newPers.name;
    typeDialogue(
      radioState.gender === 'girl' ? newPers.greetingGirl : newPers.greetingBoy,
      newPers.name
    );
  }, 3500);

  showToast(`🎭 切換人格心情：${newPers.name}`);
});

// 觸發：摸摸安慰（固定言語安撫）
comfortCharBtn.addEventListener('click', () => {
  characterStage.className = 'character-stage';
  const line = getRandomDialogue('comfort');
  typeDialogue(line, '🌸 安心被愛', { emoji: '🌸', text: '安心被愛 (Comforted)' });
  resetMoodToNormal(6000);
  showToast("🥺 已送出溫柔安撫言語！");
});

// 觸發：切換性別（少女 ⇄ 少年）
toggleGenderBtn.addEventListener('click', () => {
  radioState.gender = radioState.gender === 'girl' ? 'boy' : 'girl';
  renderCharacterAvatar();

  if (radioState.gender === 'boy') {
    genderIcon.textContent = '💀';
    genderBtnText.textContent = '切換：地雷系少女';
  } else {
    genderIcon.textContent = '🎀';
    genderBtnText.textContent = '切換：地雷系少年';
  }

  const curPers = PERSONALITIES[radioState.personalityIndex];
  speakerNameText.textContent = radioState.gender === 'girl' ? curPers.girlTitle : curPers.boyTitle;
  speakerAvatarIcon.textContent = radioState.gender === 'girl' ? '🎀' : '💀';

  const intro = radioState.gender === 'girl' 
    ? '我是真昼喔…從現在開始，你眼裡只准看著我一個人…明白了嗎？♡' 
    : '…我是夜宵。別隨便盯著我看…坐下來一起聽歌吧。';
  typeDialogue(intro, '初次見面');
  resetMoodToNormal(3500);
  showToast(`🎀 已切換陪伴角色為：${radioState.gender === 'girl' ? '地雷系少女 真昼' : '地雷系少年 夜宵'}`);
});

// 觸發：切換音樂（聽感反應）
charNextMusicBtn.addEventListener('click', () => {
  if (state.playlist.length <= 1) {
    showToast("⚠️ 排程中僅有 1 首或無音樂，無法切換！");
    return;
  }
  triggerCrossfade();
  const line = getRandomDialogue('song_change');
  typeDialogue(line, '🎶 聽感沉浸', { emoji: '🎶', text: '聽感沉浸 (Vibe)' });
  resetMoodToNormal(4000);
});

// 倒計時反應按鈕
triggerCountdownReactionBtn.addEventListener('click', () => {
  triggerCountdownReaction();
});

// 時鐘卡片點擊切換
radioClockWidget.addEventListener('click', (e) => {
  if (e.target.id === 'tabClockTime') {
    triggerTimeMode();
  } else if (e.target.id === 'tabClockCountdown') {
    triggerCountdownReaction();
  } else {
    // 點擊整體小組件進行輪替
    if (radioState.clockMode === 'time') {
      triggerCountdownReaction();
    } else {
      triggerTimeMode();
    }
  }
});

// 電台播放控制同步
radioPlayToggleBtn.addEventListener('click', () => {
  playBtn.click();
  updateRadioPlayBtn();
});

radioNextTrackBtn.addEventListener('click', () => {
  if (state.playlist.length <= 1) return;
  triggerCrossfade();
  const line = getRandomDialogue('song_change');
  typeDialogue(line, '🎶 聽感沉浸', { emoji: '🎶', text: '聽感沉浸 (Vibe)' });
  resetMoodToNormal(4000);
});

function updateRadioPlayBtn() {
  if (state.isPlaying) {
    radioPlayIcon.textContent = '⏸';
    radioPlayText.textContent = '暫停';
  } else {
    radioPlayIcon.textContent = '▶';
    radioPlayText.textContent = '播放';
  }
  const curTrack = state.playlist[state.currentPlaylistIndex];
  radioCurrentTrackText.textContent = curTrack ? curTrack.title : '等待播放...';
}

// 進入電台展示模式
enterRadioBtn.addEventListener('click', () => {
  radioState.isActive = true;
  radioOverlay.classList.add('active');
  renderCharacterAvatar();
  updateRadioClock();
  updateRadioPlayBtn();

  if (!radioState.clockInterval) {
    radioState.clockInterval = setInterval(updateRadioClock, 1000);
  }

  // 若尚未播放，自動啟動播放
  if (!state.isPlaying && state.playlist.length > 0) {
    playBtn.click();
  }

  const curPers = PERSONALITIES[radioState.personalityIndex];
  const welcome = radioState.gender === 'girl' ? curPers.greetingGirl : curPers.greetingBoy;
  typeDialogue(welcome, '平靜陪伴');

  showToast("📻 已進入地雷系 Emo 電台展示模式！按 ESC 鍵可隨時退出。");
});

// 退出電台展示模式
exitRadioBtn.addEventListener('click', () => {
  exitRadioMode();
});

function exitRadioMode() {
  radioState.isActive = false;
  radioOverlay.classList.remove('active');
  if (radioState.clockInterval) {
    clearInterval(radioState.clockInterval);
    radioState.clockInterval = null;
  }
  showToast("🖥️ 已切換回音樂合成工房。");
}

// ESC 快捷鍵退出
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && radioState.isActive) {
    exitRadioMode();
  }
});

// 當主程式切歌時，同步更新電台曲目名稱
const originalTriggerCrossfade = triggerCrossfade;
// 監聽播放狀態變更時同步更新電台曲目顯示
setInterval(() => {
  if (radioState.isActive) {
    const curTrack = state.playlist[state.currentPlaylistIndex];
    if (curTrack && radioCurrentTrackText.textContent !== curTrack.title) {
      radioCurrentTrackText.textContent = curTrack.title;
    }
    updateRadioPlayBtn();
  }
}, 500);

