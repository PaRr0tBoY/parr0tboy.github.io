@echo off
:: 导航到目标文件夹
cd /d E:\repo\parr0tboy.github.io

:: 添加所有更改
git add --all

:: 提交更改并添加提交信息
git commit -m "newPost"

:: 推送到远程仓库的 main 分支
git push origin main
