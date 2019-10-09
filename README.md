---
title: 在 Mac 上安装 Git ，生成 SSH 密钥用于 GitHub 授权
date: 2019-10-04 19:58:10
categories:
- Git
tags:
- Mac
- SSH
- GitHub
index_img: /img/follow_me.png
---
> 在本教程中，将介绍如何在 Mac 上安装 Git，如何生成SSH密钥，以及如何将您的公共 SSH 密钥上传到 GitHub 帐户进行授权。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190920090245710.png)
# 如何在你的 Mac 上安装 Git ？
打开‘终端’输入如下命令：

```xml
$ brew install git
```
>  具体方法查看其官方文档 ：[https://brew.sh/](https://brew.sh/)

这将在您的系统上安装 Git。
若要确认是否安装成功，请输入：

```xml
$ git --version
```

这样你就能看到目前的 Git 版本。

# 如何为 GitHub 授权生成 SSH 密钥

#### 打开你的终端 
#### 输入  **cd ~/**  来到你的根目录下 
#### 输入以下指令：

```xml
ssh-keygen -t rsa
```

 - 这时系统将提示您输入一个文件名来存储密钥 
 - 只需按 ‘回车’ 接受默认文件 (/Users/you/.ssh/id_rsa) 即可
 - 然后它会要求您创建一个密码。你可以进行设定，但我一般选择直接回车（这样密码就为空，不用专门去记）

#### 当你再次按下‘回车’时，以下两个文件就会被建立了

```xml
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
```

#### 最后一步：
我们需要的 SSH 公钥存储在以.pub结尾的文件中，即：
`~/.ssh/id_rsa.pub`

# 如何复制公共 SSH 密钥

为了使用 GitHub 验证您自己和您的设备，您需要将上面生成的公共 SSH密钥 上传到你的 GitHub 帐户。

**复制公共SSH密钥**

你不需要去寻找这个 .pub 文件，你只需要打开终端并输入：

```xml
$ pbcopy < ~/.ssh/id_rsa.pub
```

这将直接复制 `id_rsa` 文件内的内容。

# 如何上传您的公共 SSH 密钥到 GitHub

 1. 复制了公共SSH密钥后，登录到GitHub帐户并转到 [https://github.com/settings/profile](https://github.com/settings/profile)
 2. 在左侧菜单中，您将看到一个链接“SSH和GPG密钥”
 3. 单击该链接，它将带您进入一个页面，您可以在这里输入您之前复制的公共SSH密钥。
 4. 点击“新建SSH密钥”按钮
 5. 然后输入一个标题名称——可以是任何东西，例如 newMac
 6. 将公共SSH密钥粘贴到密钥文本框中
 7. 点击“添加SSH密钥”

# 大功告成！测试你的GitHub授权:

打开你的终端输入

```xml
$ git clone git@github.com:你的用户名/你的某个仓库名.git
```

 1. 它会问你是否想继续连接，输入 `yes`
 2. 如果您在生成公钥时创建了一个密码，那么它将要求您输入它。
 3. 输入密码并按`Enter`键。
 4. 然后，它将开始将项目克隆到您当前的目录中。

**现在，您已经准备好使用Git和GitHub了。有问题欢迎在评论区留言**

> 欢迎关注我的博客获得更多知识