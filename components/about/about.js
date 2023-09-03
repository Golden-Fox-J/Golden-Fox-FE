import moathimg from "./images/moath.png";
import mahdiimg from "./images/mahdi4-removebg-preview.png";
import mutazimg from "./images/mutaz.jpg";
import mothanaimg from "./images/mothana.png";
import duaaimg from "./images/duaa.png";
import zekraimg from "./images/zekra.png";


import github from "./images/github.png"
import email from "./images/email.png"

import logo from "./images/logo.png"




export default function About() {

    return (
        <>
            <h1 id="aboutheader">MEET OUR TEAM</h1>
            <div id="aboutline"></div>
            <div id="aboutDiv">
                <div id="moath">
                    <img className="member" src='https://avatars.githubusercontent.com/u/125549483?v=4' alt="moath"></img>
                    <h2 class="name">Mo'ath Shakhatreh</h2>
                    <h4 class="teamstate">Team leader</h4>
                    <p class="bio">
                        bio
                    </p>

                    <div class="links">
                        <a href="mailto: moath.shakhatreh@gmail.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/Moath-shakhatreh" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>

                <div id="mahdi">
                    <img className="member" src={mahdiimg} alt="mahdi"></img>
                    <h2 class="name">Mahdi malkawi</h2>
                    <h4 class="teamstate">Team member</h4>
                    <p class="bio">
                        {" "}
                        bio
                    </p>
                    <div class="links">
                        <a href="mailto:mahdimalkawi98@hotmail.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/mahdimalkawi1" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>

                <div id="mutaz">
                    <img className="member" src={mutazimg} alt="mutaz"></img>
                    <h2 class="name">Mutaz Abutaha</h2>
                    <h4 class="teamstate">Team member</h4>
                    <p class="bio">
                        {" "}
                        bio
                    </p>
                    <div class="links">
                        <a href="mailto:mutazabutaha13@outlook.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/MutazAbutaha" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>
                <br />

                <div id="mothana">
                    <img className="member" src={mothanaimg} alt="mothana"></img>
                    <h2 class="name">Al-Mothana Al-Masri</h2>
                    <h4 class="teamstate">Team member</h4>
                    <p class="bio">
                        bio
                    </p>
                    <div class="links">
                        <a href="mailto:mothana.almasri.99@gmail.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/almothana-almasri" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>

                <div id="duaa">
                    <img className="member" src={duaaimg} alt="duaa"></img>
                    <h2 class="name">Duaa Melhem </h2>
                    <h4 class="teamstate">Team member</h4>
                    <p class="bio">
                        bio
                    </p>
                    <div class="links">
                        <a href="mailto:Drduaamelhem@gmail.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/doaamelhem96" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>
                <div id="zekra">
                    <img className="member" src={zekraimg} alt="zekra"></img>
                    <h2 class="name">Zekra Quraan </h2>
                    <h4 class="teamstate">Team member</h4>
                    <p class="bio">
                        bio
                    </p>
                    <div class="links">
                        <a href="mailto:zekraquraan7@gmail.com" target="_blank">
                            <img class="link4" src={email} alt=""></img>
                        </a>

                        <a href="https://github.com/zekraquraan" target="_blank">
                            <img class="link4" src={github} alt=""></img>
                        </a>
                    </div>
                </div>
            </div>


            <h1 id="aboutheader2">About </h1>
            <div id="aboutline2"></div>
            {/* <img id="product" src={product} alt=""></img> */}
            <div id="p1">
                <img id="logo" src={logo} alt=""></img>
                <p id="Golden Fox">
                    An online store <br /> 
                    an online store where you can explore a vast collection of products and effortlessly make purchases.
                    Additionally, you have the option to create a curated list of your favorite items for easy reference and future shopping.

                </p>
            </div>

            <div id="p2">
                <h3 id="vision1">Our vision </h3>
                <p id="vision">
                "Our vision is to be the ultimate online shopping destination,
                 offering a wide range of high-quality products while enabling customers to easily create and manage their personalized lists of favorites,
                  making shopping both convenient and enjoyable."
                </p>
            </div>
        </>
    );
}

