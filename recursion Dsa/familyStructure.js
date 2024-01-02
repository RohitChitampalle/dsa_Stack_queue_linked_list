
    function countSetBits(n)
    {

        let count = 0;

    while (n != 0)
    {
        n &= (n - 1);
    count++;
		}
    return count;
	}

    function findProffesion(level, pos)
    {


        if (level < 1)
            return 'e'; 

        if(pos < 1){
            return "Invalid position"
        }   

        let c = countSetBits(pos - 1);

        // if odd then engineer otherwise doctor
    return (c % 2 != 0)? 'd' : 'e';
	}

    let level = 3, pos = 1;
    let prof = (findProffesion(level, pos))
    console.log(prof);
