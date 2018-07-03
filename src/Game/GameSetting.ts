class GameSetting extends eui.Component {
	private static shared:GameSetting ;
	public static Shared() {
		if(GameSetting.shared == null) {
			GameSetting.shared = new GameSetting();
		}
		return GameSetting.shared;
	}
	private btn_agree:eui.Button;      // 同意按钮,相当于直接关闭页面
	private img_music_disable:eui.Image;  // 音乐静音显示
	private img_sound_disable:eui.Image;  // 声音静音显示
	private btn_sound:eui.Button;         // 声音按钮
	private btn_music:eui.Button;         // 音乐按钮
	public constructor() {
		super();
		this.skinName = "src/Game/GameSettingSkin.exml";
		this.btn_agree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_agree, this);
		this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sound, this);
		this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music, this);
		// 通过声音管理类来处理界面显示
		this.update_buttonstate();
	}
	// 确定按钮的回调
	private click_agree() {
		SoundMenager.Shared().PlayClick();
		this.parent.removeChild(this);
	}
	// 设置是否静音
	private click_sound() {
		SoundMenager.Shared().PlayClick();
		SoundMenager.Shared().IsSound = !SoundMenager.Shared().IsSound;
		this.update_buttonstate();
	}
	// 设置是否播放音乐
	private click_music() {
		SoundMenager.Shared().PlayClick();
		SoundMenager.Shared().IsMusic = !SoundMenager.Shared().IsMusic;
		this.update_buttonstate();
	}
	private update_buttonstate() {
		this.img_music_disable.visible = !SoundMenager.Shared().IsMusic;
		this.img_sound_disable.visible = !SoundMenager.Shared().IsSound;
	}
}