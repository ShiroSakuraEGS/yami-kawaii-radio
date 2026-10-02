# -*- coding: utf-8 -*-
"""
Jirai-kei Emo Beats Studio - 本機輕量 HTTP 伺服器與 API 轉發代理
免安裝第三方套件，直接使用 Python 內建模組運行
"""

import http.server
import socketserver
import urllib.request
import urllib.error
import json
import os
import sys
import webbrowser

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class StudioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # 允許跨域請求與現代 Web Audio 安全策略
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print("=" * 70)
    print("🎀💀 Jirai-kei Emo Beats Studio 地雷系音樂影片工房本機伺服器")
    print(f"🚀 伺服器已在 http://localhost:{PORT} 啟動！")
    print(f"📁 根目錄路徑: {DIRECTORY}")
    print("=" * 70)

    # 自動開啟瀏覽器
    try:
        webbrowser.open(f"http://localhost:{PORT}/index.html")
    except Exception:
        pass

    with socketserver.TCPServer(("", PORT), StudioHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 伺服器已安全停止。")

if __name__ == "__main__":
    main()
