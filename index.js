
module.exports = function portalkill(mod) {

	mod.hook("S_SPAWN_NPC", 11, (event) => {
		if (event.templateId === 1958 && event.huntingZoneId === 183)
			return false;
	});

};