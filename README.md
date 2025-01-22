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
docker pull b3log/siyuan:v3.1.20
docker images
docker tag d14246e4cd83 registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.1.20
docker login --username=terwer@aliyun.com registry.cn-shenzhen.aliyuncs.com
docker push registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.1.20
```