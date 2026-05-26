const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Behaviors.MoveTo,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{player_colisao: 0},
	{Sólido: 0},
	{chao: 0},
	{esq: 0},
	{dir: 0},
	{jump: 0},
	{Toque: 0},
	{reset: 0},
	{porta: 0},
	{lava: 0},
	{chave: 0},
	{bau: 0},
	{Texto: 0},
	{MoverPara: 0},
	{logo: 0}
];

self.InstanceType = {
	player_colisao: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	esq: class extends self.ISpriteInstance {},
	dir: class extends self.ISpriteInstance {},
	jump: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	reset: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	bau: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	logo: class extends self.ISpriteInstance {}
}