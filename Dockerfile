# 运行时镜像
FROM registry.cn-shenzhen.aliyuncs.com/terwer/dm:siyuan-3.1.32
# FROM b3log/siyuan:v3.1.32

# 镜像创建者的信息
MAINTAINER terwer youweics@163.com

# 设置编码
ENV LANG C.UTF-8

# 设置时区
ENV TZ Asia/Shanghai
# ENV TZ CST-8
RUN echo "Asia/Shanghai" > /etc/timezone