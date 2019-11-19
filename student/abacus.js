function shiftBeads(beadId)
{
    var row = parseInt(beadId.charAt(5), 10);
    var bead = parseInt(beadId.charAt(7), 10);

    var oldSpace;
    var oldSpaceNum;
    var oldSpaceOffset = 0;

    if(bead > 2)
    {
        oldSpaceOffset = rowCount;
    }

    oldSpace = document.getElementsByClassName("grow-space")[row + oldSpaceOffset - 1];
    oldSpaceNum = parseInt(oldSpace.id.charAt(8), 10);

    // example: bead-2-5 is clicked. This is the middle bead on the bottom part of the second row
    // The oldSpace is the grow-space element in the second bottom row, or space-2-3
    // the space # (3) is less than the bead # (5), so the bead needs to be moved up
    //    and the space below the bead (space-1-6) needs to be grown

    var newSpaceNumOffset = 0;

    if(bead > 2 && oldSpaceNum <= bead)
    {
        newSpaceNumOffset = 1;
    }
    else if(bead <= 2 && oldSpaceNum >= bead)
    {
        newSpaceNumOffset = -1;
    }

    var newSpace = document.getElementById("space-" + row + "-" + (bead + newSpaceNumOffset));

    if(oldSpace === null || newSpace === null)
    {
        console.log("Jesse debug @ shiftBeads, oldSpace and newSpace are " + oldSpace + " and " + newSpace);
    }

    oldSpace.className = 'space';
    newSpace.className = 'space';

    newSpace.classList.add("grow-space");
    oldSpace.classList.add("space-shrink");
    newSpace.classList.add("space-grow");
}

function solve()
{
    var value = Math.floor(document.getElementById("input").value);
    document.getElementById("input").value = value;

    for(var i = 0; i < rowCount; i++)
    {
        var digit = value % Math.pow(10, i + 1);
        if(digit < Math.pow(10, i))
        {
            digit = 0;
        }
        else
        {
            while(digit > 9)
            {
                digit = Math.floor(digit / 10);
            }
        }

        setRow(rowCount - i, digit);
    }
}

function setRow(column, digit)
{
    var topBeadsDiv = document.getElementById("top-row-" + column);
    var bottomBeadsDiv = document.getElementById("bottom-row-" + column);

    var topValue = Math.floor(digit / 5);
    var bottomValue = digit % 5;
    
    for(var i = 0; i < 9; i++)
    {
        var spaceDiv = document.getElementById("space-" + column + "-" + i);
        var isGrown = hasClass(spaceDiv, "grow-space")

        if(i !== (2 - topValue) && i !== (3 + bottomValue) && isGrown) // needs to shrink
        {
            spaceDiv.className = 'space';
            spaceDiv.classList.add("space-shrink");
        }
        else if((i === (2 - topValue) || i === (3 + bottomValue)) && !isGrown) // needs to grow
        {
            spaceDiv.className = 'space';
            spaceDiv.classList.add("grow-space");
            spaceDiv.classList.add("space-grow");
        }
    }
}

function reset()
{
    for(var i = 1; i <= rowCount; i++)
    {
        setRow(i, 0);
    }
}

function hasClass(div, className)
{
    returnVal = false;
    for(var i = 0; i < div.classList.length; i++)
    {
        if(div.classList[i] === className)
        {
            returnVal = true;
        }
    }
    return returnVal;
}