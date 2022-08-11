$msg=':art: 备份本地笔记'

git config user.name "terwer"
git config user.email "youweics@163.com"
git add -A
git commit -m "${msg}"
# 推送到github main分支
git push git@github.com:terwer/my-note-docker.git main:main
Write-Output "Github备份完毕."