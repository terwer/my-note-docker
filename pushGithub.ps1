$msg=':art: 备份本地笔记'
$srcgithubUrl='git@github.com:terwer/my-note-docker.git'

git config user.name "terwer"
git config user.email "youweics@163.com"
git add .
git commit -m "${msg}"
# 推送到github main分支
git push $srcgithubUrl main:main
Write-Output "Github备份完毕."