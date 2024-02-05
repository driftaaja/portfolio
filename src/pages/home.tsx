import { ReactElement, useState } from "react";
import CustomCard from "../components/cardComponent";
import CustomProfileInfo from "../components/profileItemComponent";

import "../styles/custom-styles.css";

// Placeholder and test image for projects
const img_URL = process.env.PUBLIC_URL + "/img/cat_illustration.png";

// Profile picture of me
const profilePicture_URL = process.env.PUBLIC_URL + "/img/profilePicture.JPG";

// ProfileItem interface
interface ProfileItem {
    id : string;
    title : string;
    content : ReactElement;
};

// Project interface
interface Project {
    id : number;
    imgSource : string;
    imgDescription : string;
    projectName : string;
    projectDescriptionShort : string;
    projectDescriptionLong : ReactElement;
    projectModalName : string;
    projectModalLabel : string;
    projectGitHubRepository : string,
    projectLink : string;
    colValue : string;
};

const HomePage = () => {
    /*  object structure to profileItems[]
        {
            "id" : "education",
            "title" : "Education",
            "content" : (
                <>
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    text...
                </span>
                </>
            ),
        },
    */

    // Array of profileItems
    const profileItems : Array<ProfileItem> = [
        {
            "id" : "whoIam",
            "title" : "Kuka olen",
            "content" : (
                <>
                <div className="row">
                    <div className="col-sm-4 bg-dark text-white p-4 text-center">
                        <p style={{fontSize: 26,}}>
                            Minä olen
                            <br/>
                            Petteri Mikkonen
                            <br/>
                            Junior
                            <br/>
                            full stack
                            <br/>
                            Web Developer.
                        </p>
                    </div>
                    <div className="col-sm-4 bg-dark text-white p-4">
                        <p className="text-center" style={{fontSize: 20,}}>
                            Harrastukset
                        </p>
                        <hr/>
                        <p style={{fontSize: 16,}}>
                            Harrastuksiini kuuluu rullalautailu, frisbeegolf ja videopelien pelaaminen.
                        </p>
                    </div>
                    <div className="col-sm-4 bg-dark text-white p-4">
                        <p className="text-center" style={{fontSize: 20,}}>
                            Mielenkiinnonkohteet
                        </p>
                        <hr/>
                        <p style={{fontSize: 16,}}>
                            Minusta on mielekästä tutkia tietotekniikkaan ja harrastuksiini liittyviä asioita.
                        </p>
                    </div>
                    <div className="col-sm-12 bg-dark text-white p-4 text-center">
                        <hr/>
                        <p style={{fontSize: 16,}}>
                            Ota yhteyttä
                        </p>
                        <p>linkedIn</p>
                    </div>
                </div>
                </>
            ),
        },
        {
            "id" : "education",
            "title" : "Opinnot",
            "content" : (
                <>
                <div className="row">
                    <div className="col-sm-12 bg-dark text-white p-4 text-center">
                        <p style={{fontSize: 26,}}>
                            Valmistunut Tietojenkäsittelyn tradenomiksi Kaakkois-Suomen Ammattikorkeakoulu XAMK vuonna 2019.
                        </p>
                    </div>
                </div>
                </>
            ),
        },
        {
            "id" : "skills",
            "title" : "Taidot",
            "content" : (
                <>
                <div className="row">
                    <div className="col-sm-12 bg-dark text-white p-4 text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <p style={{fontSize: 20,}}>
                                    Ohjelmointi (kielet, frameworkit yms.)
                                </p>
                                <hr/>
                            </div>
                            {/*
                                Here comes the code stuff...
                            */}
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    HTML
                                </p>
                                <p>
                                    5/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    CSS
                                </p>
                                <p>
                                    4/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    JS
                                </p>
                                <p>
                                    5/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    TS
                                </p>
                                <p>
                                    3.5/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    Java
                                </p>
                                <p>
                                    2/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    C#
                                </p>
                                <p>
                                    2/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    PHP
                                </p>
                                <p>
                                    1/5
                                </p>
                            </div>
                            <div className="col-sm-3 p-4">
                                <p style={{fontSize: 16,}}>
                                    Node.js
                                </p>
                                <p>
                                    4/5
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p style={{fontSize: 20,}}>
                                    Muut ohjelmat
                                </p>
                                <hr/>
                            </div>
                            {/*
                                This is same as above but with adobe shit etc...
                            */}
                        </div>
                    </div>
                </div>
                </>
            ),
        },
        {
            "id" : "workExperience",
            "title" : "Työkokemus",
            "content" : (
                <>
                {/*
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    text... Työkokemus
                </span>
                */}
                </>
            ),
        },
    ];

    const displayProfileItems = (arr : Array<ProfileItem>) => {
        let profileItems = arr; // params
        let result : Array<ReactElement> = []; // return value

        let profileItem_id : string = "";
        let profileItem_title : string = "";
        let profileItem_content : ReactElement;

        let htmlString;

        for(let i = 0; i < profileItems.length; i++){
            /*
            console.log(`profileItems[${profileItems[i]}]: ${i}`);
            console.log(`profileItems[${i}].id: ${profileItems[i].id}`);
            console.log(`profileItems[${i}].title: ${profileItems[i].title}`);
            console.log(`profileItems[${i}].content: ${profileItems[i].content}`);
            */
            profileItem_id = profileItems[i].id;
            profileItem_title = profileItems[i].title;
            profileItem_content = profileItems[i].content;

            htmlString = (
                <div className="row" key={profileItem_id}>
                    <div className="col-sm-12">
                        <CustomProfileInfo
                            title={profileItem_title}
                            content={profileItem_content}
                        />
                    </div>
                </div>
            );

            result.push(htmlString);
        };

        return [result];
    };

    /*  object structure to projects[]
        {
            "id" : 0,
            "imgSource" : img_URL,
            "imgDescription" : "img description.",
            "projectName" : "Project name.",
            "projectDescriptionShort" : "Short text.",
            "projectDescriptionLong" : (
                <>
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    text...
                </span>
                </>
            ),
            "projectModalName" : "#(projectName in one string)",
            "projectModalLabel" : "same as projectModalName",
            "projectGitHubRepository" : "url_to_GitHub_repository",
            "projectLink" : "url_to_project_website",
            "colValue" : "Bootstrap 5 col to use"
        },
    */
    
    // Array of my projects
    const projects : Array<Project> = [
        {
            "id" : 0,
            "imgSource" : img_URL,
            "imgDescription" : "Portfolio",
            "projectName" : "Portfolio - Petteri Mikkonen",
            "projectDescriptionShort" : "Tämä portfolio sivu on itsessään yksi toteuttamistani projekteista.",
            "projectDescriptionLong" : (
                <>
                <span>
                    Tämä sivu on toteutettu ReactJS:llä käyttäen Typescriptiä.
                    <br/>
                    Tässä hieman testiä...
                    <hr/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.
                    <br/>
                    <br/>
                    Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
                    <br/>
                    <br/>
                    Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
                    <br/>
                    <br/>
                    Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
                    <br/>
                    <br/>
                    Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </span>
                <br/>
                <span>
                    Super
                    <br/>
                    <strong className="text-warning">long</strong>
                    <br/>
                    test
                    <br/>
                    <h1>DATA</h1>
                    <img src={img_URL} alt="kissa"/>
                    <br/>
                    <span style={{color: "red", border: 1, borderStyle: "solid", borderColor: "#0000ff"}}>
                        <b className="superCustomAnimationClass" style={{backgroundColor: "#00ff00", fontSize: 50,}}>S</b>uper custom <i style={{color: "#000000", fontSize: 30}}>styled</i> element asdasdasd....
                    </span>
                </span>
                <br/>
                <p>Works fine with any content</p>
                <div className="form-check form-switch text-center">
                    <input style={{float: "right"}} className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                </div>
                <div className="row text-center">
                    <p>This project is awesome... <b>AND</b> <span className="text-danger">ReactJS</span> is so <u><span style={{color: "green"}}>powerful</span></u></p>
                </div>
                <div className="row">
                    <div style={{margin: "auto"}} className="col-sm-8">
                        <iframe width="100%" height="500px" style={{border: 1, borderStyle: "solid", borderColor: "blue"}} src="https://driftaaja.github.io/portfolio/" title="My portfolio page"></iframe>
                    </div>
                </div>
                </>
            ),
            "projectModalName" : "#portfolio",
            "projectModalLabel" : "portfolio",
            "projectGitHubRepository" : "https://github.com/driftaaja/portfolio/tree/main",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-6",
        },
        {
            "id" : 1,
            "imgSource" : img_URL,
            "imgDescription" : "EseduLAN 2023 - website",
            "projectName" : "EseduLAN 2023 - website",
            "projectDescriptionShort" : "EseduLAN 2023 -website on MERN stack sovellus.",
            "projectDescriptionLong" : (
                <span>
                    Toteutin Digimuuntamo 3.0 työvoimakoulutuksessa EseduLAN 2023 tapahtuman nettisivujen porttaus projektia pienryhmässä.
                    <br/>
                    Minun vastuullani oli kirjoittaa ilmoittautumislomake validointeineen ReactJS:llä.
                </span>
            ),
            "projectModalName" : "#EseduLAN",
            "projectModalLabel" : "EseduLAN",
            "projectGitHubRepository" : "",
            "projectLink" : "https://esedu-lan.onrender.com/",
            "colValue" : "col-sm-6",
        },
        {
            "id" : 2,
            "imgSource" : img_URL,
            "imgDescription" : "Test data",
            "projectName" : "Test data",
            "projectDescriptionShort" : "Test data.",
            "projectDescriptionLong" : (
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    test
                    <br/>
                    <h1>DATA</h1>
                </span>
            ),
            "projectModalName" : "#Testdata",
            "projectModalLabel" : "Testdata",
            "projectGitHubRepository" : "",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-4"
        },
        {
            "id" : 3,
            "imgSource" : img_URL,
            "imgDescription" : "Test data 1",
            "projectName" : "Test data 1",
            "projectDescriptionShort" : "Test data 1.",
            "projectDescriptionLong" : (
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    test
                    <br/>
                    <h1>DATA 1</h1>
                </span>
            ),
            "projectModalName" : "#Testdata1",
            "projectModalLabel" : "Testdata1",
            "projectGitHubRepository" : "",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-4"
        },
        {
            "id" : 4,
            "imgSource" : img_URL,
            "imgDescription" : "Test data 2",
            "projectName" : "Test data 2",
            "projectDescriptionShort" : "Test data 2.",
            "projectDescriptionLong" : (
                <span>
                    Super
                    <br/>
                    long
                    <br/>
                    test
                    <br/>
                    <h1>DATA 2</h1>
                </span>
            ),
            "projectModalName" : "#Testdata2",
            "projectModalLabel" : "Testdata2",
            "projectGitHubRepository" : "asd",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-4"
        },
        {
            "id" : 5,
            "imgSource" : img_URL,
            "imgDescription" : "Test data 3",
            "projectName" : "Test data 3",
            "projectDescriptionShort" : "Test data 3.",
            "projectDescriptionLong" : (
                <span>
                    Super
                    <br/>
                    <i className="text-danger">long</i>
                    <br/>
                    test
                    <br/>
                    <h1>DATA 3</h1>
                </span>
            ),
            "projectModalName" : "#Testdata3",
            "projectModalLabel" : "Testdata3",
            "projectGitHubRepository" : "asd",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-2"
        },
        {
            "id" : 6,
            "imgSource" : img_URL,
            "imgDescription" : "Test data 4",
            "projectName" : "Test data 4",
            "projectDescriptionShort" : "Test data 4.",
            "projectDescriptionLong" : (
                <span>
                    Super
                    <br/>
                    <strong className="text-warning">long</strong>
                    <br/>
                    test
                    <br/>
                    <h1>DATA 4</h1>
                </span>
            ),
            "projectModalName" : "#Testdata4",
            "projectModalLabel" : "Testdata4",
            "projectGitHubRepository" : "asd",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-7"
        },
        {
            "id" : 7,
            "imgSource" : img_URL,
            "imgDescription" : "Test data 5",
            "projectName" : "Test data 5",
            "projectDescriptionShort" : "Test data 5.",
            "projectDescriptionLong" : (
                <>
                <span>
                    Super
                    <br/>
                    <strong className="text-warning">long</strong>
                    <br/>
                    test
                    <br/>
                    <h1>DATA 5</h1>
                    <img src={img_URL} alt="harmaa kissa"/>
                    <br/>
                    <span style={{color: "red", border: 1, borderStyle: "solid", borderColor: "#0000ff"}}>
                        <b className="superCustomAnimationClass" style={{backgroundColor: "#00ff00", fontSize: 50,}}>S</b>uper custom <i style={{color: "#000000", fontSize: 30}}>styled</i> element asdasdasd....
                    </span>
                </span>
                <br/>
                <p>Works fine with any content</p>
                <div className="form-check form-switch text-center">
                    <input style={{float: "right"}} className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                </div>
                <div className="row text-center">
                    <p>This project is awesome... <b>AND</b> <span className="text-danger">ReactJS</span> is so <u><span style={{color: "green"}}>powerful</span></u></p>
                </div>
                <div className="row">
                    <div style={{margin: "auto"}} className="col-sm-8">
                        <iframe width="100%" height="500px" style={{border: 1, borderStyle: "solid", borderColor: "blue"}} src="https://driftaaja.github.io/portfolio/" title="My portfolio page"></iframe>
                    </div>
                </div>
                </>
            ),
            "projectModalName" : "#Testdata5",
            "projectModalLabel" : "Testdata5",
            "projectGitHubRepository" : "asd",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
            "colValue" : "col-sm-6"
        },
    ];

    const displayProjects = (arr : Array<Project>) => {
        let projects = arr; // params
        let result : Array<ReactElement> = []; // return value

        let project_projectId : number;
        let project_imgSource : string = "";
        let project_imgDescription : string = "";
        let project_projectName : string = "";
        let project_projectDescriptionShort : string = "";
        let project_projectDescriptionLong : ReactElement;
        let project_projectModalName : string = "";
        let project_projectModalLabel : string = "";
        let project_projectGitHubRepository : string = "";
        let project_projectLink : string = "";
        let project_colValue : string = "";

        let htmlString;

        for(let i = 0; i < projects.length; i++){
            /*
            console.log(`projects[${projects[i]}]: ${i}`);
            console.log(`projects[${i}].id: ${projects[i].id}`);
            console.log(`projects[${i}].imgSource: ${projects[i].imgSource}`);
            console.log(`projects[${i}].imgDescription: ${projects[i].imgDescription}`);
            console.log(`projects[${i}].projectName: ${projects[i].projectName}`);
            console.log(`projects[${i}].projectDescriptionShort: ${projects[i].projectDescriptionShort}`);
            console.log(`projects[${i}].projectDescriptionLong: ${projects[i].projectDescriptionLong}`);
            console.log(`projects[${i}].projectModalName: ${projects[i].projectModalName}`);
            console.log(`projects[${i}].projectModalLabel: ${projects[i].projectModalLabel}`);
            console.log(`projects[${i}].projectGitHubRepository: ${projects[i].projectGitHubRepository}`);
            console.log(`projects[${i}].projectLink: ${projects[i].projectLink}`);
            console.log(`projects[${i}].colValue: ${projects[i].colValue}`);
            */
            project_projectId = projects[i].id;
            project_imgSource = projects[i].imgSource;
            project_imgDescription = projects[i].imgDescription;
            project_projectName = projects[i].projectName;
            project_projectDescriptionShort = projects[i].projectDescriptionShort;
            project_projectDescriptionLong = projects[i].projectDescriptionLong;
            project_projectModalName = projects[i].projectModalName;
            project_projectModalLabel = projects[i].projectModalLabel;
            project_projectGitHubRepository = projects[i].projectGitHubRepository;
            project_projectLink = projects[i].projectLink;
            project_colValue = projects[i].colValue;

            htmlString = (
                <div className={project_colValue} key={project_projectId}>
                    <CustomCard
                        imgSource={project_imgSource}
                        imgDescription={project_imgDescription}
                        projectName={project_projectName}
                        projectDescriptionShort={project_projectDescriptionShort}
                        projectDescriptionLong={project_projectDescriptionLong}
                        projectModalName={project_projectModalName}
                        projectModalLabel={project_projectModalLabel}
                        projectGitHubRepository={project_projectGitHubRepository}
                        projectLink={project_projectLink}
                    />
                    <br/>
                </div>
            );

            result.push(htmlString);
        };

        return [result];
    };

    /*
        Nav menu icon useState to show correct icon in different cases
        menu closed show: 'chevron-down'
        menu open show: 'chevron-up'
    */
    let [navBtnValue, setNavBtnValue] = useState("false");

    // When nav menu button clicked run this
    const scrollToPageStart = () => {
        let btn = document.getElementById("navbarMenuButton");
        let btnValue = btn?.getAttribute("aria-expanded");

        if(btnValue === "true"){
            setNavBtnValue(btnValue);
            window.scrollTo(0,0);
        }
        else if(btnValue === "false"){
            /*
            // Unused feature
            // if profile data is open scroll to top after 0.5s delay
            if(window.scrollY !== 0){
                setTimeout(() => {
                    window.scrollTo(0,0);
                }, 500);
            }
            else{
                console.log("did nothing");
                return null;
            }
            */
            setNavBtnValue(btnValue);
            return null;
        }
        else{
            return null;
        }
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <nav className="navbar navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                            <button
                                id="navbarMenuButton"
                                className="navbar-toggler flex-grow-1 border-0 shadow-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent_profile"
                                aria-controls="navbarToggleExternalContent_profile"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={scrollToPageStart}
                            >
                                {/*
                                // Classic icon for nav menu
                                <span className="navbar-toggler-icon"></span>
                                */}
                                <span>
                                    { 
                                    /*
                                        Gets value from navBtnValue useState().
                                        Value changes via setNavBtnValue() that is used in
                                        this button onClick={scrollToPageStart} event.

                                        Icons used are from Bootstrap 5 icons CDN
                                    */
                                    navBtnValue === "false" ?
                                    <i className="bi bi-chevron-down"></i>
                                    :
                                    <i className="bi bi-chevron-up"></i>
                                    }
                                </span>
                            </button>
                        </div>
                    </nav>
                    <div className="collapse" id="navbarToggleExternalContent_profile">
                        <div className="p-4 pushElementDown">
                            <div className="row justify-content-center">
                                <div className="col-sm-3 p-4 text-center">
                                    <img src={profilePicture_URL} className="img-fluid border border-light border-1 profilePicture" alt="Owner of this portfolio."/>
                                </div>
                                <div className="col-sm-7 p-4">
                                    { profileItems.length > 0 &&
                                        displayProfileItems(profileItems)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 pushElementDown">
                    <h1 className="text-center">Projektit</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                { projects.length > 0 &&
                    displayProjects(projects)
                }
            </div>
            <div className="row">
                <div className="col-sm-12 text-center homePageFooter">
                    {/*
                    // Bootstrap 5 icons 
                    <p>
                        <i className="bi bi-c-circle"></i> <b>2024 Petteri Mikkonen</b>
                    </p>
                    */}
                    {/* 
                    // With selected font (Google Fonts) 
                    */}
                    <p style={{fontSize: 18,}}>
                        &copy; 2024 Petteri Mikkonen
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;