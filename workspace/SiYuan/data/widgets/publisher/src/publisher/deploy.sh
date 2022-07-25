pwd
yarn build

rm -rf ../../css
rm -rf ../../js
cp -r ./dist/* ../../
echo "发布完毕."