# my-note-docker

my note for docker

## Use

```bash
docker compose up --build
docker compose -f docker-compose-test.yml up --build
docker compose -f docker-compose-private.yml up --build
```

Run background

```bash
docker compose up -d --build
```

## Backup

```bash
python script/backup.py
```
