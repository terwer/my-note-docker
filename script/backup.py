import argparse

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    # 获取当前工作空间
    cwd = scriptutils.get_workdir()

    # 参数解析
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--dist", required=False, help="the dist for backup")
    parser.add_argument("-v", "--verbose", action="store_true", help="enable verbose output")
    parser.add_argument("-t", "--test", action="store_true", help="backup test workspace")
    parser.add_argument("-p", "--public", action="store_true", help="backup public workspace")
    parser.add_argument("-pv", "--private", action="store_true", help="backup private workspace")
    parser.add_argument("-z", "--zhangy", action="store_true", help="backup zhangy workspace")
    args = parser.parse_args()

    if args.verbose:
        print("Verbose mode enabled")

    # 构建项目到 dist 目录
    dist_name = "workspace"
    if args.dist is not None and args.dist != "":
        dist_name = str(args.dist)
    dist_folder = "./" + dist_name + "/"
    # print("dist_name:" + dist_name)
    print("dist_folder:" + dist_folder)

    backup_folder_sign = "public"
    if args.test:
        backup_folder_sign = "test"

    if args.public:
        backup_folder_sign = "public"

    if args.private:
        backup_folder_sign = "private"

    if args.zhangy:
        backup_folder_sign = "zhangy"

    # 压缩dist为zip
    # 生成zip
    src_folder = dist_folder
    tmp_folder_name = "./my-note-" + backup_folder_sign
    build_zip_path = "./backup"
    build_zip_name = "my-note-" + backup_folder_sign + "-" + scriptutils.get_filename_from_time() + ".zip"
    scriptutils.zip_folder(src_folder, tmp_folder_name, build_zip_path, build_zip_name)
    print("将dist文件打包成zip，用于笔记备份.")
    print("笔记备份完毕.")
