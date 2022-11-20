#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

msg=':art: 备份本地笔记'
srcgithubUrl=git@github.com:terwer/my-note-docker.git

git config user.name "terwer"
git config user.email "youweics@163.com"
git add -A
git commit -m "${msg}"
# 推送到github main分支
git push $srcgithubUrl main:main --force
echo "Github备份完毕."