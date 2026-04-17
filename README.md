# my-note-docker

my note for docker

## Use

```bash
docker compose up --build
```

Run background

```bash
docker compose up -d --build
```

## Backup

```bash
python script/backup.py
```

## Mirror

```bash
docker pull b3log/siyuan:v3.6.4
docker images
docker tag 1c3666d6064c registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.6.4
docker login --username=terwer@aliyun.com registry.cn-shenzhen.aliyuncs.com
docker push registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.6.4
```
