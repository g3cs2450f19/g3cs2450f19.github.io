var rowCount = 7;

(function()
{
	let stateCheck = setInterval(() => {
		if (document.readyState === 'complete')
		{
            clearInterval(stateCheck);
            addBeads();
		}
	}, 100);
})();

function addBeads()
{
    var abacusTopHTML = '';
    var abacusBottomHTML = '';

    for(var i = 1; i <= rowCount; i++)
    {
        abacusTopHTML += "<div id=\"top-row-" + i + "\" class=\"top-row\">" +
                        "<div id=\"space-" + i + "-0\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-1\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-1\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-2\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-2\" class=\"space grow-space\"></div></div>";
        abacusBottomHTML += "<div id=\"bottom-row-" + i + "\" class=\"bottom-row\">" +
                        "<div id=\"space-" + i + "-3\" class=\"space grow-space\"></div>" +
                        "<div id=\"bead-" + i + "-3\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-4\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-4\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-5\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-5\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-6\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-6\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-7\" class=\"space\"></div>" +
                        "<div id=\"bead-" + i + "-7\" class=\"bead\"></div>" +
                        "<div id=\"space-" + i + "-8\" class=\"space\"></div></div>";
    }

    document.getElementById("abacus-top").innerHTML = abacusTopHTML;
    document.getElementById("abacus-bottom").innerHTML = abacusBottomHTML;

    addButtons();
}

function addButtons()
{
    for(var i = 1; i <= rowCount; i++)
    {
        for(var j = 1; j <= 7; j++)
        {
            document.getElementById("bead-" + i + "-" + j).onclick = function() {shiftBeads(this.id)};
        }
    }
}