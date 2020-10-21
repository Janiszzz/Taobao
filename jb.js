var i = 0;
var j = 0;
var taskList = ['去浏览', '去完成'];
var height = device.height;
var width = device.width;
setScreenMetrics(width, height);
var speed = 1;

log("正在打开淘宝");
launch("com.taobao.taobao");
sleep(1000 * speed);

className("android.widget.Button").text("赚喵币").waitFor()
sleep(1500 * speed);
if (!textContains("累计任务奖励").exists()) {
    className("android.widget.Button").text("赚喵币").findOne().click()
    log("进入活动成功");
}
sleep(1500 * speed);
if (className("android.widget.Button").text("签到").exists()) {
    className("android.widget.Button").text("签到").click()
    sleep(200);
    log("签到成功");
} else { log("已签到"); }
sleep(1500 * speed);

taskList.forEach(task => {
    while (textContains(task).exists()) {
        log("开始做第" + (i+1) + "次任务！");
        var a = text(task).findOnce(j);
        switch (task) {
            case '去完成':
				log("开始去完成任务")
				click('去完成',1);
				sleep(1500 * speed);
				if (textContains("当前淘宝账号").exists()) {
					log("暂不支持跳转其它APP！");
					back();
					continue;
				}
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(15000 * speed);
				swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
				textContains("任务完成").findOne(10000 * speed);
				i++;
				log("已完成第" + i + "次任务！");
				back();
				break;
            case '去浏览':
                sleep(500 * speed);
                a.click();
                sleep(1500 * speed);
				if (!textContains("跟主播聊").exists() || !textContains("赚金币").exists()) {
					swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
					sleep(3500 * speed);
					swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
					sleep(12000 * speed);
					swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
				}else{
					sleep(15000 * speed);
				}
                textContains("任务完成").findOne(10000 * speed);
                i++;
                log("已完成第" + i + "次任务！")
                back();
                break;
            case '去搜索':
				log("开始去完成任务")
				click('去搜索',1);
				sleep(1500 * speed);
				if (textContains("当前淘宝账号").exists()) {
					log("暂不支持跳转其它APP！");
					back();
					continue;
				}
                swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
                sleep(15000 * speed);
				swipe(width / 2, height - 500, width / 2, 0, 800 * speed);
				textContains("任务完成").findOne(10000 * speed);
				i++;
				log("已完成第" + i + "次任务！");
				back();
				break;
            default:
                log("Powered by ROCEYS 20201021, Forked by Janis 20201021")
                break;
                
        }
        sleep(2000 * speed);
    }
});

log("Done!");
exit();