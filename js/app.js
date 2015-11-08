$(document).ready(function() {
    $("#far-clouds").pan({
		fps: 30,
        speed: 0.7,
        dir: "left",
        depth: 30
    });
    
	$("#near-clouds").pan({
		fps: 30,
        speed: 1,
        dir: "left",
        depth: 70
    });
});