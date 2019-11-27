# [fishinwater-1999.github.io](https://fishinwater-1999.github.io/)
![fishinwater-1999.github.io](https://github.com/FishInWater-1999/DiskLruCacheStudy/blob/master/fishinwater-github-io.png)

# 搭建步骤：

- 获得个人网站域名
- GitHub创建个人仓库
- 安装Git
- 安装Node.js
- 安装Hexo
- 推送网站
- 绑定域名
- 更换主题
- 初识MarkDown语法
- 发布文章
- 寻找图床
- 个性化设置
- 其他
- 附录

# 获得个人网站域名

域名是网站的入口，也是网站的第一印象，比如饿了么的官网的域名是：https://www.ele.me/ ，很是巧妙。常见的有com,cn,net,org等后缀，也有小众的xyz,me,io等后缀，根据你自己的喜好，选择不同的后缀，比如我选择就是常见的com后缀。很多小众奇特的后缀在大陆是没办法备案的，网站也就无法上线。然而使用GitHub托管我们的网站，完全不需要备案，因为托管我们的网站内容的服务器在美国，而且在国内备案流程也比较繁杂，时间需要一周左右。

申请域名的地方有很多，这里推荐阿里云：阿里云-为了无法计算的价值 申请入口：域名注册 购买域名这也是我们整个搭建过程中惟一一个需要花钱的地方。如果你已经有了空闲域名就无需购买，直接使用即可。





# GitHub创建个人仓库

登录到GitHub,如果没有GitHub帐号，使用你的邮箱注册GitHub帐号：Build software better, together 点击GitHub中的New repository创建新仓库，仓库名应该为：用户名.http://github.io 这个用户名使用你的GitHub帐号名称代替，这是固定写法，比如我的仓库名为：







# 安装Git

什么是Git ?简单来说Git是开源的分布式版本控制系统，用于敏捷高效地处理项目。我们网站在本地搭建好了，需要使用Git同步到GitHub上。如果想要了解Git的细节，参看廖雪峰老师的Git教程：Git教程 从Git官网下载：Git - Downloading Package 现在的机子基本都是64位的，选择64位的安装包，下载后安装，在命令行里输入git测试是否安装成功，若安装失败，参看其他详细的Git安装教程。安装成功后，将你的Git与GitHub帐号绑定，鼠标右击打开Git Bash



或者在菜单里搜索Git Bash，设置user.name和user.email配置信息：



```
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
```



生成ssh密钥文件：

ssh-keygen -t rsa -C "你的GitHub注册邮箱"
然后直接三个回车即可，默认不需要设置密码
然后找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制


打开GitHub_Settings_keys 页面，新建new SSH Key




Title为标题，任意填即可，将刚刚复制的id_rsa.pub内容粘贴进去，最后点击Add SSH key。
在Git Bash中检测GitHub公钥设置是否成功，输入 ssh git@github.com ：




如上则说明成功。这里之所以设置GitHub密钥原因是，通过非对称加密的公钥与私钥来完成加密，公钥放置在GitHub上，私钥放置在自己的电脑里。GitHub要求每次推送代码都是合法用户，所以每次推送都需要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用了ssh，当你推送的时候，git就会匹配你的私钥跟GitHub上面的公钥是否是配对的，若是匹配就认为你是合法用户，则允许推送。这样可以保证每次的推送都是正确合法的。



# 安装Node.js

Hexo基于Node.js，Node.js下载地址：Download | Node.js 下载安装包，注意安装Node.js会包含环境变量及npm的安装，安装后，检测Node.js是否安装成功，在命令行中输入 node -v :




检测npm是否安装成功，在命令行中输入npm -v :




到这了，安装Hexo的环境已经全部搭建完成。



# 安装 Hexo

Hexo就是我们的个人博客网站的框架， 这里需要自己在电脑常里创建一个文件夹，可以命名为Blog，Hexo框架与以后你自己发布的网页都在这个文件夹中。创建好后，进入文件夹中，按住shift键，右击鼠标点击命令行



使用npm命令安装Hexo，输入：

```
npm install -g hexo-cli 
```


这个安装时间较长耐心等待，安装完成后，初始化我们的博客，输入：

```
hexo init blog
```


注意，这里的命令都是作用在刚刚创建的Blog文件夹中。

为了检测我们的网站雏形，分别按顺序输入以下三条命令：

```
hexo new test_my_site

hexo g

hexo s
```


这些命令在后面作介绍，完成后，打开浏览器输入地址：

```
localhost:4000
```

可以看出我们写出第一篇博客，只不过我下图是我修改过的配置，和你的显示不一样。




现在来介绍常用的Hexo 命令

```
npm install hexo -g #安装Hexo
npm update hexo -g #升级
hexo init #初始化博客
```

命令简写

```
hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo g == hexo generate #生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy #部署
```

```
hexo server #Hexo会监视文件变动并自动更新，无须重启服务器
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP
hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令
```

刚刚的三个命令依次是新建一篇博客文章、生成网页、在本地预览的操作。

# 推送网站

上面只是在本地预览，接下来要做的就是就是推送网站，也就是发布网站，让我们的网站可以被更多的人访问。在设置之前，需要解释一个概念，在blog根目录里的_config.yml文件称为站点配置文件，如下图




进入根目录里的themes文件夹，里面也有个_config.yml文件，这个称为主题配置文件，如下图




下一步将我们的Hexo与GitHub关联起来，打开站点的配置文件_config.yml，翻到最后修改为：

```
deploy:
type: git
repo: 这里填入你之前在GitHub上创建仓库的完整路径，记得加上 .git
branch: master参考如下：
```




保存站点配置文件。

其实就是给hexo d 这个命令做相应的配置，让hexo知道你要把blog部署在哪个位置，很显然，我们部署在我们GitHub的仓库里。最后安装Git部署插件，输入命令：

```
npm install hexo-deployer-git --save
```


这时，我们分别输入三条命令：



```
hexo clean 
hexo g 
hexo d
```


其实第三条的 hexo d 就是部署网站命令，d是deploy的缩写。完成后，打开浏览器，在地址栏输入你的放置个人网站的仓库路径，即 http://xxxx.github.io (知乎排版可能会出现"http://"字样，参考下图) 比如我的xxxx就是我的GitHub用户名：




你就会发现你的博客已经上线了，可以在网络上被访问了。

# 绑定域名

虽然在Internet上可以访问我们的网站，但是网址是GitHub提供的:http://xxxx.github.io (知乎排版可能会出现"http://"字样) 而我们想使用我们自己的个性化域名，这就需要绑定我们自己的域名。这里演示的是在阿里云万网的域名绑定，在国内主流的域名代理厂商也就阿里云和腾讯云。登录到阿里云，进入管理控制台的域名列表，找到你的个性化域名，进入解析



# 然后添加解析








包括添加三条解析记录，192.30.252.153是GitHub的地址，你也可以ping你的 http://xxxx.github.io 的ip地址，填入进去。第三个记录类型是CNAME，CNAME的记录值是：你的用户名.http://github.io 这里千万别弄错了。第二步，登录GitHub，进入之前创建的仓库，点击settings，设置Custom domain，输入你的域名




点击save保存。第三步，进入本地博客文件夹 ，进入blog/source目录下，创建一个记事本文件，输入你的域名，对，只要写进你自己的域名即可。如果带有www，那么以后访问的时候必须带有www完整的域名才可以访问，但如果不带有www，以后访问的时候带不带www都可以访问。所以建议，不要带有www。这里我还是写了www(不建议带有www):


保存，命名为CNAME ，注意保存成所有文件而不是txt文件。

完成这三步，进入blog目录中，按住shift键右击打开命令行，依次输入：

```
hexo clean
hexo g
hexo d
```


这时候打开浏览器在地址栏输入你的个性化域名将会直接进入你自己搭建的网站。

# 更换主题

如果你不喜欢Hexo默认的主题，可以更换不同的主题，主题传送门：Themes 我自己使用的是Next主题，可以在blog目录中的themes文件夹中查看你自己主题是什么。现在把默认主题更改成Next主题，在blog目录中（就是命令行的位置处于blog目录）打开命令行输入：

git clone https://github.com/iissnan/hexo-theme-next themes/next
这是将Next主题下载到blog目录的themes主题下的next文件夹中。打开站点的_config.yml配置文件，修改主题为next




打开主题的_config.yml配置文件，不是站点主题文件，找到Scheme Settings




next主题有三个样式，我用的是Pisces，你们可以自己试试看，选择你自己喜欢的样式（只需要把行首的#去除，#是注释），选择好后，再次部署网站，hexo g、hexo d，查看效果。选择其他主题，按照上述过程即可实现。

# 初识Markdown语法



Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。Markdown语法简洁明了、容易掌握，而且功能比纯文本更强，因此写博客使用它，可以让用户更加专注的写文章，而不需要费尽心力的考虑样式，相对于html已经算是轻量级语言，像有道云笔记也支持Markdown写作。并且Markdown完全兼容html，也就是可以在文章里直接插入html代码。比如给博文添加音乐，就可以直接把音乐的外链html代码插入文章中。具体语法参看：Markdown 语法说明(简体中文版) 可以说十分钟就可以入门。当然，工欲善其事必先利其器，选择一个好的Markdown编辑器也是非常重要的，这里推荐MarkPad 和The Markdown Editor for Windows ，这是带有预览效果的编辑器，也可以使用本地的文本编辑器，更多的Markdown的语法与编辑器自己可以搜索了解。



# 发布文章

我们开始正式发布上线博客文章，在命令行中输入：

```
hexo n "博客名字"
```


我们会发现在blog根目录下的source文件夹中的_post文件夹中多了一个 博客名字.md 文件，使用Markdown编辑器打开，就可以开始你的个人博客之旅了，Markdown常用的样式也就十来种，完全能够满足一般博文的样式要求，这是我的一篇博文内容示例：




通过带有预览样式的Markdown编辑器实时预览书写的博文样式，也可以通过命令 hexo s --debug 在本地浏览器的localhost:4000 预览博文效果。写好博文并且样式无误后，通过hexo g、hexo d 生成、部署网页。随后可以在浏览器中输入域名浏览。



# 寻找图床

图床，当博文中有图片时，若是少量图片，可以直接把图片存放在source文件夹中，但这显然不合理的，因为图片会占据大量的存储的空间，加载的时候相对缓慢 ，这时考虑把博文里的图片上传到某一网站，然后获得外部链接，使用Markdown语法，![图片信息](外部链接) 完成图片的插入，这种网站就被成为图床。常见的简易的图床网站有：贴图库图片外链 国内算比较好的图床我认为有两个：新浪微博和 七牛云 ，七牛云的使用方法可以参看其他文章。图床最重要的就是稳定速度快，所以在挑选图床的时候一定要仔细，下图是博文插入图片，使用图床外链的示例：

# 个性化设置

所谓的个性化设置就是根据个人需要添加不同的插件及功能。

基本的有：

在站点配置文件_config.yml修改基本的站点信息




依次是网站标题、副标题、网站描述、作者、网站头像外部链接、网站语言、时区等。

在主题配置文件_config.yml修改基本的主题信息，如：




博文打赏的微信、支付宝二维码图片，这里我是直接把这两张放在根目录的source文件夹中，并没有使用图床外链。




社交外链的设置，即在侧栏展示你的个人社交网站信息。




博文分享的插件jiathis，值设置为true。在配置文件中有很多的个性化设置，可以自尝试更多的修改。

进阶个性化：

添加网易云音乐


打开网页版的网易云音乐，选择喜欢的音乐，点击生成外链播放器



## 复制外链的代码




比如在侧栏插入这首歌的音乐播放器，修改 blog\themes\next\layout\_macro的sidebar.swig文件，添加刚刚复制的外链代码




重新生成、部署网页，效果如下

## 设置背景


把你挑选的背景图片命名为：background.jpg，放在blog\themes\next\source\images里，在blog\themes\next\source\css\_custom文件的custom.styl首部添加：

```
body {
  background:url(/images/background.jpg);
  background-attachment: fixed;
}
```


background-attachment: fixed;是固定背景图片。

这是设置一张静态图片作为背景，其实Next主题自带有动态的背景效果，修改主题配置文件中的canvas_nest: false为canvas_nest: true即可。

## 增加侧栏菜单条目

默认的侧栏菜单条目有：首页、归档、标签、关于、搜索等。如果你想要增加其他的菜单条目，修改主题配置文件_config.yml里的Menu Settings中的menu和menu_icons两个地方




其中menu里是配置菜单项对应的页面位置（如：/love），menu_icons对应菜单项的图标，这里的图标是来自于Font Awesome ，所以你需要在Font Awesome网站上找到你需要的icon，然后把该icon的名字写在menu_icons对应菜单名后面，注意冒号有一个英文输入状态的空格。设置好后，在命令行里输入：

hexo new page "你所要增加的菜单项名称（要和你在menu中的填写要匹配）"
新建的页面在博客根目录下的source文件里，这时你就可以对新建的页面自定义设计。



还有更多的进阶个性化设置，如SEO、评论系统、个人头像、博客分享、订阅功能、High功能、404网页设置等，可以参看：

主题配置 - NexT 使用文档

第三方服务集成 - NexT 使用文档

内置标签 - NexT 使用文

档进阶设定 - NexT 使用文档

有很多人私信问我High功能特效如何设置，这里推荐一篇同是Next主题网站博主的文章：为Hexo Next主题添加哈林摇特效（五）



# 其他

终于写到这里了，也算是基本圆满完成了我的写作初衷，总结自己的一些经验，分享一些有趣的东西，不过脖子也是僵硬的受不了。我知道很多人想要建立自己的个人网站却一直没有付诸行动，希望这篇文章能给你一点点灵感与想法，just do it。本文是windows平台的搭建过程，其他平台可以参看相关资料，也有很多其他优秀的博客框架值得学习。如果有任何建议或想法、或疑问欢迎在评论区交流， 做好的网站不妨在评论区贴出网址，让大家一起学习。
