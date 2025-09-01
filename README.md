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
docker pull b3log/siyuan:v3.3.0
docker images
docker tag a7482b0b6404 registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.3.0
docker login --username=terwer@aliyun.com registry.cn-shenzhen.aliyuncs.com
docker push registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.3.0
```