var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼: fqpabi8 \n 個人倉儲:  https://github.com/mdecp2024/hw-41323236 \n 個人網站:\xa0 https://mdecp2024.github.io/hw-41323236 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w6', 'text': '操作步驟: \n \n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w10', 'text': '題目一 : 請利用 程式一 的原始碼, 分別在自己網站的 Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces 環境中執行, 所完成的操作影片, 請以"國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目一: 學號" 作為標題, 並在影片說明欄位中簡述此一影片的操作概要與心得, 完成後請將影片上傳至個人 Youtube 帳號下, 並嵌入個人網站中的 "w10" 頁面中 \n \n 題目二:請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? 與所謂的"關鍵字"( Keywords )有關係嗎? 請實際舉例, 針對 Python 程式命名的規則編寫程式, 並採上一題的五種程式執行方法, 展示正確變數命名與違反變數命名時, 所顯示的錯誤訊息回應. 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目二"標示 \n \n 題目三:利用 Python 程式解決物理與微積分的範例流程, 請根據過程中所得到的 Python 程式, 利用題目一中的五種方法執行後, 在影片說明欄位及個人 w10 頁面中說明解題流程與心得, 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目三"標示. \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '以下影片說明如何利用近端可攜系統維護個人作業網站: \n \n 1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n 參考資料: \n 1a_w11_note.txt \n \xa0 \xa0 \n 我的作業: \n \n \n 米字號圓: \n import math\n\ndef print_circle(radius, size):\n    # 圓心座標 (中心點)\n    center = size // 2\n    for y in range(size):\n        for x in range(size):\n            # 計算每個點與圓心的距離\n            distance = math.sqrt((x - center) ** 2 + (y - center) ** 2)\n            # 如果距離小於等於半徑，印出 "*"，否則印出空格\n            if distance <= radius:\n                print("*", end="")\n            else:\n                print(" ", end="")\n        print()  # 換行\n\n# 在 10x10 的區域中繪製半徑為 4 的圓形\nprint_circle(radius=4, size=10) \n 黑色實心圓: \n from browser import html, document as doc\n\n# 創建畫布\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 獲取畫布的 2D 繪圖上下文\nctx = canvas.getContext("2d")\n\n# 每格的像素數\ngs = 20  # 每格的邊長\n\n# 繪製網格\ndef grid(width, height, grid_pix):\n    """畫出網格"""\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 繪製矩形邊框\ndef dRect(lux, luy, w, h, s=1, c="#ff0000"):\n    """繪製矩形的邊框"""\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 填滿顏色\ndef fill(x, y, color):\n    """填滿某個格子"""\n    ctx.fillStyle = color\n    ctx.fillRect(x, y, gs, gs)\n\n# 繪製圓形\ndef draw_circle(grid_width, grid_height, radius, grid_pix):\n    """在格子中繪製圓形"""\n    center_x, center_y = grid_width // 2, grid_height // 2  # 圓心的格子座標\n    for i in range(grid_width):\n        for j in range(grid_height):\n            # 計算該格子中心與圓心的距離\n            cell_center_x = i + 0.5\n            cell_center_y = j + 0.5\n            distance = ((cell_center_x - center_x) ** 2 + (cell_center_y - center_y) ** 2) ** 0.5\n            if distance <= radius:\n                fill(i * grid_pix, j * grid_pix, "black")  # 填充圓形內的格子\n\n# 主程式\ngrid(10, 10, gs)  # 畫 10x10 的網格\ndraw_circle(10, 10, 4, gs)  # 在網格中繪製半徑為 4 的圓形 \n \xa0 \xa0 \n 我的心得: \n 這次的作業,讓我知道可以利用 Brython來做出簡易的圖形跟符號,並且利用chatgpt將程式碼設計出來,再將程式碼存入個人 Gist,就有自己所設計出來的圖形程式碼,在解題的過程中,可能出來的圖形都不符合我想要的圖案,這時就要檢查chatgpt的問法有無錯誤,做出及時的更正', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '請各組組員分別利用 \xa0 Brython 以及 Jupyter lab \xa0 環境, 執行 可攜程式 \xa0 notebook 目錄中的 \xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0 筆記本程式, 完成後請將 能在  Brython 執行的程式碼存入個人 \xa0 Gist \xa0 後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得 。 \n Brython: 執行程式連結 \n Jupyter lab \xa0 執行連結 \n 程式語法:Python 語法 \n 執行心得: 目前試下來只有09的程式碼,能夠執行 Brython 以及 Jupyter lab \xa0 環境,透過ChatGPT了解此程式碼結構明確，利用清單和迴圈來處理多個動物，透過條件判斷， 將想看的動物特別標示出來，符合預期功能。 \n \n I saw a giraffe\nI saw a penguin and I really wanted to see it!\nI saw a dolphin\n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w5', 'text': 'Strings, input(), and print() \n 首先必須瞭解\xa0 Python 變數命名法則: \n 必須以英文字母或 _ 作為開頭, 隨後可以接上任何數字、英文字母或 _ \n 但變數名稱區分英文字母的大小寫, 變數也可以使用中文命名, 但一般並不建議使用英文以外的多 byte 語系命名. \n String 為字串, 可以用單引號、雙引號或三引號隔開. 例如: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n \n \n \n "this is a string\'s "   使用雙引號將字串區隔 \n \xa0 \n \'this is a string\'   使用單引號將字串區隔 \n \xa0 \n 當字串超過一行時, 可以使用三引號: \n \xa0 \n \'\'\' \n \xa0 \n 這裡面是用來說明程式目的或紀錄 \n \xa0 \n 相關事項的多行文字 \n \xa0 \n \'\'\' \n \n \n \n \n \n \n \n print 與 for 重複迴圈 \n help(print) \n help(range) \n 與 ChatGPT 對話: \n 可以解釋一下help(range) 傳回來的內容嗎? \n 將 help(range) 傳回的內容貼給 ChatGPT, 然後問: \n 可以舉例詳細說明以下 help(range) 傳回來的內容嗎? 然後貼上 help 傳回的資料. \n 詢問 for i in range(): \n 如何解釋 Python 中的 for i in range(5): \n 如何解釋 range(5) ? \n range(5) 是數列嗎? \n 能夠生成從 0 到 4 的整數序列, 所以可以稱 range(5) 為甚麼? \n 請舉 10 個可以協助使用者理解 for range 與 print 等關鍵字的範例 \n 請用 Python 的 for 跟 print 印出五行的 * 排列成的三角形金字塔, 也就是 * 在最中間, 第二行為正中央的 *** 然後第三行 *****, 總共五行 \n # 設定總行數\nrows = 5\n\nfor i in range(rows):\n    # 每行的空格數量\n    spaces = \' \' * (rows - i - 1)\n    # 每行的星號數量\n    stars = \'*\' * (2 * i + 1)\n    # 輸出該行\n    print(spaces + stars)\n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};