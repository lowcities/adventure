var user = prompt("You are a dog running through the park. You come across three different situations. On your left is a creek to go swim in. On your right is a herd of deer to go chase. And directly in front of you is a group of dogs to go play with. Which option do you choose? Type LEFT, RIGHT or CENTER.").toLowerCase();

switch(user) {
    case 'left':
        var swim = prompt("Are you a good swimmer? YES or NO").toLowerCase();
        var rain = prompt("Did it happen to rain today? YES or NO").toLowerCase();
        if( swim === "yes" && rain === "no"){
        console.log("You jump into the creek for a refreshing swim You feel Great!.");
        break;
        }
        else if( swim === "yes" && rain === "yes"){
            console.log("You jump into the creek but get debris in your throat, YUCK!");
            break;
            }
            else{
                console.log("You jump into the creek but you cant swim too well so you struggle back to the creek bank. Better learn to swim!");
                break;
                }
    case 'right' :
        var fast = prompt("Are you a fast runner? YES or NO?").toLowerCase();
        var deer = prompt("Are there just a few deer, or many? Type FEW or MANY").toLowerCase();
        if( fast === "yes" || deer === "many"){
            console.log("Whether your fast or not, there are so many deer you have a great time chasing them off into the brush!");
            break;
            }
            else{
                console.log("You run with all your might but soon run out of wind. The deer scamper off into the brush never to be seen again");
                break;
                }
    case 'center' :
        var dogs = prompt("Do the dogs seem friendly? Type YES or NO.").toLowerCase();
    
        if( dogs !== "yes"){
           console.log("The dogs do not seem friendly. You decide to backoff and go for a swim instead!");
           break;
        }
            else{
                console.log("The dogs welsome you with wagging tails and you enjoy games of chase and tug of war!");
                break;
                
    }
    default :
    console.log("That is not a valid input");
};
