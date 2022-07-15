# 依赖的镜像
FROM terwer/my-note:v2.0.27

#镜像创建者的信息
LABEL maintainer="Terwer<youweics@163.com>"

# 设置编码
ENV LANG C.UTF-8

# 设置时区
# ENV TZ Asia/Shanghai
ENV TZ CST-8

# docker inspect my-note-docker | grep IPAddres