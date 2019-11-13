function shiftBeads(beadId)
{
    console.log("DEBUG shiftBeads(), beadId is " + beadId);
    var row = parseInt(beadId.charAt(5), 10);
    var bead = parseInt(beadId.charAt(7), 10);

    var oldSpace;
//    var oldSpaceRow = row;
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

    oldSpace.className = 'space';
    newSpace.className = 'space';

    newSpace.classList.add("grow-space");
    oldSpace.classList.add("space-shrink");
    newSpace.classList.add("space-grow");
}