const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{player_colisao: 0},
	{Sólido: 0},
	{chao: 0},
	{esq: 0},
	{dir: 0},
	{jump: 0},
	{Toque: 0}
];

self.InstanceType = {
	player_colisao: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	esq: class extends self.ISpriteInstance {},
	dir: class extends self.ISpriteInstance {},
	jump: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {}
}