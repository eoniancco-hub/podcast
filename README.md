# 一站式 Podcast 製作服務網站

這是一個一頁式 Podcast 製作服務接單網站，主軸是「你只要下單，我們協助完成企劃、講稿、錄製、剪輯、上架到發布」。

## 開啟網站

此版本已建立在 Sites 專案中，可用本機預覽或部署後瀏覽。

```bash
pnpm run dev
```

## 主要檔案

- `app/page.tsx`：網站所有主要內容與區塊
- `app/globals.css`：網站樣式與 RWD 排版
- `public/script.js`：手機導覽、FAQ 展開收合、導覽列陰影
- `public/og.png`：社群分享預覽圖

## 修改連結

目前 CTA 連結使用 placeholder，正式上線前請替換：

- EasyShop 下單：搜尋 `#order`
- 官方 LINE：搜尋 `#line`
- 範例音檔：可新增連到 `#demo`
- 方案價格：目前使用 `#pricing`

## 排版確認

網站已針對手機、平板與桌機設定響應式排版。手機版導覽列會收合，方案卡片、加購項目、流程與表格都會自動調整為適合閱讀的寬度。
