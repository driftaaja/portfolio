//import { useEffect } from "react";
import CustomCard from "../components/cardComponent";

const img_URL = process.env.PUBLIC_URL + "/img/harmaa_kissa.png";

// Project interface
interface Project {
    imgSource : string;
    imgDescription : string;
    projectName : string;
    projectDescriptionShort : string;
    projectDescriptionLong : string;
    projectModalName : string;
    projectModalLabel : string;
    projectLink : string;
};

const HomePage = () => {
    /*
        Usage of <CustomCard> component
            - Use <CustomCard> to display my projects.
            - Give it following props 
                - Note: props syntax described inside curly brackets.   
                <Card> component props
                    - imgSource={img_url}
                    - imgDescription={"String that describes image."}
                    - projectName={"String that describes project name."}
                    - projectDescriptionShort={"String that describes project (Example: First paragraph of projectDescriptionLong)."}
                    - projectDescriptionLong={`String that describes project.`}
                    - projectModalName={"#(Example: projectName in one string.)"}
                    - projectModalLabel={"(same as projectModalName)"}
                    - projectLink={url_to_project_site}
    */

    // Array of my projects
    const projects : Array<Project> = [
        {
            "imgSource" : img_URL,
            "imgDescription" : "kissa",
            "projectName" : "Projekti 1",
            "projectDescriptionShort" : "Tekemäni projekti 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "projectDescriptionLong" : `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
        
            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
        
            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
        
            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            `,
            "projectModalName" : "#projekti1",
            "projectModalLabel" : "projekti1",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
        },
        {
            "imgSource" : img_URL,
            "imgDescription" : "kissa",
            "projectName" : "Projekti 2",
            "projectDescriptionShort" : "Tekemäni projekti 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "projectDescriptionLong" : `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
        
            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
        
            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
        
            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            `,
            "projectModalName" : "#projekti2",
            "projectModalLabel" : "projekti2",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
        },
        {
            "imgSource" : img_URL,
            "imgDescription" : "kissa",
            "projectName" : "Projekti 3",
            "projectDescriptionShort" : "Tekemäni projekti 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "projectDescriptionLong" : `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
        
            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
        
            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
        
            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            `,
            "projectModalName" : "#projekti3",
            "projectModalLabel" : "projekti3",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
        },
        {
            "imgSource" : img_URL,
            "imgDescription" : "kissa",
            "projectName" : "Toimii",
            "projectDescriptionShort" : "Tämä toimii.",
            "projectDescriptionLong" : `
            Super pitkä texti...
            `,
            "projectModalName" : "#Toimii",
            "projectModalLabel" : "Toimii",
            "projectLink" : "https://driftaaja.github.io/portfolio/",
        },
    ];

    const displayProjects = (arr: Array<Project>) => {
        let projects = arr; // params
        let result = []; // return value

        let project_imgSource = "";
        let project_imgDescription = "";
        let project_projectName = "";
        let project_projectDescriptionShort = "";
        let project_projectDescriptionLong = "";
        let project_projectModalName = "";
        let project_projectModalLabel = "";
        let project_projectLink = "";

        let htmlString;

        for(let i = 0; i < projects.length; i++){
            /*
            console.log(`projects[${projects[i]}]: ${i}`);
            console.log(`projects[${i}].imgSource: ${projects[i].imgSource}`);
            console.log(`projects[${i}].imgDescription: ${projects[i].imgDescription}`);
            console.log(`projects[${i}].projectName: ${projects[i].projectName}`);
            console.log(`projects[${i}].projectDescriptionShort: ${projects[i].projectDescriptionShort}`);
            console.log(`projects[${i}].projectDescriptionLong: ${projects[i].projectDescriptionLong}`);
            console.log(`projects[${i}].projectModalName: ${projects[i].projectModalName}`);
            console.log(`projects[${i}].projectModalLabel: ${projects[i].projectModalLabel}`);
            console.log(`projects[${i}].projectLink: ${projects[i].projectLink}`);
            */
            project_imgSource = projects[i].imgSource;
            project_imgDescription = projects[i].imgDescription;
            project_projectName = projects[i].projectName;
            project_projectDescriptionShort = projects[i].projectDescriptionShort;
            project_projectDescriptionLong = projects[i].projectDescriptionLong;
            project_projectModalName = projects[i].projectModalName;
            project_projectModalLabel = projects[i].projectModalLabel;
            project_projectLink = projects[i].projectLink;

            htmlString = 
                <div className="col-sm-4">
                    <CustomCard
                        imgSource={project_imgSource}
                        imgDescription={project_imgDescription}
                        projectName={project_projectName}
                        projectDescriptionShort={project_projectDescriptionShort}
                        projectDescriptionLong={project_projectDescriptionLong}
                        projectModalName={project_projectModalName}
                        projectModalLabel={project_projectModalLabel}
                        projectLink={project_projectLink}
                    />
                    <br/>
                </div>
            ;

            result.push(htmlString);
        };

        return [result];
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-center">Projektit</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {/* (working example)
                <div className="col-sm-4">
                    <CustomCard
                        imgSource={img_URL}
                        imgDescription={"kissa"}
                        projectName={"Projekti 1"}
                        projectDescriptionShort={"Tekemäni projekti 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        projectDescriptionLong={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

                            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
                        
                            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
                        
                            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
                        
                            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        `}
                        projectModalName={"#projekti1"}
                        projectModalLabel={"projekti1"}
                        projectLink={"https://driftaaja.github.io/portfolio/"}
                    />
                    <br/>
                </div>
                <div className="col-sm-4">
                    <CustomCard
                        imgSource={img_URL}
                        imgDescription={"kissa"}
                        projectName={"Projekti 2"}
                        projectDescriptionShort={"Tekemäni projekti 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        projectDescriptionLong={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

                            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
                        
                            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
                        
                            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
                        
                            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        `}
                        projectModalName={"#projekti2"}
                        projectModalLabel={"projekti2"}
                        projectLink={"https://driftaaja.github.io/portfolio/"}
                    />
                    <br/>
                </div>
                <div className="col-sm-4">
                    <CustomCard
                        imgSource={img_URL}
                        imgDescription={"kissa"}
                        projectName={"Projekti 3"}
                        projectDescriptionShort={"Tekemäni projekti 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        projectDescriptionLong={`
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend posuere massa in gravida. Integer mattis leo enim, eget volutpat tellus consequat vitae. Nullam porta ipsum ac pharetra feugiat. Donec quis maximus ipsum, in finibus sapien. Pellentesque imperdiet sed neque vel ornare. Mauris porttitor non libero in sollicitudin. Praesent vitae diam consectetur, finibus mauris ac, convallis magna. Nunc malesuada enim et magna mattis tempus. Nullam pretium magna in tortor cursus, ac ornare metus porta. Nulla facilisi. Ut ac mi finibus, rhoncus tellus et, auctor lacus. Integer mollis porta arcu sed venenatis. Duis condimentum et nunc vitae lacinia.

                            Cras rhoncus ante ac porttitor tempor. Ut id eros ut leo suscipit vehicula eu a quam. Integer faucibus erat eros. Nulla a elementum ipsum. Pellentesque scelerisque neque mauris. Nunc congue non arcu eget pharetra. Integer libero ex, consectetur at risus ac, placerat lacinia elit.
                        
                            Proin varius vehicula urna. Nulla libero sapien, venenatis in ante eu, facilisis dapibus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum velit ut erat laoreet, in pretium leo euismod. Aenean eu urna a nibh pellentesque fringilla a non mauris. Vivamus mauris tellus, tempus in rutrum eget, semper vel metus. Donec eleifend sapien tortor, et lacinia sem tristique id.
                        
                            Pellentesque quis est id augue mattis ultrices. Integer lacinia ullamcorper tempus. Mauris sed tempor mauris, id volutpat felis. Integer quam nisi, ullamcorper id quam sit amet, scelerisque dignissim dui. Aliquam efficitur ex eget purus efficitur, at tempor eros vehicula. Cras tincidunt, tortor a pretium efficitur, velit dolor maximus velit, id pharetra ante nisl pellentesque ligula. Quisque a ligula sit amet nisi faucibus suscipit quis et ligula. Fusce erat enim, mollis ac urna nec, varius ornare purus.
                        
                            Pellentesque molestie rutrum urna, vel suscipit purus bibendum vel. Sed diam magna, malesuada et vehicula vitae, pretium in elit. Sed ullamcorper venenatis elit. Integer nec quam non nunc interdum tristique. Nam sodales, ligula at scelerisque congue, libero ipsum malesuada augue, sit amet egestas odio turpis non eros. Vestibulum consectetur ut turpis quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pharetra nibh sit amet consectetur. Maecenas porttitor pretium lorem vitae sagittis. Vivamus non velit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        `}
                        projectModalName={"#projekti3"}
                        projectModalLabel={"projekti3"}
                        projectLink={"https://driftaaja.github.io/portfolio/"}
                    />
                    <br/>
                </div>
                */}
                <>{ projects.length > 0 &&
                //useEffect(() => {
                    displayProjects(projects)
                //}, [])
                }</>
            </div>
        </div>
    );
};

export default HomePage;