import React from 'react';




let countLien=0;
let countHome=0;
let countAbout=0;
let count = 0;

function click(e) {
    if (e.target.innerText === "Contact" ) {
        count++ 
        e.target.nextElementSibling.innerText= ` J'ai été cliqué ${count} fois`

        console.log(e.target);
    } else if(e.target.innerText === "Liens") {
        countLien++ 
        e.target.nextElementSibling.innerText= ` J'ai été cliqué ${countLien} fois`

    }else if(e.target.innerText === "Home") {
        countHome++ 
        e.target.nextElementSibling.innerText= ` J'ai été cliqué ${countHome} fois`

    }else if(e.target.innerText === "About") {
        countAbout++ 
        e.target.nextElementSibling.innerText= ` J'ai été cliqué ${countAbout} fois`
    }
    
}



const Header = () => {
    return (
        
        <div>
            <nav>
                <ul onClick={(e)=>{click(e)}}>
                    <li><span>Contact</span><span></span></li>
                    <li><span>Liens</span><span></span></li>
                    <li><span>Home</span><span></span></li>
                    <li><span>About</span><span></span></li>
                </ul>
            </nav>
        </div>
    );

};


export default Header;