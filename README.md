# my-note-docker

my note for docker

## use

## 备份

Linux或者macOS

```bash
./p.sh
```

Windows
```powershell
./p.ps1
```

```bash
docker compose up --build
docker compose -f docker-compose-test.yml up --build
docker compose -f docker-compose-private.yml up --build
```

## ckeckip

```bash
docker inspect my-note-docker | grep IPAddres
```