let s1 = document.querySelector('.p1');
let s2 = document.querySelector('.p2');
let s3 = document.querySelector('.p3');
let s4 = document.querySelector('.p4');
let s5 = document.querySelector('.p5');
let s6 = document.querySelector('.p6');
let s7 = document.querySelector('.p7');
let s8 = document.querySelector('.p8');
let s9 = document.querySelector('.p9');
let s10 = document.querySelector('.p10');
let s11 = document.querySelector('.p11');
let s12 = document.querySelector('.p12');
let addbutton = document.querySelector('.addMusic');
let PlayKey=document.querySelector('.playhere');

let boolean=true;
let boolean2=false;
let smallBool=true;
//to delete one key at a time
document.querySelector('.Delete1').addEventListener('click',()=>{
MusicArray.splice((MusicArray.length-1),1);
displayMusic();
})
//to delete all keys in screen
document.querySelector('.DeleteAll').addEventListener('click',()=>{
    MusicArray=[];
    displayMusic();
})



document.querySelector('.tryagain').innerHTML = ``;
let dataval;
let MusicArray = [];
let notes;
document.querySelector('.textMusic').addEventListener('keydown', (event) => {
    document.body.removeEventListener('keydown',PlayMeKeyboard);
    if (event.key === 'Enter')
        addToArray();
})

addbutton.addEventListener('click', () => {
    addToArray();
})

document.querySelector('.Play').addEventListener('click', () => {
    document.body.removeEventListener('keydown',PlayMeKeyboard);
    document.body.removeEventListener('keydown',deleteOneAtATime);
    document.querySelector('.WriteSrchButton').innerHTML=``;
    boolean=false;
    playArray();
})

document.querySelector('.AddEvent').addEventListener('click',()=>{
    document.body.addEventListener('keydown',PlayMeKeyboard);
    if(boolean===true)
    {
        document.querySelector('.WriteSrchButton').innerHTML=`
        <p>playing via keyboard.......</p><br>
        <button class="WriteKeyboard">Write keys</buttons>
    `;
        document.querySelector('.WriteKeyboard').addEventListener('click',()=>{
        //proceed to the writing in PlayKeyboard
        document.body.addEventListener('keydown',deleteOneAtATime);
        boolean2=true;
    })
    boolean=false;
    }
    else
    {
        document.querySelector('.WriteSrchButton').innerHTML=``;
        document.body.removeEventListener('keydown',PlayMeKeyboard);
        boolean=true;
    }
    
})
// document.querySelector('.RemoveEvent').addEventListener('click',()=>{
//     document.body.removeEventListener('keydown',PlayMeKeyboard);
// })
document.querySelector('.StopPlay').addEventListener('click',()=>{
    
})

function deleteOneAtATime(event)
{
    if(event.key==='Backspace')
    {
        MusicArray.splice((MusicArray.length-1),1);
        displayMusic();
    }
}

function playUp(GimmeKey)
{
    s1.innerHTML=`
        <p style="margin:0;">1</p>
        <audio autoplay>
        <source src=" su${GimmeKey}.mp3">`;

}

function playDown(GimmeKey)
{
    s2.innerHTML=`<p style="margin:0;">2</p>
        <audio autoplay>
        <source src=" sd${GimmeKey}.mp3">`;
}

function PlayMeKeyboard(event)
{
    if(event.key==='q')
    {
        playUp(1);
        if(boolean2===true)
        {
            MusicArray.push('1u');
            displayMusic();
        }
        
    }
    else if(event.key==='w')
    {
        playUp(2);
        if(boolean2===true)
        {
            MusicArray.push('2u');
            displayMusic();
        }

    }

    else if(event.key==='e')
    {
        playUp(3);
        if(boolean2===true)
        {
            MusicArray.push('3u');
            displayMusic();
        }
    }

    else if(event.key==='r')
    {
        playUp(4);
        if(boolean2===true)
        {
            MusicArray.push('4u');
            displayMusic();
        }
    }

    else if(event.key==='t')
    {
        playUp(5);
        if(boolean2===true)
        {
            MusicArray.push('5u');
            displayMusic();
        }
    }

    else if(event.key==='y')
    {
        playUp(6);
        if(boolean2===true)
        {
            MusicArray.push('6u');
            displayMusic();
        }
    }

    else if(event.key==='u')
    {
        playUp(7);
        if(boolean2===true)
        {
            MusicArray.push('7u');
            displayMusic();
        }
    }

    else if(event.key==='i')
    {
        playUp(8);
        if(boolean2===true)
        {
            MusicArray.push('8u');
            displayMusic();
        }
    }

    else if(event.key==='o')
    {
        playUp(9);
        if(boolean2===true)
        {
            MusicArray.push('9u');
            displayMusic();
        }
    }

    else if(event.key==='p')
    {
        playUp(10);
        if(boolean2===true)
        {
            MusicArray.push('10u');
            displayMusic();
        }
    }

    else if(event.key==='[')
    {
        playUp(11);
        if(boolean2===true)
        {
            MusicArray.push('11u');
            displayMusic();
        }
    }

    else if(event.key===']')
    {
        playUp(12);
        if(boolean2===true)
        {
            MusicArray.push('12u');
            displayMusic();
        }
    }

    else if(event.key==='1')
    {
        playDown(1);
        if(boolean2===true)
        {
            MusicArray.push('1d');
            displayMusic();
        }
    }

    else if(event.key==='2')
    {
        playDown(2);
        if(boolean2===true)
        {
            MusicArray.push('2d');
            displayMusic();
        }
    }

    else if(event.key==='3')
    {
        playDown(3);
        if(boolean2===true)
        {
            MusicArray.push('3d');
            displayMusic();
        }
    }

    else if(event.key==='4')
    {
        playDown(4);
        if(boolean2===true)
        {
            MusicArray.push('4d');
            displayMusic();
        }
    }

    else if(event.key==='5')
    {
        playDown(5);
        if(boolean2===true)
        {
            MusicArray.push('5d');
            displayMusic();
        }
    }

    else if(event.key==='6')
    {
        playDown(6);
        if(boolean2===true)
        {
            MusicArray.push('6d');
            displayMusic();
        }
    }

    else if(event.key==='7')
    {
        playDown(7);
        if(boolean2===true)
        {
            MusicArray.push('7d');
            displayMusic();
        }
    }

    else if(event.key==='8')
    {
        playDown(8);
        if(boolean2===true)
        {
            MusicArray.push('8d');
            displayMusic();
        }
    }

    else if(event.key==='9')
    {
        playDown(9);
        if(boolean2===true)
        {
            MusicArray.push('9d');
            displayMusic();
        }
    }

    else if(event.key==='0')
    {
        playDown(10);
        if(boolean2===true)
        {
            MusicArray.push('10d');
            displayMusic();
        }
    }

    else if(event.key==='-')
    {
       playDown(11);
       if(boolean2===true)
        {
            MusicArray.push('11d');
            displayMusic();
        }
    }

    else if(event.key==='=')
    {
        playDown(12);
        if(boolean2===true)
        {
            MusicArray.push('12d');
            displayMusic();
        }
    }
}

function playArray() {
    MusicArray.forEach((value, index) => {
        if (value === '1u') {
            setTimeout(() => {
                s1.innerHTML = `<div class='green'>1</div>
                <div>
                    <audio autoplay>
                    <source src="su1.mp3">
                </div>`
            }, index * 1000);
            setTimeout(() => {
                s1.innerHTML = `1`;
            },(index+1)*1000);
        }

        else if (value === '1d') {
            setTimeout(() => {
                s1.innerHTML = `<div class='red'>1</div><div>
                <audio autoplay>
                <source src=" sd1.mp3">
            </div> `;
            }, index * 1000);
            setTimeout(() => {
                s1.innerHTML = `1`;
            },(index+1)*1000);

        }

        else if (value === '2u') {
            setTimeout(() => {
                s2.innerHTML = `<div class='green'>2</div><div>
                <audio autoplay>
                <source src=" su2.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s2.innerHTML = `2`;
            },(index+1)*1000);
        }

        else if (value === '2d') {
            setTimeout(() => {
                s2.innerHTML = `<div class='red'>2</div><div>
                <audio autoplay>
                <source src=" sd2.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s2.innerHTML = `2`;
            },(index+1)*1000);
 
        }

        else if (value === '3u') {
            setTimeout(() => {
                s3.innerHTML = `<div class='green'>3</div><div>
                <audio autoplay>
                <source src=" su3.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s3.innerHTML = `3`;
            },(index+1)*1000);
        }

        else if (value === '3d') {
            setTimeout(() => {
                s3.innerHTML = `<div class='red'>3</div><div>
                <audio autoplay>
                <source src=" sd3.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s3.innerHTML = `3`;
            },(index+1)*1000);
 
        }

        else if (value === '4u') {
            setTimeout(() => {
                s4.innerHTML = `<div class='green'>4</div><div>
                <audio autoplay>
                <source src=" su4.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s4.innerHTML = `4`;
            },(index+1)*1000);
        }

        else if (value === '4d') {
            setTimeout(() => {
                s4.innerHTML = `<div class='red'>4</div><div>
                <audio autoplay>
                <source src=" sd4.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s4.innerHTML = `4`;
            },(index+1)*1000);
 
        }

        else if (value === '5u') {
            setTimeout(() => {
                s5.innerHTML = `<div class='green'>5</div><div>
                <audio autoplay>
                <source src=" su5.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s5.innerHTML = `5`;
            },(index+1)*1000);
        }

        else if (value === '5d') {
            setTimeout(() => {
                s5.innerHTML = `<div class='red'>5</div><div>
                <audio autoplay>
                <source src=" sd5.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s5.innerHTML = `5`;
            },(index+1)*1000);
 
        }

        else if (value === '6u') {
            setTimeout(() => {
                s6.innerHTML = `<div class='green'>6</div><div>
                <audio autoplay>
                <source src=" su6.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s6.innerHTML = `6`;
            },(index+1)*1000);
        }

        else if (value === '6d') {
            setTimeout(() => {
                s6.innerHTML = `<div class='red'>6</div><div>
                <audio autoplay>
                <source src=" sd6.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s6.innerHTML = `6`;
            },(index+1)*1000);
 
        }

        else if (value === '7u') {
            setTimeout(() => {
                s7.innerHTML = `<div class='green'>7</div><div>
                <audio autoplay>
                <source src=" su7.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s7.innerHTML = `7`;
            },(index+1)*1000);
        }

        else if (value === '7d') {
            setTimeout(() => {
                s7.innerHTML = `<div class='red'>7</div><div>
                <audio autoplay>
                <source src=" sd7.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s7.innerHTML = `7`;
            },(index+1)*1000);
 
        }

        else if (value === '8u') {
            setTimeout(() => {
                s8.innerHTML = `<div class='green'>8</div><div>
                <audio autoplay>
                <source src=" su8.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s8.innerHTML = `8`;
            },(index+1)*1000);
        }

        else if (value === '8d') {
            setTimeout(() => {
                s8.innerHTML = `<div class='red'>8</div><div>
                <audio autoplay>
                <source src=" sd8.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s8.innerHTML = `8`;
            },(index+1)*1000);
 
        }

        else if (value === '9u') {
            setTimeout(() => {
                s9.innerHTML = `<div class='green'>9</div><div>
                <audio autoplay>
                <source src=" su9.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s9.innerHTML = `9`;
            },(index+1)*1000);
        }

        else if (value === '9d') {
            setTimeout(() => {
                s9.innerHTML = `<div class='red'>9</div><div>
                <audio autoplay>
                <source src=" sd9.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s9.innerHTML = `9`;
            },(index+1)*1000);
 
        }

        else if (value === '10u') {
            setTimeout(() => {
                s10.innerHTML = `<div class='green'>10</div><div>
                <audio autoplay>
                <source src=" su10.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s10.innerHTML = `10`;
            },(index+1)*1000);
        }

        else if (value === '10d') {
            setTimeout(() => {
                s10.innerHTML = `<div class='red'>10</div><div>
                <audio autoplay>
                <source src=" sd10.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s10.innerHTML = `10`;
            },(index+1)*1000);
 
        }

        else if (value === '11u') {
            setTimeout(() => {
                s11.innerHTML = `<div class='green'>11</div><div>
                <audio autoplay>
                <source src=" su11.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s11.innerHTML = `11`;
            },(index+1)*1000);
        }

        else if (value === '11d') {
            setTimeout(() => {
                s11.innerHTML = `<div class='red'>11</div><div>
                <audio autoplay>
                <source src=" sd11.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s11.innerHTML = `11`;
            },(index+1)*1000);
 
        }

        else if (value === '12u') {
            setTimeout(() => {
                s12.innerHTML = `<div class='green'>12</div><div>
                <audio autoplay>
                <source src=" su12.mp3">
            </div>`
            }, index * 1000);
            setTimeout(() => {
                s12.innerHTML = `12`;
            },(index+1)*1000);
        }

        else if (value === '12d') {
            setTimeout(() => {
                s12.innerHTML = `<div class='red'>12</div><div>
                <audio autoplay>
                <source src=" sd12.mp3">
            </div>`;
            },index*1000);

            setTimeout(() => {
                s12.innerHTML = `12`;
            },(index+1)*1000);
 
        }

        
    })
}

function displayMusic() {
    document.querySelector('.tryagain').innerHTML = ``;
    notes = 'Your Note -> ';
    MusicArray.forEach((value, index) => {
        notes += `${value} `;
    })
    document.querySelector('.DisplayNotes').innerHTML = notes;
}

function addToArray() {
    dataval = document.querySelector('.textMusic').value;
    if (checkDataValue(dataval)) {
        MusicArray.push(dataval);
        console.log("-----Data Written Sucessfully-------");
        displayMusic();
    }
    else {
        console.log('try again!! data mistake');
        document.querySelector('.tryagain').innerHTML = `Try again !!!`;
    }
}

function checkDataValue(Data) {
    let n1, n2;
    console.log(Data.length);
    if (Data.length === 2) {
        n1 = `${Data[0]}`;
        n2 = `${Data[1]}`;
        if (!isNaN(n1) && isNaN(n2)) {
            console.log("stage1 check complete!");
            if ((Number(n1) > 0 && Number(n1) <= 9) && (n2 === 'U' || n2 === 'u' || n2 === 'D' || n2 === 'd')) {
                console.log("data passed!");
                return true;
            }
            else {
                return false
            }

        }
        else {
            return false;
        }
        console.log(n1);
    }
    else {
        n1 = `${Data[0]}${Data[1]}`;
        n2 = `${Data[2]}`;
        if (!isNaN(n1) && isNaN(n2)) {
            console.log("stage1 check complete!");
            if ((Number(n1) > 0 && Number(n1) <= 12) && (n2 === 'U' || n2 === 'u' || n2 === 'D' || n2 === 'd')) {
                console.log("data passed!");
                return true;
            }
            else {
                return false
            }
        }
        else {
            return false;
        }
    }
}

