var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://liaots.github.io/cd2024/ \n 網誌:\xa0 https://liaots.github.io/cd2024/blog/ \n 簡報:\xa0 https://liaots.github.io/cd2024/reveal/ \n 倉儲:\xa0 https://github.com/Liaots/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w4文章翻譯', 'text': 'p.56~p.66文章 \n https://drive.google.com/drive/folders/1O5I0Kj0nWer_KlL272qIKf3-vkq3x9qn?usp=drive_link \n', 'tags': '', 'url': 'w4文章翻譯.html'}, {'title': 'w5教學影片', 'text': '設定Replit Github應用授權的說明影片2:44 \n 影片: https://reccloud.com/tw/u/jw7bxyz \n 逐字稿: https://drive.google.com/file/d/1qbrSS6qTYldt--RfGP42r9AeL8a5inCM/view?usp=drive_link \n \n 說明如何利用Replit對cd2024改版20:16 \n 影片: https://reccloud.com/tw/u/e0mr8wr \n 逐字稿: https://drive.google.com/file/d/1YtrscSwhE7WdaAHfkzsl-YsJJnuY-QUP/view?usp=drive_link \n \n 使用Github維護個人網站10:21 \n 影片: https://reccloud.com/tw/u/55k9sf3 \n 逐字稿: https://drive.google.com/file/d/1m9mJ_p5qS8vH4o-E8LtSfas7qGiFCeHJ/view?usp=drive_link \n \n 心得: 個人的cd2024倉儲以Github帳號登入Gitpod之後，就可以直接維護 \n', 'tags': '', 'url': 'w5教學影片.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': '任務一', 'text': '# 開啟 2a.txt 檔案並讀取資料 \n with  open ( \'2a.txt\' ,  \'r\' ) as  file : \n \xa0\xa0\xa0\xa0 lines  =   file .readlines()\xa0  # 讀取每一行資料 \n \xa0 \n # 將每一行資料逐一放入數列 \n student_data  =   [] \n for   line  in   lines: \n \xa0\xa0\xa0\xa0 student_data.append(line.strip().split()) \n \xa0 \n # 輸出學生資料 \n for   data  in   student_data: \n \xa0\xa0\xa0\xa0 student_id, github_account, group  =   data \n \xa0\xa0\xa0\xa0 print ( "學號:" , student_id) \n \xa0\xa0\xa0\xa0 print ( "Github帳號:" , github_account) \n \xa0\xa0\xa0\xa0 print ( "組別:" , group) \n \xa0\xa0\xa0\xa0 print () \n \xa0 \n \xa0\xa0\xa0\xa0 # 建立學員倉儲連結 \n \xa0\xa0\xa0\xa0 student_repo_link  =   f "https://github.com/{github_account}/cd2024" \n \xa0\xa0\xa0\xa0 print ( "學員倉儲連結:" , student_repo_link) \n \xa0 \n \xa0\xa0\xa0\xa0 # 建立學員網站連結 \n \xa0\xa0\xa0\xa0 student_website_link  =   f "https://{github_account}.github.io/cd2024" \n \xa0\xa0\xa0\xa0 print ( "學員網站連結:" , student_website_link) \n \xa0 \n \xa0\xa0\xa0\xa0 # 建立 2a 分組倉儲連結 \n \xa0\xa0\xa0\xa0 group_repo_link  =   f "https://github.com/mdecd2024/2a-{group}" \n \xa0\xa0\xa0\xa0 print ( "2a 分組倉儲連結:" , group_repo_link) \n \xa0 \n \xa0\xa0\xa0\xa0 print () \n', 'tags': '', 'url': '任務一.html'}, {'title': '任務二', 'text': '論文一：Construction and theoretical study of a ball balancing platform \n 重點在實現在球的表面上平衡物體的目標。論文描述了平台的結構和建造過程，包括所使用的材料和製造方法。接著透過理論分析和數值模擬，探討了平台在不同條件下的平衡性能。研究發現，平台的設計和結構對於實現穩定平衡至關重要。最後，論文討論了潛在的應用和未來研究方向，以進一步改進和擴展這種球平衡平台的功能和性能。 \n \n \n 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation \n 這篇論文描述了一個用於實時控制在平台上平衡球的系統，並采用了FPGA平行實現。論文介紹了該系統的整體架構，包括所使用的硬體和軟體組件。然後描述了控制算法的設計和實現，以實現對球位置的即時調整，以保持其在平台上的平衡。接著論文詳細介紹了在FPGA上實現該系統的平行化策略和技術。最後通過實驗和測試，驗證了系統的性能和穩定性。該系統的成功實現表明了FPGA平行計算在實時控制應用中的潛在優勢，並提供了一個可行的方法來實現這種類型的平衡系統。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach \n 這篇論文對雙軸平台上球位置控制的模擬和實驗研究，採用了狀態空間方法。論文介紹了所研究的雙軸平台的結構和系統特性。接著使用狀態空間方法建立了系統的數學模型，包括平台和球的動力學方程。然後利用模擬技術對系統進行了分析和測試，評估了不同控制策略的性能。在模擬研究的基礎上，進行了實驗驗證，通過實際構建的雙軸平台和相應的控制系統進行了測試。最後比較了模擬和實驗結果，驗證了狀態空間方法在實現雙軸平台上球位置控制方面的有效性和準確性。該研究為設計和實現類似系統提供了重要的參考和指導。 \n \n 論文四：Design and Implementation a Ball Balancing System for Control Theory Course \n 這篇論文描述了一個用於控制理論課程的球平衡系統的設計和實施。論文介紹了球平衡系統的整體結構和工作原理，包括所使用的感測器、控制器和執行器等組件。然後描述了系統的設計過程，包括控制算法的選擇和實現，以及硬體平台的選型和構建。接著通過模擬和實驗，評估了系統的性能和穩定性，並對控制理論中的各種概念進行了實際應用和驗證。最後論文討論了學生通過該系統在課堂上的學習效果和收穫，並提出了對未來改進和擴展的建議。這個球平衡系統為控制理論課程的教學提供了一個生動、具體的示例，有助於學生更好地理解和應用控制理論的基本原理和技術。 \n \n 論文五：Ball on the plate balancing control system \n 這篇論文介紹了一種稱為「Ball on the Plate」的平衡控制系統。該系統為在實現通過調節平台上球的位置，使其保持平衡的目標。論文首先描述了系統的整體結構和工作原理，包括所使用的感測器、控制器和執行器等組件。接著介紹了系統的設計和實施過程，包括控制算法的開發和實現，以及硬體平台的構建和測試。然後通過模擬和實驗，評估了系統的性能和穩定性，並探討了不同控制參數對系統性能的影響。最後論文討論了該系統的潛在應用和未來改進的方向。這個平衡控制系統可應用於多個領域，如機器人控制、自動化生產等，並為相關研究和應用提供了一個重要的參考和基礎。 \n \n 論文六：2D Ball Balancer Control using QUARC \n 這篇論文描述了一種使用QUARC（Quick Control Prototype）的2D球平衡控制系統。QUARC是一種用於快速原型設計的工具，可以實時生成代碼，用於控制和監視實際硬體。論文首先介紹了2D球平衡系統的結構和工作原理，以及所用的感測器和執行器。接著描述了控制系統的設計和實施過程，包括控制算法的開發和QUARC的應用。然後通過模擬和實驗，評估了系統的性能和穩定性，並探討了不同控制策略對系統行為的影響。最後論文討論了該系統的應用前景和未來研究方向。這個基於QUARC的2D球平衡控制系統為快速原型開發提供了一個有效的工具，同時也為相關領域的研究和應用提供了重要參考。 \n', 'tags': '', 'url': '任務二.html'}, {'title': '任務三', 'text': '鋼球平衡台零件 \n \n', 'tags': '', 'url': '任務三.html'}, {'title': 'w17', 'text': '', 'tags': '', 'url': 'w17.html'}, {'title': '項目一', 'text': '零組件 \n', 'tags': '', 'url': '項目一.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '論文摘要', 'text': '論文一：Construction and theoretical study of a ball balancing platform \n 重點在實現在球的表面上平衡物體的目標。論文描述了平台的結構和建造過程，包括所使用的材料和製造方法。接著透過理論分析和數值模擬，探討了平台在不同條件下的平衡性能。研究發現，平台的設計和結構對於實現穩定平衡至關重要。最後，論文討論了潛在的應用和未來研究方向，以進一步改進和擴展這種球平衡平台的功能和性能。 \n \n \n 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation \n 這篇論文描述了一個用於實時控制在平台上平衡球的系統，並采用了FPGA平行實現。論文介紹了該系統的整體架構，包括所使用的硬體和軟體組件。然後描述了控制算法的設計和實現，以實現對球位置的即時調整，以保持其在平台上的平衡。接著論文詳細介紹了在FPGA上實現該系統的平行化策略和技術。最後通過實驗和測試，驗證了系統的性能和穩定性。該系統的成功實現表明了FPGA平行計算在實時控制應用中的潛在優勢，並提供了一個可行的方法來實現這種類型的平衡系統。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach \n 這篇論文對雙軸平台上球位置控制的模擬和實驗研究，採用了狀態空間方法。論文介紹了所研究的雙軸平台的結構和系統特性。接著使用狀態空間方法建立了系統的數學模型，包括平台和球的動力學方程。然後利用模擬技術對系統進行了分析和測試，評估了不同控制策略的性能。在模擬研究的基礎上，進行了實驗驗證，通過實際構建的雙軸平台和相應的控制系統進行了測試。最後比較了模擬和實驗結果，驗證了狀態空間方法在實現雙軸平台上球位置控制方面的有效性和準確性。該研究為設計和實現類似系統提供了重要的參考和指導。 \n \n 論文四：Design and Implementation a Ball Balancing System for Control Theory Course \n 這篇論文描述了一個用於控制理論課程的球平衡系統的設計和實施。論文介紹了球平衡系統的整體結構和工作原理，包括所使用的感測器、控制器和執行器等組件。然後描述了系統的設計過程，包括控制算法的選擇和實現，以及硬體平台的選型和構建。接著通過模擬和實驗，評估了系統的性能和穩定性，並對控制理論中的各種概念進行了實際應用和驗證。最後論文討論了學生通過該系統在課堂上的學習效果和收穫，並提出了對未來改進和擴展的建議。這個球平衡系統為控制理論課程的教學提供了一個生動、具體的示例，有助於學生更好地理解和應用控制理論的基本原理和技術。 \n \n 論文五：Ball on the plate balancing control system \n 這篇論文介紹了一種稱為「Ball on the Plate」的平衡控制系統。該系統為在實現通過調節平台上球的位置，使其保持平衡的目標。論文首先描述了系統的整體結構和工作原理，包括所使用的感測器、控制器和執行器等組件。接著介紹了系統的設計和實施過程，包括控制算法的開發和實現，以及硬體平台的構建和測試。然後通過模擬和實驗，評估了系統的性能和穩定性，並探討了不同控制參數對系統性能的影響。最後論文討論了該系統的潛在應用和未來改進的方向。這個平衡控制系統可應用於多個領域，如機器人控制、自動化生產等，並為相關研究和應用提供了一個重要的參考和基礎。 \n \n 論文六：2D Ball Balancer Control using QUARC \n 這篇論文描述了一種使用QUARC（Quick Control Prototype）的2D球平衡控制系統。QUARC是一種用於快速原型設計的工具，可以實時生成代碼，用於控制和監視實際硬體。論文首先介紹了2D球平衡系統的結構和工作原理，以及所用的感測器和執行器。接著描述了控制系統的設計和實施過程，包括控制算法的開發和QUARC的應用。然後通過模擬和實驗，評估了系統的性能和穩定性，並探討了不同控制策略對系統行為的影響。最後論文討論了該系統的應用前景和未來研究方向。這個基於QUARC的2D球平衡控制系統為快速原型開發提供了一個有效的工具，同時也為相關領域的研究和應用提供了重要參考。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '論文摘要.html'}]};